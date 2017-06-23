import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import NavBar from './nav_bar';
const mapStateToProps = ({session}) => ({
  username: session.currentUser.username
})

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
