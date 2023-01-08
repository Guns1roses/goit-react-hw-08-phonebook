import {
  useAddContactsMutation,
  useGetContactsQuery,
  useRemoveContactsMutation,
  useUpdateContactbyIdMutation,
} from 'redux/slice/contactSlice';

export const useContacts = () => {
  const { data: contacts, isLoading, isFetching } = useGetContactsQuery();
  const [removeContact] = useRemoveContactsMutation();
  const [addContact] = useAddContactsMutation();
  const [updateContact] = useUpdateContactbyIdMutation();

  return {
    contacts,
    isLoading,
    isFetching,
    addContact,
    updateContact,
    removeContact,
  };
};
