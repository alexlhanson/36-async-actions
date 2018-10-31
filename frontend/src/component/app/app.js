import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import LandingContainer from '../landing/landing';
import DashboardContainer from '../dashboard/dashboard';
import createAppStore from '../../lib/store';
const store = createAppStore();

export default class App extends React.Component {
  render() {
    return (
      <section id="redux-application">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <header>
                <h1>To-Do Lists</h1>
                <nav>
                  <ul>
                    <li><Link to="/welcome/signup">Signup</Link></li>
                    <li><Link to="/welcome/login">Log In</Link></li>
                    <li><Link to="/todo">To-Do</Link></li>
                  </ul>
                </nav>
              </header>
              <main>
                <Route exact path='/welcome/:auth' component={LandingContainer} />
                <Route exact path='/todo' component={DashboardContainer} />
              </main>
            </div>
          </BrowserRouter>
        </Provider>
      </section>
    )
  }
}
