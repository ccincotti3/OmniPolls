import { Link } from 'react-router-dom'
import React from 'react';
class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {detail: false}
    this.handleUsernameClick = this.handleUsernameClick.bind(this);
  }

  handleUsernameClick() {
    this.setState({['detail']: !this.state.detail})
  }

  render() {

    const logOutDropdown = this.state.detail ?
      <li className="nav-drop-down" onClick={this.props.logOut}>Log out</li> : ''

    return (
      <div className="nav-blue">
        <div className="left-side-links">
          <Link className="nav-polls-button button" to="/polls">Polls</Link>
        </div>
        <div className="center-links">
        </div>
        <div className="right-side-links">
          <div className="dropdown-element-wrapper">
            <ul>
              {logOutDropdown}
            </ul>
          </div>
          <div className="current-user-button-container" onClick={this.handleUsernameClick}>
            <div className="current-user-button">
              <div className="username">{this.props.username}</div>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
