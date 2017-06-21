import { connect } from 'react-redux';
import { signUp } from '../../actions/session_actions';
import SignUpForm from './new_user_form';

const mapStateToProps = ({session}, ownProps) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (user) => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
