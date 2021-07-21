import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from 'components/AppBar';
// import ContactsView from 'views/ContactsView';
// import HomeView from 'views/HomeView';
// import RegisterView from 'views/RegisterView';
// import LoginView from 'views/LoginView';
import Container from './components/Container';
import { getCurrentUser, getFetchigCurrentUser } from 'redux/auth';
import { connect } from 'react-redux';
import routes from './routes';
import PrivateRoute from 'components/PriveteRoute';
import PublicRoute from 'components/PublicRoute';
import OnLoader from 'components/OnLoader';

const HomeView = lazy(() =>
  import('views/HomeView' /*webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import('views/RegisterView' /*webpackChunkName: "register-view" */),
);
const LoginView = lazy(() =>
  import('views/LoginView' /*webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import('views/ContactsView' /*webpackChunkName: "contacts-view" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <div>
        <AppBar />
        {/* <Container> */}
        {this.props.isFetchigCurrentUser ? (
          <OnLoader />
        ) : (
          <Suspense fallback={<OnLoader />}>
            <Switch>
              <PublicRoute
                exact
                path={routes.home}
                component={HomeView}
                classN
              />
              <PublicRoute
                path={routes.register}
                restricted
                component={RegisterView}
                redirectTo={routes.contacts}
              />
              <PublicRoute
                path={routes.login}
                restricted
                component={LoginView}
                redirectTo={routes.contacts}
              />
              <PrivateRoute
                path={routes.contacts}
                component={ContactsView}
                redirectTo={routes.login}
              />
            </Switch>
          </Suspense>
        )}
        {/* </Container> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isFetchigCurrentUser: getFetchigCurrentUser(state),
});

const mapDispatchToProps = {
  onGetCurretnUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
