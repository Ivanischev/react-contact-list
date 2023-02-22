import React, { Component } from 'react'
import ContactForm from './ContactForm'
import ContactsList from './ContactsList'

class ContactBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        { id: 1, name: 'John', surname: 'Doe', phone: '+380500505050' },
        { id: 2, name: 'Thomas', surname: 'Anderson', phone: '380500505050' },
        { id: 3, name: 'Ivan', surname: 'Ivanishchev', phone: '380500505050' },
      ],
      show: false,
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
      show: false,
    })
    event.target.reset()
  }

  removeHandler = (id) => {
    const filteredContacts = this.state.contacts.filter((contact) => contact.id !== id)
    this.setState({
      contacts: filteredContacts,
    })
  }

  showForm = () => {
    this.setState({
      show: true,
    })
  }

  cancelHandler = () => {
    this.setState({
      show: false,
    })
  }

  render() {
    return (
      <>
        {this.state.show ? (
          <ContactForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
            cancelHandler={this.cancelHandler}
          />
        ) : (
          <ContactsList contacts={this.state.contacts} removeHandler={this.removeHandler} showForm={this.showForm} />
        )}
      </>
    )
  }
}

export default ContactBook
