import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import {
  Alert,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';
import {
  ButtonSubmit,
  InputWrapper,
  StyledForm,
} from './RegistrationForm.styled';
import { useFormik } from 'formik';
import { validationSchemaRegistration } from 'helpers/validation/schemas';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchemaRegistration,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      const res = await dispatch(authOperations.register(values));
      setIsLoading(false);

      if (res.error && res.payload === 400) {
        setErrorMessage('Обліковий запис із цією електронною адресою вже існує');
        return;
      } else if (res.error) {
        setErrorMessage('Something went wrong, try again');
        return;
      }
      resetForm();
    },
  });

  return (
    <StyledForm autoComplete="off" onSubmit={formik.handleSubmit}>
      <p>Зареєструйтесь, вказавши своє ім’я, адресу електронної пошти та пароль.</p>
      {errorMessage && (
        <Alert variant="outlined" severity="error">
          {errorMessage}
        </Alert>
      )}
      <InputWrapper
        error={formik.touched.name && Boolean(formik.errors.name)}
        variant="outlined"
      >
        <InputLabel htmlFor="name">Ім'я</InputLabel>
        <OutlinedInput
          id="name"
          name="name"
          label="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <FormHelperText id="name">
          {formik.touched.name && formik.errors.name}
        </FormHelperText>
      </InputWrapper>

      <InputWrapper
        error={formik.touched.email && Boolean(formik.errors.email)}
        variant="outlined"
      >
        <InputLabel htmlFor="email">Пошта</InputLabel>
        <OutlinedInput
          id="email"
          name="email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        <FormHelperText id="email">
          {formik.touched.email && formik.errors.email}
        </FormHelperText>
      </InputWrapper>

      <InputWrapper
        error={formik.touched.password && Boolean(formik.errors.password)}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <FormHelperText id="password">
          {formik.touched.password && formik.errors.password}
        </FormHelperText>
      </InputWrapper>
      <ButtonSubmit
        disabled={isLoading}
        type="submit"
        sx={{ mt: 2 }}
        variant="contained"
      >
        Зареєструватися
      </ButtonSubmit>
    </StyledForm>
  );
};

export default RegistrationForm;