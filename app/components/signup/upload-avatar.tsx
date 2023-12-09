"use client";

import { UploadAvatarToStorageAndTable } from "@/app/lib/actions";
import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export default function UploadAvatar() {
    const [file, setFile] = useState<File | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
        await UploadAvatarToStorageAndTable(file)
      } else {
        console.error("No file selected");
      }

    
  };

  const handleFileSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="file" name="image" onChange={handleFileSelected} />
      <Button type="submit">Upload image</Button>
    </form>
  );
}


