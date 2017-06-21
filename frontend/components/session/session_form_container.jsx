import { connect } from 'react-redux';
import { logIn } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({session}, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (user) => dispatch(logIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
