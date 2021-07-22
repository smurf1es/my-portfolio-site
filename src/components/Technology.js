import TechItem from './TechItem';

const Technology = () => {
  return (
    <div className="bg-palette-gray h-screen/125vh md:h-screen/1 w-full flex flex-col items-center">
      <div className="py-16">
        <h2 className="font-bold font-open-sans text-xl">
          Technologies I have worked with:
        </h2>
      </div>

      <div className="bg-palette-main flex flex-col md:items-center justify-center w-4/5 h-3/4 shadow-md md:w-3/5 md:h-1/2 md:flex-row">
        <div className="w-3/5 mr-0 ml-6 md:w-1/5 md:ml-0 md:mr-4">
          <TechItem for="next-js" />
          <TechItem for="gatsby-js" />
          <TechItem for="express-js" />
        </div>

        <div className="w-3/5 mr-0 ml-6 md:w-1/5 md:ml-0 md:mr-4">
          <TechItem for="tailwind-css" />
          <TechItem for="bootstrap-css" />
          <TechItem for="sass" />
        </div>

        <div className="w-3/5 mr-0 ml-6 md:w-1/5 md:ml-0 md:mr-4">
          <TechItem for="chakra-ui" />
          <TechItem for="material-ui" />
          <TechItem for="react-bootstrap" />
        </div>

        <div className="w-3/5 mr-0 ml-6 md:w-1/5 md:ml-0 md:mr-4">
          <TechItem for="ant-design" />
          <TechItem for="atomize" />
          <TechItem for="reactstrap" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
