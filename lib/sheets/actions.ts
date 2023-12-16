'use server';

import { PrismaClient, sheets, profiles } from "@prisma/client"
import { revalidatePath } from "next/cache";
import { createClient } from "@/supabase/server";
import { cookies } from "next/headers";
import { v4 } from "uuid";



const cookieStore = cookies();

export async function getSheetById(id: string) {
  const prisma = new PrismaClient();
  let sheet: sheets | null = null;
  let user: profiles | null = null;

  try {
    sheet = await prisma.sheets.findUnique({
      where: {
        id: id
      }
    });

    if (sheet && typeof sheet.user_id === 'string') {
      user = await prisma.profiles.findUnique({
        where: {
          id: sheet.user_id,
        },
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    await prisma.$disconnect();
  }

  if (!sheet || !user) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return { sheet, user };
};


export async function uploadSheet(formData: FormData) {
  const rawFormData = {
    title: formData.get('title'),
    main_maqam: formData.get('main_maqam'),
    key_note: formData.get('key_note'),
    genre: formData.get('genre'),
    instrument: formData.get('instrument'),
    file: <File>formData.get('file'),
  };
  console.log(rawFormData)
  const supabase = createClient(cookieStore)
  const user_id = (await supabase.auth.getUser()).data.user?.id;
  const fileExt = rawFormData.file?.name.split('.').pop();
  const filename = `${rawFormData.main_maqam}/${rawFormData.key_note}/${rawFormData.title}.${fileExt}`;
  const { data, error } = await supabase.storage
    .from('sheets')
    .upload(filename, rawFormData.file, {
      cacheControl: "3600",
      upsert: false,
    });
  console.log(error)
  if (!error) {
    console.log("File uploaded successfully:", data.path);
    const publicUrl = supabase.storage.from('sheets').getPublicUrl(filename).data.publicUrl;
    const updates = {
      id: v4(),
      title: rawFormData.title,
      status: '',
      main_maqam: rawFormData.main_maqam,
      key_note: rawFormData.key_note,
      instrument: rawFormData.instrument,
      genre: rawFormData.genre,
      file_url: publicUrl,
      user_id: user_id,
    };
    const res = await supabase.from('sheets').upsert(updates);
    if (res.error) {
      return res.error;
    }
    revalidatePath('*/sheets*')
    return (res.data)
  }

}