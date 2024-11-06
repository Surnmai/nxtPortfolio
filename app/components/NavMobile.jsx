// import context
import { useGlobalContext } from "../context";

const NavMobile = ({ nav }) => {
  const { showNav } = useGlobalContext();

  return (
    <nav className="md:hidden">
      <ul
        className={`flex gap-x-4 flex-col justify-center items-center bg-accent absolute top-0 w-80 h-screen transition-all duration-300 ${
          showNav ? "left-0" : "-left-full"
        }`}
      >
        {nav.map((item, idx) => {
          //   console.log(item.name);

          return (
            <li
              key={idx}
              className="cursor-pointer hover:text-white hover:transition-all duration-100 py-2"
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
