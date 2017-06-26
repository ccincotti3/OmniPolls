import React from 'react';
import {Link} from 'react-router-dom';

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
      <li className="question-list-item">
        <input
          name="select"
          type="checkbox"
          selected={this.state.select}
          onChange={this.handleCheckbox} />
        <Link to={'/polls/' + this.props.question.id}>{this.props.question.body}</Link>
      </li>
    )
  }
}

export default QuestionListItem;
