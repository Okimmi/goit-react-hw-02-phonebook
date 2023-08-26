import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';
import { Layout } from './Layout';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  isAlreadyExists = inputName => {
    return this.state.contacts.some(({ name }) => name === inputName);
  };

  addContact = (values, actions) => {
    if (this.isAlreadyExists(values.name)) {
      window.alert(values.name + ' is already in contacts.');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...values, id: nanoid() }],
      }));
      actions.resetForm();
    }
  };

  getFilter = input => {
    this.setState({ filter: input });
  };

  renderContactsByFilter = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  deleteContact = idRemove => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== idRemove),
    }));
  };

  render() {
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <Filter addFilter={this.getFilter}></Filter>
        <Contacts
          contacts={this.renderContactsByFilter()}
          deleteContact={this.deleteContact}
        ></Contacts>
        <GlobalStyle></GlobalStyle>
      </Layout>
    );
  }
}
