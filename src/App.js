import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'components/AppBar';
import ContactsView from 'views/ContactsView';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import Container from './components/Container';
import { getCurrentUser } from 'redux/auth';
import { connect } from 'react-redux';
import routes from './routes';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        <Container>
          <Switch>
            <Route exact path={routes.home} component={HomeView} />
            <Route path={routes.register} component={RegisterView} />
            <Route path={routes.login} component={LoginView} />
            <Route path={routes.contacts} component={ContactsView} />
          </Switch>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import OnLoader from 'components/OnLoader';

// import './App.css';

// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import Container from 'components/Container';
// import { fetchContacts } from 'redux/contacts/contacts-operations';
// import { getLoading } from 'redux/contacts/contacts-selectors';

// class App extends Component {
//   static propTypes = {
//     onFetchContacts: PropTypes.func,
//     isLoadingContacts: PropTypes.bool,
//   };
//   componentDidMount() {
//     this.props.onFetchContacts();
//   }

//   render() {
//     return (
//       <Container title="Phonebook">
//         <ContactForm />
//         <h2 className="title">Contacts</h2>
//         {this.props.isLoadingContacts ? (
//           <OnLoader />
//         ) : (
//           <>
//             <Filter />
//             <ContactList />
//           </>
//         )}
//       </Container>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isLoadingContacts: getLoading(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onFetchContacts: () => dispatch(fetchContacts()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
