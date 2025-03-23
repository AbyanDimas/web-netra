import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavButton from "./NavButton";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLogo />
        <NavMenu />
        <NavButton />
      </div>
    </nav>
  );
};

export default Navbar;
