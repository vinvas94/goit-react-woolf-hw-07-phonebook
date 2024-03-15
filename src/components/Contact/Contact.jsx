import { deleteContact } from 'services/api';
import { selectContacts } from '../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { List, Item, Button } from './Contact.styled';

const Contact = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectContacts);

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.phone}
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default Contact;
