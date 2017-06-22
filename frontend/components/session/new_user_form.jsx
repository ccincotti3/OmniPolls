import React from 'react';
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.errorHandling = this.errorHandling.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signUp({user});
  }

  update(property) {
    return e => (this.setState({[property]: e.currentTarget.value}))
  }

  errorHandling() {
    const errors = this.props.errors
    this.clearErrors()
    if(errors.length > 0) {
      return(
        <div className="signup-errors">
          <h2>Oops! We couldn't create your account.</h2>
          <p>There were problems with the following fields:</p>
          <ul>
              {errors.map((error, idx) =>
                <li key={idx}>{error}</li>
            )}
        </ul>
      </div>
  )
    }
  }

  render() {


    return(
      <div className="auth-form">
        <h1 id="signup-header"> Sign up </h1>
        {this.errorHandling()}
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input type="text"
            onChange = {this.update('first_name')}
            value={this.state.first_name}
          /><br />

          <label>Last Name</label>
          <input type="text"
            onChange = {this.update('last_name')}
            value={this.state.last_name}
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
          <button type="submit">Create my OmniPolls account</button>
        </form>
      </div>
    )

}


}

export default SignUpForm;
