import {
  useAddContactsMutation,
  useGetContactsQuery,
  useRemoveContactsMutation,
  useUpdateContactByIdMutation,
} from 'redux/slice/contactSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useLocation, useNavigate } from 'react-router-dom';

export const useContacts = () => {
  const { data: contacts, isLoading, isFetching } = useGetContactsQuery();
  const [removeContact, { isLoading: isRemoving }] =
    useRemoveContactsMutation();
  const [addContact] = useAddContactsMutation();
  const [updateContact] = useUpdateContactByIdMutation();
  const location = useLocation();
  const navigate = useNavigate();

  const handleRemoveContact = async id => {
    if (location.pathname === '/contacts/edit') {
      navigate('/contacts');
    }
    try {
      const res = await removeContact(id);
      if (res.error) {
        throw new Error();
      }
      Notify.success(`Contact successfully removed`);
    } catch (error) {
      Notify.failure(`Something went wrong`);
    }
  };

  return {
    contacts,
    isLoading,
    isFetching,
    addContact,
    updateContact,
    handleRemoveContact,
    isRemoving,
  };
};
