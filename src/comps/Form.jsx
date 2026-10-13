import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/operations';
import { selectContacts, selectIsLoading } from '../redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const [form, setForm] = useState({ name: '', phone: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactName = form.name.trim();
    const contactPhone = form.phone.trim();

    if (!contactName || !contactPhone) {
      return;
    }
    if (contacts.some(contact => contact.phone.toLowerCase() === contactPhone.toLowerCase())) {
      return;
    }

    try {
      await dispatch(addContact({ name: contactName, phone: contactPhone })).unwrap();
      setForm({ name: '', phone: '' });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} required />
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
      <button type="submit" disabled={isLoading}>Add</button>
    </form>
  );
};
