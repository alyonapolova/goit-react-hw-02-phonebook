import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { Filter } from './Form/Filter';
import { ContactList } from './Form/ContactList';
import React from 'react';
import PropTypes from 'prop-types';
import { FormDiv } from './Form/Form.styled';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <FormDiv>
          <h1>Phonebook</h1>
          <ContactForm
            onSubmit={this.handleAddContact}
            contacts={this.state.contacts}
          />
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList
            contacts={contacts}
            filter={filter}
            handleDelete={this.handleDelete}
          />
        </FormDiv>
      </>
    );
  }
}
App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
};
