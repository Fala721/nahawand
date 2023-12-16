import Header from "../../components/navigation/header";
import Search from "../../components/ui/search";
import SideNav from "../../components/navigation/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">

  <div className="flex flex-col md:flex-row flex-1">
    <div className="hidden w-full md:w-60 sm:block"> <SideNav/></div>
    <div className="flex-1 ps-4">{children}</div>
  </div>
</div>
  );
}
{/* <div className=" bg-red-400">
<Header/>
<div className="flex h-screen flex-col sm:flex-row sm:overflow-hidden">
<div className="w-full flex-none md:w-64">
<SideNav/>
</div>
<div className="flex-g p-6 sm:overflow-y-auto sm:p-12">{children}</div>
</div>
</div> */}