import Link from "next/link";
import { ReactElement, ElementType } from "react";

interface MenuItemProps {
  title: string;
  address: string;
  Icon: ElementType; // Use React.ElementType for React components
}

export default function MenuItem({
  title,
  address,
  Icon,
}: MenuItemProps): ReactElement {
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
}
