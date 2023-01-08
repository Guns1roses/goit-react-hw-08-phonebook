import { Formik, Form } from 'formik';
import {
  Button,
  ErrorMsg,
  FormInner,
  FormWrapper,
  Input,
  Label,
} from './AddContactsForm.styled';
import { useForm } from '../../hooks/useForm';
import { useToggle } from 'hooks/useToggle';
import { useGetContactByIdQuery } from 'redux/slice/contactSlice';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

const AddContactsForm = ({ type }) => {
  const { initialValues, schema, handleAddContact, handleUpdateContact } =
    useForm();
  const { toggleAddForm, toggleUpdateForm } = useToggle();
  const contactId = useSelector(state => state.updateContactForm.id);
  const { data, isFetching } = useGetContactByIdQuery(contactId, {
    skip: !contactId,
  });

  const getData = () => {
    if (type === 'add') {
      return initialValues;
    }
    return data;
  };

  return (
    <>
      {!isFetching ? (
        <Formik
          initialValues={getData()}
          validationSchema={schema}
          enableReinitialize={true}
          onSubmit={type === 'add' ? handleAddContact : handleUpdateContact}
        >
          <FormWrapper>
            <Form autoComplete="off">
              <FormInner>
                <Label htmlFor="name">
                  Name
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  />
                  <ErrorMsg name="name" component="div" />
                </Label>

                <Label htmlFor="number">
                  Number
                  <Input
                    id="number"
                    type="tel"
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  />
                  <ErrorMsg name="number" component="div" />
                </Label>
              </FormInner>
              <Button type="submit">
                {type === 'add' ? 'Add contact' : 'Update contact'}
              </Button>
              <Button
                onClick={type === 'add' ? toggleAddForm : toggleUpdateForm}
                type="button"
              >
                Cancel
              </Button>
            </Form>
          </FormWrapper>
        </Formik>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AddContactsForm;