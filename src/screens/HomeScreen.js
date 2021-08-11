import { useRef, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Technology from '../components/Technology';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ContactModal from '../components/ContactModal';

export default function HomeScreen() {
  const [showContact, setShowContact] = useState(false);

  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Navbar onClick={() => setShowContact(!showContact)} />
      {showContact ? (
        <ContactModal show={() => setShowContact(!showContact)} />
      ) : null}
      <Hero refProp={heroRef} />
      <About
        title="Welcome to my Portfolio site!"
        text="Hello there my name is Puruhita. I have been a web developer for around 2 years. As a web developer I am constantly learning new technologies around Javascript and CSS libraries. Glad you visited my site!"
        image="https://i.ibb.co/frmdQ5p/about-image.jpg"
        refProp={{ heroRef, aboutRef }}
      />
      <Project refProp={aboutRef} />
      <Technology />
      <Footer />
    </>
  );
}
