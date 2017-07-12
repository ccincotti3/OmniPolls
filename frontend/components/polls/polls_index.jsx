import React from 'react';
import NavBarContainer from './nav_bar_container';
import TopBarContainer from './top_bar_container';
import GroupListContainer from '../groups/group_list_container';
import Rodal from 'rodal';
import QuestionFormContainer from '../questions/question_form_container';
import { introJs } from 'intro.js';


class PollsIndex extends React.Component{
  constructor(props) {
    super(props);
     this.state = {
       visible: false, button_text: "Create", style:{width: "",marginLeft:""}
        };
      this.show = this.show.bind(this)
  }

  show() {
    this.setState({ visible: !this.state.visible, button_text: this.state.button_text === "Create" ? "X" : "Create", style: this.state.style.width === "" ? {width: 40+"px", marginLeft: 60+"px"} : {width: "",marginLeft:""} });
    introJs().exit();
  }

  componentDidMount() {
    if(!localStorage["newVisit"]) {
      introJs().start();
      localStorage.setItem("newVisit", "true");
    }
  }

  hide() {
        this.setState({ visible: false});
    }

  render() {
    let topBar;
    let pollClass = "poll-page-container no-scroll";
    if(!this.state.visible){
      topBar = <TopBarContainer />;
      pollClass = "poll-page-container";
    }
    return (
      <div className={pollClass}>
        <div className="nav-bar-container">
          <NavBarContainer show={this.show} />
        </div>

        <div className="poll-index-content-wrapper">
          <aside className="aside-bar-create">
            <div>
              <button
                className="create-button"
                onClick={this.show}
                style={this.state.style}
                data-step="2"
                data-click
                data-intro="To create a new poll - click this button!"
                >{this.state.button_text}
              </button>
            </div>
          </aside>
          <div className="poll-index-contents">
            <div className="top-bar">{topBar}</div>
            <GroupListContainer show={this.show} />
            <Rodal className = "rodal-container" width={70} height={100} measure="%" visible={this.state.visible} onClose={this.hide.bind(this)} showMask={false}
            animation="fade" showCloseButton={false} >
              <QuestionFormContainer />
            </Rodal>
          </div>
        </div>
        <div className='bottom-box-index'>
          <footer className = "footer-splash"></footer>
          <div className="leftover-box"></div>
        </div>

      </div>
    );
  }
}

export default PollsIndex;
