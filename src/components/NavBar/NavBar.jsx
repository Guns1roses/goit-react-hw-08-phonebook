import { AppBar, Box, Toolbar, Container, Button } from '@mui/material';
import { useState } from 'react';
import UserMenu from 'components/UserMenu/UserMenu';
import Logo from 'components/Logo/Logo';
import MainMenu from 'components/Menu/MainMenu';
import MobileMenu from 'components/Menu/MobileMenu';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const userName = useSelector(state => state.auth.user.name);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile menu */}
          <Logo
            sx={{
              display: { xs: 'none', md: 'flex' },

              fontSize: '34px',
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <MobileMenu
              handleOpenNavMenu={handleOpenNavMenu}
              anchorElNav={anchorElNav}
              handleCloseNavMenu={handleCloseNavMenu}
              isLoggedIn={isLoggedIn}
            />
          </Box>

          {/* Desktop menu */}
          <Logo
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <MainMenu
              isLoggedIn={isLoggedIn}
              handleCloseNavMenu={handleCloseNavMenu}
            />
          </Box>

          {/* User menu */}
          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
              <UserMenu
                anchorElUser={anchorElUser}
                handleOpenUserMenu={handleOpenUserMenu}
                handleCloseUserMenu={handleCloseUserMenu}
                isLoggedIn={isLoggedIn}
                logOut={() => dispatch(authOperations.logOut())}
                userName={userName}
              />
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 0,
                gap: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Button
                component={RouterLink}
                to="/login"
                sx={{ color: '#ffffff', flexShrink: 0 }}
                variant="outlined"
              >
                Log in
              </Button>
              <Button
                component={RouterLink}
                to="/registration"
                sx={{ backgroundColor: '#1cb6cd', flexShrink: 0 }}
                variant="contained"
              >
                Sign up
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;