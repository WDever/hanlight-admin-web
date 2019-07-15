import LoginComponent from 'components/user/login';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = ({}) => ({});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
