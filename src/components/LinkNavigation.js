import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as IconArrow } from '../assets/icons/icon-arrow.svg';

const LinkNavigation = (props) => {
  return (
    <div className="flex w-full justify-center md:justify-start">
      <Link
        className="text-palette-blue hover:text-blue-900 hover:underline transition-colors duration-150"
        style={props.main ? { width: '6rem' } : { width: '7.8rem' }}
        to={props.href}
      >
        {props.text}{' '}
      </Link>
      <IconArrow className="w-4" style={{ marginTop: 5 }} />
    </div>
  );
};

export default LinkNavigation;

LinkNavigation.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  main: PropTypes.bool,
};
