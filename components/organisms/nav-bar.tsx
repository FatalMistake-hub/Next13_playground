"use client";

import { useSession } from "next-auth/react";
import LoginForm from "../molecules/login-form";
import { ModeToggle } from "../molecules/mode-toggle";
import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";

function NavBar() {
  const { data: session } = useSession();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          {session?.user?.name || "OpenSheet"} &#128516;
        </SheetTrigger>
        <SheetContent className="pt-4 px-0 lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
          <div>
            <div className="sticky top-0 left-0 py-8 lg:px-8 ">
              <div className="group flex items-center gap-x-3 border-b border-gray-200 pb-8 mb-8 dark:border-gray-700">
                <a className="block flex-shrink-0" href="#">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </a>

                <a className="group grow block" href="">
                  <h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Leyla Ludic
                  </h5>
                  <p className="text-sm text-gray-500">UI/UX enthusiast</p>
                </a>

                <div className="grow">
                  <div className="flex justify-end">
                    <ModeToggle />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      5 Reasons to Not start a UX Designer Career in 2022/2023
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>

                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      If your UX Portfolio has this 20% Well Done, it Will Give
                      You an 80% Result
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>

                <a className="group flex items-center gap-x-6" href="#">
                  <div className="grow">
                    <span className="text-sm font-bold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-500">
                      7 Principles of Icon Design
                    </span>
                  </div>

                  <div className="flex-shrink-0 relative rounded-lg overflow-hidden w-20 h-20">
                    <img
                      className="w-full h-full absolute top-0 left-0 object-cover rounded-lg"
                      src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                      alt="Image Description"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <LoginForm session={session} />
    </>
  );
}

export default NavBar;
