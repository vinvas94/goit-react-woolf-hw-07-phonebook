import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGetContacts } from '../../redux/selector';
import { addContact } from 'services/api';
import { Form, Label, Input, Button } from './ContactForm.styled';

const ContactForm = () => {
  const contacts = useSelector(selectGetContacts);
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const formatPhone = phone => {
      return phone.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
    };

    const contactName = form.elements.name.value.toLowerCase();
    const contactPhone = formatPhone(form.elements.phone.value);
    console.log(contactPhone);
    const contact = {
      id: nanoid(),
      name: form.elements.name.value,
      phone: contactPhone,
      createAt: nanoid(),
    };

    const isContactExists = contacts.some(
      existingContact =>
        existingContact.name.toLowerCase() === contactName &&
        existingContact.phone === contactPhone
    );

    if (isContactExists) {
      alert(
        `${form.elements.name.value} is already in contacts with the same phone number.`
      );
    } else {
      dispatch(addContact(contact));
    }

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          name="name"
          type="text"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameId}
          placeholder="Entry your name"
        />
      </Label>
      <Label htmlFor={numberId}>
        Number
        <Input
          name="phone"
          type="tel"
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberId}
          placeholder="Entry your number"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
