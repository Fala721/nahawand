import Link from 'next/link'
import { redirect } from 'next/navigation'
import { userSignOut } from "@/app/lib/actions";




export default function SignUserOut() {

  const signOut = async () => {

    await userSignOut();
    return redirect('/signin')
  }

  return (
    <div className="flex items-center gap-4">
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
          Logout
        </button>
      </form>
    </div>
  )
}
