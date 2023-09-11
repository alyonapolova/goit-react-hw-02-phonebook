import React from 'react';

export const ContactList = ({ contacts, filter, handleDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
