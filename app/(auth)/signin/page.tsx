import LoginForm from '@/components/Auth/login/login-form';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { userSignedIn } from '../../../lib/actions';

export default async function LoginPage() {
  // if ( await userSignedIn()){
  //   redirect('/homepage')
  // }
  return (
        <LoginForm />
  );
}