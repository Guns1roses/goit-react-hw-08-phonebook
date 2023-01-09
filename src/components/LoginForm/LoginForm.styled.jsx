import { Button, FormControl } from '@mui/material';
import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const InputWrapper = styled(FormControl)`
  width: 100%;
`;

export const ButtonSubmit = styled(Button)`
  width: 100%;
  margin-top: 20px;
`;