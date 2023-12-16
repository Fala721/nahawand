import Image from "next/image";
import { sheet } from "@/types/types";
import { StarIcon } from "lucide-react";
import { Music4Icon } from "lucide-react";
import Link from "next/link";

interface Prop {
  sheet: sheet;
  index: number;
}

function SheetCard({ sheet }: Prop) {
  return (
    <div className="max-w-sm rounded relative w-full shadow-2xl">
        <a href={sheet.file_url}>
      <div className="relative w-full h-[37vh]">
        <Image
          src={sheet.file_url}
          alt={sheet.title}
          sizes="100%"
          fill
          className=" rounded-s shadow-md"
        />
      </div>
      <div className="py-4 flex flex-col gap-3 bg-slate-400">
        <div className="flex justify-between items-center gap-1">
          <Link
          href = {`/homepage/sheets/${sheet.id}/view`}>
          <h2 className="font-bold text-black text-xl line-clamp-1 w-full">
            {sheet.title}
          </h2>
          </Link>
          <div className="py-1 px-2 bg-[#5468a0] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {sheet.genre}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Music4Icon
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-black font-bold">
              {sheet.main_maqam.name}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <StarIcon
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{sheet.instrument}</p>
          </div>
        </div>
      </div>
      </a>
    </div>
  );
}

export default SheetCard;