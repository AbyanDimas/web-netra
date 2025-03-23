import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface NavMenuItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const NavMenuItem = ({ icon: Icon, label, href }: NavMenuItemProps) => {
  return (
    <Link
      href={href}
      className="flex items-center text-white hover:text-gray-200 px-4 py-2 rounded-full hover:bg-blue-600 hover:bg-opacity-20 transition-all duration-300"
    >
      <Icon className="w-5 h-5 mr-2" />
      {label}
    </Link>
  );
};

export default NavMenuItem;