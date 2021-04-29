import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import Confident from "../elements/icon-2.png";
import Shy from "../elements/icon-3.png";
import Independent from "../elements/icon-4.png";
import Laidback from "../elements/icon-5.png";
import Adaptable from "../elements/icon-1.png";
import Button from '../elements/Button';
import { Flex, Box } from 'rebass';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
        <div className="hero-content">
          <div className="container-xs">
            <h4 className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style={{textAlign: 'center', paddingBottom: "30px"}}>
              Dogs have these 5 major personality types
            </h4>
          </div>
        </div>

        <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">

                <div className="features-tiles-item-header">
                    <Image
                      src={Confident}
                      width={125}
                      height={125}/>
                </div>
                <div className="features-tiles-item-content">
                  <h6 className="m-0 text-sm" style={{paddingTop: "30px"}}>
                    Confident
                  </h6>
                </div>
                
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">

                <div className="features-tiles-item-header">
                    <Image
                      src={Shy}
                      width={125}
                      height={125} />
                </div>
                <div className="features-tiles-item-content">
                  <h6 className="m-0 text-sm" style={{paddingTop: "30px"}}>
                    Shy
                  </h6>
                </div>
                
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">

                <div className="features-tiles-item-header">
                    <Image
                      src={Independent}
                      width={125}
                      height={125} />
                </div>
                <div className="features-tiles-item-content">
                  <h6 className="m-0 text-sm" style={{paddingTop: "30px"}}>
                    Independent
                  </h6>
                </div>
                
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">

                <div className="features-tiles-item-header">
                    <Image
                      src={Laidback}
                      width={125}
                      height={125} />
                </div>
                <div className="features-tiles-item-content">
                  <h6 className="m-0 text-sm" style={{paddingTop: "30px"}}>
                    Laidback
                  </h6>
                </div>
                
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">

                <div className="features-tiles-item-header">
                    <Image
                      src={Adaptable}
                      width={125}
                      height={125} />
                </div>
                <div className="features-tiles-item-content">
                  <h6 className="m-0 text-sm" style={{paddingTop: "30px"}}>
                    Adaptable
                  </h6>
                </div>
                
              </div>
            </div>

        </div>
        <Flex style={{justifyContent: 'center'}} paddingBottom="50px">
          <Button tag="a" color="secondary" wideMobile href="./next">
            Learn More
          </Button>
        </Flex>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;