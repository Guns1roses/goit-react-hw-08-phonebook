import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';
import { FormControl } from '@mui/material';

export const FormWrapper = styled.div`
  padding: 20px 40px;
  text-align: center;
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
  }
`;
export const InputWrapper = styled(FormControl)`
  width: 100%;
`;

export const FormInner = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto 20px;
  text-align: start;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 500;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Input = styled(Field)`
  font-size: 20px;
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  :focus {
    border-color: #4287f5;
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 5px 10px;
  margin: 5px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: #4287f5;
  color: #4287f5;
  background-color: transparent;
  border: 1px solid #4287f5;
  transition: all 100ms linear;
  cursor: pointer;
  :hover {
    color: #fff;
    border-color: #fff;
    background-color: #4287f5;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;