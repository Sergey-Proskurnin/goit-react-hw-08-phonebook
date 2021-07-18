import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OnLoader from 'components/OnLoader';

import './App.css';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getLoading } from 'redux/contacts/contacts-selectors';

class App extends Component {
  static propTypes = {
    onFetchContacts: PropTypes.func,
    isLoadingContacts: PropTypes.bool,
  };
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <Container title="Phonebook">
        <ContactForm />
        <h2 className="title">Contacts</h2>
        {this.props.isLoadingContacts ? (
          <OnLoader />
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onFetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
