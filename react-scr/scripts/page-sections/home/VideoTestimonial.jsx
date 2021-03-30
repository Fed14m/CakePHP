import React from 'react';
import { PureComponent } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Player from '@vimeo/player';

import Loader from '../../page-sections/common/Loader'

import { VIDEO_TESTIMONIAL_API  } from '../../utils/constants'

class VideoTestimonial extends PureComponent {

  constructor(props) {
    super(props);

    this.aSlider = React.createRef();

    //Dynamic ref variable for the vimeo iframes
    this.vimeoVidRefs = []

    //An array to hold that many Vimeo instances
    this.vidPlayers = []

    this.state = {
      currSlide: 1,
      transitionPeriod: 100,
      initSlideOffset: 370,
      currentSlideOffset: 370,
      slideByOffset: 370,

      /*
       Indicates transition state of the slides while sliding
       0 - Animation complete, active slide selected
       1 - Active cutout and video div needs to be dimmed to invisible, everything else remains same
       2 - Active cutout and video div needs to be display = none AND Inactive cutout needs to be display = block, everything else remains same
       3 - Inactive cutout needs to be visible transparency wise, everything else remains same
       -- Actual slide steppin down/up occurs, from here we need to go reverse
       -- Step back all the way back to 0
       */
      tranSt: 0,

      //Api call realted state variables
      apiCallInProgress: false,
      vidData: [],

      /*
       Video playback control related variables
       */
      isVideoPlaying: false,
      mouseHovering: false,
      currentVideoIndex: 0
    };

  }

