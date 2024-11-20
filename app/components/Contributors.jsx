// import data
import { contributors } from "../data";

// import next Image
import Image from "next/image";

const Contributors = () => {
  return (
    <section className="section" id="contributors">
      <div className="container">
        <h2 className="section-title">
          {contributors.title} <span className="dot"></span>
        </h2>
        <p className="section-subtitle">{contributors.subtitle}</p>

        {/* contributors list  */}
        <div className="flex flex-col lg:flex-row gap-10 md:flex-wrap lg:justify-center items-center">
          {contributors.brands.map((brand, indx) => {
            return (
              <div key={indx} className="flex items-center">
                <Image src={brand.image} alt="img" width={150} height={150} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contributors;
