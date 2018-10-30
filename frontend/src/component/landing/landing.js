import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../action/auth-actions';
import AuthForm from '../auth-form/auth-form';

export default class LandingContainer extends React.Component {

  render() {
    return (
      <div>
        <AuthForm />
      </div>
    );
  };
};

let mapStateToProps = state => { token = state.token }

let mapDispatchToProps = dispatch => {
  return {
    signup: dispatch(authActions.signupRequest(user)),
    login: dispatch(authActions.signinRequest(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);