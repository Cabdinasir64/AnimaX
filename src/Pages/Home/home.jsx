import { useState } from "react";
import Navbar from "../../Components/Navbar.jsx";
import Hero from './components/hero.jsx';

const Home = () => {
  const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);

  return (
    <>
      <Navbar onAnimationComplete={() => setHeroAnimationStarted(true)} />
      <Hero startAnimation={heroAnimationStarted} />
    </>
  );
};

export default Home;