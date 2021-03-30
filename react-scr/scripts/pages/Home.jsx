import * as React from 'react'
import { PureComponent } from 'react'

import {NAV_CLASS_FOR_CONTAINER} from '../utils/constants'

import HomeHero from '../page-sections/home/HomeHero'
import HomeAboutBatsSlider from '../page-sections/home/HomeAboutBatsSlider'
import StatsSection from '../page-sections/home/StatsSection'
import BatsOfferings from '../page-sections/home/BatsOfferings'
import AllInOne from '../page-sections/home/AllInOne'
import CrmShowcase from '../page-sections/home/CrmShowcase'
import VideoTestimonial from '../page-sections/home/VideoTestimonial'

//Lazy load few components
const NavSection = React.lazy(() => import(/* webpackChunkName: "navsection" */'../page-sections/common/NavSection'));
const ContactUs = React.lazy(() => import(/* webpackChunkName: "contactus" */'../page-sections/common/ContactUs'));
const FooterSection = React.lazy(() => import(/* webpackChunkName: "footersection" */'../page-sections/common/FooterSection'));

class Home extends PureComponent {
  constructor(props) {
    super(props);
    
    //To track the root element
    this.homeRoot = React.createRef();
    
    //Elements
    //The slider container
    this.homeHeroContainer = React.createRef()
    this.sliderContainer = React.createRef()
    this.allInOneContainer = React.createRef()
    this.statsContainer = React.createRef()
    this.testimonialContainer = React.createRef()
    this.offeringsContainer = React.createRef()
    this.crmContainer = React.createRef()
    this.contactUsContainer = React.createRef()
    this.footerContainer = React.createRef()
    
    //Section array
    this.allSections = [
      'hm-container-bg',
      'hm-slider-1',
      'all-in-one',
      'stats',
      'video-testimonial',
      'offerings-container-bg',
      'crmup-container-bg',
      'contact-us',
      'footer-container-bg'
    ]

    //timeout handle
    let toHandle
    
    this.state = {
      makeSticky: true,
      upScrollDetected: true,
      lastScrollPos: 1,
      parallaxActive: false,
      navclass: "light",
      thresholdUp: 40,
      sectionIntersectionThreshold: 25,
      hideOverFlowOnRoot: false
    }
    
  }

  //Scroll listener
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
      case "hm-container-bg":
        sectionDimension = this.homeHeroContainer.current.getBoundingClientRect()
        break;
      case "hm-slider-1":
        sectionDimension = this.sliderContainer.current.getBoundingClientRect()
        break;
      case "all-in-one":
        sectionDimension = this.allInOneContainer.current.getBoundingClientRect()
        break;
      case "stats":
        sectionDimension = this.statsContainer.current.getBoundingClientRect()
        break;
      case "video-testimonial":
        sectionDimension = this.testimonialContainer.current.getBoundingClientRect()
        break;
      case "offerings-container-bg":
        sectionDimension = this.offeringsContainer.current.getBoundingClientRect()
        break;
      case "crmup-container-bg":
        sectionDimension = this.crmContainer.current.getBoundingClientRect()
        break;
      case "contact-us":
        sectionDimension = this.contactUsContainer.current.getBoundingClientRect()
        break;
      case "footer-container-bg":
        sectionDimension = this.footerContainer.current.getBoundingClientRect()
        break;
      default:
        sectionDimension = this.homeHeroContainer.current.getBoundingClientRect()
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
        <div
            ref={this.homeRoot} className="home-root"
            style={{height: this.props.match.winDimen.actualHeight, overflow: (this.state.hideOverFlowOnRoot == true) ? "hidden" : "auto"}}
            onScroll={() => this.scrollListener()}
        >
          <NavSection
              makeSticky={this.state.makeSticky}
              scrolling={this.state.upScrollDetected}
              navclass={this.state.navclass}
              winDimen={this.props.match.winDimen}
              rootSbToggler={(togglerValue) => this.rootScrollBarVisibilityToggler(togglerValue)}
              scrollToContact={this.props.match.scrollToContact}
          />
          <HomeHero 
              visibleHeight={this.props.match.winDimen} 
              parallaxActive={this.state.parallaxActive}
              containerRef={this.homeHeroContainer}
          />
          <HomeAboutBatsSlider 
              windowWidth={this.props.match.winDimen.width} 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.sliderContainer}
          />
          <AllInOne 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.allInOneContainer}
          />
          <StatsSection 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.statsContainer}
          />
          <VideoTestimonial 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.testimonialContainer}
              windowWidth={this.props.match.winDimen.width}
          />
          <BatsOfferings 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.offeringsContainer}
          />
          <CrmShowcase 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.crmContainer}
          />
          <ContactUs 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.contactUsContainer}
          />
          <FooterSection 
              visibleHeight={this.props.match.winDimen}
              containerRef={this.footerContainer}
          />
        </div>
    )
  }
}

export default Home