const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

const getFetchigCurrentUser = state => state.auth.isFetchigCurrentUser;

export { getIsAuthenticated, getUserName, getFetchigCurrentUser };
