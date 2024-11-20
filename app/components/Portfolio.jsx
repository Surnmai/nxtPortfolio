// import data
import Image from "next/image";
import { portfolio } from "../data";

const Portfolio = () => {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h3 className="text-center text-2xl lg:text-3xl">
          {portfolio.preTitle}
        </h3>
        <h2 className="section-title text-accent mb-16 lg:mb-[120px]">
          {portfolio.title}
        </h2>

        {/* portfolio projects grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div>
            <Image src={portfolio.image1} alt="image" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <Image src={portfolio.image2} alt="image" />
            </div>

            <div>
              <Image src={portfolio.image3} alt="image" />
            </div>

            <div>
              <Image src={portfolio.image4} alt="image" />
            </div>
            <div>
              <Image src={portfolio.image5} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
