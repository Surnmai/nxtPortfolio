// import components
import Social from "./Social";

// import next Images
import Image from "next/image";

// import Images
import Man from "@/app/img/man_banner.png";

// import icons
import { RiFileDownloadFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section
      className="section bg-heroText bg-contain bg-center bg-no-repeat lg:bg-top font-primary"
      id="home"
    >
      <div className="container lg:flex text-center lg:text-left xl:px-[100px]">
        {/* left hero  */}
        <div className="flex-1 lg:max-w-[558px] mt-12">
          <h3 className="text-[18px] font-semibold lg:text-xl mb-2 lg:mb-[50px]">
            Hola! I'm
          </h3>
          <h2 className="text-[24px] lg:text-[32px] font-semibold text-accent mb-4 lg:mb-5">
            SurNmai
          </h2>
          <h1 className="text-[60px] md:text-[80px] lg:text-[100px] leading-none mb-6 font-semibold">
            Creative <br /> <span className="lg:pl-[70px] ">Designer</span>
            <span className="w-3 h-3 md:w-5 md:h-5 bg-accent rounded-full inline-block ml-2"></span>
          </h1>
          <p className="mb-[35px] text-lg lg:text-xl text-center lg:text-left">
            Since creative designers often interact with creative teams,
            managers an clients, they need strong communication skills.
          </p>
          {/* socials  */}
          <Social />

          {/* btn  */}
          <button className="btn bg-accent mx-auto lg:mx-0 mb-6 mt-6 shadow-[#fd59566b] shadow-xl relative z-10">
            Download CV
            <span className="ml-3 text-xl">
              <RiFileDownloadFill />
            </span>
          </button>
        </div>

        {/* Right hero  */}
        <div className="flex-1 relative flex justify-center lg:justify-end lg:after:content-arrow lg:after:h-[96px] lg:after:w-[96px] lg:after:block lg:after:absolute lg:after:top-[22rem] lg:after:-left-[30rem] xl:after:content-arrow xl:after:h-[96px] xl:after:w-[96px] xl:after:block xl:after:absolute xl:after:top-2/4 xl:after:-left-96">
          {/* img  */}
          <Image src={Man} alt="man" className="w-full z-20" priority />
          {/* bg  */}
          <div className="bg-blob w-[350px] h-[400px] sm:w-[553px] sm:h-[753px] bg-contain bg-no-repeat absolute top-[85px] mx-auto z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
