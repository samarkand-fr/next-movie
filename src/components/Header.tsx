import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto my-1">
      <Link href={"/"} passHref>
        <div className="flex gap-1 items-center cursor-pointer">
          <BiCameraMovie className="text-4xl font-bold bg-amber-500 rounded-lg p-1 " />
          <span className="text-xl hidden sm:inline font-sans">WATCH</span>
        </div>
      </Link>
      <div className="flex gap-5 ">
        <ToggleTheme />
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BiCameraMovie} />
      </div>
    </div>
  );
}
