import Logo from "./logo";
import Navigation from "@/app/components/navigation";

function Header() {
  return (
    <header className="relative mx-auto grid w-full max-w-[1158px] grid-cols-[max-content_1fr] items-center px-6 pb-6 pt-10  md:space-x-11 md:pb-[78px] md:pt-[52px]">
      <Logo className="text-secondary-300 md:ps-0.5 md:pt-0.5" />
      <Navigation />
    </header>
  );
}

export default Header;
