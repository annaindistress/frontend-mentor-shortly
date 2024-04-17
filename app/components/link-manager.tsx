"use client";
import clsx from "clsx";
import Form from "@/app/components/form";
import LinkItem from "@/app/components/link-item";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { UrlArray, UrlItem } from "@/app/types";

function LinkManager() {
  const [data, setData] = useLocalStorage("", "links");

  function handleSubmit(newItem: UrlItem) {
    setData((items: UrlArray) => [...items, newItem]);
  }

  return (
    <section
      className={clsx("grid gap-6 bg-slate-100 px-6", {
        "pb-[56px] md:pb-[96px]": data.length === 0,
        "pb-[80px] md:pb-[120px]": data.length > 0,
      })}
    >
      <h2 className="sr-only">Shorten a link</h2>
      <Form onSubmit={handleSubmit} />
      <ul className="mx-auto grid w-full max-w-[1110px] gap-6 md:gap-4">
        {data.length > 0 &&
          data.map((item: UrlItem) => <LinkItem key={item.full} item={item} />)}
      </ul>
    </section>
  );
}

export default LinkManager;
