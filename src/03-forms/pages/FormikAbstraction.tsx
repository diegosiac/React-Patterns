import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput, MySelect, MyCheckbox } from '../components'

export const FormikAbstraction = () => {
  const validations = Yup.object({
    firstName: Yup
      .string()
      .max(15, 'Debe de tener 15 caracteres o menos')
      .required('Requerido'),
    lastName: Yup
      .string()
      .max(15, 'Debe de tener 15 caracteres o menos')
      .required('Requerido'),
    email: Yup
      .string()
      .email('debe ser un email valido')
      .required('el email es requerido'),
    terms: Yup
      .boolean()
      .oneOf([true], 'Debe de aceptar las condiciones'),
    jobType: Yup
      .string()
      .notOneOf(['it-jr'], 'Esta opcion no es permitida')
      .required('Requerido')
  })

  return (
    <div>
        <h1>Formik FormikAbstraction</h1>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: ''
          }}
          onSubmit={(values) => { console.log(values) }}
          validationSchema={validations}
        >
          {
            () => (
              <Form>
                <MyTextInput
                 label='First Name'
                 name='firstName'
                 placeholder='Diego'
                />

                <MyTextInput
                 label='Last Name'
                 name='lastName'
                 placeholder='Cruz'
                />

                <MyTextInput
                 label='Email'
                 name='email'
                 placeholder='email@test.com'
                 type='email'
                />

                <MySelect label='jobType' name='jobType'>
                  <option value=""></option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">It Senior</option>
                  <option value="it-jr">It Jr</option>
                </MySelect>

                <MyCheckbox label='Terms & conditions' name='terms'/>

                <button type='submit'>Submit</button>
              </Form>
            )
          }
        </Formik>

    </div>
  )
}
