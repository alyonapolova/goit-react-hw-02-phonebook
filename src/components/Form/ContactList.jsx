import React from 'react';
import { ListUl, ListLi, ButtonLi } from './Form.styled';
export const ContactList = ({ contacts, filter, handleDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ListUl>
      {filteredContacts.map(contact => (
        <ListLi key={contact.id}>
          {contact.name}: {contact.number}{' '}
          <ButtonLi onClick={() => handleDelete(contact.id)}>Delete</ButtonLi>
        </ListLi>
      ))}
    </ListUl>
  );
};
