import * as React from 'react'
import { PureComponent } from 'react'

import {NAV_CLASS_FOR_CONTAINER} from '../utils/constants'

import AboutHero from '../page-sections/about/AboutHero'
import OurMission from '../page-sections/about/OurMission'
import AboutTestimonial from '../page-sections/about/AboutTestimonial'

//Lazy load few components
const NavSection = React.lazy(() => import(/* webpackChunkName: "navsection" */'../page-sections/common/NavSection'));
const ContactUs = React.lazy(() => import(/* webpackChunkName: "contactus" */'../page-sections/common/ContactUs'));
const FooterSection = React.lazy(() => import(/* webpackChunkName: "footersection" */'../page-sections/common/FooterSection'));

class About extends PureComponent {
  constructor(props) {
    super(props);

    //To track the root element
    this.homeRoot = React.createRef();

    //Elements
    //The slider container
    this.aboutHeroContainer = React.createRef()
    //this.missionContainer = React.createRef()
    this.aboutTestimonialContainer = React.createRef()
    this.contactContainer = React.createRef()
    this.footerContainer = React.createRef()

    //Section array
    this.allSections = [
      'abouthero-container',
      //'mission-container-bg',
      'about-testimonial-bg',
      'contact-us',
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
      case "abouthero-container":
        sectionDimension = this.aboutHeroContainer.current.getBoundingClientRect()
        break;
      /*case "mission-container-bg":
        sectionDimension = this.missionContainer.current.getBoundingClientRect()
        break;*/
      case "about-testimonial-bg":
        sectionDimension = this.aboutTestimonialContainer.current.getBoundingClientRect()
        break;
      case "contact-us":
        sectionDimension = this.contactContainer.current.getBoundingClientRect()
        break;
      case "footer-container-bg":
        sectionDimension = this.footerContainer.current.getBoundingClientRect()
        break;
      default:
        sectionDimension = this.aboutHeroContainer.current.getBoundingClientRect()
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
          <AboutHero 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.aboutHeroContainer}
          />
          <AboutTestimonial
              visibleHeight={this.props.match.winDimen}
              containerRef={this.aboutTestimonialContainer}
          />
          <ContactUs 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.contactContainer}
          />
          <FooterSection 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.footerContainer}
          />
        </div>
    )
  }
}

export default About