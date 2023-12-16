import Link from "next/link";
import MaxWidthWrapper from "../maxwidth-wrapper";
import { Icons } from "../icons";
import NavItems from "./nav-items";
import { buttonVariants } from "../ui/button";
import { getUserProfile } from "@/lib/actions";
import UserAccountNav from "./user-account-nav";

const Navbar = async () => {
  const user = await getUserProfile()

  return (
    <div className="bg-amber-300 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-amber-300">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="felx h-16 items-center">
              {/* TODO- mobilenav */}

              <div className="ms-4 flex lg:ms-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className='hidden z-50 lg:ms-8 lg:block lg:self-stretch'>
                <NavItems />
              </div>

              <div className='ms-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  {user ? null : (
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Sign in
                    </Link>
                  )}

                  {user ? null : (
                    <span
                      className='h-6 w-px bg-gray-200'
                      aria-hidden='true'
                    />
                  )}

                  {user ? (
                    <UserAccountNav user={user} />
                  ) : (
                    <Link
                      href='/sign-up'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Create account
                    </Link>
                  )}

                  {user ? (
                    <span
                      className='h-6 w-px bg-gray-200'
                      aria-hidden='true'
                    />
                  ) : null}

                  {user ? null : (
                    <div className='flex lg:ms-6'>
                      <span
                        className='h-6 w-px bg-gray-200'
                        aria-hidden='true'
                      />
                    </div>
                  )}
                  </div>
                </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
