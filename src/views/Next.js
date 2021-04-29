import React from 'react';
import { Flex, Box } from "rebass";
// import sections
import pawsPink from "../components/elements/Group 18.png";
import pawsBlue from "../components/elements/Group 118.png";
import Button from '../components/elements/Button';

const Home = () => {

  return (
    <Box 
      style={{backgroundImage: `url('${pawsPink}'), url('${pawsBlue}')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "115% 115%, -20% 55%"
      }}>
      <Flex style={{justifyContent: 'center'}} paddingTop="100px">
        <Box textAlign="center">
          <h1>This page is getting updated :)</h1>
          <p>Please check back later</p>
          <div data-reveal-delay="600">
              <Button tag="a" color="primary" wideMobile href="./">
                Back to Home
              </Button>
          </div>
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;