import Link from "next/link";
import NavLinks from "../ui/nav-links";
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
    return (
      <div className="bg-amber-300 bg-opacity-10 border flex items-center justify-center h-full flex-col px-3 py-4">
        <div className="h-1/6">
          <Link //TODO: implemnt profiel pic
            className="mb-5 flex h-40 w-40 items-center justify-center rounded-full bg-blue-600 p-4 "
            href="/"
          >
            FS
          </Link>
        </div>
        <div className="flex grow flex-col justify-start space-x-2 h-1/6 w-full">
          <NavLinks/>
        </div>
      </div>
    );
  }
//   <div className="lg:block bg-amber-100 flex items-center justify-center h-full flex-col px-3 py-4 md:hidden">
//         <Link //profiel pic
//           className="mb-2 flex h-40 w-40 items-center justify-center rounded-full bg-blue-600 p-4 md:h-40"
//           href="/"
//         >
//             FS
//         </Link>
//         <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
//           <NavLinks />
//           <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
//             <form
//                 action={async () => {
//                 'use server';
//                 //   add any functionality
//                 }}
//             >
//             <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
//               <PowerIcon className="w-6" />
//               <div className="hidden md:block">Sign Out</div>
//             </button>
//           </form>
//         </div>
//       </div>