import React, { Component } from 'react'
import ContactItem from './ContactItem'

class ContactTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Surname:</th>
            <th>Phone:</th>
            <th>Action:</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contacts.map((item) => {
            return <ContactItem key={item.id} item={item} removeHandler={this.props.removeHandler} />
          })}
        </tbody>
      </table>
    )
  }
}

export default ContactTable
