import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Log in</Link>
    <Link to="/signup">Sign up</Link>
  </nav>
);

const personalGreeting = (currentUser, logOut) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logOut}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logOut }) => (
  currentUser ? personalGreeting(currentUser, logOut) : sessionLinks()
);

export default Greeting;
