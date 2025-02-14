import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import s from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const initialContact = {
    name: '',
    number: '',
  };

  const contactsShema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .min(2, 'Too Short!')
      .max(50, 'Too much!'),
    number: Yup.string()
      .required('Required')
      .min(2, 'Too Short!')
      .max(50, 'Too much!'),
  });

  const handleSubmit = (values, actions) => {
    onAdd({
      id: crypto.randomUUID(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <div className={s.contaiher}>
      <Formik
        initialValues={initialContact}
        onSubmit={handleSubmit}
        validationSchema={contactsShema}
      >
        <Form className={s.form}>
          <label>
            Name
            <Field className={s.field} name="name" placeholder="Name Surname" />
            <ErrorMessage className={s.error} name="name" component="p" />
          </label>
          <label>
            Number
            <Field
              className={s.field}
              name="number"
              type="number"
              placeholder="00000000000"
            />
            <ErrorMessage className={s.error} name="number" component="p" />
          </label>

          <button className={s.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
