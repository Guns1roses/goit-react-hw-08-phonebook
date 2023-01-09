import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

export const NavLink = styled(Button)`
  &.active {
    color: #1cb6cd;
    text-decoration: underline;
  }
`;

export const NavLinkMobile = styled(Link)`
  &.active {
    color: #1cb6cd;
    text-decoration: underline;
  }
`;