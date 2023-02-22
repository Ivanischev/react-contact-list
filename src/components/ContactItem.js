import React, { Component } from 'react'

class ContactItem extends Component {
  render() {
    return (
      <div className="item">
        <div className="contact-info">
          <p className="item__fullname">
            {this.props.item.name} {this.props.item.surname}
          </p>
          <p className="item__phone">{this.props.item.phone}</p>
        </div>
        <button className="item__remove" onClick={() => this.props.removeHandler(this.props.item.id)}>
          Remove
        </button>
      </div>
    )
  }
}

export default ContactItem
