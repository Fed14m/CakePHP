import * as React from 'react'
import { PureComponent, Suspense } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Loader from '../page-sections/common/Loader'

const Home = React.lazy(() => import(/* webpackChunkName: "homepage" */'./Home'));
const About = React.lazy(() => import(/* webpackChunkName: "aboutpage" */'./About'));
const Learn = React.lazy(() => import(/* webpackChunkName: "learnpage" */'./Learn'));
const Videos = React.lazy(() => import(/* webpackChunkName: "videospage" */'./Videos'));
const Contact = React.lazy(() => import(/* webpackChunkName: "contactspage" */'./Contact'));
const BlogListing = React.lazy(() => import(/* webpackChunkName: "bloglist" */'./BlogListing'));
const BlogDetails = React.lazy(() => import(/* webpackChunkName: "blogdetails" */'./BlogDetails'));

//Utility functions 
import {getWindowDimansions} from '../utils/util-functions'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      winDimen: {}
    }
  }

  componentDidMount() {
    //Set the initial dimensions
    this.adjustWindowDimensions()
    //Add dimension reset on resize
    window.addEventListener('resize', () => this.adjustWindowDimensions());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.adjustWindowDimensions());
  }

  adjustWindowDimensions() {
    const windowDimensions = getWindowDimansions()
    
    //Derived height 
    let derivedHeight = (87 * windowDimensions.height) / 100
    //We need to restrict the derived height to may be 1100 or somethings
    //But only when in comparatively wider view ports
    //derivedHeight = (derivedHeight > 950 && windowDimensions.width > 992) ? 950 : derivedHeight
    let heroHeight = derivedHeight
    if(derivedHeight > 950) {
      //We might need to restrict
      if(windowDimensions.width < 600) {
        //Smaller widths, we actually might need to increase derived height
        heroHeight = 1700;
      } else {
        //restrict to 950
        heroHeight = 950;
      }
    } else {
      if(windowDimensions.width < 600) {
        //Smaller widths, we actually might need to increase derived height
        //heroHeight = 2000;
        heroHeight = 1150;
      }
    }
    
    console.log(windowDimensions)
    this.setState(
        {
          winDimen: {
            height: derivedHeight,
            width: windowDimensions.width,
            actualHeight: windowDimensions.height,
            heroHeight: heroHeight
          }
        }
    )
  }

  scrollToContactForm(evt) {
    //console.log('Scrolled to Contact form')
    //Stubbed
    evt.preventDefault()
  }

  render() {
    
    return (
      <Router>
        <Suspense fallback={<Loader/>}>
          <Switch>
            <Route
                path="/"
                exact
                render={(props) => (
                  <Home {...props}
                    match={
                      {
                        winDimen: this.state.winDimen,
                        scrollToContact: this.scrollToContactForm
                      }
                    }
                   />
                )}
            />

            <Route
                path="/about"
                exact
                render={(props) => (
                  <About {...props}
                    match={
                      {
                        winDimen: this.state.winDimen
                      }
                    }
                   />
                )}
            />
            <Route
                path="/learn"
                exact
                render={(props) => (
                  <Learn {...props}
                    match={
                      {
                        winDimen: this.state.winDimen
                      }
                    }
                   />
                )}
            />
            <Route
                path="/resources"
                exact
                render={(props) => (
                  <Videos {...props}
                    match={
                      {
                        winDimen: this.state.winDimen
                      }
                    }
                   />
                )}
            />

            <Route
                path="/contact"
                exact
                render={(props) => (
                  <Contact {...props}
                    match={
                      {
                        winDimen: this.state.winDimen
                      }
                    }
                   />
                )}
            />

            <Route
                path="/blog"
                exact
                render={(props) => (
                  <BlogListing {...props}
                    match={
                      {
                        winDimen: this.state.winDimen
                      }
                    }
                   />
                )}
            />
            <Route
                path="/blog/post"
                render={(props) => (
                  <BlogDetails {...props}
                    match={
                      {
                        winDimen: this.state.winDimen
                      }
                    }
                   />
                )}
            />
          </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default App