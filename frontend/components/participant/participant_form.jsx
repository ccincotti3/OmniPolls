import React from 'react';

class ParticipantForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
    };

    this.handleChoice = this.handleChoice.bind(this);
  }

  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.question_id);
    this.props.fetchPossibleResponses(this.props.match.params.question_id);
  }

  handleChoice(id, name) {
    this.setState({answered: true});
    this.props.createResponse(
      {
        response: {
          answer: name,
          possible_response_id: id
        }
      });
  }

  render(){

    if (this.props.question===undefined) {
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
    return(
      <div>
        <h1>{this.props.question.body}</h1>
        <ul>{choices}</ul>
      </div>
    );
  }
}

export default ParticipantForm;
