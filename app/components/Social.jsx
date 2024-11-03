// import data
import Link from "next/link";
import { social } from "../data";

const Social = () => {
  return (
    <div className="mx-auto max-w-min lg:m-0 relative z-10 flex justify-between items-center gap-10 ">
      {social.map((social, index) => {
        const { icon, href } = social;
        return (
          <Link
            href={href}
            key={index}
            className="text-3xl hover:text-accent transition-all duration-300 "
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
