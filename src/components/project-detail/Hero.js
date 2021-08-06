import Button from '../Button';

import HuluVideo from '../../assets/videos/video-huluclone.mp4';
import InstagramClone from '../../assets/videos/video-instagramclone.mp4';
import DiscordClone from '../../assets/videos/video-discordclone.mp4';
import QuotesGenerator from '../../assets/videos/video-quotesgenerator.mp4';

const Hero = (props) => {
  function renderVideo() {
    switch (props.title) {
      case 'Hulu Clone':
        return (
          <video
            autoPlay={true}
            muted={true}
            className="absolute w-full bottom-0 filter brightness-50"
            src={HuluVideo}
          />
        );
      case 'Instagram Clone':
        return (
          <video
            autoPlay={true}
            muted={true}
            className="absolute w-full bottom-0 filter brightness-50"
            src={InstagramClone}
          />
        );
      case 'Discord Clone':
        return (
          <video
            autoPlay={true}
            muted={true}
            className="absolute w-full bottom-0 filter brightness-50"
            src={DiscordClone}
          />
        );
      case 'Quotes Generator':
        return (
          <video
            autoPlay={true}
            muted={true}
            className="absolute w-full bottom-0 filter brightness-50 z-0"
            src={QuotesGenerator}
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
