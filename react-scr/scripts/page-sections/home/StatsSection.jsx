import React from 'react';

const StatsSection = (props) => {
  return (
      <div ref={props.containerRef} className="container-fluid stats-container-bg" style={{minHeight: props.visibleHeight.actualHeight}}>
        <div className="section-wrapper stats-container" style={{height: props.visibleHeight.actualHeight}}>
          <div className="row no-gutters">
            <div className="col-lg-5 left-hex">
              <div className="row no-gutters">
                <div className="col-3"></div>
                <div className="col-9 stats-block-leftcol">
                  <div className="stats-block">
                    <img src={require('../../../images/hm-stats/aqua-price-opportunities.svg')} alt="AQua Price Opportunities"/>
                    <h2>3,221,994</h2>
                    <p>AQua Priced Opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1">
              <img className="stems" src={require('../../../images/hm-stats/left-stem.jpg')} alt="Left stem"/>
            </div>
            <div className="col-lg-1">
              <img className="stems white-bat" src={require('../../../images/hm-stats/white-bat.svg')} alt="Stem Bats"/>
              <img className="stems divider" src={require('../../../images/hm-stats/stem-divider.jpg')} alt="Stem divider"/>
              <img className="stems right-stem" src={require('../../../images/hm-stats/right-stem.jpg')} alt="Right stem"/>
            </div>
            <div className="col-lg-5 right-hex">
              <div className="row no-gutters">
                <div className="col-9 stats-block-rightcol">
                  <div className="stats-block">
                    <img src={require('../../../images/hm-stats/leadevery-month.svg')} alt="Leads Processed Every Month"/>
                    <h2>117,078</h2>
                    <p>Leads Processed in February 2021</p>
                  </div>
                </div>
                <div className="col-3"></div>
              </div>
            </div>
          </div>

          <div className="row no-gutters">
            <div className="col-12">

              <img className="white-bat" src={require('../../../images/hm-stats/white-bat.svg')} alt="Stem Bats"/>

              <img className="" src={require('../../../images/hm-stats/stem-divider-mobile.jpg')} alt="Stats section"/>

              <div className="mobile-stat">
                <img src={require('../../../images/hm-stats/aqua-price-opportunities.svg')} alt="AQua Priced Opportunities"/>
                <h2>3,221,994</h2>
                <p>AQua Priced Opportunities</p>
              </div>

              <img className="" src={require('../../../images/hm-stats/stem-divider-mobile.jpg')} alt="Stats section"/>

              <div className="mobile-stat mob-stat-2">
                <img src={require('../../../images/hm-stats/leadevery-month.svg')} alt="Leads Processed Every Month"/>
                <h2>117,078</h2>
                <p>Leads Processed in February 2021</p>
              </div>

            </div>
          </div>
        </div>
      </div>
  )
};

export default StatsSection;