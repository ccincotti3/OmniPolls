import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState( {detail: !this.state.detail} );
  }

  render() {
    const { title } = this.props.group
    let questions;
    if (this.state.detail) {
        questions = "Hey";
    }
    return (
      <li className="group-list-item">
        <div onClick={this.toggleDetail}>{title}</div>
          <ul className="question-list">
            {questions}
          </ul>
      </li>
    )
  }
}

export default GroupListItem;
