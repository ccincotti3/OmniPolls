import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class PollsShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { id: this.props.match.params.id}
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.id)
    this.props.clearErrors()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.id !== this.state.id){
      this.setState({id: nextProps.match.params.id})
      this.props.clearErrors()
      this.props.fetchQuestion(nextProps.match.params.id)
    }
  }

  renderErrors() {
    return this.props.errors.map((el, i) => {
      return <h1 key={i}>{el}</h1>
    })
  }

  render() {
    if(this.props.errors.length > 0) {
      return(
        <div>
          {this.renderErrors()}
        </div>
      )
    }

    return (
      <div>
        <h1>A question lives here {this.state.id}</h1>
      </div>
    )
  }

}

export default withRouter(PollsShow);
