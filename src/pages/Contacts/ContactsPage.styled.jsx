import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-grow: 1;
`;

export const PageWrapper = styled.div`
  gap: 24px;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Sticky = styled.div`
  position: sticky;
  top: 0;
`;

export const Aside = styled.div`
  position: relative;
  padding-top: 30px;
  z-index: 1;
  @media screen and (min-width: 768px) {
    width: 380px;
    border-right: 1px solid #000;
  }
`;

export const ContactsBody = styled.div`
  padding-top: 20px;
  flex-grow: 1;
`;