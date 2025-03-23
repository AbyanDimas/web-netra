import { LogIn } from 'lucide-react';
import Link from 'next/link';

const NavButton = () => {
  return (
    <Link
      href="https://lmsnetra.vercel.app/"
      passHref
      className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
    >
      <LogIn className="w-5 h-5 mr-2" />
      Masuk ke LMS
    </Link>
  );
};

export default NavButton;