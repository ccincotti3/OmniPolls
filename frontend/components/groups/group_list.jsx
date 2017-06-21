import React from 'react';
import GroupListItem from './group_list_item';

class GroupList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchGroups();
  }

  render() {
    const {groups, errors, updateGroup, createGroup} = this.props
    const groupItems = groups.map(group => (
        <GroupListItem
          key={ group.id }
          group={ group }
          updateGroup={ updateGroup }
          createGroup={ createGroup }
        />
    ));

    return(
      <div>
        <ul className="group-list">
          { groupItems }
        </ul>
      </div>
    )
  }
}

export default GroupList