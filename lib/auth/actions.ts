'use server'

import {createClient} from "@/supabase/server";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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
        return error.message
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

export async function signInWithEmail(formData: {
    email: string;
    password: string;
}){
    const supabase =  createClient(cookieStore);
    const {data,error} = await supabase.auth.signInWithPassword({email: formData.email, password: formData.password })
    if(error)
    return error

    revalidatePath('/')
    return redirect('/homepage')
}

