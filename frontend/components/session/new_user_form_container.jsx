import { connect } from 'react-redux';
import { signUp, clearErrors } from '../../actions/session_actions';
import SignUpForm from './new_user_form';

const mapStateToProps = ({session}, ownProps) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
