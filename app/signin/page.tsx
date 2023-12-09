import LoginForm from '@/app/components/login/login-form';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { userSignedIn } from '../lib/actions';

export default async function LoginPage() {
  if ( await userSignedIn()){
    redirect('/homepage')
  }
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
        <div className="relative h-20 max-h-20 w-full">
              <Image
                src="/logo.png"
                alt="Logo"
                className=" h-full w-full object-contain"
                layout="fill"
                //className="h-auto w-full max-h-16 object-cover"
                // width={860}  // Adjust the width based on your needs
                // height={314}  // Adjust the height based on your needs
              />
            </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}