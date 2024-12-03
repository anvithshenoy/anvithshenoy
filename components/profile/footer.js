import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const socialLinks = [
  {
    media: "Mail",
    url: "mailto:hello@anvithshenoy.cloud",
    icon: faEnvelope,
  },
  {
    media: "LinkedIn",
    url: "https://linkedin.com/in/anvithshenoy/",
    icon: faLinkedin,
  },
  {
    media: "GitHub",
    url: "https://github.com/anvithshenoy/",
    icon: faGithub,
  },
  {
    media: "Instagram",
    url: "https://instagram.com/anvithshenoy/",
    icon: faInstagram,
  },
  {
    media: "WhatsApp",
    url: "https://wa.me/+918310583927?text=Hi",
    icon: faWhatsapp,
  },
];

const Footer = () => {
  return (
    <div className="flex w-full flex-col bg-dark p-2.5 pb-6 text-light">
      <div className="flex w-full flex-col items-baseline justify-between border-b border-light pb-3 md:flex-row">
        <div className="flex flex-col items-baseline">
          <p className="font-bold">Anvith Shenoy B</p>
          <p className="text-xs leading-none">
            Eager to create impactful, intuitive user experiences.
          </p>
        </div>
        <div className="flex flex-col items-baseline">
          <p className="font-bold">Social</p>
          <div className="flex gap-1">
            {socialLinks.map((link) => (
              <Link
                key={link.media}
                data-click="true"
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                className="aspect-square h-2 cursor-none"
              >
                <FontAwesomeIcon icon={link.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="w-full py-3 text-center text-xs">
        &copy; Copyright {new Date().getFullYear()}. Made by{" "}
        <Link
          href={"https://anvithshenoy.cloud"}
          className="underline"
          data-click="true"
        >
          Anvith Shenoy B
        </Link>
        .
      </p>
    </div>
  );
};

export default Footer;
