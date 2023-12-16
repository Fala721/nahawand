import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";


function LoadMore() {
  return (
      <div className="flex justify-center items-center w-full">
        <div>
        <AiOutlineLoading className='animate-spin h-12 w-12'/>
        </div>
      </div>
  );
}

export default LoadMore;