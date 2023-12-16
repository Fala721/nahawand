"use client";

import Image from "next/image";
import Search from "../ui/search";
import { ProfileCard } from "../ui/profilecard-droplist";
import { MyDropdown } from "../dropdownmenu";
import { profilecardlistdata } from "../../config/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import SignUserOut from "../signout";
import { Button } from "../ui/button";
import Link from "next/link";
import { getUserProfile } from "@/lib/actions";
import MaxWidthWrapper from "../maxwidth-wrapper";

export default function Header() {
  return (
    <div className="bg-amber-400 sticky z-50 top-0 inset-x-0 h-16 shadow-xl rounded-b border-b border-slate-400">
      <header className="relative items-center h-20">
        <MaxWidthWrapper>
          <div className="flex justify-between ">
            {/* TODO: add mobile nav */}
            {/* LOGO */}
            <div className="w-1/3 h-12">
              <div className=" ms-0flex-1 flex items-start justify-start">
                <div className="relative h-16 max-h-16 w-full">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    className=" h-full w-full object-contain"
                    layout="fill"
                    //className="h-auto w-full max-h-16 object-cover"
                    // width={860}  // Adjust the width based on your needs
                    // height={314}  // Adjust the height based on your needs
                  />
                </div>
              </div>
            </div>
            {/* Searchbar */}
            <div className="w-1/3 h-12">
              <Search placeholder="بحث...." />
            </div>
            {/* Profile nav ? login/signup */}
            <div className="w-1/3 h-12">
              <ProfileCard />
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}

{
  /* <div className='flex shadow-xl bg-amber-300 sticky top-0 rounded-b border-b border-slate-400 justify-between items-center h-20'>
         Logo 
        <div className='w-1/3 h-12'>
          <div className="flex-1 flex items-start justify-start">
            <div className="relative h-16 max-h-16 w-full">
              <Image
                src="/logo.png"
                alt="Logo"
                className=" h-full w-full object-contain"
                layout="fill"
                //className="h-auto w-full max-h-16 object-cover"
                // width={860}  // Adjust the width based on your needs
                // height={314}  // Adjust the height based on your needs
              />
            </div>
          </div>
        </div>
        /* Searchbar 
        <div className='w-1/3 flex justify-center items-center mx-4'>
        <Search placeholder="بحث...." />
        </div>
        /* profilecard 
        <div className='w-1/3 flex items-center justify-end h-12 pe-4'>
          <div className='border-2 border-slate-400 bg-white flex flex-col items-start rounded-lg p-2'>
            {/* <MyDropdown itemslist={itemslist}/> *
            <DropdownMenu>
              <DropdownMenuTrigger><ProfileCard/></DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href='/seed'>SEEd th DB</Link></DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem><SignUserOut/></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
      </div>
     */
}
