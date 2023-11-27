"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { sidenavlinks } from '../lib/constants';


const links = sidenavlinks;

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className='py-4 flex flex-col space-y-2'>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'border-b last:border-0 flex w-full justify-start  hover:bg-slate-100 p-3 rounded-md',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
            >
            <LinkIcon className="w-6" />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

// export function MyDropdown({itemslist}:MyDropdownProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className='relative flex flex-col items-center w-15 h-12 rounded-lg'>
//       <button onClick= {()=> setIsOpen((prev) => !prev) } className='bg-white p-0 w-full flex items-center justify-between tracking-wider'>
//         <ProfileCard/>
//         {!isOpen ? (
//           <ChevronDownIcon className='h-5 w-5'/>
//         ):(
//           <ChevronUpIcon className='h-5 w-5'/>
//         )
//       }
//       </button>
//       {isOpen && (
//         <div className='border-2 border-slate-400 absolute bg-white top-14 flex flex-col items-start rounded-lg p-2 w-full'>
//             {itemslist.map((item,i) =>(
//               <div key={i} className='border-b last:border-0 flex w-full justify-between hover:bg-slate-400 p-3'>
//               <h3 className='p-1'>{item.name}</h3>
//             </div>
//             ))}
//         </div>
//       )}
//     </div>
//   );
// }



// export default function NavLinks() {
//   const pathname = usePathname();
//   return (
//     <>
//       {links.map((link) => {
//         const LinkIcon = link.icon;
//         return (
//           <Link
//             key={link.name}
//             href={link.href}
//             className={clsx(
//               "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
//               {
//                 'bg-sky-100 text-blue-600': pathname === link.href,
//               },
//             )}
//             >
//             <LinkIcon className="w-6" />
//             <p className="hidden md:block">{link.name}</p>
//           </Link>
//         );
//       })}
//     </>
//   );
// }