import React from 'react';

import {crmUpgradeData} from '../../utils/data/HomeSliderData1'

const CrmShowcase = (props) => {
  return (
      <div ref={props.containerRef} className="container-fluid crmup-container-bg" style={{minHeight: props.visibleHeight.actualHeight}}>
        <div className="section-wrapper crmup-container" style={{minHeight: props.visibleHeight.actualHeight}}>
          <div className="row no-gutters">
            <div className="col-12">
              <h1>Your CRM Upgraded.</h1>
            </div>
            <div className="col-12">
              <p>
                With BATS, you have everything you need at your fingertips. No more missing features, clunky interfaces and bugs galore.
                BATS was designed with you in mind. All of your information is centrally located within one system. No more frantically
                searching across multiple systems to find what you’re looking for.
              </p>
            </div>
          </div>
          <div className="row no-gutters d-lg-flex d-none">
            <div className="col-3 text-right pr-2">
              <div className="crm-text t-1">Everything at a glance</div>
              <div className="crm-text t-2">AQua Auto Generated Price and Terms</div>
              <div className="crm-text t-3">History of calls and emails</div>
              <div className="crm-text t-4">Vehicle details all in one place</div>
            </div>
            <div className="col-6">
              <img className="crm-tab" src={require("../../../images/crm-upgraded.png")} alt="CRM Upgraded"/>
            </div>
            <div className="col-3 pl-2">
              <div className="crm-text t-1">Make mobile, FaceTime and VoIP Calls</div>
              <div className="crm-text t-2">Schedule and Follow up on Tasks</div>
              <div className="crm-text t-3">Email Delivery Events</div>
              <div className="crm-text t-4">Notes, History, Sales Activity, and on Demand Emails</div>
            </div>
          </div>
          <div className="row d-lg-none d-flex">
            <div className="col-12">
              <div className="list-wrapper">

                {
                  crmUpgradeData.map((dataNode, i) => {
                    return (
                        <div className="row no-gutters" key={i}>
                          <div className="col-1">
                            <div className="list-num text-center">{i + 1}</div>
                          </div>
                          <div className="col-11 pl-2">
                            {dataNode}
                          </div>
                        </div>
                    )
                  })
                }

              </div>
            </div>
            <div className="col-12">
              <img className="crm-tab" src={require("../../../images/crm-upgraded-mob.png")} alt="CRM Upgraded"/>
            </div>
          </div>
        </div>
      </div>
  )
};

export default CrmShowcase;