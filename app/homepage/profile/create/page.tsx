import { redirect } from 'next/navigation';
import CreateProfileForm from '@/components/signup/create-profile-form';
export default async function SignUpPage() {

  return (
    <div dir-='LTR' className='flex w-full h-screen bg-slate-50 items-center justify-center'>
        <div>
            <CreateProfileForm/>
        </div>
    </div>
  );
}