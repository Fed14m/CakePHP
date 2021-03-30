import React from 'react';

const MapOnly = (props) => {
  //Mobile map image is 1000 X 1194
  //Calculate height based on this proportion if on smaller widths
  let mapHeight = 0
  if(props.winDimen.width <= 768) {
    //Calculate
    mapHeight = (props.winDimen.width * 1194) / 1000 
  } else {
    mapHeight = props.visibleHeight.actualHeight
  }

  //Set a token height if on mobile dimensions only for this component
  //const mapHeight = props.winDimen.width <= 768 ? 200 : props.visibleHeight.actualHeight
  
  return (
      <div ref={props.containerRef} className="container-fluid maponly-container-bg" style={{minHeight: mapHeight}}>
        <div className="section-wrapper maponly-container" style={{minHeight: mapHeight}}>
          <div className="row no-gutters">
            <div className="col-12"></div>
          </div>
        </div>
      </div>
  )
};

export default MapOnly;