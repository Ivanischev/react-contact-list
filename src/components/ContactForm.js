import React, { Component } from 'react'

class ContactForm extends Component {
  render() {
    return (
      <>
        <h1>Contact Form</h1>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            name
            <input name="contactName" type="text" value={this.props.name} onChange={this.props.handleInputChange} />
          </label>
          <label>
            surname
            <input
              name="contactSurname"
              type="text"
              value={this.props.surname}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            phone
            <input name="contactPhone" type="text" value={this.props.phone} onChange={this.props.handleInputChange} />
          </label>
          <button type="submit">Save</button>
        </form>
      </>
    )
  }
}

export default ContactForm
