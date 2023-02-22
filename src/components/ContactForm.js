import React, { Component } from 'react'

class ContactForm extends Component {
  render() {
    return (
      <>
        <h1>Add a new contact</h1>
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="contactName"
            type="text"
            value={this.props.name}
            onChange={this.props.handleInputChange}
            placeholder="Name"
            required
          />
          <input
            name="contactSurname"
            type="text"
            value={this.props.surname}
            onChange={this.props.handleInputChange}
            placeholder="Surname"
            required
          />
          <input
            name="contactPhone"
            type="text"
            value={this.props.phone}
            onChange={this.props.handleInputChange}
            placeholder="Phone number"
            required
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => this.props.cancelHandler()}>
            Cancel
          </button>
        </form>
      </>
    )
  }
}

export default ContactForm
