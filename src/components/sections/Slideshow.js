import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import { Box, Flex } from 'rebass';
import { Slide } from 'react-slideshow-image';
import Dog1 from "../elements/dog1.png";
import Dog2 from "../elements/dog2.png";
import Dog3 from "../elements/dog3.png";
import Dog4 from "../elements/dog4.png";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Slideshow = ({
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

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
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
      <div className="container" paddingBottom="50px">
        <Box>
            <Slide easing="ease">
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${Dog1})`, 
                backgroundSize: "800px 600px",
                height:"600px", 
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center"}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${Dog2})`, 
                backgroundSize: "800px 600px",
                height:"600px", 
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center"}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${Dog3})`, 
                backgroundSize: "800px 600px",
                height:"600px", 
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center"}}>
                </div>
            </div>
            <div className="each-slide">
                <div style={{'backgroundImage': `url(${Dog4})`, 
                backgroundSize: "800px 600px",
                height:"600px", 
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "center"}}>
                </div>
            </div>
            </Slide>
        </Box>
        <Flex paddingBottom="50px"/>
      </div>
    </section>
  );
}

Slideshow.propTypes = propTypes;
Slideshow.defaultProps = defaultProps;

export default Slideshow;