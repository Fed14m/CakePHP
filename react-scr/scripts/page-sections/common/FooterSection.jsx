import React from 'react';

const FooterSection = (props) => {
  let footerCustomClasses = "container-fluid footer-container-bg"
  footerCustomClasses = (props.extraClass) ? footerCustomClasses + " " + props.extraClass : footerCustomClasses 
  
  //Copyright year
  const currYr = new Date().getFullYear()

  return (
      <div ref={props.containerRef} className={footerCustomClasses} style={{minHeight: props.visibleHeight.actualHeight}}>
        <div className="section-wrapper footer-container" >
          <div className="row">
            <div className="col-xl-6 col-lg-5 col-12">
              <div className="connect-wrap">
                <h1>Connect</h1>
                <div>
                  <a className="social-icons" href=" https://vimeo.com/batscrm" target="_blank" title="Training Videos"><img className="social-icons" src={require('../../../images/footer/vimeo.png')} /></a>
                  <a className="social-icons" href="https://support.batscrm.com/portal/en/home" target="_blank" title="BATS Support"><img src={require('../../../images/footer/bat-diamond.png')} /></a>
                  <a className="social-icons" href="tel:800-401-5933" title="BATS Phone"><img className="social-icons" src={require('../../../images/footer/phn-diamond.png')} /></a>
                </div>
                <p className="copyright d-lg-block d-none">&copy; Copyright {currYr} bats.rocks. All rights reserved.</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-12">
              <div className="explore-wrap">
                <div className="row">
                  <div className="col-12">
                    <div >
                      <h1>Explore</h1>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <h3>BATS Tools</h3>
                    <ul className="list-unstyled">
                      <li><a href="https://support.batscrm.com/portal/en/kb/bats-kb-articles" target="_blank">BATS Knowledge Base</a></li>
                      <li><a href="/resources">BATS Training Videos</a></li>
                      <li><a href="https://support.batscrm.com/portal/en/kb/articles/bats-version-history" target="_blank">BATS Version History</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-12">
                    <h3>More information</h3>
                    <ul className="list-unstyled" style={{position: "inherit", zIndex: 99}}>
                      <li><a href="/contact">Contact Us</a></li>
                      <li><a href="/about">About Us</a></li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <p className="copyright d-lg-none d-block">&copy; Copyright {currYr} bats.rocks. All rights reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="bat-logo" src={require('../../../images/footer/bat-logo-gray.png')} alt="BATS.rocks"/>
        </div>
      </div>
  )
};

export default FooterSection;