import PropTypes from 'prop-types';

import { ReactComponent as IGIcon } from '../assets/icons/logo-instagram.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/logo-github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/logo-linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/logo-twitter.svg';

const IconNavigation = (props) => {
  switch (props.for) {
    case 'instagram':
      return (
        <a href="https://instagram.com/pahugerpb_">
          <IGIcon className="w-8 mb-2 hover:opacity-75 cursor-pointer" />
        </a>
      );
    case 'github':
      return (
        <a href="https://github.com/smurf1es">
          <GithubIcon className="w-8 mb-2 hover:opacity-75 cursor-pointer" />
        </a>
      );
    case 'linkedin':
      return (
        <a href="https://www.linkedin.com/in/pahuger-puruhita-baiq-825675170/">
          <LinkedInIcon className="w-8 mb-2 hover:opacity-75 cursor-pointer" />
        </a>
      );
    case 'twitter':
      return (
        <a href="https://www.twitter.com/pahuger_pb">
          <TwitterIcon className="w-8 hover:opacity-75 cursor-pointer" />
        </a>
      );
    default:
      return null;
  }
};

export default IconNavigation;

IconNavigation.defaultProps = {
  for: '',
};

IconNavigation.propTypes = {
  for: PropTypes.string.isRequired,
};
