import PropTypes from 'prop-types';

import { ReactComponent as IGIcon } from '../assets/icons/logo-instagram.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/logo-github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/icons/logo-linkedin.svg';
import { ReactComponent as TwitterIcon } from '../assets/icons/logo-twitter.svg';

import { ReactComponent as IGIconDark } from '../assets/icons/logo-instagram-dark.svg';
import { ReactComponent as GithubIconDark } from '../assets/icons/logo-github-dark.svg';
import { ReactComponent as LinkedInIconDark } from '../assets/icons/logo-linkedin-dark.svg';
import { ReactComponent as TwitterIconDark } from '../assets/icons/logo-twitter-dark.svg';

const IconNavigation = (props) => {
  switch (props.for) {
    case 'instagram':
      return (
        <>
          {props.mobile ? (
            <a href="https://instagram.com/pahugerpb_">
              <IGIconDark
                className={`${props.width} mb-2 hover:opacity-75 cursor-pointer`}
              />
            </a>
          ) : (
            <a href="https://instagram.com/pahugerpb_">
              <IGIcon
                className={`${props.width} mb-2 hover:opacity-75 cursor-pointer`}
              />
            </a>
          )}
        </>
      );
    case 'github':
      return (
        <>
          {props.mobile ? (
            <a href="https://github.com/smurf1es">
              <GithubIconDark
                className={`${props.width} mb-2 hover:opacity-75 cursor-pointer`}
              />
            </a>
          ) : (
            <a href="https://github.com/smurf1es">
              <GithubIcon
                className={`${props.width} mb-2 hover:opacity-75 cursor-pointer`}
              />
            </a>
          )}
        </>
      );
    case 'linkedin':
      return (
        <>
          {props.mobile ? (
            <a href="https://www.linkedin.com/in/pahuger-puruhita-baiq-825675170/">
              <LinkedInIconDark
                className={`${props.width} mb-2 hover:opacity-75 cursor-pointer`}
              />
            </a>
          ) : (
            <a href="https://www.linkedin.com/in/pahuger-puruhita-baiq-825675170/">
              <LinkedInIcon
                className={`${props.width} mb-2 hover:opacity-75 cursor-pointer`}
              />
            </a>
          )}
        </>
      );
    case 'twitter':
      return (
        <>
          {props.mobile ? (
            <a href="https://www.twitter.com/pahuger_pb">
              <TwitterIconDark
                className={`${props.width} hover:opacity-75 md:mt-0 mt-1 cursor-pointer`}
              />
            </a>
          ) : (
            <a href="https://www.twitter.com/pahuger_pb">
              <TwitterIcon
                className={`${props.width} hover:opacity-75 md:mt-0 mt-1 cursor-pointer`}
              />
            </a>
          )}
        </>
      );
    default:
      return null;
  }
};

export default IconNavigation;

IconNavigation.defaultProps = {
  for: '',
  width: 'w-8',
  mobile: false,
};

IconNavigation.propTypes = {
  for: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  mobile: PropTypes.bool.isRequired,
};
