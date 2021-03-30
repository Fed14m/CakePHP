import React from 'react';
import { PureComponent } from 'react'
import axios from 'axios'
import classnames from 'classnames'
import Player from '@vimeo/player';
import { Modal } from 'react-bootstrap';

import Loader from '../../page-sections/common/Loader'
import closeIcon from "../../../images/icons/close-round-2.png"

import { BATS_SLIDER_VIDEOS_API  } from '../../utils/constants'

class HomeAboutBatsSlider extends PureComponent {

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
      videoOpen: false,
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
      url: BATS_SLIDER_VIDEOS_API
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
        
        //--Slider Adjustments
        setTimeout(() => {
          this.adjustSlideOffsetAfterResize()
        }, 1000)

        //Add dimension reset on resize
        window.addEventListener('resize', () => this.adjustSlideOffsetAfterResize())

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


  slideToParticularSlide(slideIndex) {
    let newOffset
    if(slideIndex > 1) {
      const slideFactor = slideIndex - 1 
      newOffset = this.state.currentSlideOffset - (this.state.slideByOffset * slideFactor)

      //Set to state
      this.setState({
        currentSlideOffset: newOffset
      });
    }
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
    
    //Account for slide position if user already started sliding
    /*if(this.state.currSlide > 1) {
      newInitOffset -= this.state.slideByOffset * (this.state.currSlide - 1)
    }*/
    
    //Set width as initial offset
    this.setState({
      initSlideOffset: newInitOffset,
      currentSlideOffset: newInitOffset,
      slideByOffset: sliderDimen.width
    });
  }
  
  adjustSlideOffsetAfterResize() {
    this.getSlideDivWidthAndSetAsOffset() 
    
    //Also if current slide is greater than 1 then
    //we need to recalculate slide position
    if(this.state.currSlide > 1) this.slideToParticularSlide(this.state.currSlide)
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

  fireVideo(index) {
    this.setState({
      videoOpen: true,
      currentVideoIndex: index
    })
  }
  
  onCloseVideo() {
    this.setState({
      videoOpen: false
    })
  }

  formatDecriptionText(text) {
    return text == '' ? "It seems the description for this video on Vimeo is empty. Please add a description corresponding to this video on Vimeo and it would show up here" : text
  }

  render() {
    const noOfSlides = (this.state.vidData.length < 10) ? '0' + this.state.vidData.length : this.state.vidData.length
    const currSlideIndex = this.state.currSlide - 1
    
    //Video URL
    const videoSource = this.state.vidData.length > 0 ? "https://player.vimeo.com/video/" + this.state.vidData[this.state.currentVideoIndex].videoid + "?title=0&byline=0&portrait=0" : ""
    
    return (
      <div ref={this.props.containerRef} className="container-fluid hm-slider-1" style={{height: this.props.visibleHeight.actualHeight}}>
        <div className="br-slider-viewport">
          {
            this.state.apiCallInProgress == false && this.state.vidData.length > 0 &&
              <div className="br-slide-wrapper" style={{marginLeft: this.state.currentSlideOffset + 'px'}}>
                {
                  this.state.vidData.map((slideItem, i) => {
  
                    //Create ref for this vimeo video
                    const thisVidRef = React.createRef()
                    this.vimeoVidRefs.push(thisVidRef)
  
                    const vidUrl = 'https://player.vimeo.com/video/' + slideItem.videoid + '?byline=0&title=0&controls=0'
  
                    return (
                        <div ref={this.aSlider} className={classnames({ "br-slide": true, "popped-br-slide": (i == this.state.currSlide - 1 && this.state.tranSt == 0)})} key={i}>
  
                          <img className={classnames({ 
                            "active-outline": true,
                            "element-visible": i == this.state.currSlide - 1 && (this.state.tranSt == 0 || this.state.tranSt == 1),
                            "element-opaque": i == this.state.currSlide - 1 && this.state.tranSt == 0,
    
                            "element-transparent": i == this.state.currSlide - 1 && (this.state.tranSt == 1 || this.state.tranSt == 2),
                          })} src={require('../../../images/mobile-cutout-slider.png')} alt="Video"/>
  
  
                          <img className={classnames({
                            "element-visible": ( i != this.state.currSlide - 1 ) || ( i == this.state.currSlide - 1 && 
                                                                                                    (
                                                                                                        this.state.tranSt == 2 ||
                                                                                                        this.state.tranSt == 3
                                                                                                    )),
                            "element-opaque": ( i != this.state.currSlide - 1 ) || ( i == this.state.currSlide - 1 && this.state.tranSt == 3),
                            
                          })} src={require('../../../images/mobile-cutout-slider-off.png')} alt="Video"/>
  
                          <div className={classnames({ 
                              "active-slide-vid": true,
                              "element-visible": i == this.state.currSlide - 1 && (this.state.tranSt == 0 || this.state.tranSt == 1),
                              "element-opaque": i == this.state.currSlide - 1 && this.state.tranSt == 0,
      
                              "element-transparent": i == this.state.currSlide - 1 && (this.state.tranSt == 1 || this.state.tranSt == 2),
                              "active-slide-div-hidden": i == this.state.currSlide - 1 && (this.state.tranSt == 1),
                            })}
                          >

                            <img className="bats-slider-video-thumbnail" src={slideItem.image} alt={ this.state.vidData[currSlideIndex].headline }/>

                            <img className={classnames({"play-video": true, "bats-slider-play": true})}
                                 src={require('../../../images/play-video.png')}
                                 onClick={() => this.fireVideo(i)} alt="Play Video"
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
                  <Loader theme="light" />
                  <h3 className="text-center">Loading Slider, please wait...</h3>
                </div>
              </div>
          }

          {
            this.state.apiCallInProgress == false && this.state.vidData.length > 0 &&
              <div className="br-slide-desc">
                <p className="slide-counter">{ this.state.vidData[currSlideIndex].serial } / { noOfSlides }</p>
                <h1>{ this.state.vidData[currSlideIndex].headline }</h1>
                <p>{ this.formatDecriptionText(this.state.vidData[currSlideIndex].description) }</p>
              </div>
          }

          {
            this.state.apiCallInProgress == false && this.state.vidData.length > 0 &&
              <div className="br-slide-nav">
                <img src={require('../../../images/slider-left-arrow.png')} alt="Slider Left" onClick={() => this.slideNav(0)} />
                <img src={require('../../../images/slider-right-arrow.png')} alt="Slider Right" onClick={() => this.slideNav(1)} />
              </div>      
          }

          {
            !this.state.apiCallInProgress && this.state.vidData.length > 0 &&
              <Modal
                  show={this.state.videoOpen}
                  centered
                  onHide={() => this.onCloseVideo()}
                  dialogClassName="custom-video-modal slider-video-modal"
                  backdropClassName="slider-modal-backdrop"
              >
                <Modal.Body>
                  <iframe src={videoSource}
                          style={{position:'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                          frameBorder="0"
                          allow="autoplay; fullscreen" allowFullScreen>
                  </iframe>
                  <img className="close-video" src={closeIcon} alt="Close Video" onClick={() => this.onCloseVideo()} />
                </Modal.Body>
              </Modal>
          }
          
        </div>
      </div>
    )
  }
}

export default HomeAboutBatsSlider;