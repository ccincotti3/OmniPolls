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
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
      </nav>

    );

    const personalGreeting = (currentUser, logOut) => (
      <nav className="header-group">
        <Link to="/polls" role="button">My polls</Link>
        <button className="header-button" onClick={logOut}>Log Out</button>
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
