import { connect } from 'react-redux';
import { fetchGroups, createGroup, deleteGroup, updateGroup }
  from '../../actions/group_actions';
import GroupList from './group_list';
import { allGroups } from '../../reducers/selectors';
import {selectElement, deselectElement } from '../../actions/selection_actions'

const mapStateToProps = ({groups, errors}, ownProps) => ({
  groups: allGroups(groups),
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroups: () => dispatch(fetchGroups()),
  createGroup: (group) => dispatch(createGroup(group)),
  deleteGroup: (group) => dispatch(deleteGroup(group)),
  updateGroup: (group) => dispatch(updateGroup(group)),
  selectElement: (group, type) => dispatch(selectElement(group, type)),
  deselectElement: (group, type) => dispatch(deselectElement(group, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
