import { useFormik } from 'formik';
import { validationSchemaContact } from 'helpers/validation/schemas';
import { useContacts } from './useContacts';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate, useParams } from 'react-router-dom';

export const useForm = type => {
  const { id: contactId } = useParams();
  const { contacts = [], addContact, updateContact, isLoading } = useContacts();
  const contact = contacts.find(el => el.id === contactId);
  const navigate = useNavigate();

  const getData = () => {
    if (type === 'add' || !contact) {
      return { name: '', number: '' };
    }

    return { name: contact.name, number: contact.number };
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: getData(),
    validationSchema: validationSchemaContact,
    onSubmit: (a, b) => {
      if (type === 'add') {
        handleAddContact(a, b);
      } else {
        handleUpdateContact(a, b);
      }
    },
  });

  const handleAddContact = async (values, { resetForm }) => {
    const isInclude = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isInclude) {
      Notify.failure(`${values.name} вже в контактах`);
      return;
    }

    try {
      const res = await addContact(values);

      if (res.error) {
        throw new Error();
      }
      Notify.success(`${values.name} успішно додано до контактів`);
      resetForm();
      navigate('/contacts');
    } catch (error) {
      Notify.failure(`Щось пішло не так`);
    }
  };

  const handleUpdateContact = async (values, { resetForm }) => {
    const isInclude = contacts.some(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() &&
        contact.id !== contactId
    );

    if (isInclude) {
      Notify.failure(`${values.name} вже в контактах`);
      return;
    }

    try {
      const res = await updateContact({ values, id: contactId });
      if (res.error) {
        throw new Error();
      }

      Notify.success(`${values.name} було успішно оновлено контакти`);
      resetForm();
      navigate('/contacts');
    } catch (error) {
      Notify.failure(`Щось пішло не так`);
    }
  };
  return { formik, isLoading, contact };
};