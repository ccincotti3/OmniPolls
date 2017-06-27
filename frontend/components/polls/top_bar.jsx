import React from 'react';
import merge from 'lodash/merge';
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUngroup = this.handleUngroup.bind(this);
    this.handleGroup = this.handleGroup.bind(this);
  }

  handleDelete() {
    const {deleteQuestion, selectedQuestions, deleteGroup, selectedGroups} = this.props;
    selectedQuestions.length > 0 ? deleteQuestion(selectedQuestions) : ""
    selectedGroups.length > 0 ? deleteGroup(selectedGroups) : ""
  }

  handleUngroup() {
    const {questionObjects, unGroupedId} = this.props;
    questionObjects.forEach((q) => {
      const question_params = merge({}, q, {group_id: unGroupedId});
      this.props.updateQuestion(question_params);
    });
  }

  handleGroup() {
    const newGroup = {group: {title: "New Group", author_id: this.props.authorId}};
    this.props.createGroupforGrouping(newGroup, this.props.questionObjects);
  }

  render() {
    return (
      <div className="top-bar-wrapper">
        <button className="top-bar-button" disabled={!this.props.selected} onClick={this.handleDelete}>Delete</button>
        <button className="top-bar-button" onClick={this.handleGroup} disabled={!this.props.QuestionIsSelected}>Group</button>
        <button className="top-bar-button" onClick={this.handleUngroup} disabled={!this.props.QuestionIsSelected}>Ungroup</button>
      </div>
    );
  }


}

export default TopBar;
