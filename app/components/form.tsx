"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import clsx from "clsx";
import Button from "@/app/components/button";
import { getShortUrl } from "@/app/services";
import type { UrlItem } from "@/app/types";

function Form({ onSubmit }: { onSubmit: (item: UrlItem) => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    if (error !== "") setError("");
    setValue(event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!value) {
      setError("Please add a link");
      return;
    }

    const result = await getShortUrl(value);

    if (result !== undefined) {
      if (result.status) {
        const newItem = { full: value, short: result.data };
        onSubmit(newItem);
      } else {
        setError(result.data);
      }
    }

    setValue("");
  }

  return (
    <form
      className="relative mx-auto mt-[-80px] flex w-full max-w-[1110px] flex-col gap-4 rounded-[10px] bg-secondary-200 bg-form-mobile-pattern bg-[length:72%] bg-right-top bg-no-repeat p-6 md:mt-[-87px] md:flex-row md:gap-[26px] md:bg-form-desktop-pattern md:bg-cover md:px-16 md:py-[52px]"
      onSubmit={handleSubmit}
    >
      <input
        value={value}
        onChange={handleInput}
        type="text"
        placeholder="Shorten a link here..."
        className={clsx(
          "custom-focus grow rounded-[5px] border-[3px] px-3 py-[3px] text-base leading-9 tracking-[0.12px] text-secondary-300 ring-offset-secondary-200 placeholder:text-secondary-300 placeholder:opacity-50 md:rounded-[10px] md:px-[29px] md:py-[11px] md:text-xl md:leading-9 md:tracking-[0.15px]",
          {
            "border-red-400": error !== "",
            "border-transparent": error === "",
          },
        )}
      />
      {error !== "" && (
        <span className="bottom-[26px] mt-[-12px] text-xs italic leading-[18px] tracking-[0.08px] text-red-400 md:absolute md:text-base md:leading-[18px] md:tracking-[-0.11px]">
          {error}
        </span>
      )}
      <Button type="submit" size="lg" className="ring-offset-secondary-200">
        Shorten it!
      </Button>
    </form>
  );
}

export default Form;
