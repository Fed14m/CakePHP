import React from 'react';
import Slider from 'react-animated-slider'

import {testimonialData} from "../../utils/data/HomeSliderData1"

const Testimonial = (props) => {
  return (
      <div ref={props.containerRef} className="container-fluid testimonial-container-bg" style={{minHeight: props.visibleHeight.actualHeight}}>
        <div className="section-wrapper testimonial-container" style={{height: props.visibleHeight.actualHeight}}>
          <div className="row h-100 no-gutters">
            <div className="col-12">
              <Slider infinite="true">

                {
                  testimonialData.map((feedback, i) => {
                    return (
                        <div className="testimonial-wrapper" key={i}>
                          <div className="row no-gutters">
                            <div className="col-lg-1 col-md-2 col-12">
                              <img className="bat-logo" src={require('../../../images/contact-us/bat-logo.png')} alt="BATS.rocks"/>
                            </div>
                            <div className="col-lg-11 col-md-10 col-12">
                              <h3 className="testimonial-head">What People Are Saying About BATS</h3>
                            </div>  
                          </div>
                          <div>
                            <img className="feedback-star" src={require('../../../images/hm-testimonial/yellow-star.png')} alt="Feedback Star"/>
                            <img className="feedback-star" src={require('../../../images/hm-testimonial/yellow-star.png')} alt="Feedback Star"/>
                            <img className="feedback-star" src={require('../../../images/hm-testimonial/yellow-star.png')} alt="Feedback Star"/>
                            <img className="feedback-star" src={require('../../../images/hm-testimonial/yellow-star.png')} alt="Feedback Star"/>
                            <img className="feedback-star" src={require('../../../images/hm-testimonial/yellow-star.png')} alt="Feedback Star"/>
                          </div>
                          <div className="feedback">
                            <div>{feedback.feedback}</div>
                            <img className="quote" src={require('../../../images/hm-testimonial/quote.png')} alt="Quote"/>
                          </div>
                          <div className="feedback-by">{feedback.feedbackBy}</div>
                        </div>
                    )
                  })
                }

              </Slider>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Testimonial;