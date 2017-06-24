import React from 'react';

class QuestionListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { select: true };
    this.handleCheckbox = this.handleCheckbox.bind(this);
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

  render() {
    return (
      <li>
        <input
          name="select"
          type="checkbox"
          onChange={this.handleCheckbox} />
        {this.props.question.body}
      </li>
    )
  }
}

export default QuestionListItem;