  componentDidMount() {

    //First and foremost, prepare for API call
    this.setState({
      apiCallInProgress: true
    })

    //Call to backend
    axios({
      method: 'post',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: VIDEO_TESTIMONIAL_API
    }).then((response) => {

      //Mark we are done
      this.setState({
        apiCallInProgress: false
      })

      //Check if got data
      //console.log(response.data)
      if(response.data.length > 0) {
        this.setState({
          vidData: response.data
        })

        //---Slider adjustments
        //Set offset
        setTimeout(() => {
          this.adjustSlideOffsetAfterResize()
        }, 1000)

        //Add dimension reset on resize
        window.addEventListener('resize', () => this.adjustSlideOffsetAfterResize())

        //Add that many Vimeo instances to the array as many iframes present
        this.vimeoVidRefs.map((iframeRef) => {
          const thisPlayer = new Player(iframeRef.current);

          //Video auto ends after playing
          thisPlayer.on('ended', (data) => {
            //This is purely for our UI play/pause tracking
            this.setState({
              isVideoPlaying: false
            });
          });

          //Push it to the array
          this.vidPlayers.push(thisPlayer)
        })
        //---
        
      }

    }).catch((error) => {
      alert('Network Error while getting the videos, please try again after some time: ' + error)
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.adjustSlideOffsetAfterResize())
  }


  slideNav(direction) {
    this.setState({
      tranSt: 1
    });

    //Go on with actual sliding process
    setTimeout(
        () => {

          //Toggle display
          this.setState({
            tranSt: 2
          });
          //Then opacity, using a delay
          setTimeout(() => {
            this.setState({
              tranSt: 3
            });

            //--------

            //Initiate slide
            this.startSliding(direction)

            //Change the state for current slide
            let nextIndex
            if(direction == 1) {
              nextIndex = (this.state.currSlide + 1 > this.state.vidData.length) ? 1 : this.state.currSlide + 1
            } else {
              nextIndex = (this.state.currSlide - 1 < 1) ? this.state.vidData.length : this.state.currSlide - 1
            }

            this.setState({
              currSlide: nextIndex
            });

            //If a video was playing we have to pause it
            if(this.state.isVideoPlaying == true) {
              this.pauseStop(this.state.currentVideoIndex)
            }
            //---------

            //Now it's time to go all the way backwards
            //Go back to state 2, after the set-time-out boundary
            setTimeout(() => {
              this.setState({
                tranSt: 2
              });


              //Take a tiny delay and change to transition state 1
              setTimeout(() => {
                this.setState({
                  tranSt: 1
                });

                //Again take a tiny delay and fall back to 0
                setTimeout(() => {
                  this.setState({
                    tranSt: 0
                  });
                }, 75)

              }, 75)


            }, 10)


          }, 75)
        },
        75
    );
  }

  startSliding(direction) {
    let newOffset
    if(direction == 1) {
      //decrease offset, only if curr slide is less than total slides
      if(this.state.currSlide < this.state.vidData.length) {
        newOffset = this.state.currentSlideOffset - this.state.slideByOffset
      } else {
        newOffset = this.state.initSlideOffset
      }
    } else {
      //Increase offset, only if currSlide is more than 1
      if(this.state.currSlide > 1) {
        newOffset = this.state.currentSlideOffset + this.state.slideByOffset
      } else {
        //Reset to last slide
        newOffset = 0 - this.state.slideByOffset * (this.state.vidData.length - 1) + this.state.initSlideOffset
      }
    }

    this.setState({
      currentSlideOffset: newOffset
    });
  }

  getSlideDivWidthAndSetAsOffset() {
    const sliderDimen = this.aSlider.current.getBoundingClientRect();

    //Check window width
    let newInitOffset
    if(this.props.windowWidth >= 1700) {
      newInitOffset = sliderDimen.width + 200
    }
    else if(this.props.windowWidth >= 1600 && this.props.windowWidth < 1700) {
      newInitOffset = 440
    }
    else if(this.props.windowWidth >= 1500 && this.props.windowWidth < 1600) {
      newInitOffset = 410
    }
    else if(this.props.windowWidth >= 1420 && this.props.windowWidth < 1500) {
      newInitOffset = 370
    }
    else if(this.props.windowWidth >= 1300 && this.props.windowWidth < 1420) {
      newInitOffset = 350
    }
    else if(this.props.windowWidth >= 1150 && this.props.windowWidth < 1300) {
      newInitOffset = 270
    }
    else if (this.props.windowWidth >= 1050 && this.props.windowWidth < 1150) {
      newInitOffset = 235
    }
    else if (this.props.windowWidth >= 900 && this.props.windowWidth < 1050) {
      newInitOffset = 185
    }
    else if (this.props.windowWidth >= 768 && this.props.windowWidth < 900) {
      newInitOffset = 150
    }
    else {
      //Finally the smallest width, mobiles
      newInitOffset = Math.round((this.props.windowWidth - sliderDimen.width) / 2)
    }

    //Set width as initial offset
    this.setState({
      initSlideOffset: newInitOffset,
      currentSlideOffset: newInitOffset,
      slideByOffset: sliderDimen.width
    });
  }

  adjustSlideOffsetAfterResize() {
    this.getSlideDivWidthAndSetAsOffset()
  }

  playVideo(index) {
    this.vidPlayers[index].play().then(() => {
      // The video is playing
      this.setState({
        isVideoPlaying: true,
        currentVideoIndex: index
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

  pauseStop(index) {
    this.vidPlayers[index].pause().then(() => {
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
  
  formatDecriptionText(text) {
    return text == '' ? "It seems the description for this video on Vimeo is empty. Please add a description corresponding to this video on Vimeo and it would show up here" : text
  }

  render() {
    const noOfSlides = (this.state.vidData.length < 10) ? '0' + this.state.vidData.length : this.state.vidData.length
    const currSlideIndex = this.state.currSlide - 1

    return (
        <div ref={this.props.containerRef} className="container-fluid hm-slider-1 video-testimonial" style={{height: this.props.visibleHeight.actualHeight}}>
          <div className="br-slider-viewport">
            {
              this.state.apiCallInProgress == false && this.state.vidData.length > 0 &&
                <div className="br-slide-wrapper" style={{marginLeft: this.state.currentSlideOffset + 'px'}}>
                  {
                    this.state.vidData.map((slideItem, i) => {

                      //Create ref for this vimeo video
                      const thisVidRef = React.createRef()
                      this.vimeoVidRefs.push(thisVidRef)

                      //Video URL
                      const vidUrl = 'https://player.vimeo.com/video/' + slideItem.videoid + '?byline=0&title=0&controls=0'
                      //Video image
                      //const vidImage = slideItem.image

                      return (
                          <div ref={this.aSlider} className={classnames({ "br-slide": true, "popped-br-slide": (i == this.state.currSlide - 1 && this.state.tranSt == 0)})} key={i}>

                            <img className={classnames({
                              "active-outline": true,
                              "element-visible": i == this.state.currSlide - 1 && (this.state.tranSt == 0 || this.state.tranSt == 1),
                              "element-opaque": i == this.state.currSlide - 1 && this.state.tranSt == 0,
    
                              "element-transparent": i == this.state.currSlide - 1 && (this.state.tranSt == 1 || this.state.tranSt == 2),
                            })} src={require('../../../images/video-testimonial/phone-outline-on.png')} alt="Video"/>


                            <img className={classnames({
                              "element-visible": ( i != this.state.currSlide - 1 ) || ( i == this.state.currSlide - 1 &&
                                                                                                      (
                                                                                                          this.state.tranSt == 2 ||
                                                                                                          this.state.tranSt == 3
                                                                                                      )),
                              "element-opaque": ( i != this.state.currSlide - 1 ) || ( i == this.state.currSlide - 1 && this.state.tranSt == 3),
    
                            })} src={require('../../../images/video-testimonial/phone-outline-off-2.png')} alt="Video"/>

                            <div className={classnames({
                                "active-slide-vid": true,
                                "element-visible": i == this.state.currSlide - 1 && (this.state.tranSt == 0 || this.state.tranSt == 1),
                                "element-opaque": i == this.state.currSlide - 1 && this.state.tranSt == 0,
      
                                "element-transparent": i == this.state.currSlide - 1 && (this.state.tranSt == 1 || this.state.tranSt == 2),
                                "active-slide-div-hidden": i == this.state.currSlide - 1 && (this.state.tranSt == 1),
                              })}
                              onClick={() => this.flashPauseable()}
                            >
                              <iframe
                                  ref={thisVidRef}
                                  src={vidUrl}
                                  style={{position: "absolute", top:0, left:0, width: "100%", height:"100%"}}
                                  frameBorder="0"
                                  allow="autoplay; fullscreen"
                                  allowFullScreen>
                              </iframe>

                              <div
                                  className={classnames({"pulsating-play": true, "d-none": this.state.isVideoPlaying == true})}
                              ></div>

                              <div className="event-trapper"
                                   onMouseEnter={() => this.mouseEnterOnVid()}
                                   onMouseLeave={() => this.mouseLeftVid()}
                              ></div>

                              <img className={classnames({"play-video": true, "d-none": this.state.isVideoPlaying === true})}
                                   src={require('../../../images/play-video.png')}
                                   onClick={() => this.playVideo(i)} alt="Play Video"
                              />
                              <img className={classnames({
                                      "pause-video": true,
                                      "vid-stoppable": (
                                        this.state.mouseHovering === true && this.state.isVideoPlaying === true
                                      )
                                    }
                                  )} src={require('../../../images/pause-stop-video.png')} alt="Pause Video"
                                   onClick={() => {this.pauseStop(i)}}
                                   onMouseEnter={() => this.mouseEnterOnVid()}
                                   onMouseLeave={() => this.mouseLeftVid()}
                              />

                            </div>

                          </div>
                      )
                    })
                  }
                </div>
            }
            
            {
              this.state.apiCallInProgress == true &&
                <div className="row">
                  <div className="col-12">
                    <Loader/>
                    <h3 className="text-center">Loading testimonials, please wait...</h3>
                  </div>
                </div>
            }

            {
              this.state.apiCallInProgress == false && this.state.vidData.length > 0 &&
                <div className="br-slide-desc">
                  <p className="slide-counter">{ this.state.vidData[currSlideIndex].serial } / { noOfSlides }</p>
                  <h1>{ this.state.vidData[currSlideIndex].headline }</h1>
                  <p dangerouslySetInnerHTML={{ __html: this.formatDecriptionText(this.state.vidData[currSlideIndex].description) }} />
                </div>      
            }
            
            {
              this.state.apiCallInProgress == false && this.state.vidData.length > 0 &&
                <div className="br-slide-nav">
                  <img src={require('../../../images/hm-testimonial/left-arrow-transp.png')} alt="Slider Left" onClick={() => this.slideNav(0)} />
                  <img src={require('../../../images/hm-testimonial/right-arrow-transp.png')} alt="Slider Right" onClick={() => this.slideNav(1)} />
                </div>      
            }
            
          </div>
        </div>
    )
  }
}

export default VideoTestimonial;