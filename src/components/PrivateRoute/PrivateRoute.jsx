import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ redirect, children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const token = useSelector(state => state.auth.token);
  const location = useLocation()
  const savedLocation = useRef(location.pathname)

  return isLoggedIn ? children : <Navigate to={token ? savedLocation.current : redirect} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  redirect: PropTypes.string.isRequired,
};