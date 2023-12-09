'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { SignUpUser } from "@/app/lib/actions";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useFormState, useFormStatus } from "react-dom";
import { Label } from "../ui/label";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default  function SignUpForm() {

	const [state, dispatch] = useFormState(SignUpUser, undefined);
  
  return(
		<div>
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
						{state?.errors?.email&& (
							<p className="mt-2 text-sm text-red-500" >
								{state?.errors?.email}
							</p>
						)}
						<Label htmlFor="email">Email : </Label>
						<Input type="email" name="email" placeholder="Email" required />
						{state?.errors?.password&& (
							<p className="mt-2 text-sm text-red-500" >
								{state?.errors?.password}
							</p>
							)}
						<Label htmlFor="password">Password : </Label>
						<Input type="password" name="password" placeholder="••••••••" required/>
						{state?.errors?.confirm&& (
							<p className="mt-2 text-sm text-red-500" >
								{state?.errors?.confirm}
							</p>
							)}
						<Label htmlFor="password">Confirm Password : </Label>
						<Input type="password" name="confirm" placeholder="••••••••" required/>
						<SignUpButton/>
					</form>
				</CardContent>
			</Card>
		</div>
  );
}


function SignUpButton() {
	const { pending } = useFormStatus();
	return (
	  <Button className="mt-4 w-full" aria-disabled={pending}>
	  Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
	</Button>
  
	);
  }
  