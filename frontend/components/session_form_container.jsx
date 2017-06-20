import { connect } from 'react-redux';
import { logIn } from '../actions/session_actions';
const mapStateToProps = ({currentUser, errors}, ownProps) => ({
  loggedIn: !!currentUser,
  errors
});

const mapDispatchtoProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
});
