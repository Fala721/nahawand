import { Menu } from '@headlessui/react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { ProfileCard } from './ui/profilecard-droplist'
import { useState } from 'react';
import { DropdownItem } from '../types/types';


interface MyDropdownProps {
  itemslist: DropdownItem[];
}
export function MyDropdown({itemslist}:MyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative flex flex-col items-center w-15 h-12 rounded-lg'>
      <button onClick= {()=> setIsOpen((prev) => !prev) } className='bg-white p-0 w-full flex items-center justify-between tracking-wider border border-slate-300 shadow-md rounded-md'>
        <ProfileCard/>
        {!isOpen ? (
          <ChevronDownIcon className='h-5 w-5'/>
        ):(
          <ChevronUpIcon className='h-5 w-5'/>
        )
      }
      </button>
      {isOpen && (
        <div className='border-2 border-slate-400 absolute bg-white top-16 flex flex-col items-start rounded-lg p-2 w-full'>
            {itemslist.map((item,i) =>(
              <div key={i} className='border-b last:border-0 flex w-full justify-between hover:bg-slate-400 p-3'>
              <h3 className='p-1'>{item.name}</h3>
            </div>
            ))}
        </div>
      )}
    </div>
  );
}