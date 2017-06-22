import React from 'react';
import { Link, withRouter } from 'react-router-dom'
const splash = (props) => {
    let buttonLink;
    if (Boolean(props.currentUser)) {
      buttonLink = <Link to="/polls">My polls</Link>
    } else {
      buttonLink = <Link to="/signup">Get started</Link>
    }
  return (
    <section className="splash-container">
      <div className="marquee">
        <div className="marquee-text-container">
          <h1>Live</h1>
          <h1>Interactive</h1>
          <h1>Audience</h1>
          <h1>Participation</h1>
        </div>
      </div>
      <div className = "splashBlock">
        <h2>Engage your audience or class in real time</h2>
        {buttonLink}
      </div>
      <div className='bottom-box'>
        <footer className = "footer-splash"></footer>
        <div className="leftover-box"></div>
      </div>
    </section>
  )
}


export default withRouter(splash);
