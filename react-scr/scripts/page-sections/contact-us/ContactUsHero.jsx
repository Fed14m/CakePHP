import * as React from 'react'
import { PureComponent } from 'react'

import batLogoBigWhite from "../../../images/contact-us/bat-logo-big-white.png"

class ContactUsHero extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div ref={this.props.containerRef} className="container-fluid contacthero-container-bg" style={{minHeight: this.props.visibleHeight.actualHeight}}>
          <div className="section-wrapper contacthero-container" style={{minHeight: this.props.visibleHeight.actualHeight}}>
            <div className="row">
              <div className="col-12">
                <h1>Other Ways To Contact Us</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">

                <div className="address-wrap">
                  <h3>Sales and Operations:</h3>
                  <div className="address-line">Phone: 800-401-5933</div>
                  <div className="address-line">Email: info@batscrm.com</div>
                </div>

                <div className="address-wrap">
                  <h3>Technical Support:</h3>
                  <div className="address-line">Phone: 833-773-7200</div>
                  <div className="address-line">Email: support@batscrm.com</div>
                </div>

                <div className="address-wrap">
                  <h3>Mailing Address:</h3>
                  <div className="address-line">OneVTMS / BATS</div>
                  <div className="address-line">102 NE 2nd St. #925</div>
                  <div className="address-line">Boca Raton, FL 33432</div>
                  <div className="address-line">USA</div>
                </div>

              </div>
              <div className="col-lg-6 col-12">
                <img className="bat-logo-white" src={batLogoBigWhite} alt="BATS Contact Us"/>
              </div>
            </div>
          </div>
        </div>
    )  
  }
}

//export default ContactUsHero;
export default ContactUsHero