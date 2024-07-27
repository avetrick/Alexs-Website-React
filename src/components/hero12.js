import React from 'react'

import PropTypes from 'prop-types'

import './hero12.css'

const Hero12 = (props) => {
  return (
    <div className="hero12-header76">
      <div className="hero12-max-width thq-section-max-width">
        <div className="hero12-column thq-section-padding">
          <h1>
            {props.heading1 ?? (
              <fragment>
                <span className="hero12-text7 thq-heading-1">
                  Catchy headline for your website
                </span>
              </fragment>
            )}
          </h1>
          <p>
            {props.content1 ?? (
              <fragment>
                <span className="hero12-text4 thq-body-large">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat.
                </span>
              </fragment>
            )}
          </p>
          <div className="hero12-actions">
            <button className="thq-button-filled hero12-button">
              <span>
                {props.action1 ?? (
                  <fragment>
                    <span className="hero12-text6 thq-body-small">
                      Main action
                    </span>
                  </fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero12-button1">
              <span>
                {props.action2 ?? (
                  <fragment>
                    <span className="hero12-text5 thq-body-small">
                      Secondary action
                    </span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero12-content">
          <div className="hero12-column1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero12-placeholder-image thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero12-placeholder-image1 thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero12-placeholder-image2 thq-img-ratio-1-1"
            />
          </div>
          <div className="hero12-column2">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero12-placeholder-image3 thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero12-placeholder-image4 thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero12-placeholder-image5 thq-img-ratio-1-1"
            />
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero12-placeholder-image6 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero12.defaultProps = {
  image2Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  content1: undefined,
  image1Alt: 'Hero Image',
  action2: undefined,
  image7Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image4Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=800',
  action1: undefined,
  image3Alt: 'Hero Image',
  image5Alt: 'Hero Image',
  image3Src:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=800',
  image5Src:
    'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image7Src:
    'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
  image1Src:
    'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=800',
  heading1: undefined,
  image6Src:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=400',
}

Hero12.propTypes = {
  image2Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
  action2: PropTypes.element,
  image7Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Src: PropTypes.string,
  action1: PropTypes.element,
  image3Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image5Src: PropTypes.string,
  image7Src: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  image6Src: PropTypes.string,
}

export default Hero12
