import React, { Component } from 'react'

class ContactList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        { id: 1, name: 'Ivan', surname: 'Ivanishchev', phone: '050050505005' },
        { id: 2, name: 'Ivan', surname: 'Ivanishchev', phone: '050050505005' },
        { id: 3, name: 'Ivan', surname: 'Ivanishchev', phone: '050050505005' },
      ],
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newContact = {
      id: Date.now(),
      name: this.state.contactName,
      surname: this.state.contactSurname,
      phone: this.state.contactPhone,
    }
    this.setState({
      contacts: [...this.state.contacts, newContact],
    })
    event.target.reset()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input name="contactName" type="text" value={this.state.name} onChange={this.handleInputChange} />
        </label>
        <label>
          surname
          <input name="contactSurname" type="text" value={this.state.surname} onChange={this.handleInputChange} />
        </label>
        <label>
          phone
          <input name="contactPhone" type="text" value={this.state.phone} onChange={this.handleInputChange} />
        </label>
        <button type="submit">save</button>
      </form>
    )
  }
}

export default ContactList
