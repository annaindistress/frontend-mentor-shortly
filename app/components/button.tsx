import { ReactNode } from "react";
import { BASE_URL } from "../constants";

interface ButtonProps {
  children: ReactNode;
  href?: string;
}

function Button({ children, href = "/#" }: ButtonProps) {
  return (
    <a
      className="bg-teal-450 hover:bg-teal-250 focus-within:bg-teal-250 rounded-full px-6 py-2.5 text-white"
      href={`${BASE_URL}${href}`}
    >
      {children}
    </a>
  );
}

export default Button;
