import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import ToggleTheme from "./ToggleTheme";

// Header component for displaying the navigation bar.
const Header: React.FC = () => {
  return (
    // Container for the header, containing navigation elements and theme toggle.
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto my-1">
      {/* Logo and site title, linking to the home page. */}
      <Link href={"/"} passHref>
        <div className="flex gap-1 items-center cursor-pointer">
          {/* Movie camera icon with site title. */}
          <BiCameraMovie className="text-4xl font-bold bg-amber-500 rounded-lg p-1 " />
          {/* Site title displayed in larger size on larger screens. */}
          <span className="text-xl hidden sm:inline font-sans">WATCH</span>
        </div>
      </Link>
      {/* Container for theme toggle and navigation menu items. */}
      <div className="flex gap-5 ">
        {/* Theme toggle button. */}
        <ToggleTheme />
        {/* Navigation menu items for home and about pages. */}
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BiCameraMovie} />
      </div>
    </div>
  );
};

export default Header;
