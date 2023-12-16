'use server';

import { z } from "zod";
import {createClient} from "../supabase/server";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { UserProfile, sheet } from "../types/types";
import { v4 } from "uuid";
import { title } from "process";

const cookieStore = cookies();


export async function getUserProfile() {
    const userprofile : UserProfile = {
        firstname: "",
        lastname: '',
        id:'',
        avatar:''
    }
    const supabase = createClient(cookieStore);
    userprofile.id = (await supabase.auth.getUser()).data.user?.id;
    const { data, error } = await supabase
    .from('profiles')
    .select()
    .eq('id', userprofile.id)
    console.log({data,error})
    return data
}

export async function userSignedIn() {
    const supabase = createClient(cookieStore);
    const {data} = await supabase.auth.getUser();
    if(data.user){
        return true
    }
    return false
}

export async function userSignOut() {
    const supabase = createClient(cookieStore);
    return await supabase.auth.signOut()
}




export async function UploadAvatarToStorageAndTable(file: File) {
    const supabase = createClient(cookieStore);
    const user_id = (await supabase.auth.getUser()).data.user?.id;
    const fileExt = file.name.split('.').pop();
    const filename = `${user_id}.${fileExt}`;
    try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .upload(filename, file, {
            cacheControl: "3600",
            upsert: true,
          });
          if(!error){
              console.log("File uploaded successfully:", data.path);
              const publicUrl = supabase.storage.from('avatars').getPublicUrl(filename);
              const updates = {
              id : user_id,
              avatar_url: publicUrl,

              };
        const res = await supabase.from('profiles').upsert(updates).eq('id',user_id);
        if (res.error){
          return res.error;
        }
        return(res.data)
          }
     
      } catch (error) {
        return (error);
    } 
  };


export async function fetchAllSheets() {
    const supabase = createClient(cookieStore)
    const res = await supabase.from('sheets').select();
    return res
}

export async function getuserbyid(id : string) {
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase
  .from('profiles')
  .select()
  .eq('id', id)
  console.log(data)
  return data

}