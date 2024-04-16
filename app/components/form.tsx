"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import clsx from "clsx";
import Button from "@/app/components/button";

function Form() {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    if (isError) setIsError(false);
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!value) {
      setIsError(true);
      return;
    }
    setValue("");
  }

  return (
    <form
      className="bg-form-mobile-pattern md:bg-form-desktop-pattern relative top-[-80px] mx-auto flex max-w-[1110px] flex-col gap-4 rounded-[10px] bg-secondary-200 bg-[length:72%] bg-right-top bg-no-repeat p-6 md:top-[-87px] md:flex-row md:gap-[26px] md:bg-cover md:px-16 md:py-[52px]"
      onSubmit={handleSubmit}
    >
      <input
        value={value}
        onChange={handleInput}
        type="text"
        placeholder="Shorten a link here..."
        className={clsx(
          "custom-focus grow rounded-md border-[3px] px-3 py-[3px] text-base leading-9 tracking-[0.12px] text-secondary-300 ring-offset-secondary-200 placeholder:text-secondary-300 placeholder:opacity-50 md:rounded-[10px] md:px-[29px] md:py-[11px] md:text-xl md:leading-9 md:tracking-[0.15px]",
          { "border-red-400": isError, "border-transparent": !isError },
        )}
      />
      {isError && (
        <span className="bottom-[26px] mt-[-12px] text-xs italic leading-[18px] tracking-[0.08px] text-red-400 md:absolute md:text-base md:leading-[18px] md:tracking-[-0.11px]">
          Please add a link
        </span>
      )}
      <Button type="submit" className="ring-offset-secondary-200">
        Shorten it!
      </Button>
    </form>
  );
}

export default Form;
