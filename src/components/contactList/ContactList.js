import { useDispatch, useSelector } from 'react-redux';
import { delContact, showContacts } from 'redux/globalSlice';
import { nanoid } from 'nanoid';

export const ContactList = () => {
  const filterContacts = useSelector(showContacts);
  const dispatch = useDispatch();
  const removeContact = name => dispatch(delContact(name));
  console.log(filterContacts);
  return (
    <ul>
      {filterContacts.map(({ name, number }) => (
        <li key={nanoid()}>
          {name}: {number}
          <button type="button" onClick={() => removeContact(name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
