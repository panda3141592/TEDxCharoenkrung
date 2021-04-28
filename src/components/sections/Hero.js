import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import { Flex, Box } from "rebass";
import dogs from "../elements/hero.png";
import pawsPink from "../elements/Group 18.png";

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <Flex width="100%" paddingBottom="70px">
          <Box height="300px" width="300px" style={{borderBottomLeftRadius:"100px", minWidth: "400px" }}>
            <div style={{padding:"50px", textAlign: "left"}}>
              <h3 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                What's meant to be will always find a way
              </h3>
              <div >
                <div className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{fontSize:"15px"}}>
                  PawsUp help you to find the best partner for your dearest fluffy friend
                </div>
                <div data-reveal-delay="600">
                    <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                      Find A Match
                    </Button>
                </div>
              </div>
            </div>
          </Box>
          <Flex width="100%"
            css={{
              display: "flex",
            }} 
            height="450px" 
            backgroundColor="#FEE7E6" 
            style={{borderBottomLeftRadius:"100px", 
            background: "linear-gradient(rgba(254,231,231,255),rgba(250,202,205,255))", 
            minWidth: "400px"}}
            >
              <Box width="100%" 
              style={{borderBottomLeftRadius:"100px", 
              backgroundImage: `url('${dogs}'), url('${pawsPink}')`, 
              backgroundPositionY: "50px, top",
              backgroundSize: "500px", 
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "center, right",
            }
              }>
              </Box>
          </Flex>
      </Flex>
    </section>


  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;