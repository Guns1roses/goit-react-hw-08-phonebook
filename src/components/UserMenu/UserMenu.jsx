import PropTypes from 'prop-types';
import { IconButton, Typography, Menu, Tooltip, MenuItem } from '@mui/material';
import BasicAvatar from 'components/BasicAvatar/BasicAvatar';

const settingsLoggedIn = ['logout'];

const UserMenu = ({
  anchorElUser,
  handleOpenUserMenu,
  handleCloseUserMenu,
  logOut,
  userName,
}) => {
  return (
    <>
      <Typography sx={{ mr: '10px', textAlign: 'center' }}>
        Hello, {userName}
      </Typography>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <BasicAvatar
            alt={userName}
            name={userName}
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settingsLoggedIn.map(setting => (
          <MenuItem
            key={setting}
            onClick={() => {
              handleCloseUserMenu();
              logOut();
            }}
          >
            <Typography textTransform="capitalize" textAlign="center">
              {setting}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default UserMenu;

UserMenu.propTypes = {
  anchorElUser: PropTypes.object,
  handleOpenUserMenu: PropTypes.func.isRequired,
  handleCloseUserMenu: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};