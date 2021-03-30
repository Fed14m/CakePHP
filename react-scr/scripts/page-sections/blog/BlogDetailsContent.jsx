import React from 'react';
import { PureComponent } from 'react'
import { Button, Modal } from 'react-bootstrap';

class BlogDetailsContent extends PureComponent {

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
          <div className="section-wrapper blog-list-container blog-details-container" style={{minHeight: this.props.visibleHeight.actualHeight}}>
            <div className="row no-gutters">
              <div className="col-12 text-center">
                <div className="details-pg-date">OCT 27, 2020</div>
                <h1>Vivamus ultricies mi a urna sodales lobortis</h1>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-12 text-center">
                <img src={require("../../../images/blog/details-cover.jpg")} alt="Cover"/>
              </div>

              <div className="col-12 blog-p">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.  
                </p>

                <h2 className="mt-5">Vivamus ultricies</h2>

                <ul>
                  <li>Sed posuere nulla a libero cursus, sit amet porta massa cursus.</li>
                  <li>Quisque bibendum justo ac lorem eleifend, non luctus risus euismod. Phasellus hendrerit ante sed laoreet tincidunt</li>
                  <li>Quisque porttitor nibh in diam consequat, nec pretium magna varius.</li>
                  <li>Integer rhoncus mauris ac dui dapibus, at sagittis nisl eleifend.</li>
                </ul>
                
                <h2 className="mt-5">Nam eu nunc porta efficitur</h2>
                
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. </p>

                <h2>Sed posuere nulla a libero cursus</h2>

                <p>
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.
                </p>
                <p>But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures.</p>

                <h2>Lorem ipsum dolor sit amet,</h2>
                <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>

                <h2>Quisque porttitor nibh in diam consequat</h2>
                <p>The actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. </p>

                <h2>Morbi et nunc vestibulum odio pellentesque finibus</h2>
                <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure.</p>

                <h2>Quisque porttitor nibh in diam consequat</h2>
                <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>

              </div>
            </div>
            
          </div>
        </div>
    )
  }
}

export default BlogDetailsContent;