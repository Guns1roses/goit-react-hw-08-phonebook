import PropTypes from 'prop-types';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PATH from 'helpers/constants/pathPages';
import { NavLink as RouterLink } from 'react-router-dom';
import { publicPages, privatePages } from 'helpers/constants/pages';
import { NavLinkMobile } from './MainMenu.styled';

const MobileMenu = ({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
  isLoggedIn,
}) => {
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {(isLoggedIn ? privatePages : publicPages).map(page => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <NavLinkMobile
              component={RouterLink}
              to={PATH[page]}
              textAlign="center"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                textTransform: 'uppercase',
              }}
            >
              {page}
            </NavLinkMobile>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MobileMenu;

MobileMenu.propTypes = {
  handleOpenNavMenu: PropTypes.func.isRequired,
  anchorElNav: PropTypes.object,
  handleCloseNavMenu: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
};