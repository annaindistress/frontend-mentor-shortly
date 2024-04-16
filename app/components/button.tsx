import { ReactNode } from "react";
import clsx from "clsx";
import { BASE_URL } from "@/app/constants";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  size?: "sm" | "lg";
  type?: "button" | "submit" | "reset";
}

function Button({
  children,
  href = "",
  className = "",
  size = "sm",
  type = "button",
}: ButtonProps) {
  const baseStyles = `custom-focus inline-block bg-primary-200 font-bold capitalize text-white focus-within:bg-primary-100 hover:bg-primary-100 ${className}`;

  if (href !== "")
    return (
      <a
        className={clsx(`rounded-full ${baseStyles}`, {
          "px-6 py-3": size === "sm",
          "px-10 py-[18px] text-xl leading-none": size === "lg",
        })}
        href={`${BASE_URL}${href}`}
      >
        {children}
      </a>
    );

  return (
    <button
      type={type}
      className={`rounded-md px-3 py-3.5 text-lg leading-5 md:rounded-[10px] md:px-10 md:py-4 md:text-xl md:leading-6 ${baseStyles}`}
    >
      {children}
    </button>
  );
}

export default Button;
