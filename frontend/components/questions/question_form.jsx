import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Redirect } from 'react-router-dom';

class QuestionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      question_type: 1,
      group_id: 0,
      possible_responses: {0: {possible_response_name: ''}, 1: {possible_response_name: ''}},
      responseCount: 2,
    };
    this.handleButton = this.handleButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteResponse = this.deleteResponse.bind(this);
  }

  handleButton(e) {
    e.preventDefault();
    this.setState({['responseCount']: this.state.responseCount + 1,
      ['possible_responses']:
      merge({}, this.state.possible_responses, {[this.state.responseCount]: {possible_response_name: ''} } )
    });
  }

  deleteResponse(i) {
    let newState = merge({}, this.state);
    delete newState.possible_responses[i];
    this.setState(newState);
  }

  update(property) {
    return e => (this.setState({[property]: e.target.value}));
  }

  updateResponses(i) {
    return e => (this.setState({['possible_responses']: merge({}, this.state.possible_responses, {[i]: {possible_response_name: e.target.value }}  ) }));
  }

  updateQuestionType(choice) {
    return e => (this.setState({['question_type']: choice}));
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state);
    this.props.createQuestion({question}, question.possible_responses);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.groups.length > 0) {
      this.setState({
        group_id: newProps.groups[0].id
      });
    }
  }


  render(){

    if(this.props.groups.length === 0){
      return(
        <h1></h1>
      );
    }

    let responseList = [];
    Object.keys(this.state.possible_responses).forEach( i => {
      responseList.push(
        <div key={i} className="responses">
          <input key={i} type="text" placeholder={"Response goes here.. "}
            onChange={this.updateResponses(i)}
            value={this.state.possible_responses[i]['possible_response_name']}
            />
          <button onClick={e => (this.deleteResponse(i))} className="trashcan"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
      );
    });

    const groupSelect = this.props.groups.map((group,i) =>
        <option key={i} value={group.id}>{group.title}</option>
      );

    let buttonStyle;
    let buttonStyle2;
    if (this.state.question_type === 1) {
      buttonStyle = {background:'white'};
      buttonStyle2 = {background:'gray'};
    }
    else {
      buttonStyle = {background: 'gray'};
      buttonStyle2 = {background: 'white'};
    }

    return (
      <div className="modal-wrapper">
        <div className="modal-wrapper-center">
          <form onSubmit={this.handleSubmit}>
            <div className="modal-selection-options">

              <div className="selection-question-choice"
                style={buttonStyle}
                onClick={this.updateQuestionType(1)}>
                <svg className="chart-image" width="110" height="60" viewBox="0 0 110 70">

                <g className="bar">
                  <text x="-10" y="19.5" dy=".35em">A</text>
                  <rect fill="#60E2DD" width="40" height="19" x="15" y="10"></rect>
                </g>
                <g className="bar">
                  <text x="-10" y="41" dy=".35em">B</text>
                  <rect fill="#60E2DD" width="80" height="19" x="15" y="33"></rect>
                </g>
              </svg>
              Multiple Choice
              </div>
            </div>

            <div className="edit-inputs">
              <div className="modal-question-title">
                <input type="text" placeholder="Question" onChange={this.update("body")} value={this.state.body} />
              </div>

              <div className="modal-answers">
                {responseList}
              </div>

              <div className="add-answers-button">
                <button onClick={this.handleButton}>+</button>
              </div>
            </div>

            <div className="bottom-form">
              <div className="component-activity-creator">
                <div className="group-selector slate">
                  <select className="group-dropdown" value={this.state.group_id} onChange={this.update("group_id")}>
                    <option disabled>Choose a group</option>
                    {groupSelect}
                  </select>
                  <div className="creator-actions"></div>
                </div>
              </div>
              <button className="submit-form-button" type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>

    );

  }
}

export default withRouter(QuestionForm);
