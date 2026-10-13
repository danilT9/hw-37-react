import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../redux/slice';
import { selectSearch } from '../redux/selectors';

export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  return <input type="search" value={search} onChange={e => dispatch(setSearch(e.target.value))} />
};
