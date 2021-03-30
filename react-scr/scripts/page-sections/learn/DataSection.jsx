import React from 'react';
import classnames from 'classnames'

import {learnData} from '../../utils/data/LearnData'

const DataSection = (props) => {
  return (
    <React.Fragment>
      {
        learnData.map((dataNode, i) => {
          return (
            <div id={dataNode.anchorLinks} className="container-fluid" style={{minHeight: props.visibleHeight.height}} key={i}>
              <div className="section-wrapper all-in-one learn-data" style={{minHeight: props.visibleHeight.actualHeight}}>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <div className="feature-wrap">
                      <div>
                        <h1>{dataNode.section}</h1>
                        <button className="back-button d-lg-none d-block" onClick={() => goBack()}>
                          <img src={require("../../../images/learn/back-icon.png")} alt="Back"/>&nbsp;
                          Back
                        </button>
                      </div>

                      {
                        dataNode.features.map((feature, j) => {
                          return (
                              <div className={classnames({"feature-block": true, "last-block": (dataNode.features.length - 1 == j)})} key={j}>
                                <div className="row no-gutters">
                                  <div className="col-1">
                                    <img src={require("../../../images/learn/" + feature.icon)} alt="Electronic Signature"/>
                                  </div>
                                  <div className="col-11">
                                    <h3>{feature.heading}</h3>
                                    <p>{feature.desc}</p>
                                  </div>
                                </div>
                              </div>
                          )
                        })
                      }

                      <button className="back-button d-lg-block d-none" onClick={() => goBack()}>
                        <img src={require("../../../images/learn/back-icon.png")} alt="Back"/>&nbsp;
                        Back
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 align-self-center">
                    <img className="feature-image-wide align-middle" src={require("../../../images/learn/" + dataNode.wideImage)} alt="Feature Image"/>
                  </div>
                </div>
              </div>
            </div>
          ) 
        })    
      }
    </React.Fragment>
  )
};

const goBack = () => {
  //Call scroller
  document.querySelector('#learn-nav').scrollIntoView({
    behavior: 'smooth'
  });
}

export default DataSection;