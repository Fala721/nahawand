import * as z from "zod"

export const SignInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6,
        {message: 'password at least 6 charachters'}),
  });