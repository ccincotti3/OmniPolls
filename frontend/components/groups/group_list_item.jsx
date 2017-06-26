import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import QuestionListContainer from '../questions/question_list_container';
import merge from 'lodash/merge';


class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false, select: true, edit: false, title: this.props.group.title};
    this.toggleDetail = this.toggleDetail.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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

  toggleEdit(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({edit: !this.state.edit});
  }

  update(e) {
    this.setState({title: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    const groupParams = merge({}, this.props.group, {title: this.state.title});
    this.props.updateGroup({group: groupParams});
    this.setState({edit: false});
  }

  render() {
    let title = this.state.title;
    let questions;
    let iconClassName = 'fa fa-caret-right';
    if (this.state.detail) {
      questions = <QuestionListContainer show ={this.props.show} group={this.props.group} />;
      iconClassName = 'fa fa-caret-right open';
    }

    let questionString;
      if (this.props.group.questions_array.length === 1) {
        questionString = "1 Question";
      } else if (this.props.group.questions_array.length === 0) {
        questionString = "0 Questions";
      }
      else {
        questionString = this.props.group.questions_array.length + " Questions";
      }

    let groupName;
    let onClickHandling;
    let editButton;

    if (!this.state.edit) {
      groupName = <div className="group-name" onClick={this.toggleEdit}>{title}</div>;
      onClickHandling = this.toggleDetail;
      editButton = <button type="text" onClick={this.toggleEdit}><i className="fa fa-pencil" aria-hidden="true"></i></button>;
    } else {
      groupName = <form className="group-name-form" onSubmit={this.handleSubmit}>
                    <input
                      className="group-name-input"
                      type="text"
                      value={this.state.title}
                      onChange = {this.update}
                      />
                    <button type="submit" className="group-form-submit-button">Save</button>
                    <input className = "cancel-button" type="button" value="Cancel" onClick={this.toggleEdit} />
                  </form>;
      onClickHandling = undefined;


    }

    return (
      <div >
        <li className="group-list-item" onClick={onClickHandling}>
          <div className="group-list-left-side">
          <i className={iconClassName}></i>
          <input className="checkbox-group"
            name="select"
            type="checkbox"
            onClick={(e) => {
              this.handleCheckbox(e);
            } } />

          {groupName}
          {editButton}
        </div>
          <div className="group-list-right-side">
            <p className>
              {questionString}
            </p>
          </div>
        </li>
        {questions}
      </div>
    );
  }
}

export default GroupListItem;
