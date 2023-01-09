import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const CenteredContainer = styled.div`
  box-sizing: border-box;
  width: 500px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #1976d2;
  border-radius: 7px;
  padding: 30px 48px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  @media screen and (max-width: 470px) {
    padding: 30px 24px;
  }
`;
export const BottomText = styled.p`
  margin-top: 30px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: #1976d2;
`;