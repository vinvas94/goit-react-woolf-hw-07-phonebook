import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectGetIsLoading } from '../../redux/selector';
import Loader from 'components/Loader/Loader';
import ContactList from 'components/Contact/Contact';
import { fetchContacts } from 'services/api';
import { ListContainer } from './ContactList.styled';

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectGetIsLoading);

  return (
    <ListContainer>{loading ? <Loader /> : <ContactList />}</ListContainer>
  );
};
export default ContactsList;
