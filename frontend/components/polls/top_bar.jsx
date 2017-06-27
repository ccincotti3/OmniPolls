import React from 'react';
import merge from 'lodash/merge';
class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUngroup = this.handleUngroup.bind(this);
  }

  handleDelete() {
    const {deleteQuestion, selectedQuestions, deleteGroup, selectedGroups} = this.props
    selectedQuestions.length > 0 ? deleteQuestion(selectedQuestions) : ""
    selectedGroups.length > 0 ? deleteGroup(selectedGroups) : ""
  }

  handleUngroup() {
    const {questionObjects, unGroupedId} = this.props
    questionObjects.forEach((q) => {
      const question_params = merge({}, q, {group_id: unGroupedId})
      this.props.updateQuestion({question: question_params});
    })
  }

  render() {
    return (
      <div className="top-bar-wrapper">
        <button className="top-bar-button" disabled={!this.props.selected} onClick={this.handleDelete}>Delete</button>
        <button className="top-bar-button" disabled={!this.props.selected}>Group</button>
        <button className="top-bar-button" onClick={this.handleUngroup} disabled={!this.props.selected}>Ungroup</button>
      </div>
    )
  }


}

export default TopBar
