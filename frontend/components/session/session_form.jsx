import React from 'react';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.errorHandling = this.errorHandling.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.logIn({user});
  }

  update(property) {
    return e => (this.setState({[property]: e.currentTarget.value}))
  }

  errorHandling() {
    const errors = this.props.errors
    if(errors.length > 0) {
      return(
        <div className="login-errors">
          <ul>
              {errors.map((error, idx) =>
                <li key={idx}>{error}</li>
            )}
          </ul>
        </div>
  )
    }
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  render() {
    return(
      <div className="auth-form">
        <h1> Log in </h1>
        {this.errorHandling()}
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input type="text"
            onChange = {this.update('username')}
            value={this.state.username}
          /><br />

          <label>Password</label>
          <span><input type="password"
            value={this.state.password}
            onChange = {this.update('password')}
            /></span>
          <button type="submit">Log in</button>
        </form>
        <p>Need an account? <Link to="/signup" onClick={this.props.clearErrors}>Create one now</Link></p>
      </div>
    )

}


}

export default SessionForm;
