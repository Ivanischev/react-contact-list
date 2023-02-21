import React, { Component } from 'react'

class ContactItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
        <td>{this.props.item.surname}</td>
        <td>{this.props.item.phone}</td>
        <td>
          <button onClick={() => this.props.removeHandler(this.props.item.id)}>Remove</button>
        </td>
      </tr>
    )
  }
}

export default ContactItem
