import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 20px 40px;
  text-align: center;
`;

export const Title = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  :focus {
    border-color: #4287f5;
  }
`;