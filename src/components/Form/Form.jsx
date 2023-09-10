import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  inputId = nanoid();
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    //console.log(e.target.name);
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;
    const findDuplicate = contacts.some(contact => contact.name === name);
    //this.props.onSubmit({ name, number, id: this.inputId });

    if (name.trim() === '') {
      return;
    }

    if (findDuplicate) {
      alert(`${name} is already in contacts!`);
    } else {
      onSubmit({ id: nanoid(), name, number });
      this.setState({ name: '', number: '' });
    }
    //this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            value={name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></input>
        </label>

        <label>
          Number
          <input
            value={number}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
