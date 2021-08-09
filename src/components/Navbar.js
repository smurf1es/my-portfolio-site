import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as BrandIcon } from '../assets/icons/logo-portfolio.svg';
import { ReactComponent as HamburgerIcon } from '../assets/icons/logo-hamburger.svg';
import { ReactComponent as CrossIcon } from '../assets/icons/logo-cross.svg';

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="bg-palette-darkest-gray flex w-full items-center justify-between h-14 px-8 py-4">
        <div>
          <BrandIcon className="w-32 md:w-brand" />
        </div>

        <div>
          <span className="block md:hidden" onClick={() => setShow(!show)}>
            {!show ? (
              <HamburgerIcon className="w-6" />
            ) : (
              <CrossIcon className="w-6" />
            )}
          </span>
          <ul className="text-white md:flex items-center hidden">
            <li className="mx-6">
              <Link
                className="hover:underline font-open-sans font-light tracking-wide text-palette-gray"
                to="#service"
                onClick={() => alert('This site feature is on the way..')}
              >
                Service
              </Link>
            </li>
            <li className="mx-6">
              <Link
                className="hover:underline font-open-sans font-light tracking-wide text-palette-gray"
                to="#project"
                onClick={() => alert('This site feature is on the way..')}
              >
                Project
              </Link>
            </li>
            <li className="ml-6">
              <Link
                className="hover:underline font-open-sans font-light tracking-wide text-palette-gray"
                to="contact"
                onClick={() => alert('This site feature is on the way..')}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {show ? (
        <div className="flex flex-col text-center justify-center w-full h-screen/5 bg-palette-main">
          <span className="hover:bg-black hover:text-palette-gray w-full h-full py-2">
            <Link to="#">Service</Link>
          </span>
          <span className="hover:bg-black hover:text-palette-gray w-full h-full py-2">
            <Link to="#">Project</Link>
          </span>
          <span className="hover:bg-black hover:text-palette-gray w-full h-full py-2">
            <Link to="#">Contact</Link>
          </span>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
