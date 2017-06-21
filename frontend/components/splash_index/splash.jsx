import React from 'react';
import { Link, withRouter } from 'react-router-dom'
const splash = () => {
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
        <Link className="" to="/signup">Get started</Link>
      </div>
    </section>
  )
}


export default withRouter(splash);
