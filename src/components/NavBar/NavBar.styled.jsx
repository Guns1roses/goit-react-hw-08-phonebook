import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 20px;
  background-color: #008080;
`;

export const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 500;
`;

export const Button = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: ${({ isOpen }) => (isOpen ? '#fff' : '#242323')};
  font-size: 20px;
  border: none;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${({ isOpen }) => (isOpen ? '#fff' : '#242323')};

  background-color: transparent;

  transition: all 100ms linear;
  cursor: pointer;
  :not(:last-child) {
    margin-left: auto;
    margin-right: 15px;
  }

  :hover {
    color: #fff;
    border-color: #fff;
  }
`;