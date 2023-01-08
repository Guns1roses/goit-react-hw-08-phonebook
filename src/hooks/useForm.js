import * as yup from 'yup';
import { useContacts } from './useContacts';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useToggle } from './useToggle';
import { useSelector } from 'react-redux';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().min(3).matches(nameRegExp, 'Name is not valid').required(),
  number: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const useForm = () => {
  const contactId = useSelector(state => state.updateContactForm.id);
  const { contacts, addContact, updateContact } = useContacts();
  const { toggleAddForm, toggleUpdateForm } = useToggle();

  const handleAddContact = async (values, { resetForm }) => {
    const isInclude = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isInclude) {
      Notify.failure(`${values.name} is already in contacts`);
      return;
    }

    try {
      await addContact(values);
      toggleAddForm();
      Notify.success(`${values.name} was successfully added to contacts`);
      resetForm();
    } catch (error) {
      Notify.success(`Something went wrong`);
    }
  };

  const handleUpdateContact = async (values, { resetForm }) => {
    const isInclude = contacts.some(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() &&
        contact.id !== contactId
    );

    if (isInclude) {
      Notify.failure(`${values.name} is already in contacts`);
      return;
    }

    try {
      await updateContact(values);
      toggleUpdateForm();
      Notify.success(`${values.name} was successfully update contacts`);
      resetForm();
    } catch (error) {
      Notify.success(`Something went wrong`);
    }
  };

  return { initialValues, schema, handleAddContact, handleUpdateContact };
};