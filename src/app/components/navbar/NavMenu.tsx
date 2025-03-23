import { Home, BookOpen, User } from 'lucide-react';
import NavMenuItem from './NavMenuItem';

const NavMenu = () => {
  return (
    <div className="hidden md:flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2">
      <NavMenuItem icon={Home} label="Beranda" href="/beranda" />
      <NavMenuItem icon={BookOpen} label="Tentang Kami" href="/tentang-kami" />
      <NavMenuItem icon={User} label="Layanan" href="/layanan" />
      <NavMenuItem icon={BookOpen} label="Blog" href="/blog" />
    </div>
  );
};

export default NavMenu;