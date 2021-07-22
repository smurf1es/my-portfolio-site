import Hero from '../components/Hero';
import About from '../components/About';
import Project from '../components/Project';
import Technology from '../components/Technology';
import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

export default function HomeScreen() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About
        title="Welcome to my Portfolio site!"
        text="Hello there my name is Puruhita. I have been a web developer for around 2 years. As a web developer I am constantly learning new technologies around Javascript and CSS libraries. Glad you visited my site!"
      />
      <Project />
      <Technology />
      <Footer />
    </div>
  );
}
