const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getFetchigCurrentUser = state => state.auth.isFetchigCurrentUser;

const getCurrentToken = state => state.auth.token;

export {
  getIsAuthenticated,
  getUserName,
  getFetchigCurrentUser,
  getCurrentToken,
};
