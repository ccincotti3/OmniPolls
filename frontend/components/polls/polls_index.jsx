import React from 'react';
import NavBarContainer from './nav_bar_container';
import TopBarContainer from './top_bar_container';
import GroupListContainer from '../groups/group_list_container';
import Rodal from 'rodal';
import QuestionFormContainer from '../questions/question_form_container';


class PollsIndex extends React.Component{
  constructor(props) {
    super(props);
     this.state = {
       visible: false, button_text: "Create", style:{width: "",marginLeft:""}
        };
  }

  show() {
    this.setState({ visible: !this.state.visible, button_text: this.state.button_text === "Create" ? "X" : "Create", style: this.state.style.width === "" ? {width: 40+"px", marginLeft: 60+"px"} : {width: "",marginLeft:""} });
  }

  hide() {
        this.setState({ visible: false});
    }

  render() {
    let topBar;
    if(!this.state.visible){
      topBar = <TopBarContainer />
    }
    return (
      <div className="poll-page-container">
        <div className="nav-bar-container">
          <NavBarContainer />
        </div>

        <div className="poll-index-content-wrapper">
          <aside className="aside-bar-create">
            <div>
              <button
                className="create-button"
                onClick={this.show.bind(this)}
                style={this.state.style}
                >{this.state.button_text}
              </button>
            </div>
          </aside>
          <div className="poll-index-contents">
            <div className="top-bar">{topBar}</div>
            <GroupListContainer />
            <Rodal className = "rodal-container" width={100} height={100} measure="%" visible={this.state.visible} onClose={this.hide.bind(this)} showMask={false}
            animation="fade" showCloseButton={false} >
              <QuestionFormContainer />
            </Rodal>
          </div>
        </div>
      </div>
    )
  }
}

export default PollsIndex;
