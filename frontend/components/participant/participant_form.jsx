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
    this.handleEvents = this.handleEvents.bind(this);
  }

  componentWillMount() {
    this.props.fetchActive(this.props.match.params.username);
    this.pusher = new Pusher('adbd6f81e6cb6851b188', {
      encrypted: true
    });

    this.channel = this.pusher.subscribe('response_channel');
  }

  componentDidMount() {
    let myStorage;
    if(localStorage[this.props.question.id.toString()]) {
      myStorage = JSON.parse(localStorage[this.props.question.id.toString()]);
    }
    if(myStorage) {
      this.setState({answered: myStorage['answered'], choice:myStorage['answer']});
    }
    this.channel.bind('new-active', this.handleEvents);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.question !== newProps.question) {
      this.props.fetchPossibleResponses(newProps.question.id);
      this.setState({load: true});
      let myStorage;
      if(localStorage[newProps.question.id.toString()]) {
        myStorage = JSON.parse(localStorage[newProps.question.id.toString()]);
      }
      if(myStorage) {
        this.setState({answered: myStorage['answered'], choice:myStorage['answer']});
      } else {
        this.setState({answered: false, choice: -1})
      }
    }
  }

  componentWillUnmount() {
    this.channel.unbind();
  }

  handleEvents() {
    this.props.fetchActive(this.props.match.params.username);
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
    const storage = { 'answered': true, 'questionId': this.props.question.id, 'answer': id };
    localStorage.setItem(this.props.question.id.toString(), JSON.stringify(storage));
  }

  handleClear() {
    this.props.deleteResponse(this.state.choice);
    this.setState({choice: -1, answered: false});

    const storage = { 'answered': false, 'questionId': this.props.question.id, 'answer': -1 };
    localStorage.setItem(this.props.question.id.toString(), JSON.stringify(storage));

  }

  render(){
    if (!this.state.load) {

      return(
        <h1></h1>
      );
    }



    const choices = (
      this.props.choices.map((choice, i) => {
        let className="";
        if (this.state.choice === choice.id) {
          className="participant-form selected"
        }
        return (<li key={i}>
                <button disabled={this.state.answered} className={className} onClick={e => this.handleChoice(choice.id, choice.possible_response_name)}>
                  {choice.possible_response_name}
                </button>
              </li>
            );
        })
      );
      let responseRecorded;
      if (this.props.question.id !== -1 ) {
        responseRecorded = this.state.answered ? "Response recorded" : "You can respond once";
      } else {
        responseRecorded = "As soon as " + this.props.match.params.username + " displays a poll\
         we'll update this area to give you the voting options.\
         Easy as pie. Just hang tight, you're ready to go.";
      }

      let clearResponse;
      if (this.state.answered) {
        clearResponse = <button className= "delete-response" onClick={this.handleClear}>Clear Response</button>;
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
