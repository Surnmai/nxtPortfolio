// import data
import { about } from "../data";

// import Image
import image from "@/app/img/man_about.png";

// import next Image
import Image from "next/image";

const About = () => {
  return (
    <section className="section relative lg:before:content-pattern lg:before:absolute lg:before:top-[332px] lg:before:left-[180px] lg:after:content-rope lg:after:absolute lg:after:overflow-hidden lg:after:left-0 lg:after:right-0 lg:after:top-1/2 lg:after:flex lg:after:justify-center lg:after:items-center">
      <div className="container">
        <h2 className="section-title">
          {about.title} <span className="dot"></span>
        </h2>
        <p className="section-subtitle lg:mb-[60px]">{about.subtitle}</p>
        {/* image  */}
        <div>
          <Image src={image} alt="image" className="z-20 mx-auto relative" />
          <div className="absolute w-32 h-32 bg-accent left-[38%] top-[42%] md:left-[50%] md:top-[35%] z-30 rounded-full mix-blend-hue blur-[30px]"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
