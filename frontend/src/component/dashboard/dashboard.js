import React from 'react';

import ListForm from '../list-form/list-form';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">
        <ListForm />
        <p>Hello World</p>
      </div>
    );
  };
};