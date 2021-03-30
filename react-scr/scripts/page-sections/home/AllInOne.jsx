import React from 'react';
import { PureComponent } from 'react'

import classnames from 'classnames'

//Data
import {allInOneData} from "../../utils/data/AllInOneData"

class AllInOne extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      features: allInOneData,
      selectedIndex: 0
    };
  }
  
  expandClicked(index) {
    
    //First update state for index
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    return (
      <div ref={this.props.containerRef} className="container-fluid" style={{minHeight: this.props.visibleHeight.actualHeight}}>
        <div className="section-wrapper all-in-one">
          <div className="row">
            <div className="col-lg-6 col-12">
              <div className="feature-wrap">
                <h1>BATS = All-in-one</h1>

                {
                  this.state.features.map((aioItem, i) => {
                    return (
                        <div className={classnames({"feature-block": true, "expanded": this.state.selectedIndex === i})} key={i}>
                          <div className="row no-gutters">
                            <div className="col-1">
                              <img src={require("../../../images/hm-allinone/" + aioItem.icon)} alt="Electronic Signature"/>
                            </div>
                            <div className="col-10">
                              <h3>{aioItem.heading}</h3>
                              <p>{aioItem.description}</p>
                            </div>
                            <div className="col-1">
                              <img className="expand-icon" src={require('../../../images/hm-allinone/plus.svg')} onClick={() => {this.expandClicked(i)}} alt="Expand"/>
                              <img className="collapse-icon" src={require('../../../images/hm-allinone/minus.svg')} alt="Collapse"/>
                            </div>
                          </div>
                        </div>
                    )
                  })
                }

              </div>
            </div>
            <div className="col-lg-6 col-12 align-self-center d-lg-block d-none">
              <img className="feature-image-wide align-middle" src={require("../../../images/hm-allinone/" + this.state.features[this.state.selectedIndex].desktopImage)} alt="Feature Image"/>
              {
                //Let's try to pre fetch the main images
                this.state.features.map((aioItem, i) => {
                  return (
                      <img key={i} style={{display: "none"}} className="feature-image-mobile" src={require("../../../images/hm-allinone/" + aioItem.desktopImage)} alt="Feature Image"/>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AllInOne;