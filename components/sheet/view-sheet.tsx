import Image from "next/image";
import { PrismaClient,sheets,profiles } from "@prisma/client";

const prisma = new PrismaClient()

interface SheetProp{
    sheet: sheets
    user: profiles
}
export default function ViewSheet({sheet,user,...props}:SheetProp) {
  return (
    <div className="bg-black flex flex-row h-full w-full">
      <div className="bg-red-300 w-3/4">
        <div className="relative">
          <Image
            alt="Mountains"
            src={sheet.file_url}
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="bg-blue-300 w-1/4">
        <div className="relative flex flex-col">
          <h1>{sheet.title}</h1>
          <p>{user.first_name} {user.last_name}</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    </div>
  );
}

// responsive image
{
  /* <Image
                alt="Mountains"
                src='https://res.cloudinary.com/practicaldev/image/fetch/s--CWZgLJgY--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ulzu2ns3w9a6zwnfgnt4.png'
                width={700}
                height={475}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                /> */
}
