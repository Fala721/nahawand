import { sheet } from "../../../types/types";
import SheetCard from "../../../components/sheet/SheetCard";
import LoadMore from "../../../components/sheet/Load-more";
import { fetchAllSheets } from "../../../lib/actions";
import Link from "next/link";

async function Home() {
  const sheets = await fetchAllSheets();

  return (
    <div className="sm:p-16 py-16 px-8 flex flex-col gap-10 bg-slate-50">
      <h2 className="text-3xl text-black font-bold">النوتات الموسيقيه</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {sheets?.error ? (
          <p>Error fetching the sheets</p>
        ) : (
          <>
            {sheets.data?.map((item: sheet, index) => (

                <SheetCard key={item.id} sheet={item} index={index} />
            ))}
          </>
        )}
      </section>
      <LoadMore />
    </div>
  );
}

export default Home;
