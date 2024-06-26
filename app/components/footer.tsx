import Logo from "@/app/components/logo";
import Social from "@/app/components/social";

const navigationItems = [
  {
    section: "Features",
    links: ["Link shortening", "Branded links", "Analytics"],
  },
  {
    section: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    section: "Company",
    links: ["About", "Our team", "Careers", "Contact"],
  },
];

function Footer() {
  return (
    <footer className="bg-secondary-400 px-6 py-[54px] text-center capitalize text-white md:py-[72px] lg:text-start">
      <div className="mx-auto grid max-w-[1110px] gap-11 lg:grid-cols-[1fr_repeat(2,_max-content)] lg:items-start lg:gap-[70px]">
        <Logo className="mx-auto mb-1.5 lg:ms-0" />
        <ul className="grid gap-[37px] tracking-[-0.25px] md:grid-cols-3 md:gap-20">
          {navigationItems.map((item) => (
            <li key={item.section}>
              <span className="mb-5 block font-bold">{item.section}</span>
              <ul className="grid gap-2.5">
                {item.links.map((link) => (
                  <li key={link}>
                    <a
                      href="/#"
                      className="custom-focus rounded-md text-[15px] leading-[18px] text-stone-300 ring-offset-secondary-400 hover:text-primary-200 focus-visible:text-primary-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <Social />
      </div>
    </footer>
  );
}

export default Footer;
