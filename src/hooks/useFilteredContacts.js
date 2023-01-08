import { useMemo } from 'react';
import { useContacts } from 'hooks/useContacts';
import { useFilter } from 'hooks/useFilter';

export const useFilteredContacts = () => {
  const { contacts } = useContacts();
  const { filter, setFilter } = useFilter();

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, contacts]);

  return [filteredContacts, filter, setFilter];
};
