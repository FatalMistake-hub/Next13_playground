/* eslint-disable react/no-unescaped-entities */

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/molecules/mode-toggle";
import LoginForm from "@/components/molecules/login-form";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  return (
    <>
      <h2 className="text-3xl font-bold lg:text-4xl lg:text-5xl dark:text-white">
        Announcing a free plan for small teams
      </h2>

      <div className="flex items-center gap-x-5">
        <a
          className="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-gray-200"
          href="#"
        >
          Company News
        </a>
        <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200">
          January 18, 2023
        </p>
      </div>

      <p className="text-lg text-gray-800 dark:text-gray-200">
        At preline, our mission has always been focused on bringing openness and
        transparency to the design process. We've always believed that by
        providing a space where designers can share ongoing work not only
        empowers them to make better products, it also helps them grow.
      </p>

      <p className="text-lg text-gray-800 dark:text-gray-200">
        We're proud to be a part of creating a more open culture and to continue
        building a product that supports this vision.
      </p>

      <div className="text-center">
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            <figure className="relative w-full h-60">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </figure>
            <figure className="relative w-full h-60">
              <img
                className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </figure>
          </div>
          <figure className="relative w-full h-72 sm:h-96 lg:h-full">
            <img
              className="w-full h-full absolute top-0 left-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
              alt="Image Description"
            />
          </figure>
        </div>

        <span className="mt-3 block text-sm text-center text-gray-500">
          Working process
        </span>
      </div>
    </>
  );
}
