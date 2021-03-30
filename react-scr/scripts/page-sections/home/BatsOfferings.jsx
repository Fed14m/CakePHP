import React from 'react';

const BatsOfferings = (props) => {
  return (
      <div ref={props.containerRef} className="container-fluid offerings-container-bg" style={{minHeight: props.visibleHeight.actualHeight}}>
        <div className="section-wrapper offerings-container" style={{height: props.visibleHeight.actualHeight}}>
          <div className="row no-gutters">
            <div className="col-12">
              <h1>BATS gives you what you need</h1>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-lg-6 col-12 d-lg-block d-none">
              <div className="desc-wrap">
                <div className="row no-gutters">
                  <div className="col-12 o-cell o-head">Features</div>
                  <div className="col-12 o-cell">Electronic Signatures</div>
                  <div className="col-12 o-cell">Automated Emails</div>
                  <div className="col-12 o-cell">Hands-Free Automated Pricing</div>
                  <div className="col-12 o-cell left-last-cell">Run your Business on-the-go</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="us-wrap">
                <div className="row no-gutters">
                  <div className="col-12 o-cell o-head">Us</div>
                  <div className="col-12 o-cell">
                    <div className="feature d-lg-none d-block">Electronic Signatures</div>
                    <div className="feat-available">
                      Built-in
                    </div>
                  </div>
                  <div className="col-12 o-cell">
                    <div className="feature d-lg-none d-block">Automated Emails</div>
                    <div className="feat-available">
                      Built-in
                    </div>
                  </div>
                  <div className="col-12 o-cell">
                    <div className="feature d-lg-none d-block">Hands-Free Automated Pricing</div>
                    <div className="feat-available">
                      Built-in
                    </div>
                  </div>
                  <div className="col-12 o-cell left-last-cell">
                    <div className="feature d-lg-none d-block">Run your Business on-the-go</div>
                    <div className="feat-available">
                      Built-in
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="them-wrap">
                <div className="row no-gutters">
                  <div className="col-12 o-cell o-head">Them</div>
                  <div className="col-12 o-cell">
                    <div className="feature d-lg-none d-block">Electronic Signatures</div>
                    <div className="feat-available">
                      <span className="semi-b">$49</span>
                    </div>
                  </div>
                  <div className="col-12 o-cell">
                    <div className="feature d-lg-none d-block">Automated Emails</div>
                    <div className="feat-available">
                      <span className="semi-b">$35</span>
                    </div>
                  </div>
                  <div className="col-12 o-cell">
                    <div className="feature d-lg-none d-block">Hands-Free Automated Pricing</div>
                    <div className="feat-available">
                      Unavailable
                    </div>
                  </div>
                  <div className="col-12 o-cell left-last-cell">
                    <div className="feature d-lg-none d-block">Run your Business on-the-go</div>
                    <div className="feat-available">
                      Unavailable
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-12">
              <p>BATS gives you everything you need, upfront, to run your business more effectively while saving time and money in the process.</p>
            </div>
          </div>
        </div>
      </div>
  )
};

export default BatsOfferings;