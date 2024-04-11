import Facebook from "@/app/assets/facebook.svg";
import Twitter from "@/app/assets/twitter.svg";
import Pinterest from "@/app/assets/pinterest.svg";
import Instagram from "@/app/assets/instagram.svg";

const links = [
  {
    title: "Facebook",
    url: "https://www.facebook.com/",
    icon: <Facebook />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/",
    icon: <Twitter />,
  },
  {
    title: "Pinterest",
    url: "https://www.pinterest.com/",
    icon: <Pinterest />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/",
    icon: <Instagram />,
  },
];

function Social() {
  return (
    <ul className="grid auto-cols-max grid-flow-col justify-center gap-6">
      {links.map((link) => (
        <li key={link.title} className="flex">
          <a
            href={link.url}
            className="hover:text-primary-200 focus-visible:text-primary-200 custom-focus ring-offset-secondary-400 flex items-center rounded-md"
          >
            <span className="sr-only">{link.title}</span>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Social;
