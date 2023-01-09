import { Button, Container } from '@mui/material';
import { ContactsList } from 'components';
import PageTitle from 'components/PageTitle/PageTitle';
import { useFilteredContacts } from 'hooks/useFilteredContacts';
import { Outlet } from 'react-router-dom';
import {
  Aside,
  ContactsBody,
  Main,
  PageWrapper,
  Sticky,
} from './ContactsPage.styled';
import { Link as RouterLink } from 'react-router-dom';

const ContactsPage = () => {
  const { filteredContacts } = useFilteredContacts();

  return (
    <Main>
      <Container sx={{ display: 'flex', flexGrow: 1 }} maxWidth="xl">
        <PageWrapper>
          <Aside>
            <Sticky>
              <PageTitle title="Телефонна книга онлайн" />
              <Outlet />
            </Sticky>
          </Aside>

          <ContactsBody>
            <Button
              component={RouterLink}
              to="/contacts/add"
              variant="contained"
            >
              Add contact
            </Button>
            <ContactsList contacts={filteredContacts} />
          </ContactsBody>
        </PageWrapper>
      </Container>
    </Main>
  );
};

export default ContactsPage;