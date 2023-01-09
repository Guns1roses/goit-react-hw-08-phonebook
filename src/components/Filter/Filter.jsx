import { TextField } from '@mui/material';
import { useFilteredContacts } from 'hooks/useFilteredContacts';
import { FilterWrapper, Title } from './Filter.styled';

const Filter = () => {
  const { filter, setFilter } = useFilteredContacts();
  return (
    <FilterWrapper>
      <Title>Пошук контакту</Title>

      <TextField
        sx={{ width: '100%' }}
        id="filter"
        name="filter"
        label="Search"
        variant="outlined"
        onChange={e => setFilter(e.target.value)}
        value={filter}
      />
    </FilterWrapper>
  );
};

export default Filter;