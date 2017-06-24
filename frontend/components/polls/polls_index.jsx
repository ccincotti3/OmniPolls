import React from 'react';
import NavBarContainer from './nav_bar_container';
import TopBarContainer from './top_bar_container';
import GroupListContainer from '../groups/group_list_container';
import Rodal from 'rodal';
import QuestionFormContainer from '../questions/question_form_container';


class PollsIndex extends React.Component{
  constructor(props) {
    super(props);
     this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
        this.setState({ visible: false });
    }

  render() {
    return (
      <div className="poll-page-container">
        <div className="poll-index-content-wrapper">
          <NavBarContainer />
          <TopBarContainer />
          <aside>
            <div>
              <button onClick={this.show.bind(this)}>Create</button>
            </div>
          </aside>
          <GroupListContainer />
          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
            <QuestionFormContainer />
          </Rodal>
        </div>
      </div>
    )
  }
}

export default PollsIndex;
