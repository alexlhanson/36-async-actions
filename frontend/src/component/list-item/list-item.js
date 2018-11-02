import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import ListForm from '../list-form/list-form';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.destroy(this.props.list);
    console.log(this.props);
  }


  render() {
    return (
      <div id="list-item">
        <button id="delete-button" onClick={this.handleClick}><FontAwesomeIcon icon={faTrash} className="fa-delete" /></button>
        <h4>{this.props.list.title}</h4>
        <ListForm buttonText="Update List" onComplete={this.props.update} list={this.props.list} />
      </div>
    );
  };
}

