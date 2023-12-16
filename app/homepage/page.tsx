import { maqamcardslist, recentFilesData } from "../../config/constants";
import CardsRow from "../../components/homepage/maqamcards";
import RecentsTable from "../../components/homepage/recentstable";

export default function Page() {
  const  recentfiles = recentFilesData ;
  return (
      <div>
        <CardsRow title="تصفح حسب المقام الموسيقي" itemslist={maqamcardslist}/>
        <CardsRow title="تصفح حسب الالة الموسيقية" itemslist={maqamcardslist}/>
        <RecentsTable itemslist={recentfiles}/>
        </div>
    );
  }
