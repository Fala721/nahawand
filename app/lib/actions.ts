'use server';

import { z } from "zod";
import {createClient} from "./supabase/server";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { UserProfile, sheet } from "./types";
import { v4 } from "uuid";
import { title } from "process";
import { useEffect } from "react";

const cookieStore = cookies();




export async function signUpWithEmail(formData:{
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    confirm: string;
}){
    const supabase =  createClient(cookieStore);
    const {data, error} = await supabase.auth.signUp({email:formData.email,password:formData.password})
    if(error){
        return error
    } 
        const user = supabase.auth.getUser();
        const user_id = (await user).data.user?.id
        
        const updates = {
            id : user_id,
            first_name : formData.firstname,
            last_name: formData.lastname,
          };
          const res = await supabase.from('profiles').upsert(updates).eq('id',user_id);
          if (res.error){
            return res.error;
          }
        
          revalidatePath('/')
          return redirect('/')
       

}


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
    //return data
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


const SignUpFormSchema = z.object({
    email: z.string().email(),
		password: z.string().min(6, {
			message: "Password is required.",
		}),
		confirm: z.string().min(6, {
			message: "Password is required.",
		}),
	})
	.refine((data) => data.confirm === data.password, {
		message: "Password did not match",
		path: ["confirm"],
	});

export type SignUpState = {
    error?: {
        email?: string[],
        password?: string[],
        confirm?: string[],
    },
    message?: string | null;
    };     


    export async function SignUpUser(prevState: SignUpState | undefined, formData: FormData) {
        const validatedFields = SignUpFormSchema.safeParse({
            email: formData.get('email'),
            password: formData.get('password'),
            confirm: formData.get('confirm'),
        });
        if(!validatedFields.success){
            return{
                errors: validatedFields.error.flatten().fieldErrors,
                message: 'missing fields Failed to Sign Up'
            }
        }
        const {email,password} = validatedFields.data;
        const supabase = createClient(cookieStore);
        const result = await supabase.auth.signUp({email:email,password:password });
        if(result.error){
            return{message: result.error.message}
        }
        else{
            revalidatePath('/')
            redirect('/homepage');
        }
}






const SignInFormSchema = z.object({
    email: z.string().email(),
		password: z.string().min(6, {
			message: "Password is required.",
		}),
	});

const SignInUserValidate = SignInFormSchema.pick({email: true, password: true});

export type SignInState = {
    error?: {
      email?: string[],
      password?: string[],
    },
    message?: string | null;
  }; 

  export async function SignInUser(prevState: SignInState | undefined, formData: FormData) {
      // Validate form fields using Zod
      const validatedFields = SignInUserValidate.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
      });
      // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Log In.',
        };
    }
   
        const { email, password,} = validatedFields.data;
        const supabase = createClient(cookieStore);
        const result = await supabase.auth.signInWithPassword({email:email,password:password });
        console.log(result)
        if (result.error) {
          return {message : result.error.message}
        }
        else{
           revalidatePath('/')
           redirect('/homepage')
        }

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

export async function uploadSheet(formData: FormData){
  const rawFormData = {
    title: formData.get('title'),
    main_maqam: formData.get('main_maqam'),
    key_note: formData.get('key_note'),
    genre: formData.get('genre'),
    instrument: formData.get('instrument'),
    file:<File> formData.get('file'),
  };
  console.log(rawFormData)
      const supabase = createClient(cookieStore)
      const user_id = (await supabase.auth.getUser()).data.user?.id;
      const fileExt = rawFormData.file?.name.split('.').pop();
      const filename = `${rawFormData.main_maqam}/${rawFormData.key_note}/${rawFormData.title}.${fileExt}`;
      const {data,error} = await supabase.storage
              .from('sheets')
              .upload(filename,rawFormData.file, {
                  cacheControl: "3600",
                  upsert: false,
              });
              console.log(error)
              if(!error){
                  console.log("File uploaded successfully:", data.path);
                  const publicUrl = supabase.storage.from('sheets').getPublicUrl(filename).data.publicUrl;
                  const updates = {
                  id : v4(),
                  title : rawFormData.title,
                  status: '',
                  main_maqam: rawFormData.main_maqam,
                  key_note: rawFormData.key_note,
                  instrument: rawFormData.instrument,
                  genre: rawFormData.genre,
                  file_url: publicUrl,
                  user_id: user_id,
                  };
            const res = await supabase.from('sheets').upsert(updates);
            if (res.error){
              return res.error;
            }
            revalidatePath('/')
            return(res.data)
          }
         
}

