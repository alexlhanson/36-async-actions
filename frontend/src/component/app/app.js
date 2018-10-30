import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import DashboardContainer from '../dashboard/dashboard';
import createAppStore from '../../lib/store';
const store = createAppStore();

export default class App extends React.Component{
  render(){
    return (
      <section id="redux-application">
        <Provider store={store}>
          <BrowserRouter>
          <div>
            <h1>To-Do Lists</h1>
            <Route exact path='/' component={DashboardContainer}/>
          </div>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}
