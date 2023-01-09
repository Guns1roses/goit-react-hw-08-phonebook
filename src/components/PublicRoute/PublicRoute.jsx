import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ redirect, restricted = false, children }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn && restricted ? <Navigate to={redirect} /> : children;
};

export default PublicRoute;

PublicRoute.propTypes = {
  redirect: PropTypes.string.isRequired,
};