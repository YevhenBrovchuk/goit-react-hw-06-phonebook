import * as Yup from 'yup';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, getContacts } from 'redux/globalSlice';
import { nanoid } from 'nanoid';
import {
  Button,
  ErrorMsg,
  Label,
  StyledField,
  StyledForm,
} from './PhoneForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  number: Yup.number()
    .min(3, 'At least 3')
    .positive('Must be positive!')
    .required('Required'),
});

export const PhoneForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = (person, { resetForm }) => {
    const existName = contacts.some(
      ({ name }) => name.toLowerCase() === person.name.toLowerCase()
    );

    const existNumber = contacts.some(({ number }) => number === person.number);

    if (existName) {
      alert('A contact with this name already in contacts');
      return;
    }

    if (existNumber) {
      alert('A contact with this number already in contacts');
      return;
    }

    const completeContact = { ...person, id: nanoid() };
    dispatch(addNewContact(completeContact));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" type="text" placeholder="Enter Name" />
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label>
            Number
            <StyledField
              name="number"
              type="tel"
              placeholder="Enter number telephone"
            />
            <ErrorMsg name="number" component="div" />
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
