import Link from "next/link";
import { ElementType } from "react";

// MenuItemProps defines the expected props for the MenuItem component.
interface MenuItemProps {
  title: string; // Title of the menu item.
  address: string; // URL address to navigate to.
  Icon: ElementType; // Icon component for the menu item.
}

// MenuItem component renders a clickable menu item with an optional icon.
const MenuItem: React.FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    // Link component for navigation to the specified address.
    <Link href={address} passHref>
      {/* Container for the menu item with hover effect. */}
      <div className="hover:text-amber-500">
        {/* Render the optional icon if provided. */}
        {Icon && <Icon className="text-2xl sm:hidden" />}
        {/* Display the title of the menu item in uppercase. */}
        <p className="uppercase hidden sm:inline text-md font-medium">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default MenuItem;
