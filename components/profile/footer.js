import Link from "next/link";
import ContactForm from "../form/ContactForm";

const Footer = () => {
  return (
    <div className="relative flex w-full flex-col bg-dark text-light selection:bg-light selection:text-dark">
      <ContactForm />
      <p className="w-full py-3 text-center text-xs">
        Developed using Next.js and Deployed through Vercel.
        <br />
        &copy; Copyright {new Date().getFullYear()}. Made by{" "}
        <Link
          href="https://www.anvithshenoy.cloud/"
          data-click="true"
          className="relative w-full text-sm font-bold outline-none transition-all duration-500 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-[calc(100%+0.25rem)] focus:after:w-[calc(100%+0.25rem)]"
        >
          Anvith Shenoy B
        </Link>
        .
      </p>

      <div></div>
    </div>
  );
};

export default Footer;
