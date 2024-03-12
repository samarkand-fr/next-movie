'use client'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface NavbarItemProps {
  title: string;
  param: string;
}

// NavbarItem component represents a navigation item in the Navbar.
// It uses the useSearchParams hook to get the current search parameters.
const NavbarItem: React.FC<NavbarItemProps> = ({ title, param }) => {
  // Retrieve the 'genre' parameter from the search parameters.
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div>
      {/* Link to update the 'genre' parameter in the URL */}
      <Link
        className={`hover:text-amber-600 font-semibold ${
          // Apply styles if the current 'genre' matches the parameter of this NavbarItem
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
