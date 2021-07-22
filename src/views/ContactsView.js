import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import OnLoader from 'components/OnLoader';

// import '../App.css';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getLoading } from 'redux/contacts/contacts-selectors';
import s from './Views.module.css';

class ContactsView extends Component {
  static propTypes = {
    onFetchContacts: PropTypes.func,
    isLoadingContacts: PropTypes.bool,
  };
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <div className={s.ContactsContainer}>
        <Container title="Phonebook">
          <ContactForm />
        </Container>
        <Container title="Contacts">
          {/* <h2 className="title">Contacts</h2> */}

          {this.props.isLoadingContacts ? (
            <OnLoader />
          ) : (
            <>
              <Filter />
              <ContactList />
            </>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onFetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
