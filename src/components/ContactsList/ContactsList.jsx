import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components';
import { Empty, Title, Wrapper } from './ContactsList.styled';
import { useContacts } from 'hooks/useContacts';
import Loader from 'components/Loader/Loader';

const ContactsList = ({ contacts }) => {
  const { isLoading } = useContacts();

  return (
    <Wrapper>
      <Title>Contacts</Title>
      {isLoading && <Loader />}
      {contacts?.length === 0 && <Empty>Contact list is empty</Empty>}
      {contacts?.length > 0 && (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      )}
    </Wrapper>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};


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

