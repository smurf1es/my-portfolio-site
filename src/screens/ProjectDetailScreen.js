import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Hero from '../components/project-detail/Hero';
import About from '../components/About';
import Footer from '../components/Footer';

export default function ProjectDetail() {
  const param = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function renderItem() {
    switch (param.name) {
      case 'hulu-clone':
        return (
          <>
            <Hero
              title="Hulu Clone"
              text="Hulu Clone App made with Next JS."
              href="https://hulu-clone-nextjs-flame.vercel.app/"
            />
            <About
              title="Hulu Clone App"
              href="https://github.com/smurf1es/hulu-clone-nextjs"
              text="A React app made with Next JS framework that is basically implementing Hulu original UI layouts."
              image="https://i.ibb.co/X2pHCy4/image-huluclone.png"
            />
          </>
        );
      case 'instagram-clone':
        return (
          <>
            <Hero
              title="Instagram Clone"
              text="Instagram Clone App made with React JS + Firebase."
              href="https://instagram-clone-48fe0.web.app/"
            />
            <About
              title="Instagram Clone App"
              href="https://github.com/smurf1es/instagram-clone"
              text="A React app that has been integrated with Firebase for the data handling and database storage. The layouts look like the original web version of Instagram."
              image="https://i.ibb.co/hcGN3tF/image-instagramclone.png"
            />
          </>
        );
      case 'discord-clone':
        return (
          <>
            <Hero
              title="Discord Clone"
              text="Discord Clone App made with React JS + Firebase."
              href="https://discord-clone-83842.web.app/"
            />
            <About
              title="Discord Clone App"
              href="#source-code-here"
              text="A React app that has been integrated with Firebase for the data handling and database storage. The layouts look like the original web version of Discord."
              image="https://i.ibb.co/SrhWQHk/image-discordclone.png"
            />
          </>
        );
      case 'quotes-generator':
        return (
          <>
            <Hero
              title="Quotes Generator"
              text="Quotes Generator App made with React JS Typescript."
              href="https://lucid-ride-5c9e33.netlify.app/"
            />
            <About
              title="Quotes Generator App"
              href="https://github.com/smurf1es/quote-generator-react-ts"
              text="A React app with Typescript implementation. This app generates random quotes with the data that is provided from a specific API."
              image="https://i.ibb.co/kymhktM/image-quotesgenerator.png"
            />
          </>
        );
      default:
        return null;
    }
  }

  return (
    <>
      {renderItem()}
      <Footer />
    </>
  );
}
