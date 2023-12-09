'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import { z } from "zod";
import { toast } from "../ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { uploadSheet } from "@/app/lib/actions";
import { ChangeEvent, FormEvent, useState, MouseEvent } from "react";
import Image from "next/image";
import { title } from "process";
import { KeyNotes, maqamcardslist } from "@/app/lib/constants";


export default function UploadSheetForm() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }
    const file = fileInput.files[0];

    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    e.currentTarget.type = "text";
    e.currentTarget.type = "file";
  };
  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  };

  return(
      <div>
          <Card>
              <CardHeader>
                  <CardTitle>Upload A sheet</CardTitle>
                  <CardDescription>Sheet Details</CardDescription>
              </CardHeader>
              <CardContent>
                      <form action = {uploadSheet} className="max-w-md w-full flex flex-col gap-4">
                      
                      <input
                        id="title"
                        name="title"
                        type="name"
                        placeholder="title "
                        className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        aria-describedby="title-error"
                        />
                        <select
                          id="main_maqam"
                          name="main_maqam"
                          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                          defaultValue=""
                          aria-describedby="main_maqam-error"
                          >
                          <option value="" disabled>
                            Select a Maqam
                          </option>
                          {maqamcardslist.map((maqam,i) => (
                            <option value={maqam.value} key={i}>
                              {maqam.name}
                            </option>
                          ))}
                        </select>
                        <select
                          id="key_note"
                          name="key_note"
                          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                          defaultValue=""
                          aria-describedby="key_note-error"
                          >
                          <option value="" disabled>
                            Select a Key
                          </option>
                          {KeyNotes.map((key,i) => (
                            <option value={key.value} key={i}>
                              {key.name}
                            </option>
                          ))}
                        </select>
                        <input
                          id="instrument"
                          name="instrument"
                          type="name"
                          placeholder="instrument "
                          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                        />
                        <input
                          id="genre"
                          name="genre"
                          type="name"
                          placeholder="genre "
                          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"

                        />
                        <Button type="submit" className="w-full">
                          Submit
                      </Button>
                      <div>
          <div className="py-10">
              <div className="w-full max-w-3xl px-3 mx-auto">
                  <h1 className="mb-10 text-3xl font-bold text-gray-900">
                      Upload your files
                  </h1>
                      <div className="flex flex-col md:flex-row gap-1.5 md:py-4">
                          <div className="flex-grow">
                              {previewUrl ? (
                                  <div className="mx-auto w-80">
                                      <Image
                                          alt="file uploader preview"
                                          objectFit="cover"
                                          src={previewUrl}
                                          width={320}
                                          height={218}
                                          layout="fixed"
                                      />
                                  </div>
                              ) : (
                                  <label className="flex flex-col items-center justify-center h-full py-3 transition-colors duration-150 cursor-pointer hover:text-gray-600">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="w-14 h-14"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth={2}>
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                                          />
                                      </svg>
                                      <strong className="text-sm font-medium">
                                          Select an image
                                      </strong>
                                      <input
                                          className="block w-0 h-0"
                                          name="file"
                                          type="file"
                                          
                                          //onChange={onFileUploadChange}
                                      />
                                  </label>
                              )}
                          </div>
                          <div className="flex mt-4 md:mt-0 md:flex-col justify-center gap-1.5">
                              <button disabled={!previewUrl} onClick={onCancelFile} className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600">
                                  Cancel file
                              </button>
                          </div>
                      </div>
              </div>
          </div>
      </div>
                      
                      </form>
              </CardContent>
          </Card>
      </div>
  )
}

  
  
  


// const formSchema = z.object({
//   id : z.string(),
//   title: z.string().min(2),
//   status: z.string(),
//   main_maqam: z.string(),
//   key_note: z.string(),
//   instrument: z.string(),
//   genre: z.string(),
//   file: z.instanceof(File),
// })

// export default function UploadSheetForm() {
//   const form = useForm<z.infer<typeof formSchema>>({
//       resolver: zodResolver(formSchema),
//       defaultValues: {
//         id: `${v4()}`,
//         title: "",
//         status: "",
//         main_maqam: "",
//         key_note: "",
//         instrument: "",
//         genre: "",
//         file: undefined,
//       },
//     });

//   async function handleSubmit(data: z.infer<typeof formSchema>) {
//       console.log(data)
//       //const result = await uploadSheet(data)
//       // console.log(result)
//       // if(result){
//       //     toast({
//       //         description: 
//       //         <>
//       //             <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//       //                 <code className="text-white">
//       //                     {JSON.stringify(result)}
//       //                 </code>
//       //             </pre>
//       //             </>
//       //         ,
//       //     });
//       // }
       
//     };


//   return(
//       <div>
//           <Card>
//               <CardHeader>
//                   <CardTitle>Upload A sheet</CardTitle>
//                   <CardDescription>Sheet Details</CardDescription>
//               </CardHeader>
//               <CardContent>
//                   <Form {...form}>
//                       <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-md w-full flex flex-col gap-4">
//                       <FormField control={form.control} name="title" render={({ field }) => {
//                           return (
//                               <FormItem>
//                               <FormLabel>Title</FormLabel>
//                               <FormControl>
//                                   <Input
//                                   placeholder="Title"
//                                   type="name"
//                                   {...field}
//                                   />
//                               </FormControl>
//                               <FormMessage />
//                               </FormItem>
//                           );
//                           }}
//                       />
//                       <FormField control={form.control} name="file" render={({ field }) => {
//                           return (
//                               <FormItem>
//                               <FormLabel>Title</FormLabel>
//                               <FormControl>
//                                   <SheetUploader fieldChange={field.onChange} />
//                               </FormControl>
//                               <FormMessage />
//                               </FormItem>
//                           );
//                           }}
//                       />
//                       <Button type="submit" className="w-full">
//                           Submit
//                       </Button>
//                       </form>
//                   </Form>
//               </CardContent>
//           </Card>
//       </div>
//   )
// }