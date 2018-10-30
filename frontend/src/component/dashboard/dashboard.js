import React from 'react';
import { connect } from 'react-redux';
import { listCreate, listDestroy, listUpdate } from '../../action/list-actions';

import ListForm from '../list-form/list-form';
import ListItem from '../list-item/list-item';



class DashboardContainer extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <p>List Maker is an application for making lists.  Simply add code to the input form and submit it to create a new list</p>
        <ListForm buttonText="Create List" onComplete={this.props.actions.listCreate} />
        <ul>
          {this.props.lists.map(list => {
            return <li key={list.id}>
              <ListItem id="list-item" list={list} destroy={this.props.actions.listDestroy} update={this.props.actions.listUpdate} />
            </li>
          })}
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    lists: state.lists,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    actions: {
      listCreate: list => dispatch(listCreate(list)),
      listDestroy: list => dispatch(listDestroy(list)),
      listUpdate: list => dispatch(listUpdate(list)),
      // listsFetch: () => dispatch(listActions.listsFetchRequest()), 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);