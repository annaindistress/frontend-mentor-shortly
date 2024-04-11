import LogoIcon from "@/app/assets/logo.svg";

interface LogoProps {
  className?: string;
}

function Logo({ className = "" }: LogoProps) {
  return (
    <a className={`w-[124px] ${className}`}>
      <span className="sr-only">Shortly logo</span>
      <LogoIcon className="w-full" />
    </a>
  );
}

export default Logo;