// export async function uploadSheet(formData:{
//     id: string;
//     title: string;
//     status: string;
//     main_maqam: string;
//     key_note: string;
//     instrument: string;
//     genre: string;
//     file: File;
//     }
//     //,file: File
//     ){

//         const supabase = createClient(cookieStore)
//         const user_id = (await supabase.auth.getUser()).data.user?.id;
//         const fileExt = formData.file.name.split('.').pop();
//         const filename = `${formData.main_maqam}/${formData.key_note}/${formData.title}.${fileExt}`;
        
//         try {
//             const {data,error} = await supabase.storage
//                 .from('sheets')
//                 .upload(filename,formData.file, {
//                     cacheControl: "3600",
//                     upsert: false,
//                 });
//                 if(!error){
//                     console.log("File uploaded successfully:", data.path);
//                     const publicUrl = supabase.storage.from('sheets').getPublicUrl(filename);
//                     const updates = {
//                     id : formData.id,
//                     title : formData.title,
//                     status: formData.status,
//                     main_maqam: formData.main_maqam,
//                     key_note: formData.key_note,
//                     instrument: formData.instrument,
//                     genre: formData.genre,
//                     file_url: publicUrl,
//                     user_id: user_id,
//                     };
//               const res = await supabase.from('sheets').upsert(updates);
//               if (res.error){
//                 return res.error;
//               }
//               return(res.data)
//             }
           
//             } catch (error) {
//               return (error);
//           } 
// }


// const SheetFormSchema = z.object({
//   id: z.string(),
//   title: z.string({
//     invalid_type_error: 'Please enter a title.',
// }),
//   main_maqam: z.string({
//     invalid_type_error: 'Please select a Maqam'
//   }),
//   key_note: z.string({
//     invalid_type_error: 'Please select Key Note',
//   }),
//   instrument: z.string(),
//   genre: z.string(),
//   date: z.string(),
//   status: z.string(),
//   file: z.instanceof(File)
// });

// const UploadSheetSingleForm = SheetFormSchema.omit({id: true, date: true,instrument: true, genre: true, status: true});


// export type SheetFormState = {
//   errors?: {
//     title?: string[];
//     main_maqam?: string[];
//     key_note?: string[];
//     file: File;
//   };
//   message?: string | null;
// }; 

// export async function uploadSheetSingleForm(prevState: SheetFormState | undefined, formData: FormData) {
//     // Validate form fields using Zod
//     const validatedFields = UploadSheetSingleForm.safeParse({
//       title: formData.get('title'),
//       main_maqam: formData.get('main_maqam'),
//       key_note: formData.get('key_note'),
//       file: formData.get('file'),
//     });
   
//     // If form validation fails, return errors early. Otherwise, continue.
//     if (!validatedFields.success) {
//       return {
//         errors: validatedFields.error.flatten().fieldErrors,
//         message: 'Missing Fields. Failed to Create Invoice.',
//       };
//     }
//     const supabase = createClient(cookieStore)
//     const user_id = (await supabase.auth.getUser()).data.user?.id;
//     const { title, main_maqam, key_note } = validatedFields.data;
//     const fileExt = file.name.split('.').pop();
//     const filename = `${main_maqam}/${key_note}/${title}.${fileExt}`;
 

//     try{
//         await 
        
//     } catch(error){
//         return{
//             message: 'DB Error: Failed to Create Invoice'
//         };
//     }
    

//     // revalidatePath('/dashboard/invoices');
//     // redirect('/dashboard/invoices');
//   }