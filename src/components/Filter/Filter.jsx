import { addFilter } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { Container, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    const filter = event.currentTarget.value;
    dispatch(addFilter(filter));
  };

  return (
    <Container>
      Find contacts by name
      <Input
        type="text"
        onChange={e => changeFilter(e)}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </Container>
  );
};

export default Filter;
