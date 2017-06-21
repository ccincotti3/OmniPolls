import React from 'react';

class GroupListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.group.title}</li>
    )
  }
}

export default GroupListItem;
