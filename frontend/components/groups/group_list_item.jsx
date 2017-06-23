import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import QuestionListContainer from '../questions/question_list_container';


class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
    this.toggleDetail = this.toggleDetail.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState( {detail: !this.state.detail} );
  }

  handleCheckbox(e) {
    this.props.selectElement(this.props.group, "group");
  }

  render() {
    const { title } = this.props.group
    let questions;
    if (this.state.detail) {
      questions = <QuestionListContainer group={this.props.group} />
    }
    return (
      <li className="group-list-item">
        <input
            name="selected"
            type="checkbox"
            onChange={this.handleCheckbox} />
        <div onClick={this.toggleDetail}>{title}</div>
        {questions}
      </li>
    )
  }
}

export default GroupListItem;
