import React, { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      </ul>
    );
  }
}
