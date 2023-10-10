import { Div, Input } from './FilterContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter, getFilters } from 'redux/globalSlice';

export const FilterContact = () => {
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const changedFilter = e => {
    dispatch(applyFilter(e.target.value));
  };
  return (
    <Div>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={changedFilter}
        placeholder="Filter"
      ></Input>
    </Div>
  );
};
