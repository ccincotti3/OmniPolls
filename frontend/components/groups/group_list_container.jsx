import { connect } from 'react-redux';
import { fetchGroups, createGroup, deleteGroup, updateGroup }
  from '../../actions/group_actions';
import GroupList from './group_list';
import { allGroups } from '../../reducers/selectors';

const mapStateToProps = ({groups, errors}) => ({
  groups: allGroups(groups),
  errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroups: () => dispatch(fetchGroups()),
  createGroup: (group) => dispatch(createGroup(group)),
  deleteGroup: (group) => dispatch(deleteGroup(group)),
  updateGroup: (group) => dispatch(updateGroup(group))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
