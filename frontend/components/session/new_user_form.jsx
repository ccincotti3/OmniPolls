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
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signUp({user});
  }

  update(property) {
    return e => (this.setState({[property]: e.currentTarget.value}))
  }

  render() {
    return(
      <div className="auth-form">
        <h1> Sign up </h1>
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
          <button type="submit">Create my account</button>
        </form>
      </div>
    )

}


}

export default SignUpForm;
