'use client';
import { UserSigninCredintials } from '@/app/lib/types';
import Link from 'next/link';
import {ArrowRightIcon, CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon,} from '@heroicons/react/24/outline';
import { Button } from '../ui/button';
import { SignInUser } from '@/app/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Form } from '../ui/form';


export default function LoginForm() {
  const [state, dispatch] = useFormState(SignInUser, undefined);
  return (
  <div dir-='ltr'>
      <Card className=' w-[350px]'>
        <CardHeader>
          <CardTitle>SignUp</CardTitle>
          <CardDescription>Create a User</CardDescription>
          </CardHeader>
          <CardContent>
          {state?.message&&(
            <p aria-live='polite' className="mt-2 text-sm text-red-500" key={state?.message}>
            {state?.message}
           </p>
            )}
            <form action={dispatch} className="w-full space-y-6">
            <label className="text-md" htmlFor="email">
          Email
        </label>
        {state?.errors?.email&& (
              <p className="mt-2 text-sm text-red-500" >
               {state?.errors?.email}
              </p>
            )}
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        {state?.errors?.password&& (
              <p className="mt-2 text-sm text-red-500" >
               {state?.errors?.password}
              </p>
            )}
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
       <LoginButton/>
            </form>
          </CardContent>
          </Card>
    </div>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
    Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
  </Button>

  );
}
