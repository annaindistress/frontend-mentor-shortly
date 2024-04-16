import Image from "next/image";
import Button from "@/app/components/button";
import { BASE_URL } from "@/app/constants";

function Hero() {
  return (
    <section className="w-screen overflow-hidden pb-40 lg:pb-36">
      <div className="mx-auto grid max-w-[1158px] lg:grid-cols-[615px_1fr] lg:pb-1.5 lg:pt-1">
        <div className="w-screen px-6 pb-2 text-center lg:w-auto lg:pt-14 lg:text-start ">
          <p className="mb-4 text-[42px] font-bold leading-[48px] tracking-[-1.05px] text-secondary-300 md:mb-1.5 md:text-[80px] md:leading-[90px] md:tracking-[-2px]">
            More than just shorter links
          </p>
          <p className="mb-[33px] text-lg leading-relaxed md:mb-[37px] md:text-[22px] md:leading-9">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <Button href="/#" size="lg">
            Get started
          </Button>
        </div>
        <picture className="row-start-1 mx-auto mb-9 w-[511px] md:w-[733px] lg:col-start-2 lg:mb-0">
          <source
            media="(min-width: 768px)"
            srcSet={`${BASE_URL}/hero-desktop.svg`}
          />
          <Image
            src={`${BASE_URL}/hero-mobile.svg`}
            alt="Image of a man sitting near a computer and typing on the keyboard"
            width={511}
            height={337}
            className="relative left-[calc(50%-231.5px)] top-[-1px] w-full lg:left-[74px] lg:top-[-5px]"
          />
        </picture>
      </div>
    </section>
  );
}

export default Hero;
