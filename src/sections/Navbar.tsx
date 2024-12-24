import { useState } from "react";

import { navLinks } from "../constants/index.ts";

// NavItems component
const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map(({ id, href, name }) => (
      <li key={id} className="nav-li">
        <a href={href} className="nav-li_a" onClick={onClick}>
          {name}
        </a>
      </li>
    ))}
  </ul>
);

// Navbar component
export const Navbar = () => {
  // State to toggle the sidebar
  const [isOpen, setIsOpen] = useState(false);

  // Functions to toggle and close the sidebar
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-semibold text-xl hover:text-white transition-colors"
          >
            Moin ud din
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};
