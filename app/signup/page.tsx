import SignUpForm from '../components/signup/signup-form';
import Image from 'next/image';
import { userSignedIn } from '../lib/actions';
import { redirect } from 'next/navigation';
export default async function SignUpPage() {
  if ( await userSignedIn()){
     	redirect('/homepage')
     }
  return (
    <div dir-='LTR' className='flex w-full h-screen bg-slate-50 items-center justify-center'>
        <div>
            <SignUpForm/>
        </div>
    </div>
  );
}