import { useState } from "react";
import Navbar from "../../Components/Navbar.jsx";
import Hero from './components/hero.jsx';
import About from './components/about.jsx'
import Service from './components/service.jsx'
import Feature from './components/feature.jsx'
import Ads from './components/ads.jsx'

const Home = () => {
  const [heroAnimationStarted, setHeroAnimationStarted] = useState(false);

  return (
    <>
      <Navbar onAnimationComplete={() => setHeroAnimationStarted(true)} />
      <Hero startAnimation={heroAnimationStarted} />
      <About />
      <Service />
      <Feature />
      <Ads />
    </>
  );
};

export default Home;