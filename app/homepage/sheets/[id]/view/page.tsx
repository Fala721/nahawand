import { getSheetById } from "@/lib/sheets/actions";
import { PrismaClient, sheets, profiles } from "@prisma/client";
import ViewSheet from "@/components/sheet/view-sheet";
import { getuserbyid } from "@/lib/actions";

export default async function Page({ params }: {params: {sheet: sheets}}) {
  const {sheet,user} = await getSheetById(params.sheet.id)
  //const user = getuserbyid(params.sheet.user_id!)
  return <ViewSheet sheet={params.sheet} user={user} />;
}
