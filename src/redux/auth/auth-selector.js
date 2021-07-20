const getIsAuthenticated = state => state.auth.isLogin;

const getUserName = state => state.auth.user.name;

export { getIsAuthenticated, getUserName };
