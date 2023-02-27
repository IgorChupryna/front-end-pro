import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik'
import { object, string } from 'yup'

const ERROR_MESSAGE_CLASS='red';
const VALID_MESSAGE_CLASS='green';

const PHONE_TEMPLATE = /^\d{12}$/
const validationSchema = object({
  firstName: string()
    .required('Required'),
  email: string()
    .email()
    .required('Required'),
  phone: string()
    .matches(PHONE_TEMPLATE, 'Must be 12 numbers')
    .required('Required'),
})


export default function ContactForm () {
  return (
    <Formik
      initialValues={{
      firstName: 'igor',
      email: '1@gmail.com',
      phone: '12345678',
    }}
      onSubmit={(values) => {
        console.log(values)
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text"/>
          <ErrorMessage className={ERROR_MESSAGE_CLASS} component="span" name="firstName"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email"/>
          <ErrorMessage className={ERROR_MESSAGE_CLASS} component="span" name="email"/>
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <Field name="phone" type="text"/>
          <ErrorMessage className={ERROR_MESSAGE_CLASS} component="span" name="phone"/>
        </div>

        <SaveButton/><ValidMessage/>
      </Form>
    </Formik>
  )
}

function SaveButton () {
  const { isValid } = useFormikContext();

  return <button type="submit" disabled={!isValid}>Save</button>
}

function ValidMessage () {
  const { isValid } = useFormikContext();

  return <div className={VALID_MESSAGE_CLASS} hidden={!isValid}>Fields are valid!</div>
}