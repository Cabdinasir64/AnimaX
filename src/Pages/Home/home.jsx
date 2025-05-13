import { useState } from "react";
import Navbar from "../../Components/Navbar.jsx";
import Hero from './components/hero.jsx';
import About from './components/about.jsx'

const Home = () => {
  const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);

  return (
    <>
      <Navbar onAnimationComplete={() => setHeroAnimationStarted(true)} />
      <Hero startAnimation={heroAnimationStarted} />
      <About />
    </>
  );
};

export default Home;