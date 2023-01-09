import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-style: italic;
  font-weight: 200;
  text-align: center;
`;

export const Logo = styled(Link)`
  color: #1976d2;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 30px;
`;