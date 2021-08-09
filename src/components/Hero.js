import Button from './Button';
import IconNavigation from './IconNavigation';

import { ReactComponent as HTMLIcon } from '../assets/icons/logo-html.svg';
import { ReactComponent as CSSIcon } from '../assets/icons/logo-css.svg';
import { ReactComponent as JSIcon } from '../assets/icons/logo-js.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/logo-react.svg';

const Hero = (props) => {
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      right: 0,
      bottom: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const executeScroll = () => {
    scrollToRef(props.refProp);
  };

  return (
    <div className="bg-palette-darkest-gray relative h-screen/1 w-full flex flex-col justify-center md:flex-row md:items-center md:justify-between">
      <section className="md:hidden block mx-auto">
        <span className="block w-52 h-52">
          <img alt="hero-img" src="https://i.ibb.co/d6zWdnn/avatar-hero.png" />
        </span>
      </section>

      <section className="flex flex-col justify-center md:block md:ml-8 md:py-0 z-10 pt-5 pb-12">
        <h2 className="text-3xl text-center md:text-left md:text-5xl font-black font-montserrat text-palette-gray tracking-tight pb-2 md:pb-4">
          Pahuger Puruhita Baiq
        </h2>
        <p className="text-xl text-center md:text-left md:text-2xl text-palette-gray font-light font-montserrat pb-2 md:pb-4 tracking-wide">
          React Developer from <span className="font-bold">Indonesia.</span>
        </p>
        <p className="text-lg text-center md:text-left md:text-xl text-palette-gray pb-4 md:pb-10 italic font-light">
          "The purpose of our lives is to be happy".
        </p>
        <Button onClick={executeScroll} href="#about" text="See More" />
      </section>

      <section className="flex justify-center items-center absolute w-full h-90 md:w-950 md:h-125 bg-white rounded-full shadow-lg z-10 overflow-x-hidden overflow-y-hidden top-90% md:top-85% md:left-20%">
        <span className="mx-6 md:mx-12">
          <HTMLIcon className="w-10 md:w-20" />
        </span>
        <span className="mx-6 md:mx-12">
          <CSSIcon className="w-10 md:w-20" />
        </span>
        <span className="mx-6 md:mx-12">
          <JSIcon className="w-10 md:w-20" />
        </span>
        <span className="mx-6 md:mx-12">
          <ReactIcon className="w-10 md:w-20" />
        </span>
      </section>

      <section className="absolute left-1/2 overflow-hidden h-screen/0.5 bottom-0 pointer-events-none md:block hidden">
        <img
          src="https://i.ibb.co/7vr71yy/hero-image.png"
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
  );
};

export default Hero;
