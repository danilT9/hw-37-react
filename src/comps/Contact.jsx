import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { selectIsLoading } from '../redux/selectors';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.phone}</p>
      <button type="button" disabled={isLoading} onClick={() => dispatch(deleteContact(contact.id))}>x</button>
    </li>
  );
};
