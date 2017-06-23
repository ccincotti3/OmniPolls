import React from 'react';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {questions} = this.props;
    const listItems = questions.map((el, i) => <li key={i}>{el.body}</li>);
    listItems;
    return (
      <ul className="question-list">
      {listItems}
    </ul>
    )
  }
}

export default QuestionList;
