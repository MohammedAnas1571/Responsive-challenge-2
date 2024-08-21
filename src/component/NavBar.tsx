import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const navBarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];

export const NavBar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-10">
        {/* log section */}
        <div>
          <h1 className="text-2xl font-bold">The coding journey</h1>
        </div>
        {/* menu section */}
        <div className="hidden lg:block">
          <ul className="flex gap-4 items-center ">
            {navBarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  className="inline py-3 px-4 hover:text-secondary relative group:"
                  to={menu.link}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
            <button className="primary-btn ">Sign In</button>
          </ul>
        </div>
        {/* mobile Hamburg section */}
        <div className="lg:hidden text-4xl"><IoMdMenu/></div>
      </div>
    </nav>
  );
};
