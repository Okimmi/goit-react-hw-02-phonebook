import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import {
  Btn,
  ErrorText,
  FormWrapper,
  Input,
  InputName,
  ListItem,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={addContact}
    >
      <FormWrapper>
        <ul>
          <ListItem>
            <InputName htmlFor="name">Name</InputName>
            <Input type="text" name="name" id="name" />
            <ErrorText name="name" component="p" />
          </ListItem>
          <ListItem>
            <InputName htmlFor="number">Number</InputName>
            <Input type="tel" name="number" id="number" />
            <ErrorText name="number" component="p" />
          </ListItem>
        </ul>

        <Btn type="submit">Add contact</Btn>
      </FormWrapper>
    </Formik>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
