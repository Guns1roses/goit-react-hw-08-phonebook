import PropTypes from 'prop-types';
import {
  Contact,
  IconUser,
  Item,
  Button,
  ButtonEdit,
} from './ContactItem.styled';
import { RotatingLines } from 'react-loader-spinner';
import { RiDeleteBinLine, RiEditBoxLine } from 'react-icons/ri';
import { memo } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useRemoveContactsMutation } from 'redux/slice/contactSlice';
import { useDispatch } from 'react-redux';
import { setContactId } from 'redux/slice/updateContactFormSlice';
import { useToggle } from 'hooks/useToggle';

const ContactItem = ({ id, name, number }) => {
  const [removeContact, { isLoading }] = useRemoveContactsMutation();
  const dispatch = useDispatch();
  const { isOpenAddForm, isOpenUpdateForm, toggleAddForm, toggleUpdateForm } =
    useToggle();

  const handleRemoveContact = async id => {
    if (isOpenUpdateForm) {
      toggleUpdateForm();
    }

    try {
      await removeContact(id);
      Notify.success(`Contact successfully removed`);
    } catch (error) {
      Notify.error(`Something went wrong`);
    }
  };

  const handleUpdateContact = id => {
    if (!isOpenUpdateForm) {
      toggleUpdateForm();
    }

    if (isOpenAddForm) {
      toggleAddForm();
    }

    window.scrollTo(0, 0);
    dispatch(setContactId(id));
  };

  return (
    <Item deleting={isLoading}>
      <Contact>
        <IconUser />
        {name} : {number}
      </Contact>
      <div>
        {' '}
        <ButtonEdit
          onClick={() => handleUpdateContact(id)}
          title="Edit"
          type="button"
          disabled={isLoading}
        >
          <RiEditBoxLine />
        </ButtonEdit>
        <Button
          onClick={() => handleRemoveContact(id)}
          title="Delete"
          type="button"
          disabled={isLoading}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={true}
            />
          ) : (
            <RiDeleteBinLine />
          )}
        </Button>
      </div>
    </Item>
  );
};

export default memo(ContactItem);

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};