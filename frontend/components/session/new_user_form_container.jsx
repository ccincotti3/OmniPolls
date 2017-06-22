import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import SignUpForm from './new_user_form';

const mapStateToProps = ({ errors}, ownProps) => ({
  errors
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
