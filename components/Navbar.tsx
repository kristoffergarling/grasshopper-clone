import { useState } from "react";
import Image from "next/image";
import mobileLogo from "../assets/images/mobileLogo.svg";
import mobileMenuLogo from "../assets/images/mobileMenuLogo.svg";
import hamburgerMenu from "../assets/images/hamburgerMenu.svg";
import xIcon from "../assets/images/xIcon.svg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-5 flex justify-between">
      <Image src={mobileLogo} alt="mobile logo" />
      {!menuOpen && (
        <Image
          src={hamburgerMenu}
          alt="hamburger menu"
          onClick={handleMenuOpen}
        />
      )}

      {menuOpen && (
        <div className="fixed left-0 top-0 w-[100%] h-full bg-[#00324b]">
          <div className="flex p-4 justify-between">
            <Image src={mobileMenuLogo} alt="mobile menu logo" />
            <Image
              src={xIcon}
              alt="x icon"
              height="30"
              onClick={handleMenuOpen}
            />
          </div>

          <ul className="pt-12 p-4">
            <li className="p-4 text-2xl font-semibold text-gray-400 hover:text-[#002C43] cursor-pointer">
              What is Coding
            </li>
            <li className="p-4 text-2xl font-semibold text-gray-400 hover:text-[#002C43] cursor-pointer">
              Curriculum
            </li>
            <li className="p-4 text-2xl font-semibold text-gray-400 hover:text-[#002C43] cursor-pointer">
              Flossary
            </li>
            <li className="p-4 text-2xl font-semibold text-gray-400 hover:text-[#002C43] cursor-pointer">
              About Us
            </li>
            <li className="p-4 text-2xl font-semibold text-gray-400 hover:text-[#002C43] cursor-pointer">
              FAQ
            </li>
            <button className="bg-[#45c14e]">Get the App</button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
