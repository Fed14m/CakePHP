import React from 'react';

const Loader = (props) => {

  const theme = (props.theme) ? props.theme : "dark"

  return (
    <div className="site-loader">
      {
        theme == "dark" &&
          <img className="bat-logo" src={require('../../../images/contact-us/bat-logo.png')} alt="Bat Logo"/>
      }

      {
        theme == "light" &&
          <img className="bat-logo" src={require('../../../images/contact-us/bat-logo-big-white.png')} alt="Bat Logo"/>
      }

    </div>
  )
};

export default Loader;