import PropTypes from 'prop-types';
import PATH from 'helpers/constants/pathPages';
import { Link as RouterLink } from 'react-router-dom';
import { StyledLink, StyledLinkMobile } from './Logo.styled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Logo = ({ sx = {} }) => {
  return (
    <>
      <StyledLink
        variant="h5"
        noWrap
        component={RouterLink}
        to={PATH.home}
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
          alignItems: 'center',
          ...sx,
        }}
      >
        <AutoStoriesIcon sx={{ fontSize: 'inherit' }} />  Телефонна книга
      </StyledLink>
      <StyledLinkMobile
        variant="h5"
        noWrap
        component={RouterLink}
        to={PATH.home}
        sx={{
          mr: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          textDecoration: 'none',
          alignItems: 'center',
          ...sx,
        }}
      >
        <AutoStoriesIcon sx={{ fontSize: 30 }} /> PB
      </StyledLinkMobile>
    </>
  );
};

export default Logo;

Logo.propTypes = {
  sx: PropTypes.object,
};