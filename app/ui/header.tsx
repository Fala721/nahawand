'use client';

import Image from 'next/image';
import Search from './search';
import { ProfileCard } from './profilecard';
import {MyDropdown} from './dropdownmenu';
import { profilecardlistdata } from '../lib/constants';

export default function Header() {
  const itemslist = profilecardlistdata
  return (
      <div className='flex shadow-xl bg-amber-300 sticky top-0 rounded-b border-b border-slate-400 justify-between items-center h-20'>
        {/* Logo */}
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
        {/* Searchbar */}
        <div className='w-1/3 flex justify-center items-center mx-4'>
        <Search placeholder="بحث...." />
        </div>
        {/* profilecard */}
        <div className='w-1/3 flex items-center justify-end h-12 pe-4'>
          <MyDropdown itemslist={itemslist}/>
        </div>
      </div>
  );
}


// const itemslist = profilecardlistdata
// return (
//     <div className='flex bg-amber-300 sticky top-0 rounded-b border-b border-slate-400 justify-between items-center h-20'>
//       {/* Logo */}
//       <div className='w-1/3 h-12'>
//         <div className="flex-1 flex items-start justify-start">
//           <div className="relative h-16 max-h-16 w-full">
//             <Image
//               src="/logo.png"
//               alt="Logo"
//               className=" h-full w-full object-contain"
//               layout="fill"
//               //className="h-auto w-full max-h-16 object-cover"
//               // width={860}  // Adjust the width based on your needs
//               // height={314}  // Adjust the height based on your needs
//             />
//           </div>
//         </div>
//       </div>
//       {/* Searchbar */}
//       <div className='w-1/3 flex justify-center items-center mx-4'>
//       <Search placeholder="بحث...." />
//       </div>
//       {/* profilecard */}
//       <div className='w-1/3 flex items-center justify-end h-12 pe-4'>
//         <MyDropdown itemslist={itemslist}/>
//       </div>
//     </div>