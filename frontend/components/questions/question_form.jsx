import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Redirect } from 'react-router-dom'

class QuestionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: "", question_type: 1, group_id: 1, possible_responses: {0: '', 1: ''}, responseCount: 2
    }
    this.handleButton = this.handleButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteResponse = this.deleteResponse.bind(this);
  }

  handleButton(e) {
    e.preventDefault();
    this.setState({['responseCount']: this.state.responseCount + 1,
      ['possible_responses']:
      merge({}, this.state.possible_responses, {[this.state.responseCount]: '' } )
     })
  }

  deleteResponse(i) {
    let newState = merge({}, this.state)
    delete newState.possible_responses[i]
    this.setState(newState)
  }

  update(property) {
    return e => (this.setState({[property]: e.target.value}))
  }

  updateResponses(i) {
    return e => (this.setState({['possible_responses']: merge({}, this.state.possible_responses, {[i]: e.target.value } ) }));
  }

  updateQuestionType(choice) {
    return e => (this.setState({['question_type']: choice}))
  }

  handleSubmit(e) {
    e.preventDefault();
    const question = Object.assign({}, this.state);
    this.props.createQuestion({question});
    this.setState({
      body: "", question_type: "", group_id: 1, possible_responses: {0: '', 1: ''}, responseCount: 2})
  }


  render(){

    let responseList = [];
    Object.keys(this.state.possible_responses).forEach( i => {
      responseList.push(
        <div key={i} className="responses">
          <input key={i} type="text" placeholder={"Response goes here.. "}
            onChange={this.updateResponses(i)}
            value={this.state.possible_responses[i]}
            />
          <button onClick={e => (this.deleteResponse(i))} className="trashcan"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </div>
      )
    });

    const groupSelect = this.props.groups.map((group,i) =>
        <option key={i} value={group.id}>{group.title}</option>
      )

    let buttonStyle;
    let buttonStyle2;
    if (this.state.question_type === 1) {
      buttonStyle = {background:'white'}
      buttonStyle2 = {background:'gray'}
    }
    else {
      buttonStyle = {background: 'gray'}
      buttonStyle2 = {background: 'white'}
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
                  <rect width="40" height="19" x="15" y="10"></rect>
                </g>
                <g className="bar">
                  <text x="-10" y="41" dy=".35em">B</text>
                  <rect width="80" height="19" x="15" y="33"></rect>
                </g>
              </svg>
              Multiple Choice
              </div>

              <div className="selection-question-choice"
                style={buttonStyle2}
                onClick={this.updateQuestionType(2)}>
                <svg className="chart-image" width="90" height="70" viewBox="0 0 150 130" preserveAspectRatio="xMidYMid">
                  <g fill="none" fillRule="evenodd">
                  <path fill="#000" d="M26 39.5L18.5 32l-2.7-2.7L13 32l-7.4 7.5 2.7 2.7 7.5-7.5 7.4 7.5"></path>
                  <path fill="#848484" opacity=".35" d="M5.6 60.7l7.4 7.5 2.8 2.7 2.7-2.7 7.5-7.5-2.8-2.7-7.4 7.5L8.3 58"></path>
                  <path d="M129.4 47H57.6c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7h71.8c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7zM122.6 54.7h-65c-.9 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7h65c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7z" fill="#4F4F4F" opacity=".7"></path>
                  <path d="M137.7 34.7H49.3c-3.2 0-5.8 2.6-5.8 5.8v17.6c0 3.2 2.6 5.8 5.8 5.8h.5v8.6c0 .5.1 1.1.5 1.5.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l10.1-10.1h74.5c3.2 0 5.8-2.6 5.8-5.8V40.5c0-3.2-2.6-5.8-5.8-5.8zm1.9 23.4c0 1.1-.9 1.9-1.9 1.9H62.5c-.5 0-1 .1-1.4.5l-7.4 7.4v-6c0-1.1-.9-1.9-1.9-1.9h-2.4c-1.1 0-1.9-.9-1.9-1.9V40.5c0-1.1.9-1.9 1.9-1.9h88.4c1.1 0 1.9.9 1.9 1.9v17.6h-.1z" fill="#60E2DC"></path>
                </g>
                </svg>
                Q & A
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
                    <option disabled="true">Assign activity to a group</option>
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

    )

  }
}

export default withRouter(QuestionForm);
