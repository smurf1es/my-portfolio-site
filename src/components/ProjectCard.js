import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  function renderImage() {
    switch (props.text) {
      case 'Hulu Clone':
        return (
          <Link to="/project/hulu-clone">
            <img
              className="w-40 h-40 object-cover"
              alt="hulu-clone-project"
              src="https://i.ibb.co/X2pHCy4/image-huluclone.png"
            />
          </Link>
        );
      case 'Instagram Clone':
        return (
          <Link to="/project/instagram-clone">
            <img
              className="w-40 h-40 object-cover"
              alt="instagram-clone-project"
              src="https://i.ibb.co/hcGN3tF/image-instagramclone.png"
            />
          </Link>
        );
      case 'Discord Clone':
        return (
          <Link to="/project/discord-clone">
            <img
              className="w-40 h-40 object-cover"
              alt="discord-clone-project"
              src="https://i.ibb.co/SrhWQHk/image-discordclone.png"
            />
          </Link>
        );
      case 'Quotes Generator':
        return (
          <Link to="/project/quotes-generator">
            <img
              className="w-40 h-40 object-cover"
              alt="quotes-generator-project"
              src="https://i.ibb.co/kymhktM/image-quotesgenerator.png"
            />
          </Link>
        );
      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col items-center md:w-1/6 md:my-0 my-3">
      <div className="mb-4">{renderImage()}</div>

      <div>
        <h5 className="text-white uppercase font-bold font-open-sans tracking-wider md:tracking-wide">
          {props.text}
        </h5>
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  text: PropTypes.string,
};
