import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";


function LoadMore() {
  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div>
        <AiOutlineLoading className='animate-spin'/>
        </div>
      </section>
    </>
  );
}

export default LoadMore;