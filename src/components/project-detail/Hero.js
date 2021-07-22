import Button from '../Button';

const Hero = (props) => {
  function renderVideo() {
    switch (props.title) {
      case 'Hulu Clone':
        return (
          <iframe
            title="Hulu Clone"
            className="absolute w-full h-screen/1 top-0"
            src="https://www.youtube.com/embed/ipc2P9Uv8Q0?mute=1&loop=1&controls=0&autoplay=1"
          />
        );
      case 'Instagram Clone':
        return (
          <iframe
            title="Instagram Clone"
            className="absolute w-full h-screen/1 top-0"
            src="https://www.youtube.com/embed/tk48tf8uZpg?mute=1&loop=1&controls=0&autoplay=1"
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="bg-palette-darkest-gray relative h-screen/1 w-full flex flex-col justify-center items-center">
      {renderVideo()}
      <h2 className="md:text-5xl w-3/4 text-3xl text-center uppercase font-black font-montserrat text-palette-gray tracking-tight pb-4 z-10">
        {props.title}
      </h2>
      <p className="md:text-2xl w-3/4 text-xl text-center text-palette-gray font-light font-montserrat pb-8 tracking-wide z-10">
        {props.text}
      </p>
      <Button href={props.href} text="Visit Site" />
    </div>
  );
};

export default Hero;
