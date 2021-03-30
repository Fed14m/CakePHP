import React from 'react';
import { PureComponent } from 'react'
import classnames from 'classnames'
import Rellax from "rellax";

import Player from '@vimeo/player';

class HomeHero extends PureComponent {
  constructor(props) {
    super(props);

    this.hmVid = React.createRef();
    this.homePlayer = null

    //setTimeout handles
    this.flashPauseTimeout = null

    this.state = {
      isVideoPlaying: false,
      mouseHovering: false
    }
  }

  componentDidMount() {
    this.homePlayer = new Player(this.hmVid.current);

    //Video auto ends after playing
    this.homePlayer.on('ended', (data) => {
      //This is purely for out UI play/pause tracking
      this.setState({
        isVideoPlaying: false
      });
    });
    
    new Rellax(".rellax", { // <---- Via class name
      //speed: -7,
      center: false,
      round: true,
      vertical: true,
      horizontal: false,
      wrapper: '.home-root',
      callback: (positions) => {
        // callback every position change
        // This would be used later for 
        // Changing opacity of the div
      }
    });
    
  }
  
  playVideo() {
    this.homePlayer.play().then(() => {
      // The video is playing
      this.setState({
        isVideoPlaying: true
      });
    }).catch((error) => {
      switch (error.name) {
        case 'PasswordError':
          // The video is password-protected
          break;
        case 'PrivacyError':
          // The video is private
          break;
        default:
          // Some other error occurred
            //alert("Sorry! Something unexpected happened!")
            alert(error)
          break;
      }
    });
  }
  
  pauseStop() {
    this.homePlayer.pause().then(() => {
      // The video is paused
      this.setState({
        isVideoPlaying: false
      });
    }).catch((error) => {
      switch (error.name) {
        case 'PasswordError':
          // The video is password-protected
          break;

        case 'PrivacyError':
          // The video is private
          break;

        default:
          // Some other error occurred
          alert("Sorry! Something unexpected happened!")
          console.log(error)
          break;
      }
    });
  }

  mouseEnterOnVid() {
    this.setState({
      mouseHovering: true
    });
  }
  
  mouseLeftVid() {
    this.setState({
      mouseHovering: false
    });
  }
  
  flashPauseable() {
    //Show pause button
    this.setState({
      mouseHovering: true
    });

    //Clear any existing timout
    clearTimeout(this.flashPauseTimeout);
    //and then set a new one
    this.flashPauseTimeout = setTimeout(() => {
      this.setState({
        mouseHovering: false
      });
    }, 2000)
  }

  render() {
    
    const sectionHeight = this.props.visibleHeight.heroHeight > this.props.visibleHeight.actualHeight ?
                            this.props.visibleHeight.heroHeight : this.props.visibleHeight.actualHeight;
    
    return (
      <div ref={this.props.containerRef} className="container-fluid hm-container-bg" style={{minHeight: sectionHeight}}>
        <div className="section-wrapper hm-container" style={{minHeight: sectionHeight}}>
          <div
                className={classnames({"row": true, "rellax": true})}
                data-rellax-mobile-speed="1"
                data-rellax-desktop-speed="-7"
          >
            <div className="col-12 col-lg-5">
              <div className="hm-text-h-block">
                <h1>Performance <br/> Meets Productivity</h1>
                <p>BATS is the only software you need to automate, streamline, manage & grow your transportation business.</p>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="row no-gutters">
                <div className="col-lg-11 col-12 mt-lg-0 mt-md-5 mt-1">
                  <div className="batwing-wrapper">

                    <img src={require('../../../images/mobile-cutout-with-wings-2.png')} alt="Video"/>
                    <img src={require('../../../images/mobile-cutout-with-wings-mobile-2.png')} alt="Video" className="mobile-batwings"/>

                    <div className="bat-vid-gid-wrapper">
                      <div className="row no-gutters" style={{height: "100%"}}>
                        <div className="col-md-3 d-md-flex d-none" >&nbsp;</div>
                        <div className="col-md-6 col-12" style={{position: "relative"}}>

                          <div className="batwing-vid-wrapper" onClick={() => this.flashPauseable()}>
                            <iframe
                                ref={this.hmVid}
                                src="https://player.vimeo.com/video/498414076?byline=0&title=0&controls=0"
                                style={{position: "absolute", top:0, left:0, width: "100%", height:"100%"}}
                                frameBorder="0"
                                allow="autoplay;fullscreen"
                                allowFullScreen
                            >

                            </iframe>

                            <div className="event-trapper"
                                 onMouseEnter={() => this.mouseEnterOnVid()}
                                 onMouseLeave={() => this.mouseLeftVid()}
                            ></div>

                            <img className={classnames({"play-video": true, "d-none": this.state.isVideoPlaying === true})} src={require('../../../images/play-video.png')} onClick={() => this.playVideo()} alt="Play Video"/>
                            <img className={classnames({
                                      "pause-video": true,
                                      "vid-stoppable": (
                                        this.state.mouseHovering === true && this.state.isVideoPlaying === true
                                      )
                                    }
                                  )} src={require('../../../images/pause-stop-video.png')} alt="Pause Video"
                                 onClick={() => {this.pauseStop()}}
                                 onMouseEnter={() => this.mouseEnterOnVid()}
                                 onMouseLeave={() => this.mouseLeftVid()}
                            />
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-1 col-12 d-md-block d-sm-none">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeHero;