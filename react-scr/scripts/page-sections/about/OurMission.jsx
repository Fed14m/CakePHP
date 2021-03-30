import React from 'react';
import { PureComponent } from 'react'
import Slider from 'react-animated-slider'

import {missionData} from '../../utils/data/AboutData'

class OurMission extends PureComponent {

  constructor(props) {
    super(props);

  }

  render() {
    return (
        <div ref={this.props.containerRef} className="container-fluid mission-container-bg" style={{minHeight: this.props.visibleHeight.actualHeight}}>
          <div className="section-wrapper mission-container" style={{height: this.props.visibleHeight.actualHeight}}>
            <div className="row h-100 no-gutters">
              <div className="col-12">
                <Slider infinite="true">
                  {
                    missionData.map((mission, i) => {
                      const totSlide = missionData.length
                      const currSlide = (i + 1 < 10) ? "0" + (i + 1) : i + 1
                      const totSlideFormatted = (totSlide < 10) ? "0" + totSlide : totSlide

                      //Let's calculate the Next partial slide id
                      /*
                       let partialSlideId = 0;
                       if(i + 1 < totSlide) {
                       partialSlideId = i + 1
                       } else {
                       partialSlideId = 0
                       }


                       //Based on that calculate next slide data
                       const parSlide = (partialSlideId + 1 < 10) ? "0" + (partialSlideId + 1) : partialSlideId + 1
                       */

                      return (
                          <div className="abt-slide" key={i}>
                            <div className="slide-ctr">{currSlide} / {totSlideFormatted}</div>
                            <h1>{mission.heading}</h1>
                            <p>{mission.desc}</p>
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
  }
}

export default OurMission;