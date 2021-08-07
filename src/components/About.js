import PropTypes from 'prop-types';
import LinkNavigation from './LinkNavigation';

const About = (props) => {
  function renderLink() {
    switch (props.title) {
      case 'Welcome to my Portfolio site!':
        return (
          <LinkNavigation main={true} href="#projects" text="See projects" />
        );
      default:
        return <LinkNavigation href={props.href} text="See source code" />;
    }
  }

  return (
    <main className="bg-palette-gray h-screen/0.5 md:h-screen/1 flex flex-col md:flex-row items-center justify-center w-full">
      <div className="md:w-1/4 md:mb-0 mb-6">
        <span className="w-48 h-48 md:w-80 md:h-80 block">
          <img
            className="pointer-events-none"
            src="https://i.ibb.co/frmdQ5p/about-image.jpg"
            alt="about-img"
          />
        </span>
      </div>

      <div className="md:w-1/3 md:mt-0">
        <div className="mb-3">
          <h2 className="font-bold font-open-sans text-lg text-center md:text-left md:text-xl">
            {props.title}
          </h2>
        </div>

        <div className="mb-6 flex justify-center md:block text-center md:text-left">
          <h5 className="font-light w-4/5 md:w-auto font-montserrat leading-7 tracking-wide">
            {props.text}
          </h5>
        </div>

        <div>{renderLink()}</div>
      </div>
    </main>
  );
};

export default About;

About.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};
