import * as React from 'react'
import { PureComponent } from 'react'
import {NAV_CLASS_FOR_CONTAINER} from '../utils/constants'

import BlogListingItems from '../page-sections/blog/BlogListingItems'

//Lazy load few components
const NavSection = React.lazy(() => import(/* webpackChunkName: "navsection" */'../page-sections/common/NavSection'));
const FooterSection = React.lazy(() => import(/* webpackChunkName: "footersection" */'../page-sections/common/FooterSection'));

class BlogListing extends PureComponent {
  constructor(props) {
    super(props);

    //To track the root element
    this.homeRoot = React.createRef();

    //Elements
    this.footerContainer = React.createRef()

    //Section array
    this.allSections = [
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
    } else {
      clearTimeout(this.toHandle)
      this.toHandle = setTimeout(() => {
        this.setState({
          navclass: "light"
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
          <BlogListingItems visibleHeight={this.props.match.winDimen} />
          <FooterSection
              visibleHeight={this.props.match.winDimen}
              containerRef={this.footerContainer}
              extraClass="vid-footer-cont"
          />
        </div>
    )
  }
}

export default BlogListing