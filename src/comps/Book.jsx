import { useSelector } from 'react-redux';
import { Contact } from './Contact';
import { selectFilteredContacts } from '../redux/selectors';

export const Book = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (contacts.length === 0) return <p>None</p>;

  return (
    <ul>
      {contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
    </ul>
  );
};
