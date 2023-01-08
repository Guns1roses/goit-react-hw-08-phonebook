import { Button, Wrapper, Title } from './NavBar.styled';
import { RiUserSearchLine, RiUserAddLine } from 'react-icons/ri';
import { useToggle } from 'hooks/useToggle';

const NavBar = () => {
  const {
    isOpenFilter,
    isOpenAddForm,
    isOpenUpdateForm,
    toggleFilter,
    toggleAddForm,
    toggleUpdateForm,
  } = useToggle();

  const handleAddClick = () => {
    if (isOpenUpdateForm) {
      toggleUpdateForm();
    }
    toggleAddForm();
  };

  return (
    <Wrapper>
      <Title>PHONEBOOK</Title>
      <Button
        onClick={handleAddClick}
        isOpen={isOpenAddForm}
        title="Add contact"
        type="button"
      >
        <RiUserAddLine />
      </Button>
      <Button
        onClick={toggleFilter}
        isOpen={isOpenFilter}
        title="Search"
        type="button"
      >
        <RiUserSearchLine />
      </Button>
    </Wrapper>
  );
};

export default NavBar;