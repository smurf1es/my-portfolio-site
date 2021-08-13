import { ReactComponent as MainLogo } from '../assets/icons/logo-portfolio.svg';

const Footer = () => {
  return (
    <div className="bg-palette-darkest-gray h-screen/2 md:h-screen/4 md:flex-row w-full flex flex-col-reverse items-center md:justify-between">
      <div className="md:ml-8 md:items-start md:my-0 flex flex-col items-center my-8">
        <MainLogo className="mb-4 w-28 md:w-32" />
        <h2 className="text-palette-dark-gray font-open-sans text-md">
          Copyright 2021 - All rights reserved
        </h2>
      </div>

      <div className="md:text-left md:flex-row md:mr-8 flex flex-col text-center">
        <div className="mb-4">
          <h2 className="font-medium font-open-sans text-white tracking-wider mb-4">
            Contact
          </h2>
          <a
            href="https://linktr.ee/hooger.dev"
            className="text-palette-dark-gray font-open-sans font-light mb-1 hover:underline"
          >
            Linktree
          </a>
        </div>

        <div className="md:ml-12 md:text-left flex flex-col text-center">
          <h2 className="font-medium font-open-sans text-white tracking-wider mb-4">
            Sitemap
          </h2>
          <a
            href="#about"
            className="text-palette-dark-gray font-open-sans font-light mb-1 hover:underline"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-palette-dark-gray font-open-sans font-light mb-1 hover:underline"
          >
            Projects
          </a>
          <a
            href="#technologies"
            className="text-palette-dark-gray font-open-sans font-light hover:underline"
          >
            Technologies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
