import * as yup from 'yup';
import regExp from './regExp';

export const validationSchemaRegistration = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .matches(regExp.name, 'Name is not valid')
    .required('Please Enter your name'),
  email: yup
    .string()
    .matches(regExp.email, 'Email is not valid')
    .required('Please Enter your email'),
  password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      regExp.password,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
    ),
});

export const validationSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .matches(regExp.email, 'Email is not valid')
    .required('Please Enter your email'),
  password: yup.string().required('Please Enter your password'),
});

export const validationSchemaContact = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup
    .string()
    .matches(regExp.number, 'Phone number is not valid')
    .required(),
});