import React from 'react';
import { PureComponent } from 'react'
import classnames from 'classnames'
import axios from 'axios';
import qs from 'qs';

import {isPhoneValidUsaNumber, isEmailValid} from '../../utils/util-functions'
import {CONTACT_US_EP} from '../../utils/constants'

class ContactUs extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      fnameValue: '',
      fnameValid: true,
      fnameErrMsg: '',

      lnameValue: '',
      lnameValid: true,
      lnameErrMsg: '',

      companyValue: '',
      companyValid: true,
      companyErrMsg: '',

      phoneValue: '',
      phoneValid: true,
      phoneErrMsg: '',

      emailValue: '',
      emailValid: true,
      emailErrMsg: '',
      
      apiInPogress: false,
      contactedOnce: false
    };
  }
  
  handleSubmit() {
    //Assuming form is validated at first
    let formValid = true
    
    //Check fname
    if(this.state.fnameValue == "") {
      this.setState({
        fnameValid: false,
        fnameErrMsg: "First Name is required"
      })
      formValid = false
    }
    
    //Check lname
    if(this.state.lnameValue == "") {
      this.setState({
        lnameValid: false,
        lnameErrMsg: "Last Name is required"
      })
      formValid = false
    }

    //Check company
    if(this.state.companyValue == "") {
      this.setState({
        companyValid: false,
        companyErrMsg: "Company is required"
      })
      formValid = false
    }

    //Check phone
    if(this.state.phoneValue == "") {
      this.setState({
        phoneValid: false,
        phoneErrMsg: "Phone is required"
      })
      formValid = false
    } else {
      if(!isPhoneValidUsaNumber(this.state.phoneValue)) {
        this.setState({
          phoneValid: false,
          phoneErrMsg: "Phone must be valid US number"
        })
        formValid = false
      }
    }
    
    //Check email
    if(this.state.emailValue == "") {
      this.setState({
        emailValid: false,
        emailErrMsg: "Email is required",
        formValidated: false
      })
      formValid = false
    } else {
      if(!isEmailValid(this.state.emailValue)) {
        this.setState({
          emailValid: false,
          emailErrMsg: "Format must be 'you@provider.com'"
        })
        formValid = false
      }
    }
    
    if(formValid == true) {
      //MArk call as active
      this.setState({
        apiInPogress: true
      })
      
      //Actual call
      this.sendContactUsRequest()
          .then((response) => {
            this.setState({
              apiInPogress: false,
              contactedOnce: true
            })
            console.log(response)
          })
          .catch((error) => {
            this.setState({
              apiInPogress: false
            })
            alert(error)
          })
    }
  }

  sendContactUsRequest() {
    
    //Get data from state
    const payload = this.getPayloadForContactUs()
    
    //Hit backend with axios
    return axios({
      method: 'post',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: CONTACT_US_EP,
      data: qs.stringify(payload)
    })
  }
  
  getPayloadForContactUs() {
    return {
      fname: this.state.fnameValue,
      lname: this.state.lnameValue,
      company: this.state.companyValue,
      phone: this.state.phoneValue,
      email: this.state.emailValue
    }
  }

  fieldValueChanged(field, evt) {
    const fieldName = field + "Value"
    const fieldValid = field + "Valid"

    this.setState({
      [fieldName]: evt.target.value,
      [fieldValid]: true
    });
  }

  render() {

    const buttonLabel = (this.state.apiInPogress) ? "Please wait..." : "Request a Call Back"
    
    //Decide on the form heading
    const formHeading = (this.props.heading) ? this.props.heading : "Get Started"

    return (
      <div ref={this.props.containerRef} className="container-fluid" style={{minHeight: this.props.visibleHeight.height}}>
        <div id="contact-us-form" className="section-wrapper container-contact-us" style={{minHeight: this.props.visibleHeight.actualHeight}}>
          <div className="row">
            <div className="col-lg-7 col-12">
              <div className="form-wrap">
                <div className={classnames({"row": true, "no-gutters": true, "d-none": (this.state.contactedOnce == true) })} >
                  <div className="col-12">
                    <h1>{formHeading}</h1>
                  </div>
                  <div className="col-12">
                    <p>It’s time to expect more from a CRM. Get started with BATS today and get more</p>
                  </div>

                  <div className="col-lg-6 col-12">
                    <input className={classnames({"frm-txt": true, "error": this.state.fnameValid != true})} type="text" placeholder="First Name" onChange={(event) => this.fieldValueChanged("fname", event)} />
                    <span className={classnames({"error-msg": true, "d-none": this.state.fnameValid == true})}>{this.state.fnameErrMsg}</span>
                  </div>
                  <div className="col-lg-6 col-12">
                    <input className={classnames({"frm-txt": true, "float-lg-right": true, "float-none": true, "error": this.state.lnameValid != true})} type="text" placeholder="Last Name" onChange={(event) => this.fieldValueChanged("lname", event)} />
                    <span className={classnames({"error-msg": true, "d-none": this.state.lnameValid == true})}>{this.state.lnameErrMsg}</span>
                  </div>

                  <div className="col-lg-6 col-12">
                    <input className={classnames({"frm-txt": true, "error": this.state.companyValid != true})} type="text" placeholder="Company" onChange={(event) => this.fieldValueChanged("company", event)} />
                    <span className={classnames({"error-msg": true, "d-none": this.state.companyValid == true})}>{this.state.companyErrMsg}</span>
                  </div>
                  <div className="col-lg-6 col-12">
                    <input className={classnames({"frm-txt": true, "float-lg-right": true, "float-none": true, "error": this.state.phoneValid != true})}  type="text" placeholder="Phone Number" onChange={(event) => this.fieldValueChanged("phone", event)} />
                    <span className={classnames({"error-msg": true, "d-none": this.state.phoneValid == true})}>{this.state.phoneErrMsg}</span>
                  </div>

                  <div className="col-12">
                    <input className={classnames({"frm-txt": true, "full-w": true, "error": this.state.emailValid != true})} type="text" placeholder="Email Address" onChange={(event) => this.fieldValueChanged("email", event)} />
                    <span className={classnames({"error-msg": true, "d-none": this.state.emailValid == true})}>{this.state.emailErrMsg}</span>
                  </div>

                  <div className="col-12">
                    <button className="call-to-action" disabled={this.state.apiInPogress == true} onClick={() => this.handleSubmit()}>{buttonLabel}</button>
                  </div>

                  <div className="col-12">
                    <p className="contact-info-p">Or call 800-401-5933 to speak with someone M-F 9AM - 5PM EST</p>
                  </div>

                </div>

                <div
                    className={classnames({"row": true, "no-gutters": true, "d-none": (this.state.contactedOnce != true) })}
                >
                  <div className="col-12">
                    <h1 style={{"marginTop": "15vh"}} className="text-center">Thank You!</h1>
                  </div>
                  <div className="col-12">
                    <p className="text-center">A representative will get in touch with you shortly.</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="quick-stat">
                <img className="bat-logo" src={require('../../../images/contact-us/bat-logo.png')} alt="BATS.rocks"/>
                <h3>Did you know?</h3>
                <h1>3.2 Million</h1>
                <p>Opportunities have been generated with BATS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs;