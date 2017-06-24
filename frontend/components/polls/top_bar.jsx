import React from 'react';
class TopBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const {deleteQuestion, selectedQuestions, deleteGroup, selectedGroups} = this.props
    selectedQuestions.length > 0 ? deleteQuestion(selectedQuestions) : ""
    selectedGroups.length > 0 ? deleteGroup(selectedGroups) : ""
  }

  render() {
    return (
      <div className="top-bar-wrapper">
        <button className="top-bar-button" disabled={!this.props.selected} onClick={this.handleDelete}>Delete</button>
        <button className="top-bar-button" disabled={!this.props.selected}>Edit</button>
      </div>
    )
  }


}

export default TopBar
