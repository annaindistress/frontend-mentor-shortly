"use client";

import { useState } from "react";
import clsx from "clsx";
import { BASE_URL } from "@/app/constants";
import Burger from "@/app/assets/burger.svg";
import Button from "@/app/components/button";

const navigationLinks = ["Features", "Pricing", "Resources"];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="ms-auto h-6 w-6 text-zinc-400 md:hidden"
        onClick={() => setIsOpen((state) => !state)}
      >
        <span className="sr-only">{isOpen ? "Close" : "Open"} menu</span>
        <Burger />
      </button>
      <nav
        className={clsx(
          "absolute inset-x-6 top-full grid items-center gap-6 rounded-[10px] bg-secondary-200 px-6 py-10 text-center text-lg font-bold capitalize text-white md:static md:grid md:grid-cols-[1fr_repeat(2,_max-content)] md:gap-9 md:bg-transparent md:p-0 md:text-[15px] md:leading-[18px] md:text-zinc-400",
          {
            hidden: !isOpen,
          },
        )}
      >
        <ul className="mb-2.5 grid gap-7 border-b border-zinc-400/25 pb-7 md:mb-0 md:grid-cols-[repeat(3,_max-content)] md:gap-[31px] md:border-0 md:pb-0">
          {navigationLinks.map((link) => (
            <li key={link}>
              <a
                href={`${BASE_URL}/#`}
                className="custom-focus rounded-md md:hover:text-secondary-300 md:focus-visible:text-secondary-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`${BASE_URL}/#`}
          className="custom-focus rounded-md md:hover:text-secondary-300 md:focus-visible:text-secondary-300"
        >
          Login
        </a>
        <Button href="/#" className="md:mt-[-5px]">
          Sign up
        </Button>
      </nav>
    </>
  );
}

export default Navigation;
