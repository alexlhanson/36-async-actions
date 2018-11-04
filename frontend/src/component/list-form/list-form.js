import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

export default class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list ? props.list : {title: ''},  
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log('__list__',this.props.list);
    console.log()
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <div>
        <form id="list-form" onSubmit={this.handleSubmit}>
          <label id="list-category">
            <input type="text" name="title" value={this.state.title} placeholder="List Name" onChange={this.handleChange} />
          </label>
          <Button type="submit" bsStyle="primary"><FontAwesomeIcon icon={faEdit} /></Button>
        </form>
      </div>
    );
  };
};
