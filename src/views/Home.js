import React from 'react';
import { Flex, Box } from "rebass";
// import sections
import pawsPink from "../components/elements/Group 18.png";
import pawsBlue from "../components/elements/Group 118.png";
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Slideshow from '../components/sections/Slideshow';

const Home = () => {

  return (
    <Box 
      style={{backgroundImage: `url('${pawsPink}'), url('${pawsBlue}')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "115% 115%, -20% 55%"
      }}>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <Slideshow />
    </Box>
  );
}

export default Home;