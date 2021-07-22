import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <main className="bg-palette-darkest-gray h-screen/125vh md:h-screen/1 w-full">
      <div className="py-8 md:py-16">
        <h2 className="font-bold font-open-sans text-white text-center text-xl">
          Here are some of my projects:
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center">
        <ProjectCard text="Hulu Clone" />
        <ProjectCard text="Instagram Clone" />
        <ProjectCard text="Discord Clone" />
        <ProjectCard text="Quotes Generator" />
      </div>
    </main>
  );
};

export default Project;
