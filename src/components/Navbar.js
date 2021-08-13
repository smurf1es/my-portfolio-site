import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as BrandIcon } from '../assets/icons/logo-portfolio.svg';
import { ReactComponent as HamburgerIcon } from '../assets/icons/logo-hamburger.svg';
import { ReactComponent as CrossIcon } from '../assets/icons/logo-cross.svg';
import IconNavigation from './IconNavigation';

const Navbar = (props) => {
  const [show, setShow] = useState(false);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      right: 0,
      bottom: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const executeScroll = (type) => {
    if (type === 'hero') scrollToRef(props.refProp.heroRef);
    if (type === 'about') scrollToRef(props.refProp.aboutRef);
  };

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
                to="#about"
                onClick={() => executeScroll('hero')}
              >
                About
              </Link>
            </li>
            <li className="mx-6">
              <Link
                className="hover:underline font-open-sans font-light tracking-wide text-palette-gray"
                to="#project"
                onClick={() => executeScroll('about')}
              >
                Project
              </Link>
            </li>
            <li className="ml-6">
              <Link
                className="hover:underline font-open-sans font-light tracking-wide text-palette-gray"
                to="#contact"
                onClick={props.onClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {show ? (
        <div className="flex flex-col text-center justify-center w-full h-screen/4 bg-palette-main uppercase">
          <span className="hover:bg-black hover:text-palette-gray w-full h-full py-2 border-b-2 border-palette-darkest-gray">
            <Link to="#about" onClick={() => executeScroll('hero')}>
              About
            </Link>
          </span>
          <span className="hover:bg-black hover:text-palette-gray w-full h-full py-2 border-b-2 border-palette-darkest-gray">
            <Link to="#project" onClick={() => executeScroll('about')}>
              Project
            </Link>
          </span>
          <span className="hover:bg-black hover:text-palette-gray w-full h-full py-2 border-b-2 border-palette-darkest-gray">
            <Link to="#contact" onClick={props.onClick}>
              Contact
            </Link>
          </span>
          <span className="hover:bg-black flex justify-evenly hover:text-palette-gray w-full h-full py-2">
            <IconNavigation mobile={true} width="w-6" for="instagram" />
            <IconNavigation mobile={true} width="w-6" for="github" />
            <IconNavigation mobile={true} width="w-6" for="linkedin" />
            <IconNavigation mobile={true} width="w-6" for="twitter" />
          </span>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  onClick: PropTypes.func,
  refProp: PropTypes.object,
};
