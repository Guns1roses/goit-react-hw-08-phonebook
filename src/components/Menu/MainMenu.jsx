import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import PATH from 'helpers/constants/pathPages';
import { publicPages, privatePages } from 'helpers/constants/pages';
import { NavLink } from './MainMenu.styled';

const MainMenu = ({ isLoggedIn, handleCloseNavMenu }) => {
  return (
    <>
      {(isLoggedIn ? privatePages : publicPages).map(page => (
        <NavLink
          key={page}
          component={RouterLink}
          to={PATH[page]}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </NavLink>
      ))}
    </>
  );
};

export default MainMenu;

MainMenu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleCloseNavMenu: PropTypes.func.isRequired,
};