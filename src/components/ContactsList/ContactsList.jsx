import React from 'react';
import { ContactItem } from 'components';
import { Empty, List, Title, Wrapper } from './ContactsList.styled';
import { Skeleton, Typography } from '@mui/material';
import { useFilteredContacts } from 'hooks/useFilteredContacts';
import { useFilter } from 'hooks/useFilter';

const ContactsList = () => {
  const { filteredContacts, isLoading } = useFilteredContacts();
  const { filter } = useFilter();

  return (
    <Wrapper>
      <Title>Contacts</Title>
      {filter && (
        <Typography mb={2}>Found: {filteredContacts.length}</Typography>
      )}

      {isLoading && (
        <List>
          {Array.from(new Array(10)).map((_, index) => (
            <li key={index}>
              <Skeleton variant="rectangular" width={'100%'} height={88} />
            </li>
          ))}
        </List>
      )}
      {filteredContacts?.length === 0 && <Empty>Contact list is empty</Empty>}
      {filteredContacts?.length > 0 && (
        <List>
          {filteredContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default ContactsList;

// const ContactsList = ({ contacts, deleteHandler }) => {
//   return (
//     <Wrapper>
//       <Title>Contacts</Title>
//       {contacts.length > 0 ? (
//         <ul>
//           {contacts.map(({ id, name, number }) => (
//             <ContactItem
//               key={id}
//               id={id}
//               name={name}
//               number={number}
//               deleteHandler={deleteHandler}
//             />
//           ))}
//         </ul>
//       ) : (
//         <Empty>Contact list is empty</Empty>
//       )}
//     </Wrapper>
//   );
// };

