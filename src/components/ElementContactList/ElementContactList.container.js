import { connect } from 'react-redux';

import ElementContactList from './ElementContactList';
import { getVisibleContacts, deleteContact } from 'redux/contacts';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementContactList);
