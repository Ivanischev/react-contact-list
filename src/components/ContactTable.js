import React, { Component } from 'react'
import ContactItem from './ContactItem'

class ContactTable extends Component {
  render() {
    return (
      <>
        <h1>Contact List</h1>
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
        {/* <button onClick={() => {}}>Add Contact</button> */}
      </>
    )
  }
}

export default ContactTable
