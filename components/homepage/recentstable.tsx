import { recentFilesData } from "@/config/constants";
import { Recentfile } from "@/types/types";
import UploadAvatar from "../Auth/signup/upload-avatar";


interface Recentfiles {
    itemslist: Recentfile[];
  }
export default function RecentsTable({itemslist}:Recentfiles){
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Recent Files</h1>
            <div className="mt-6 flow-root">
                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 ">
                        <div className="md:hidden">
                        </div>
                        <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                        {/* <UploadAvatar/> */}
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Email
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Date
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Status
                                    </th>
                                    <th scope="col" className="relative py-3 pl-6 pr-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {itemslist.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                    >
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                            <div className="flex items-center gap-3">
                                                {/* <Image
                                                    src={invoice.image_url}
                                                    className="rounded-full"
                                                    width={28}
                                                    height={28}
                                                    alt = ""
                                                /> */}
                                                <p>{item.filename}</p>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {item.filetype}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {item.id}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            {item.date}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-3">
                                            New
                                        </td>
                                        <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                                View
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  }