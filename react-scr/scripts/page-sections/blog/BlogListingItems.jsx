import React from 'react';
import { PureComponent } from 'react'
import { Button, Modal } from 'react-bootstrap';

import {blogData} from '../../utils/data/Blog'

class BlogListingItems extends PureComponent {

  constructor(props) {
    super(props);

    //Video related vaariables
    this.playerDiv = React.createRef();
    this.vimeoPlayer = null

    this.state = {
      videoOpen: false,
      defaultVidId: 492482567
    }
  }

  componentDidMount() {
    //At this moment a stub
  }

  fireVideo(index) {

    this.setState({
      videoOpen: true,
      defaultVidId: videoData[index].id
    })
  }

  onCloseVideo() {
    this.setState({
      videoOpen: false
    })
  }

  render() {

    return (
        <div ref={this.props.containerRef} className="container-fluid blog-list-container-bg" style={{minHeight: this.props.visibleHeight.actualHeight}}>
          <div className="section-wrapper blog-list-container" style={{minHeight: this.props.visibleHeight.actualHeight}}>
            <div className="row no-gutters">
              <div className="col-12 text-center">
                <h1>BATS Blog</h1>
              </div>
            </div>
            <div className="row no-gutters">
              
              {
                blogData.map((blogItem, i) => {
                  return (
                    <div key={i} className="col-12 col-md-6 col-lg-4">
                      <div className="blog-item-wrapper">
                        {
                          blogItem.image !== '' &&
                            <img className="blog-img" src={require('../../../images/blog/' + blogItem.image)} alt=""/>
                        }
                        
                        <div className="text-section">
                          <h3>{blogItem.heading}</h3>
                          <p>{blogItem.desc}</p>

                          <div className="footer">
                            <img src={require("../../../images/icons/calendar.png")} alt="Blog date"/>
                            <div className="date">{blogItem.date}</div>
                            <div className="read-more"><a href="/blog/post/a-post-with-pretty-url">Read more <img src={require("../../../images/icons/right-arrow.png")} alt="Read more"/></a></div>
                          </div>

                        </div>
                      </div>
                    </div>  
                  )
                })   
              }
              
            </div>

            <div className="row">
              <div className="col-12 text-center">
                <button className="load-more">Load More</button>
              </div>
            </div>

          </div>
        </div>
    )
  }
}

export default BlogListingItems;