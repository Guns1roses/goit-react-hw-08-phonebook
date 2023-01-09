import PropTypes from 'prop-types';
import { Contact, ContactWrapper, ContentWrapper } from './ContactItem.styled';
import { memo } from 'react';
import { Paper } from '@mui/material';
import ContactMenu from 'components/ContactMenu/ContactMenu';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BasicAvatar from 'components/BasicAvatar/BasicAvatar';
import ContactName from 'components/ContactName/ContactName';

const ContactItem = ({ id, name, number }) => {
  return (
    <li>
      <Paper
        sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}
        elevation={3}
      >
        <ContactWrapper>
          <BasicAvatar
            name={name}
            alt={name}
            src="/static/images/avatar/2.jpg"
            sx={{ width: 56, height: 56 }}
          />

          <ContentWrapper>
            <Contact>
              <AccountBoxIcon color="primary" />
              <ContactName name={name} />
            </Contact>
            <Contact>
              <PhoneIcon color="primary" />
              {number}
            </Contact>
          </ContentWrapper>
        </ContactWrapper>
        <ContactMenu id={id} number={number} />
      </Paper>
    </li>
  );
};

export default memo(ContactItem);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};