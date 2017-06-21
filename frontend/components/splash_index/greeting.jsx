import React from 'react';
import { Link } from 'react-router-dom';
import Splash from './splash.jsx';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const sessionLinks = () => (
      <nav className="header-group">
        <div className="nav-links">
          <Link to="/login">Log in</Link>
          <Link className="signup-button" to="/signup">Sign up</Link>
        </div>
      </nav>

    );

    const personalGreeting = (currentUser, logOut) => (
      <nav className="header-group">
        <div className="nav-links">
          <Link to="/polls" role="button">My polls</Link>
          <button className="header-button" onClick={logOut}>Log Out</button>
        </div>
      </nav>
    );

    const Greeting = ({ currentUser, logOut }) => (
      currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
    );

    return (
      <div>
        {Greeting(this.props)}
        <Splash />
      </div>
    );
  }

}

export default Greeting;
