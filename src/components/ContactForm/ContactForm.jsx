import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { schema } from '../../constants/validationSchema';
import { MainForm, Label, InputForm, ButtonAdd } from './ContactForm.styled';


const renderError = message => <p>{message}</p>;

function ContactForm() {
    const initialValues = {
        name: '',
        number: '',
    };

    const handleSubmit = ({name, number}, { resetForm }) => {
        const newContact = {
        name,
        number,
        };
        console.log(newContact);
        resetForm();
    };

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