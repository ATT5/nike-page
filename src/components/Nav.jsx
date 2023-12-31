import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = (prop) => {
  const openHandler = () => {
    prop.onClick();
  };

  return (
    <header className="padding-x py-8 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="font-montserrat leading-normal text-lg text-slate-gra cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            className="cursor-pointer"
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={openHandler}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
