// import data
import { contact } from "../data";

// import Logo
import Logo from "@/app/img/logo.svg";

// import components
import Social from "./Social";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      className="section before:content-ornament before:flex before:justify-center mb-4"
      id="contact"
    >
      <div className="container">
        <h2 className="section-title text-accent">{contact.title}</h2>
        <p className="section-subtitle">{contact.subtitle}</p>

        {/* logo  */}
        <div className="max-w-[200px] lg:max-w-xs mx-auto mb-10">
          <Image src={Logo} alt="lgo" className="w-full" />
        </div>

        {/* social  */}
        <div className="flex justify-center">
          <Social />
        </div>
      </div>
    </section>
  );
};

export default Contact;
