import React from 'react';
import GroupListItem from './group_list_item';
import QuestionFormContainer from '../questions/question_form_container';


class GroupList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ungrouped_id: 0};
  }

  componentDidMount() {
    this.props.fetchGroups();

  }

  componentWillReceiveProps(ownProps) {
    let oldId = this.state.ungrouped_id;
    let flag = false;
    ownProps.groups.forEach((group)=>{
      if (group.title === "Ungrouped") {
        flag = true;
        if (oldId !== group.id) {
          this.setState({ungrouped_id: group.id});
          this.props.receiveUngroupedId(group.id);
        }
      }
    });
    if (!flag) {
      this.props.createGroup({group: {title: "Ungrouped", author_id: ownProps.groups[1].author_id}});
    }
  }

  render() {
    const {groups, errors, updateGroup, createGroup, selectElement, deselectElement, updateQuestion} = this.props;
    const groupItems = groups.map(group => (
          <GroupListItem
            key={ group.id }
            group={ group }
            updateGroup={ updateGroup }
            createGroup={ createGroup }
            selectElement= { selectElement }
            deselectElement={ deselectElement }
            updateQuestion={ updateQuestion }
            show ={this.props.show}
          />
    ));

    return(
      <div className="group-list-container">
        <ul className="group-list">
          { groupItems }
        </ul>
      </div>
    );
  }
}

export default GroupList;
