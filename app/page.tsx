import Hero from "@/app/components/hero";
import LinkManager from "@/app/components/link-manager";
import Stats from "@/app/components/stats";
import Cta from "@/app/components/cta";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">
        Shortly － URL shortening API challenge on Frontend Mentor
      </h1>
      <Hero />
      <LinkManager />
      <Stats />
      <Cta />
    </>
  );
}
