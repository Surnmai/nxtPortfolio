// Import data
import { services } from "../data";

// import next image
import Image from "next/image";

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container">
        <h2 className="section-title">
          {services.title} <span className="dot"></span>
        </h2>
        <p className="section-subtitle">{services.subtitle}</p>

        {/* service items  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.skills.map((service, indx) => {
            return (
              <div
                key={indx}
                className="text-center hover:bg-white hover:shadow-2xl p-4 cursor-pointer transition-all duration-500"
              >
                <div className="w-20 h-20 mx-auto mb-12">
                  <Image src={service.icon} alt="icon" />
                </div>
                {/* service name  */}
                <div className="text-2xl mb-3 font-semibold">
                  {service.name}
                </div>
                <p className="text-grey text-lg lg:mb-16">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
