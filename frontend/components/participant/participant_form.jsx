import React from 'react';
import NavBarContainer from './nav_bar_container';

class ParticipantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      load: false,
      choice: -1,
    };

    this.handleChoice = this.handleChoice.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  componentWillMount() {
    this.props.fetchActive(this.props.match.params.username);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.question !== newProps.question) {
      this.props.fetchPossibleResponses(newProps.question.id);
      this.setState({load: true});
    }
  }

  handleChoice(id, name) {
    this.setState({answered: true, choice: id});
    this.props.createResponse(
      {
        response: {
          answer: name,
          possible_response_id: id
        }
      });
    this.props.fetchPossibleResponses(this.props.question.id);
  }

  handleClear() {
    this.props.deleteResponse(this.state.choice);
    this.setState({choice: -1, answered: false});
    this.props.fetchPossibleResponses(this.props.question.id);
  }

  render(){
    if (!this.state.load) {

      return(
        <h1></h1>
      );
    }



    const choices = (
      this.props.choices.map((choice, i) => {
        return (<li key={i}>
                <button disabled={this.state.answered} onClick={e => this.handleChoice(choice.id, choice.possible_response_name)}>
                  {choice.possible_response_name}
                </button>
              </li>
            );
        })
      );

      const responseRecorded = this.state.answered ? "Response recorded" : "You can respond once";
      let clearResponse;
      if (this.state.answered) {
        clearResponse = <button onClick={this.handleClear}>Clear Response</button>;
      }
    return(
      <div>
        <NavBarContainer/>
        <section className="participant-main-content">
          <div className="participant-form">
            <h1>{this.props.question.body}</h1>
            <h2>{responseRecorded}</h2>
            <ul>{choices}</ul>
            {clearResponse}
          </div>
        </section>
      </div>
    );
  }
}

export default ParticipantForm;
