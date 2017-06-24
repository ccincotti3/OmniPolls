import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import QuestionListContainer from '../questions/question_list_container';


class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false, select: true };
    this.toggleDetail = this.toggleDetail.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState( {detail: !this.state.detail} );
  }

  handleCheckbox(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  
    this.setState({
      ['select']: !this.state.select
    });
    if(this.state.select) {
      this.props.selectElement(this.props.group, "groups");

    } else {
      this.props.deselectElement(this.props.group, "groups");
    }
  }

  render() {
    const { title } = this.props.group
    let questions;
    if (this.state.detail) {
      questions = <QuestionListContainer group={this.props.group} />
    }
    return (
      <div >
        <li className="group-list-item" onClick={this.toggleDetail}>
          <input className="checkbox-group"
            name="select"
            type="checkbox"
            onClick={(e) => {
              this.handleCheckbox(e)
            } } />

          <div className="group-name" >{title}</div>
        </li>
        {questions}
      </div>
    )
  }
}

export default GroupListItem;
