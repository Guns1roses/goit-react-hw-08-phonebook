import PropTypes from 'prop-types';
import {
  FormInner,
  FormWrapper,
  InputWrapper,
  Title,
} from './ContactsForm.styled';
import {
  Button,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useForm } from 'hooks/useForm';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ContactsForm = ({ type }) => {
  const { formik, isLoading, contact } = useForm(type);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !contact && type !== 'add') {
      navigate('/contacts', { replace: true });
    }
  }, [contact, isLoading, navigate, type]);

  return (
    <>
      {!isLoading && (
        <FormWrapper>
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <Title>{type === 'add' ? 'Add contact' : 'Edit contact'}</Title>
            <FormInner>
              <InputWrapper
                error={formik.touched.name && Boolean(formik.errors.name)}
                variant="outlined"
              >
                <InputLabel htmlFor="email">Ім'я</InputLabel>
                <OutlinedInput
                  id="name"
                  name="name"
                  label="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />

                <FormHelperText id="email">
                  {formik.touched.name && formik.errors.name}
                </FormHelperText>
              </InputWrapper>

              <InputWrapper
                error={formik.touched.number && Boolean(formik.errors.number)}
                variant="outlined"
              >
                <InputLabel htmlFor="email">Номер</InputLabel>
                <OutlinedInput
                  id="number"
                  name="number"
                  label="Number"
                  type="tel"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.number}
                />

                <FormHelperText id="email">
                  {formik.touched.number && formik.errors.number}
                </FormHelperText>
              </InputWrapper>
            </FormInner>

            <Button type="submit" sx={{ m: 1 }} variant="contained">
              {type === 'add' ? 'Add contact' : 'Update contact'}
            </Button>
            <Button
              component={RouterLink}
              to="/contacts"
              sx={{ m: 1 }}
              variant="outlined"
            >
              Скасувати
            </Button>
          </form>
        </FormWrapper>
      )}
    </>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  type: PropTypes.string.isRequired,
};