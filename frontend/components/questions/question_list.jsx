import React from 'react';
import QuestionListItem from './question_list_item';
import { Draggable } from 'react-drag-and-drop';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
}

  render() {
    const {questions, selectElement, deselectElement} = this.props;
    const listItems = questions.map((el, i) =>
      <Draggable key={i} type="question" data={[el.id]}><QuestionListItem key={i}
        question={el}
        selectElement={selectElement}
        deselectElement={deselectElement}
        /></Draggable>
    );
    return (
      <ul className="question-list">
        {listItems}
        <button className="add-question-link" onClick={this.props.show} type="text">+ Add a question</button>
      </ul>
    );
  }
}

export default QuestionList;
