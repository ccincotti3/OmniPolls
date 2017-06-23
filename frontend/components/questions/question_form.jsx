import React from 'react';
import merge from 'lodash/merge';

class QuestionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      body: "", question_type: "", group_id: 1, possible_responses: {0: '', 1: ''}, responseCount: 2
    }
    this.handleButton = this.handleButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleButton() {
    this.setState({['responseCount']: this.state.responseCount + 1,
      ['possible_responses']:
      merge({}, this.state.possible_responses, {[this.state.responseCount]: '' } )
     })
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
    for(let i = 0; i < this.state.responseCount; i++) {
        responseList.push(
          <input key={i} type="text" placeholder={"Response " + i}
            onChange={this.updateResponses(i)}
            value={this.state.possible_responses[i]}
            />)
    }

    const groupSelect = this.props.groups.map((group,i) =>
        <option key={i} value={group.id}>{group.title}</option>
      )

    return (
      <div className="modal-wrapper">
        <div className="modal-wrapper-center">
          <form onSubmit={this.handleSubmit}>
            <div className="modal-selection-options">

              <div className="selection-multiple-choice" onClick={this.updateQuestionType(1)}>
                Multiple Choice
              </div>

              <div className="selection-multiple-choice" onClick={this.updateQuestionType(2)}>
                Q & A
              </div>
            </div>

            <div className="modal-question-title">
              <input type="text" placeholder="Question" onChange={this.update("body")} value={this.state.body} />
            </div>

            <div className="modal-answers">
              {responseList}
            </div>

            <div className="add-answers-button">
              <button onClick={this.handleButton}>+</button>
            </div>

            <div className="component-activity-creator">
              <div className="group-selector"></div>
                <select value={this.state.group_id} onChange={this.update("group_id")}>
                  {groupSelect}
                </select>
              <div className="creator-actions"></div>
            </div>
            <button type="submit">Submit Question</button>
          </form>
        </div>
      </div>

    )

  }
}

export default QuestionForm;
