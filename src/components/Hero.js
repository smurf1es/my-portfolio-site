import Button from './Button';
// import Navbar from './Navbar';

import IconNavigation from './IconNavigation';

const Hero = () => {
  return (
    <div className="bg-palette-darkest-gray relative h-screen/1 w-full flex flex-col justify-center md:flex-row md:items-center md:justify-between">
      {/* <Navbar /> */}
      <section className="flex flex-col justify-center md:block md:ml-8">
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

      {/* <section className="absolute bg-hero-image right-0 left-1/2 top-0 bg-no-repeat bg-cover w-1/2 h-full" /> */}

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
