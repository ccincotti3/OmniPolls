import React from 'react';
import { Link } from 'react-router-dom';
import Splash from './splash.jsx';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const sessionLinks = () => (
      <div className="sticky">
        <nav className="header-group">
          <Link to="/"><span className= "logo"><i className="fa fa-line-chart"></i> OmniPolls</span></Link>
          <div className="nav-links">
            <Link to="/login">Log in</Link>
            <Link className="signup-button" to="/signup">Sign up</Link>
          </div>
        </nav>
      </div>

    );

    const personalGreeting = (currentUser, logOut) => (
      <div className="sticky">
        <nav className="header-group">
          <Link to="/"><span className= "logo"><i className="fa fa-line-chart"></i> OmniPolls</span></Link>
          <div className="nav-links">
            <Link to="/polls" role="button">My polls</Link>
            <button className="header-button" onClick={logOut}>Log Out</button>
          </div>
        </nav>
      </div>
    );

    const Greeting = ({ currentUser, logOut }) => (
      currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
    );

    return (
      <div>
        {Greeting(this.props)}
        <Splash />
        <footer className = "footer-splash"></footer>
      </div>
    );
  }

}

export default Greeting;
