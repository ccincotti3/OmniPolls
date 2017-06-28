
import React from 'react';
import { Link } from 'react-router-dom'

export const NavBar = (props) => {
    const sessionLinks = () => (
      <div className="sticky">
        <nav className="header-group participant">
          <Link to="/"><span className= "logo participant"><i className="fa fa-line-chart"></i> OmniPolls</span></Link>
          <div className="nav-links participant">
            <Link to="/login">Log in</Link>
            <Link className="signup-button participant" to="/signup">Sign up</Link>
          </div>
        </nav>
      </div>

    );

    const personalGreeting = (currentUser, logOut) => (
      <div className="sticky">
        <nav className="header-group participant">
          <Link to="/"><span className= "logo participant"><i className="fa fa-line-chart"></i> OmniPolls</span></Link>
          <div className="nav-links participant">
            <Link className="signup-button participant" to="/polls" role="button">My polls</Link>
            <button className="header-button participant" onClick={logOut}>Log Out</button>
          </div>
        </nav>
      </div>
    );

    const Greeting = ({ currentUser, logOut }) => (
      currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
    )

    return (
      <div>
        {Greeting(props)}
      </div>
    );
  }

export default NavBar;
