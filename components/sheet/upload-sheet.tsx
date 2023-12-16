"use client";

import { SheetUploadFormSchema } from "@/lib/validations/sheets-form";
import { ChangeEvent, useState, MouseEvent } from "react";
import { z } from "zod";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { KeyNotes, maqamcardslist } from "@/config/constants";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { uploadSheet } from "@/lib/sheets/actions";

type SheetFormData = z.infer<typeof SheetUploadFormSchema>;

export default function UploadSheetForm() {
  const form = useForm<SheetFormData>({
    resolver: zodResolver(SheetUploadFormSchema),
  });
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }

    const file = fileInput.files[0];

    /** File validation */
    if (!file.type.startsWith("image")) {
      alert("Please select a valide image");
      return;
    }

    /** Setting file state */
    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    /** Reset file input */
    e.currentTarget.type = "text";
    e.currentTarget.type = "file";
  };

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("From onCancelFile");
  };

  async function onSubmit(SheetformData: SheetFormData) {
    try {
        // Create an instance of SheetFormData to hold the form data
        const payload = new FormData();
    
        // Append each form field to the SheetFormData object
        for (const [key, value] of Object.entries(SheetformData)) {
          payload.append(key, value);
        }
    
        // Append the file to the SheetFormData object
        // if (file) {
        //   payload.append('file', file);
        // }
    
        // Send the SheetFormData object to your server-side endpoint
        const response = await uploadSheet(payload)
        
        if (response)
            {
                alert(response.message)
            }
      } catch (error) {
        console.error('Error during form submission:', error);
        // Handle the error (e.g., show error message)
      }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className=" rounded-lg bg-gray-200">
              <Card>
                <CardHeader>
                  <CardTitle>Upload sheet music</CardTitle>
                  <CardDescription>Sheet details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="max-w-md w-full flex flex-col gap-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="main_maqam"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Main Maqam</FormLabel>
                            <FormControl>
                              <select
                                {...field}
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select a Maqam
                                </option>
                                {maqamcardslist.map((maqam, i) => (
                                  <option value={maqam.value} key={i}>
                                    {maqam.name}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="key_note"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Key Note</FormLabel>
                            <FormControl>
                              <select
                                {...field}
                                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue=""
                              >
                                <option value="" disabled>
                                  Select a Key
                                </option>
                                {KeyNotes.map((key, i) => (
                                  <option value={key.value} key={i}>
                                    {key.name}
                                  </option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="instrument"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Instrument</FormLabel>
                            <FormControl>
                              <Input placeholder="Instrument" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <FormField
                      control={form.control}
                      name="genre"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Genre</FormLabel>
                            <FormControl>
                              <Input placeholder="Genre" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-lg bg-gray-200 lg:col-span-2">
              <div className="w-full max-w-3xl px-3 mx-auto">
                <h1 className="mb-10 text-3xl font-bold text-gray-900">
                  Upload your files
                </h1>

                <div className="w-full p-3 border border-gray-500 border-dashed">
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
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                            />
                          </svg>
                          <strong className="text-sm font-medium">
                            Select an image
                          </strong>
                          <FormField
                            control={form.control}
                            name="file"
                            render={({ field }) => {
                              // Destructure field to not include "value"
                              const { onChange, onBlur, name, ref } = field;
                              return (
                                <FormItem>
                                  <FormLabel>File</FormLabel>
                                  <FormControl>
                                    <Input
                                      type="file"
                                      placeholder="Upload File"
                                      onChange={(
                                        event: ChangeEvent<HTMLInputElement>
                                      ) => {
                                        // Pass the File object to react-hook-form
                                        const files = event.target.files;
                                        if (files) {
                                          const file = files[0];
                                          onChange(file); // Let react-hook-form know about the new file
                                        }
                                        onFileUploadChange(event); // Your custom handler for UI update
                                      }}
                                      onBlur={onBlur} // Inform react-hook-form about the blur event
                                      name={name} // Associate the input with the react-hook-form field name
                                      ref={ref} // Connect the input to the react-hook-form
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              );
                            }}
                          />
                          {/* 
                          <input
                            className="block w-0 h-0"
                            name="file"
                            type="file"
                            onChange={onFileUploadChange}
                          /> */}
                        </label>
                      )}
                    </div>
                    <div className="flex mt-4 md:mt-0 md:flex-col justify-center gap-1.5">
                      <button
                        disabled={!previewUrl}
                        onClick={onCancelFile}
                        className="w-1/2 px-4 py-3 text-sm font-medium text-white transition-colors duration-300 bg-gray-700 rounded-sm md:w-auto md:text-base disabled:bg-gray-400 hover:bg-gray-600"
                      >
                        Cancel file
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
