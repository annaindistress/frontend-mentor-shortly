import Logo from "@/app/components/logo";
import Social from "@/app/components/social";
import { BASE_URL } from "@/app/constants";

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
    <footer className="bg-secondary-400 px-6 py-14 text-center capitalize text-white md:py-[72px] lg:text-start">
      <div className="mx-auto grid max-w-[1110px] gap-11 lg:grid-cols-[1fr_repeat(2,_max-content)] lg:items-start lg:gap-[70px]">
        <Logo className="mx-auto mb-1.5 lg:ms-0" />
        <ul className="grid gap-[37px] tracking-[-0.25px] md:grid-cols-3 md:gap-20">
          {navigationItems.map((item) => (
            <li key={item.section}>
              <span className="mb-5 block">{item.section}</span>
              <ul className="grid gap-2.5">
                {item.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`${BASE_URL}/#`}
                      className="hover:text-primary-200 focus-visible:text-primary-200 custom-focus ring-offset-secondary-400 rounded-md text-[15px] leading-[18px] text-stone-300"
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
