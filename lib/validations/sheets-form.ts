import { z } from "zod";

export const SheetUploadFormSchema = z.object({
      title: z.string().min(2),
      main_maqam: z.string(),
      key_note: z.string(),
      instrument: z.string(),
      genre: z.string(),
      file: z.instanceof(File),
    })