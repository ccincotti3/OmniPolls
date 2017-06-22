import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session, errors}, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: errors.errors
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
