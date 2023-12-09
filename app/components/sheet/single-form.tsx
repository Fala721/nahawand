'use client'

import { useFormState } from "react-dom";
import { uploadSheetSingleForm } from "@/app/lib/actions"; 
import { KeyNotes, maqamcardslist } from "@/app/lib/constants";
import { Button } from "../ui/button";


export default function Uploadsheet1form(){
    //const initialState = { message: null, errors: {}};
    const [state, dispatch] = useFormState(uploadSheetSingleForm, undefined);

    return(
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Enter Title
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="title"
                name="title"
                type="name"
                placeholder="title "
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="title-error"
              />
            </div>
          </div>
          <div id="title-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.title &&
              state.errors.title.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
               {error}
              </p>
            ))}
           </div>
        </div>

        {/* Maqam*/}
        <div className="mb-4">
          <label htmlFor="main_maqam" className="mb-2 block text-sm font-medium">
            Choose Maqam
          </label>
          <div className="relative">
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
              {maqamcardslist.map((maqam) => (
                <option value={maqam.value}>
                  {maqam.name}
                </option>
              ))}
            </select>
          </div>
          <div id="main_maqam-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.main_maqam &&
              state.errors.main_maqam.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
               {error}
              </p>
            ))}
          </div>
        </div>
        {/* Key note  */}
        <div className="mb-4">
          <label htmlFor="key_note" className="mb-2 block text-sm font-medium">
            Choose Key
          </label>
          <div className="relative">
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
              {KeyNotes.map((key) => (
                <option value={key.value}>
                  {key.name}
                </option>
              ))}
            </select>
          </div>
          <div id="key_note-error" aria-live="polite" aria-atomic="true">
            {state?.errors?.key_note &&
              state.errors.key_note.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
               {error}
              </p>
            ))}
          </div>
        </div>
        {/* file upload */}
          <legend className="mb-2 block text-sm font-medium">
            upload file
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="file"
                  name="file"
                  type="file"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="status-error"
                />
                <label
                  htmlFor="File"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Upload
                </label>
                <div id="status-error" aria-live="polite" aria-atomic="true">
                  {state?.errors?.file &&
                  state.errors.file.map((error: string) => (
                   <p className="mt-2 text-sm text-red-500" key={error}>
                   {error}
                   </p>
                   ))}
                 </div>
              </div>
            </div>
          </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Button type="submit">Create Invoice</Button>
      </div>
        </form>
    )
}