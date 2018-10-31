import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../action/auth-actions';
import * as utils from '../../lib/util';
import AuthForm from '../auth-form/auth-form';

class LandingContainer extends React.Component {

  render() {
    let {params} = this.props.match;

    let handleComplete = params.auth === 'signup' ? this.props.signup : this.props.signin;

    return (
      <div>
        <AuthForm onComplete={handleComplete} auth={params.auth} />
      </div>
    );
  };
};

let mapStateToProps = state => { token = state.token }

let mapDispatchToProps = dispatch => {
  return {
    signup: dispatch(authActions.signupRequest(user)),
    signin: dispatch(authActions.signinRequest(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);