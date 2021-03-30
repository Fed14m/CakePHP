import * as React from 'react'
import { PureComponent } from 'react'

import {NAV_CLASS_FOR_CONTAINER} from '../utils/constants'

import ContactUsHero from '../page-sections/contact-us/ContactUsHero'
import MapOnly from '../page-sections/contact-us/MapOnly'

//Lazy load few components
const NavSection = React.lazy(() => import(/* webpackChunkName: "navsection" */'../page-sections/common/NavSection'));
const ContactUs = React.lazy(() => import(/* webpackChunkName: "contactus" */'../page-sections/common/ContactUs'));
const FooterSection = React.lazy(() => import(/* webpackChunkName: "footersection" */'../page-sections/common/FooterSection'));

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    //To track the root element
    this.homeRoot = React.createRef();

    //Elements
    //The slider container
    this.contactHeroContainer = React.createRef()
    this.contactContainer = React.createRef()
    this.mapOnlyContainer = React.createRef()
    this.footerContainer = React.createRef()

    //Section array
    this.allSections = [
      'contacthero-container-bg',
      'contact-us',
      'maponly-container-bg',
      'footer-container-bg'
    ]

    this.state = {
      makeSticky: true,
      upScrollDetected: true,
      lastScrollPos: 1,
      navclass: "light",
      thresholdUp: 40,
      sectionIntersectionThreshold: 25,
      hideOverFlowOnRoot: false
    }

  }

  scrollListener() {
    this.allSections.map((theSection) => {
      this.switchNavVisibility(theSection)
    })

    //Auto hide menu on smaller screens
    if(this.props.match.winDimen.width <= 768) {
      const scrollTop = this.homeRoot.current.scrollTop
      //Check if user is scrolling down
      if(scrollTop > this.state.lastScrollPos) {
        //Scrolling down, hide the menu
        this.setState({
          upScrollDetected: false,
          lastScrollPos: scrollTop
        });
      } else {
        //Scrolling up, show menu
        this.setState({
          upScrollDetected: true,
          lastScrollPos: scrollTop
        });
      }
    }
  }

  switchNavVisibility(section) {
    let sectionDimension
    switch(section) {
      case "contacthero-container-bg":
        sectionDimension = this.contactHeroContainer.current.getBoundingClientRect()
        break;
      case "contact-us":
        sectionDimension = this.contactContainer.current.getBoundingClientRect()
        break;
      case "maponly-container-bg":
        sectionDimension = this.mapOnlyContainer.current.getBoundingClientRect()
        break;
      case "footer-container-bg":
        sectionDimension = this.footerContainer.current.getBoundingClientRect()
        break;
      default:
        sectionDimension = this.contactHeroContainer.current.getBoundingClientRect()
    }

    const sectionThresholdBottom = this.state.sectionIntersectionThreshold - sectionDimension.height
    //test
    if(sectionDimension.top >= sectionThresholdBottom && sectionDimension.top < this.state.thresholdUp) {
      clearTimeout(this.toHandle)
      this.toHandle = setTimeout(() => {
        this.setState({
          navclass: NAV_CLASS_FOR_CONTAINER.[section]
        })
      }, 15);

    }
  }

  rootScrollBarVisibilityToggler(showSB) {
    this.setState({
      hideOverFlowOnRoot: showSB
    })
  }

  render() {
    return (
        <div ref={this.homeRoot} className="home-root"
             style={{height: this.props.match.winDimen.actualHeight, overflow: (this.state.hideOverFlowOnRoot == true) ? "hidden" : "auto"}}
             onScroll={() => this.scrollListener()}>
          <NavSection
              makeSticky={this.state.makeSticky}
              scrolling={this.state.upScrollDetected}
              navclass={this.state.navclass}
              winDimen={this.props.match.winDimen}
              rootSbToggler={(togglerValue) => this.rootScrollBarVisibilityToggler(togglerValue)}
          />
          <ContactUs
              visibleHeight={this.props.match.winDimen}
              containerRef={this.contactContainer}
              heading="Contact Us"
          />
          <ContactUsHero
              visibleHeight={this.props.match.winDimen}
              containerRef={this.contactHeroContainer}
          />
          <MapOnly
              visibleHeight={this.props.match.winDimen}
              containerRef={this.mapOnlyContainer}
              winDimen={this.props.match.winDimen}
          />
          <FooterSection
              visibleHeight={this.props.match.winDimen}
              containerRef={this.footerContainer}
          />
        </div>
    )
  }
}

export default Contact