import superagent from 'superagent';

/********************************************************************************
*         synchronous                                                           *
********************************************************************************/

export const tokenSet = token => {
  return {
    type: token,
    payload: token,
  }
}

export const tokenDestroy = () => {
  return {type: token}
}

/********************************************************************************
*        Asynchronous                                                           *
********************************************************************************/

export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    // .withCredentials()
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.setItem('token', res.text);
      return res
    })
    .catch(console.error)
}

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/signin`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(res => {
      dispatch(tokenDestroy(res.text));
      localStorage.setItem('token', res.text);
      return res;
    })
    .catch(console.error)
}