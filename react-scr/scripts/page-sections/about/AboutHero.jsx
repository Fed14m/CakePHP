import React from 'react';
import { PureComponent } from 'react'
import { Scrollbars } from 'react-custom-scrollbars';


class AboutHero extends PureComponent {
  constructor(props) {
    super(props);

    //To track the root element
    this.scrollbar = React.createRef();

    
  }

  componentDidMount() {
    this.checkIfScrollEnabled()
  }
  
  checkIfScrollEnabled() {
    setTimeout(() => {
      //check if scroller has value
      const scrollHgt = this.scrollbar.current.getScrollHeight()
      if(scrollHgt > 0) {
        //We have a value, scroll 1px using API and exit
        //console.log('Loaded')
        this.scrollbar.current.scrollTop(1)

      } else {
        //We have to retry
        //console.log('Not Loaded, retrying')
        this.checkIfScrollEnabled()
      }
    }, 500);
  }

  render() {
    return (
      <div ref={this.props.containerRef} className="container-fluid abouthero-container" style={{minHeight: this.props.visibleHeight.actualHeight}}>
        <div className="section-wrapper abouthero-container" style={{height: this.props.visibleHeight.actualHeight}}>
          <div className="row no-gutters">
            <div className="col-xl-7 col-lg-6 col-12 pl-lg-5 pl-2">
              <h1>About BATS</h1>
              <Scrollbars
                  ref={this.scrollbar}
                  className="scroll-window"
                  style={{height: 430}}
                  renderTrackHorizontal={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>}
              >
                <p>
                  The idea for BATS software evolved directly from customer demand. Vehicle transportation brokers were frustrated with stagnation from their existing software providers.
                  There was a general lack of vision from the entrenched software providers who had been in the industry for years, their software solutions were outdated, slow, frequently
                  stopped working, and in many cases not very polished.
                </p>
                <p>
                  Realizing that there is big potential to build innovative tools for vehicle transportation brokers, and the transportation industry in general, we assembled a team
                  of professionals and embarked on the path to change the industry in 2016. Two long years later BATS was released to the first group of customers to great accolades.
                </p>
                <p>
                  Since then, we have continued to improve BATS by adding many features that were requested by our customers, as well as some awesome tools that were cooked up in
                  our innovation lab. We have integrated with third party providers to extend functionality of BATS software, such as integration with the largest credit card payment
                  processing platform Authorize.net, and have created many API solutions to enable our customers to integrate their websites and other tools directly with BATS.
                </p>
                <p>Mobility, automation, productivity and performance have guided our design principles for BATS software.</p>
                <p>
                  Headquartered in Florida, BATS delivers the best software tools to help you grow your transportation businesses. While BATS was initially designed with vehicle
                  transportation brokers in mind, today, BATS is used by transportation brokers in many different verticals.
                </p>
              </Scrollbars>

            </div>
            <div className="col-xl-5 col-lg-6 col-12 pl-2 pb-5">
              <img className="hero-bat" src={require("../../../images/about/big-hero-bat.png")} alt="About BATS"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default AboutHero;