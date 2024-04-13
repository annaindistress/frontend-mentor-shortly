import { ReactNode } from "react";
import clsx from "clsx";
import { BASE_URL } from "@/app/constants";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  size: "sm" | "lg";
}

function Button({ children, href = "/#", className = "", size }: ButtonProps) {
  return (
    <a
      className={clsx(
        `bg-primary-200 hover:bg-primary-100 focus-within:bg-primary-100 custom-focus inline-block rounded-full font-bold capitalize text-white ${className}`,
        {
          "px-6 py-3": size === "sm",
          "px-10 py-[18px] text-xl leading-none": size === "lg",
        },
      )}
      href={`${BASE_URL}${href}`}
    >
      {children}
    </a>
  );
}

export default Button;
