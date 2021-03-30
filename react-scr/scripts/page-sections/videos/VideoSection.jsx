import React from 'react';
import { PureComponent } from 'react'
import axios from 'axios'

import Loader from '../../page-sections/common/Loader'
import closeIcon from "../../../images/icons/close-round-2.png"

import {VIDEO_RESOURCES_API} from "../../utils/constants"

import { Button, Modal } from 'react-bootstrap';

class VideoSection extends PureComponent {

  constructor(props) {
    super(props);

    //Video related vaariables
    this.playerDiv = React.createRef();
    this.vimeoPlayer = null

    this.state = {
      videoOpen: false,
      defaultVidId: '',
      apiCallInProgress: false,
      vidData: []
    }
  }

  componentDidMount() {

    //Mark that we are about to call API
    this.setState({
      apiCallInProgress: true
    })
    
    //Call to backend
    axios({
      method: 'post',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: VIDEO_RESOURCES_API
    }).then((response) => {

      //Mark we are done
      this.setState({
        apiCallInProgress: false
      })
      
      //Check if got data
      if(response.data.length > 0) {
        this.setState({
          vidData: response.data,
          defaultVidId: response.data[0].id 
        })
      } 

    }).catch((error) => {
      alert('Network Error while getting the videos, please try again after some time: ' + error)
    })
    
  }

  fireVideo(index) {
    
    this.setState({
      videoOpen: true,
      defaultVidId: this.state.vidData[index].id
    })
  }
  
  onCloseVideo() {
    this.setState({
      videoOpen: false
    })
  }

  render() {
    
    const videoSource = "https://player.vimeo.com/video/" + this.state.defaultVidId + "?title=0&byline=0&portrait=0"
    
    return (
        <div ref={this.props.containerRef} className="container-fluid video-container-bg" style={{minHeight: this.props.visibleHeight.actualHeight}}>
          <div className="section-wrapper video-container" style={{minHeight: this.props.visibleHeight.actualHeight}}>
            <div className="row no-gutters">
              <div className="col-12 text-center">
                <h1>BATS Training Videos</h1>
              </div>
            </div>
            <div className="row no-gutters">
              {
                  this.state.apiCallInProgress &&
                    <div className="col-12">
                      <Loader/>
                      <h3 className="text-center">Loading videos, please wait...</h3>
                    </div>
              }
              
              {
                  this.state.vidData.length == 0 && !this.state.apiCallInProgress && 
                    <div className="col-12">
                      <h3 className="text-center">Sorry, no videos found at this time</h3>
                    </div>
              }
              
              {
                  !this.state.apiCallInProgress && this.state.vidData.length > 0 && this.state.vidData.map((video, i) => {
                    return (
                      <div key={i} className="col-12 col-md-6 col-lg-4">
                        <div className="video-wrapper">
                          <img className="hero-bat" src={video.thumbnail} onClick={() => this.fireVideo(i)} alt={video.title}/>
                          <div className="title">
                            {video.title}
                          </div>
                        </div>
                      </div>
                    )
                })
              }
            </div>

            {
              !this.state.apiCallInProgress &&
                <Modal
                    show={this.state.videoOpen}
                    centered
                    onHide={() => this.onCloseVideo()}
                    dialogClassName="custom-video-modal"
                >
                  <Modal.Body>
                    <iframe src={videoSource}
                            style={{position:'absolute', top: 0, left: 0, width: '100%', maxWidth: '697', height: '100%'}}
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

export default VideoSection;