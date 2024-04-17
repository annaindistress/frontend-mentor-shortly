"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "@/app/components/button";
import { UrlItem } from "@/app/types";

function LinkItem({ item }: { item: UrlItem }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
    navigator.clipboard.writeText(item.short);
  }

  useEffect(
    function () {
      const timeout = setTimeout(() => {
        setIsClicked(false);
      }, 2000);

      return () => clearTimeout(timeout);
    },
    [isClicked],
  );

  return (
    <li className="flex max-w-full flex-col overflow-hidden rounded-[10px] bg-white text-base leading-9 tracking-[-0.12px] md:flex-row md:items-center md:gap-6 md:py-4 md:pe-6 md:ps-8 md:text-[20px]">
      <span className="grow truncate border-b border-b-zinc-400/25 px-4 py-1.5 text-secondary-300 md:border-0 md:p-0">
        {item.full}
      </span>
      <span className="px-4 pb-2 pt-1.5 text-primary-200 md:p-0">
        {item.short}
      </span>
      <Button
        className={clsx("mx-4 mb-4 py-2.5 md:m-0", {
          "bg-secondary-200 tracking-normal hover:bg-secondary-200 focus-visible:bg-secondary-200":
            isClicked,
        })}
        onClick={handleClick}
      >
        {isClicked ? "Copied!" : "Copy"}
      </Button>
    </li>
  );
}

export default LinkItem;
