import PropTypes from 'prop-types';

// https://i.ibb.co/3zRGPbn/image-hero.png

const TechItem = (props) => {
  switch (props.for) {
    case 'next-js':
      return (
        <div className="flex items-center mb-4">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="next-js"
            src="https://i.ibb.co/PMhrWJ3/image-nextjs.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Next JS
          </p>
        </div>
      );
    case 'gatsby-js':
      return (
        <div className="flex items-center mb-4">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="gatsby-js"
            src="https://i.ibb.co/gDkVjN0/image-gatsbyjs.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Gatsby JS
          </p>
        </div>
      );
    case 'express-js':
      return (
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="express-js"
            src="https://i.ibb.co/7g02kDL/image-expressjs.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Express JS
          </p>
        </div>
      );
    case 'tailwind-css':
      return (
        <div className="flex items-center mb-4">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="tailwind-css"
            src="https://i.ibb.co/nzyGDMr/image-tailwindcss.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Tailwind CSS
          </p>
        </div>
      );
    case 'bootstrap-css':
      return (
        <div className="flex items-center mb-4">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="bootstrap-css"
            src="https://i.ibb.co/5xM0QZF/image-bootstrapcss.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Bootstrap CSS
          </p>
        </div>
      );
    case 'sass':
      return (
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="sass"
            src="https://i.ibb.co/sgrdD1M/image-sass.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">Sass</p>
        </div>
      );
    case 'chakra-ui':
      return (
        <div className="flex items-center mb-4">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="chakra-ui"
            src="https://i.ibb.co/yycrtdS/image-chakraui.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Chakra UI
          </p>
        </div>
      );
    case 'material-ui':
      return (
        <div className="flex items-center mb-4">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="material-ui"
            src="https://i.ibb.co/8KhWTzL/image-materialui.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Material UI
          </p>
        </div>
      );
    case 'react-bootstrap':
      return (
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="react-bootstrap"
            src="https://i.ibb.co/26wynZP/image-reactbootstrap.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            React Bootstrap
          </p>
        </div>
      );
    case 'ant-design':
      return (
        <div className="flex items-center mb-4">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="ant-design"
            src="https://i.ibb.co/w0f77Rx/image-antdesign.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Ant Design
          </p>
        </div>
      );
    case 'atomize':
      return (
        <div className="flex items-center mb-4">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="atomize"
            src="https://i.ibb.co/tHRyjSw/image-atomize.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Atomize
          </p>
        </div>
      );
    case 'reactstrap':
      return (
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="w-10 mr-4 md:mr-2"
            alt="reactstrap"
            src="https://i.ibb.co/fpZxDMg/image-reactstrap.png"
          />
          <p className="font-open-sans tracking-wider md:tracking-wide">
            Reactstrap
          </p>
        </div>
      );
    default:
      return null;
  }
};

export default TechItem;

TechItem.propTypes = {
  for: PropTypes.string,
};
