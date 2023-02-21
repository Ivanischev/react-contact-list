import React, { Component } from 'react'
import ContactForm from './ContactForm'
import ContactTable from './ContactTable'

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

  removeHandler = (id) => {
    const filteredContacts = this.state.contacts.filter((contact) => contact.id !== id)
    this.setState({
      contacts: filteredContacts,
    })
  }

  render() {
    return (
      <>
        <ContactForm handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} />
        <ContactTable contacts={this.state.contacts} removeHandler={this.removeHandler} />
      </>
    )
  }
}

export default ContactList