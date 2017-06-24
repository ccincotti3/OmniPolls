import React from 'react';
import NavBarContainer from './nav_bar_container';
import TopBarContainer from './top_bar_container';
import GroupListContainer from '../groups/group_list_container';

class PollsIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="poll-index-content-wrapper">
        <NavBarContainer />
        <TopBarContainer />
        <GroupListContainer />

      </div>
    )
  }
}

export default PollsIndex;
