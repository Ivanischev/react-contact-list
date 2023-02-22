import React, { Component } from 'react'
import ContactItem from './ContactItem'

class ContactsList extends Component {
  render() {
    return (
      <>
        <h1>Contacts</h1>
        <hr></hr>
        {this.props.contacts.map((item) => {
          return <ContactItem key={item.id} item={item} removeHandler={this.props.removeHandler} />
        })}
        <button className="btn-primary" onClick={() => this.props.showForm()}>
          Add Contact
        </button>
      </>
    )
  }
}

export default ContactsList
