import { connect } from 'react-redux';

import ElementContactList from './ElementContactList';
import { getVisibleContacts, deleteContact } from 'redux/contacts';
// import { getVisibleContacts } from 'redux/contacts/contacts-selectors';
// import { deleteContact } from 'redux/contacts/contacts-operations';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementContactList);
