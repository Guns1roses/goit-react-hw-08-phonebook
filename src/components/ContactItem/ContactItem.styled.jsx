import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    gap: 12px;
  }
  @media screen and (max-width: 480px) {
    gap: 7px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Contact = styled.p`
  display: flex;
  /* flex-wrap: wrap; */
  padding: 7px 15px;
  gap: 5px;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;