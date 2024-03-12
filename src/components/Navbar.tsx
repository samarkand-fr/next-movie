import NavbarItem from "./NavbarItem";

const Navbar: React.FC = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-400 p-4 lg:text-lg justify-center gap-6 my-3">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
