import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from './comps/Book';
import { Form } from './comps/Form';
import { Search } from './comps/Search';
import { fetchAll } from './redux/operations';
import { selectIsLoading } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <main>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Search />
      {isLoading && <p role="status">Loading...</p>}
      <Book />
    </main>
  );
}

export default App;
