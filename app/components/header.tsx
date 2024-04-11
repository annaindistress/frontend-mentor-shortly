import Image from "next/image";
import { BASE_URL } from "../constants";
import Navigation from "./navigation";

function Header() {
  return (
    <header className="relative mx-auto grid max-w-[1158px] grid-cols-[max-content_1fr] items-center px-6 pb-6 pt-10 md:space-x-11  md:pb-[78px] md:pt-12">
      <a className="w-[124px] md:pt-1.5">
        <Image
          src={`${BASE_URL}/logo.svg`}
          alt="Shortly logo"
          width={120.04}
          height={32.67}
          priority
          className="w-full"
        />
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
