import { ReactNode } from "react";
import { BASE_URL } from "@/app/constants";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

function Button({ children, href = "/#", className = "" }: ButtonProps) {
  return (
    <a
      className={`bg-primary-200 hover:bg-primary-100 focus-within:bg-primary-100 custom-focus inline-block rounded-full px-6 py-3 font-bold capitalize text-white ${className}`}
      href={`${BASE_URL}${href}`}
    >
      {children}
    </a>
  );
}

export default Button;
