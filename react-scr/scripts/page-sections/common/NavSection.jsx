import React from 'react';
import { PureComponent } from 'react'
import classnames from 'classnames'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import batLogoLight from '../../../images/bats-logo-light.png'
import batLogoDark from '../../../images/bats-logo-dark.png'


class NavSection extends PureComponent {
  constructor(props) {
    super(props);

    this.navRef = React.createRef();
    this.navExpandedRef = React.createRef();
    
    //Init state
    this.state = {
      navExpandedHeight: 0
    }
  }

  componentDidMount() {
    if(this.props.winDimen.width < 768) {
      //Only on smaller widths
      //Do it on settimeout as immediately the values aren't available
      setTimeout(() => {
        const navExpandedHeight = this.props.winDimen.actualHeight - this.navRef.current.clientHeight
        this.setState({
          navExpandedHeight: navExpandedHeight
        })
      }, 1000)  
    }
  }

  navToggleHandler(collapsed) {
    //Called the passed in parent
    this.props.rootSbToggler(collapsed)
  }

  render() {
    //The icon always stays the black bordered bat on mobile screens, on greater widths it 
    //alternates with the section
    const whichVariant = (this.props.winDimen.width <= 768) ? 'light' : this.props.navclass
    const whichBatLogo = (whichVariant == 'light') ? batLogoLight : batLogoDark

    return (
        <div className={classnames({"container": true, "nav-container": true, "sticky": this.props.makeSticky, "peekdown": this.props.scrolling})}>
          <Navbar ref={this.navRef} variant={whichVariant} expand="md" onToggle={(collapsed) => this.navToggleHandler(collapsed)}>
            <Navbar.Brand href="/">
              <img className="bats-logo" src={whichBatLogo} alt="Bats Rocks"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse ref={this.navExpandedRef} id="basic-navbar-nav" style={{minHeight: this.state.navExpandedHeight, maxHeight: this.state.navExpandedHeight}}>
              <Nav className="ml-auto">
                <Nav.Link href="/resources">Resources</Nav.Link>
                <Nav.Link href="/learn">Learn</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link className="login-button" href="https://batscrm.com">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
  }
}

export default NavSection;