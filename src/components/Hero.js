import Button from './Button';
import Navbar from './Navbar';
import IconNavigation from './IconNavigation';

import { ReactComponent as HTMLIcon } from '../assets/icons/logo-html.svg';
import { ReactComponent as CSSIcon } from '../assets/icons/logo-css.svg';
import { ReactComponent as JSIcon } from '../assets/icons/logo-js.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/logo-react.svg';

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="bg-palette-darkest-gray relative h-screen/1 w-full flex flex-col justify-center md:flex-row md:items-center md:justify-between">
        <section className="flex flex-col justify-center md:block md:ml-8 z-10">
          <h2 className="text-3xl text-center md:text-left md:text-5xl font-black font-montserrat text-palette-gray tracking-tight pb-4">
            Pahuger Puruhita Baiq
          </h2>
          <p className="text-xl text-center md:text-left md:text-2xl text-palette-gray font-light font-montserrat pb-4 tracking-wide">
            React Developer from <span className="font-bold">Indonesia.</span>
          </p>
          <p className="text-lg text-center md:text-left md:text-xl text-palette-gray pb-10 italic font-light">
            "The purpose of our lives is to be happy".
          </p>
          <Button href="#about" text="See More" />
        </section>

        <section className="flex justify-center items-center absolute w-full h-110 md:w-950 md:h-125 bg-white rounded-full shadow-lg z-10 overflow-x-hidden top-85% md:left-20%">
          <span className="mx-6 md:mx-12">
            <HTMLIcon className="w-12 md:w-20" />
          </span>
          <span className="mx-6 md:mx-12">
            <CSSIcon className="w-12 md:w-20" />
          </span>
          <span className="mx-6 md:mx-12">
            <JSIcon className="w-12 md:w-20" />
          </span>
          <span className="mx-6 md:mx-12">
            <ReactIcon className="w-12 md:w-20" />
          </span>
        </section>

        <section className="absolute left-1/2 overflow-hidden h-screen/0.5 bottom-0 pointer-events-none">
          <img
            src="https://i.ibb.co/3zRGPbn/image-hero.png"
            alt="portfolio-hero"
          />
        </section>

        <section className="mr-8 hidden md:block">
          <IconNavigation for="instagram" />
          <IconNavigation for="github" />
          <IconNavigation for="linkedin" />
          <IconNavigation for="twitter" />
        </section>
      </div>
    </>
  );
};

export default Hero;
