import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { schema } from '../../constants/validationSchema';
import { MainForm, Label, InputForm, ButtonAdd } from './ContactForm.styled';
import { useAddNewContactMutation } from '../../redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useGetContactsQuery} from '../../redux/contactsSlice';


function ContactForm() {
    const { data = [] } = useGetContactsQuery();
    const [addNewContact] = useAddNewContactMutation();

    const initialValues = {
        name: '',
        number: '',
    };

    const handleSubmit = ({ name, number }, { resetForm }) => {
        const newContact = {
            name,
            number,
        };
        if (newContact.number.length < 6) {
            Notify.info('Phone number must be more than 6 numbers');
            return
        }
        if (data.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
            Notify.info('Contact with this name already exists')
            return
        }
        addNewContact(newContact);
        resetForm();
    };

    
    const renderError = message => Notify.info(`${message}`);

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        >
        <MainForm autoComplete="off">
            <Label htmlFor="name">Name</Label>
            <InputForm name="name" type="text" placeholder="Enter name" />
            <ErrorMessage name="name" render={renderError} />
            <Label htmlFor="number">Number</Label>
            <InputForm name="number" type="tel" placeholder="Enter phone number" />
            <ErrorMessage name="number" render={renderError} />
            <ButtonAdd type="submit">Add contact</ButtonAdd>
        </MainForm>
        </Formik>
    );
}

export default ContactForm