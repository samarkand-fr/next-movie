import Link from "next/link";
import {ElementType}  from "react";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: ElementType;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <Link href={address} passHref>
      <div className="hover:text-amber-500">
        {Icon && <Icon className="text-2xl sm:hidden" />}
        <p className="uppercase hidden sm:inline text-md font-medium">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default MenuItem;
