import { PhoneForm } from './phoneForm/PhoneForm';
import { ContactList } from './contactList/ContactList';
import { FilterContact } from './filterContact/FilterContact';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
        alignItems: `flex-start`,
        padding: `35px`,
      }}
    >
      <h1>Phonebook</h1>
      <PhoneForm />
      <h2>Contacts</h2>
      <FilterContact />
      <ContactList />
    </div>
  );
};
