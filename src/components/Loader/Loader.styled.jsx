import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderPosFixed = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;