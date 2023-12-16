import * as z from "zod"

export const SignUpFormSchema = z.object({
    email: z.string().email(),
    firstname: z.string().min(2,
        {message: 'invalid name'}),
    lastname: z.string().min(2,
        {message: 'invalid name'}),
    password: z.string().min(6,
        {message: 'password at least 6 charachters'}),
    confirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.confirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  );