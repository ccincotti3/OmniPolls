import React from 'react';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.logIn({user});
  }

  update(property) {
    return e => (this.setState({[property]: e.currentTarget.value}))
  }

  render() {
    return(
      <div className="logIn">
        <h1> Log in </h1>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input type="text"
            onChange = {this.update('firstName')}
            value={this.state.firstName}
          /><br />

          <label>Last Name</label>
          <input type="text"
            onChange = {this.update('lastName')}
            value={this.state.lastName}
          /><br />

          <label>Username</label>
            <input type="text"
              onChange = {this.update('username')}
              value={this.state.username}
            /><br />

          <label>Password</label>
          <input type="password"
            value={this.state.password}
            onChange = {this.update('password')}
            />
          <button type="submit">Log in</button>
        </form>
      </div>
    )

}


}

export default SessionForm;
