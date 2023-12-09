import { maqamcardslist } from "../../lib/constants";
import { MaqamInfo } from "../../lib/types";


export default function CardsRow({
    title,
    itemslist,
}:{
    title: string;
    itemslist: MaqamInfo[];
    }){
    return (
        <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className="flex flex-wrap gap-2">
                {itemslist.map((item, index) => (
                    <InfoCard key={index} name={item.name} sheets={item.numofsheets} />
                ))}
            </div>
        </div>
    );
  }


export function InfoCard({
    name,
    icon,
    sheets,    
}:{ 
    name: string;
    icon?: string;
    sheets: number;
}) {
    return(
        <div className="bg-white p-4 rounded-md shadow-md mb-2 w-40 h-33">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p> عدد النوتات الموسيقية :{sheets}</p>
        </div>
    );
}
{/* <div className="mb-8">
<h1 className="text-2xl font-bold mb-4">{title}</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
    {itemslist.map((item, index) => (
    <InfoCard key={index} name={item.name} sheets={item.numofsheets} />
    ))}
</div>
</div> */}