import styled from 'styled-components';
import { Link } from '@mui/material';

export const StyledLink = styled(Link)`
  @media screen and (max-width: 479px) {
    display: none !important;
  }
`;
export const StyledLinkMobile = styled(Link)`
  @media screen and (min-width: 479px) {
    display: none !important;
  }
`;