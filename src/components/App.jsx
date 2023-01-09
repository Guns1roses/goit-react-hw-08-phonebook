import { ContactsForm, Filter } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import authOperations from '../redux/auth/auth-operations';
import { Suspense, useEffect } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const ContactsPage = lazy(() => import('../pages/Contacts/ContactsPage'));
const LoginPage = lazy(() => import('../pages/Login/LoginPage'));
const RegistrationPage = lazy(() =>
  import('../pages/Registration/RegistrationPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    state => state.auth.isFetchingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="contacts"
                element={
                  <PrivateRoute redirect="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              >
                <Route index element={<Filter />} />
                <Route path="add" element={<ContactsForm type={'add'} />} />
                <Route
                  path=":id/edit"
                  element={<ContactsForm type={'update'} />}
                />
              </Route>

              <Route
                path="login"
                element={
                  <PublicRoute redirect="/" restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="registration"
                element={
                  <PublicRoute redirect="/" restricted>
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
};






// import {
//   AddContactsForm,
//   Container,
//   NavBar,
//   ContactsList,
//   Filter,
// } from 'components';
// import { useState, useMemo, useCallback } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import deleteContactContext from './deleteContactContext';
// import useLocalStorage from './hooks/useLocalStorage';

// const LS_KEY = 'contacts';

// const initialValues = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// export const App = () => {
//   const [contacts, setContacts] = useLocalStorage(LS_KEY, initialValues);
//   const [filter, setFilter] = useState('');
//   const [isOpenForm, setIsOpenForm] = useState(false);
//   const [isOpenFilter, setIsOpenFilter] = useState(false);

//   const onSearch = evt => {
//     const value = evt.target.value;
//     setFilter(value);
//   };

//   const addContact = data => {
//     setContacts(contacts => [...contacts, data]);
//     toggle('form');

//     Notify.success(`${data.name} was successfully added to contacts`);
//   };

//   const deleteContact = useCallback(
//     id => {
//       setContacts(contacts => contacts.filter(contact => contact.id !== id));

//       Notify.success(`Contact successfully removed`);
//     },
//     [setContacts]
//   );

//   const toggle = type => {
//     switch (type) {
//       case 'form':
//         setIsOpenForm(isOpenForm => !isOpenForm);
//         break;

//       case 'filter':
//         setIsOpenFilter(isOpenFilter => !isOpenFilter);
//         break;

//       default:
//         throw new Error('component not found');
//     }
//   };

//   const filteredContacts = useMemo(() => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }, [filter, contacts]);

//   return (
//     <Container>
//       <NavBar
//         isOpenForm={isOpenForm}
//         isOpenFilter={isOpenFilter}
//         toggle={toggle}
//       />
//       {isOpenForm && (
//         <AddContactsForm
//           toggle={toggle}
//           contacts={contacts}
//           addContact={addContact}
//         />
//       )}
//       {isOpenFilter && <Filter value={filter} onSearch={onSearch} />}

//       <deleteContactContext.Provider value={deleteContact}>
//         <ContactsList contacts={filteredContacts} />
//       </deleteContactContext.Provider>
//     </Container>
//   );
// };

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     isOpenForm: false,
//     isOpenFilter: false,
//   };

//   componentDidMount() {
//     const savedData = LocalStorage.get(LS_KEY);

//     if (savedData) {
//       this.setState({ contacts: savedData });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     const currentContacts = this.state.contacts;

//     if (prevState.contacts !== currentContacts) {
//       LocalStorage.set(LS_KEY, currentContacts);
//     }
//   }

//   onSearch = evt => {
//     const value = evt.target.value;
//     this.setState({ filter: value });
//   };

//   addContact = data => {
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, data],
//     }));
//     this.toggle('isOpenForm');

//     Notify.success(`${data.name} was successfully added to contacts`);
//   };

//   deleteContact = id => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       };
//     });

//     Notify.success(`Contact successfully removed`);
//   };

//   toggle = component => {
//     this.setState(prevState => ({
//       [component]: !prevState[component],
//     }));
//   };

//   render() {
//     const { filter, contacts, isOpenForm, isOpenFilter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );

//     return (
//       <Container>
//         <NavBar
//           isOpenForm={isOpenForm}
//           isOpenFilter={isOpenFilter}
//           toggle={this.toggle}
//         />
//         {isOpenForm && (
//           <AddContactsForm
//             toggle={this.toggle}
//             contacts={contacts}
//             addContact={this.addContact}
//           />
//         )}
//         {isOpenFilter && <Filter value={filter} onSearch={this.onSearch} />}

//         <ContactsList
//           deleteHandler={this.deleteContact}
//           contacts={filteredContacts}
//         />
//       </Container>
//     );
//   }
// }