import Button from "@/app/components/button";

function Cta() {
  return (
    <section className="bg-secondary-200 bg-cta-mobile-pattern bg-cover bg-no-repeat px-6 py-20 text-center text-white md:bg-cta-desktop-pattern md:py-[57px]">
      <h2 className="sr-only">Next to do</h2>
      <p className="title mb-4 mt-2.5 md:mb-8 md:mt-0">
        Boost your links today
      </p>
      <Button
        href="/#"
        size="lg"
        className="mb-2.5 ring-offset-secondary-200 md:mb-0"
      >
        Get started
      </Button>
    </section>
  );
}

export default Cta;
