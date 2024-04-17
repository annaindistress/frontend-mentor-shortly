"use client";
import Form from "@/app/components/form";
import LinkItem from "@/app/components/link-item";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { UrlArray, UrlItem } from "@/app/types";
import { useEffect, useState } from "react";

function LinkManager() {
  const [data, setData] = useLocalStorage("links", []);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function handleSubmit(newItem: UrlItem) {
    setData((items: UrlArray) => [...items, newItem]);
  }

  return (
    <section className="grid gap-6 bg-slate-100 px-6 pb-[80px] md:pb-[120px]">
      <h2 className="sr-only">Shorten a link</h2>
      <Form onSubmit={handleSubmit} />
      {isClient && data.length > 0 && (
        <ul className="mx-auto grid w-full max-w-[1110px] gap-6 md:gap-4">
          {data.map((item: UrlItem) => (
            <LinkItem key={item.full} item={item} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default LinkManager;
