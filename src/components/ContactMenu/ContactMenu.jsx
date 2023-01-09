import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton, Link, MenuItem, Menu } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link as RouterLink } from 'react-router-dom';
import Confirm from 'components/Confirm/Confirm';
import Loader from 'components/Loader/Loader';
import { useContacts } from 'hooks/useContacts';

const ContactMenu = ({ number, id }) => {
  const { handleRemoveContact, isRemoving } = useContacts();
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {!isRemoving ? (
        <>
          <IconButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color="primary"
            aria-label="Menu"
          >
            <ArrowDropDownIcon />
          </IconButton>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <li>
              <MenuItem
                component={Link}
                href={`tel:${number}`}
                onClick={handleClose}
              >
                Call
              </MenuItem>
            </li>

            <li>
              <MenuItem
                component={RouterLink}
                to={`/contacts/${id}/edit`}
                onClick={handleClose}
              >
                Edit
              </MenuItem>
            </li>

            <MenuItem
              onClick={() => {
                handleClose();
                setOpenConfirm(true);
              }}
            >
              Delete
            </MenuItem>
          </Menu>
          <Confirm
            title="Are you sure?"
            text="Are you sure you want to delete this contact?"
            btnAgree="Yes"
            btnDisagree="No"
            handleBtnAgree={() => {
              handleRemoveContact(id);
            }}
            open={openConfirm}
            setOpen={setOpenConfirm}
          />
        </>
      ) : (
        <Loader width="30" />
      )}
    </Box>
  );
};

export default ContactMenu;

ContactMenu.propTypes = {
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};