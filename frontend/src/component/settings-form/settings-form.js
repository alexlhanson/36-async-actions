import React from 'react';

export default class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.list ? props.list : { title: '' },

      this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <div>
        <form className="profile-form" onSubmit={this.handleSubmit}>
          <label>
            <input type="text" name="first-name" value={this.state.title} placeholder="First Name" onChange={this.handleChange} />
          </label>
          <label>
            <input type="text" name="last-name" value={this.state.title} placeholder="Last Name" onChange={this.handleChange} />
          </label>
          <label>
            <input type="text" name="first-name" value={this.state.title} placeholder="First Name" onChange={this.handleChange} />
          </label>
          <textarea name="bio" cols="40" rows="20" value={this.state.bio} onChange={this.handleChange}></textarea>
          <Button type="submit" bsStyle="primary"><FontAwesomeIcon icon={faEdit} /></Button>
        </form>
      </div >
    );
  };
};