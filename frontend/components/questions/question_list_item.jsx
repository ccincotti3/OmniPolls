import React from 'react';
import {Link} from 'react-router-dom';
import merge from 'lodash/merge'


class QuestionListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { select: true };
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleActive = this.handleActive.bind(this);
  }

  handleCheckbox(e) {
    this.setState({
      ['select']: !this.state.select
    });
    if(this.state.select) {
      this.props.selectElement(this.props.question, "questions");

    } else {
      this.props.deselectElement(this.props.question, "questions");
    }
  }

  handleActive(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (this.props.active) {
      this.props.updateActive({question_id: null});
    } else {
      this.props.updateActive({question_id: this.props.question.id});
    }
  }

  render() {
    let questionString;
      if (this.props.question.total_responses === 1) {
        questionString = "1 Response";
      } else if (this.props.question.total_responses === (0 || undefined)) {
        questionString = "0 Responses";
      }
      else {
        questionString = this.props.question.total_responses + " Responses";
      }

      let activeClassName;
      if (this.props.active) {
        activeClassName="question-list-item active";
      } else {
        activeClassName="question-list-item";
      }
    return (
      <li className={activeClassName}>
        <div className="question-list-item-left">
          <input
            name="select"
            type="checkbox"
            selected={this.state.select}
            onChange={this.handleCheckbox} />
          <Link to={'/polls/' + this.props.question.id}>{this.props.question.body}</Link>
        </div>
        <div className="question-list-item-right">
          <button onClick={this.handleActive}><i className="fa fa-link" aria-hidden="true"></i></button>
          <p>{questionString}</p>
        </div>
      </li>
    );
  }
}

export default QuestionListItem;
