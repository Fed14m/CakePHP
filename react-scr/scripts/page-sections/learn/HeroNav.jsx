import React from 'react';
import { PureComponent } from 'react';
import classnames from 'classnames'

class HeroNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectSection: ''
    }
  }
  
  makeSelection(selectThis) {
    this.setState({
      selectSection: selectThis
    })

    //Id to section mapping
    const elementId = '#' + selectThis + '-section' 

    //Call scroller
    document.querySelector(elementId).scrollIntoView({
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div id="learn-nav" className="container-fluid" style={{minHight: this.props.visibleHeight.height}}>
        <div className="section-wrapper abouthero-container learnhero" style={{height: this.props.visibleHeight.actualHeight}}>
          <div className="row no-gutters">
            <div className="col-12">
              <h1>Learn More About BATS</h1>
            </div>
          </div>
          <div className="row justify-content-lg-center justify-content-start">
            
            <div className="col-xl-2 col-md-4 col-6">
              <div className={classnames({"goto-button": true, "selected": this.state.selectSection == "leads"})} onClick={() => this.makeSelection("leads")} >
                <div className="icon-wrapper">
                  <img className="" src={require("../../../images/learn/leads.svg")} alt="Leads"/>
                </div>
                <span>Leads</span>
              </div>
            </div>
            
            <div className="col-xl-2 col-md-4 col-6">
              <div className={classnames({"goto-button": true, "selected": this.state.selectSection == "quotes"})} onClick={() => this.makeSelection("quotes")} >
                <div className="icon-wrapper">
                  <img className="" src={require("../../../images/learn/quotes.svg")} alt="Quotes"/>
                </div>
                <span>Quotes</span>
              </div>
            </div>
            
            <div className="col-xl-2 col-md-4 col-6">
              <div className={classnames({"goto-button": true, "selected": this.state.selectSection == "orders"})} onClick={() => this.makeSelection("orders")} >
                <div className="icon-wrapper">
                  <img className="" src={require("../../../images/learn/orders.svg")} alt="Orders"/>
                </div>
                <span>Orders</span>
              </div>
            </div>
            
            <div className="col-xl-2 col-md-4 col-6">
              <div className={classnames({"goto-button": true, "selected": this.state.selectSection == "dispatch"})} onClick={() => this.makeSelection("dispatch")} >
                <div className="icon-wrapper">
                  <img className="" src={require("../../../images/learn/dispatching.svg")} alt="Dispatch"/>
                </div>
                <span>Dispatching</span>
              </div>
            </div>
            
            <div className="col-xl-2 col-md-4 col-6">
              <div className={classnames({"goto-button": true, "selected": this.state.selectSection == "invoice"})} onClick={() => this.makeSelection("invoice")} >
                <div className="icon-wrapper">
                  <img className="spl" src={require("../../../images/learn/invoicing.svg")} alt="Invoice"/>
                </div>
                <span>Invoicing</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    )
  }  
  
}


export default HeroNav;