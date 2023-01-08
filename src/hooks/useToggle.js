import { toggleFilterAction } from '../redux/slice/filterSlice';
import { toggleAddFormAction } from 'redux/slice/addContactFormSlice';
import { useSelector, useDispatch } from 'react-redux';
import { toggleUpdateFormAction } from 'redux/slice/updateContactFormSlice';

export const useToggle = () => {
  const isOpenFilter = useSelector(state => state.filter.isOpen);
  const isOpenAddForm = useSelector(state => state.addContactForm.isOpen);
  const isOpenUpdateForm = useSelector(state => state.updateContactForm.isOpen);

  const dispatch = useDispatch();

  const toggleFilter = () => {
    dispatch(toggleFilterAction());
  };

  const toggleAddForm = () => {
    dispatch(toggleAddFormAction());
  };

  const toggleUpdateForm = () => {
    dispatch(toggleUpdateFormAction());
  };

  return {
    isOpenAddForm,
    isOpenFilter,
    isOpenUpdateForm,
    toggleFilter,
    toggleAddForm,
    toggleUpdateForm,
  };
};