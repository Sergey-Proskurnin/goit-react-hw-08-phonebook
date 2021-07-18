import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import s from './ContactForm.module.css';

import { addContact, getAllContacts } from 'redux/contacts';
// import { addContact } from 'redux/contacts/contacts-operations';
// import { getAllContacts } from 'redux/contacts/contacts-selectors';

class ContactForm extends Component {
  static defaultProps = {
    name: '',
    number: '',
  };

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    contacts: PropTypes.array,
    onSubmit: PropTypes.func,
  };

  state = {
    name: this.props.name,
    number: this.props.number,
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addNoRepeatContact = (state, contacts) => {
    const { name, number } = state;
    if (
      contacts.some(
        contacts => contacts.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.some(contacts => contacts.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }

    this.props.onSubmit(state);
    this.reset();
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts } = this.props;
    this.addNoRepeatContact(this.state, contacts);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId} className="lable">
            <span className={s.span}>Name</span>
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.nameInputId}
            />
          </label>

          <label htmlFor={this.numberInputId} className="lable">
            <span className={s.span}>Number</span>
            <input
              className={s.input}
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              id={this.numberInputId}
            />
          </label>

          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
