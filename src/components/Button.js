import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <a
      href={props.href}
      className="bg-palette-main self-center hover:bg-transparent hover:text-white hover:underline transition-colors duration-300 font-open-sans text-md rounded-xl px-8 py-1 z-10"
    >
      {props.text}
    </a>
  );
};

export default Button;

Button.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
};
