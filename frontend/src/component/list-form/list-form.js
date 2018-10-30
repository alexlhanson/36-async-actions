import React from 'react';

export default class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.list ? props.list.title : '',
      id: props.list ? props.list.id: '',
    }

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
    console.log(this.props);
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <div>
        <form id="list-form" onSubmit={this.handleSubmit}>
          <label id="list-category">
            <input type="text" name="title" value={this.state.title} placeholder="List Name" onChange={this.handleChange} />
          </label>
          <button type="submit" >{this.props.buttonText}</button>
        </form>
      </div>
    );
  };
};