import React, { Component } from 'react'

class ContactForm extends Component {
  render() {
    return (
      <>
        <h1>Add a new contact</h1>
        <hr />
        <form onSubmit={this.props.handleSubmit}>
          <input
            name="contactName"
            type="text"
            value={this.props.name}
            onChange={this.props.handleInputChange}
            placeholder="Name"
          />
          <input
            name="contactSurname"
            type="text"
            value={this.props.surname}
            onChange={this.props.handleInputChange}
            placeholder="Surname"
          />
          <input
            name="contactPhone"
            type="text"
            value={this.props.phone}
            onChange={this.props.handleInputChange}
            placeholder="Phone number"
          />
          <div className="btn-group">
            <button type="submit" className="btn-primary">
              Save
            </button>
            <button type="button" className="btn-primary" onClick={() => this.props.cancelHandler()}>
              Cancel
            </button>
          </div>
        </form>
      </>
    )
  }
}

export default ContactForm
