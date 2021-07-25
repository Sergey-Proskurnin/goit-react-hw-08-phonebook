import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import OnLoader from 'components/OnLoader';
import ContactForm from 'components/ContactForm';
import Container from 'components/Container';
import ContactContainer from 'components/ContactContainer';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getLoading } from 'redux/contacts/contacts-selectors';

import s from './Views.module.css';
import sAl from 'helpers/animation/animationLeft.module.css';
import sAr from 'helpers/animation/animationRight.module.css';

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
          <CSSTransition
            in={true}
            appear={true}
            timeout={250}
            classNames={sAl}
            unmountOnExit
          >
            <ContactForm />
          </CSSTransition>
        </Container>

        <Container title="Contacts">
          {this.props.isLoadingContacts ? (
            <OnLoader />
          ) : (
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames={sAr}
              unmountOnExit
            >
              <ContactContainer />
            </CSSTransition>
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
