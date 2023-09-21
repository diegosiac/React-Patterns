import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { MyTextInput } from '../components'

const validations = Yup.object({
  firstName: Yup
    .string()
    .min(2, 'Debe de tener al menos 2 caracteres')
    .max(15, 'Debe de tener 15 caracteres o menos')
    .required('Requerido'),
  email: Yup
    .string()
    .email('debe ser un email valido')
    .required('el email es requerido'),
  password1: Yup
    .string()
    .min(6, 'Debe de tener al menos 6 caracteres')
    .required('Requerido'),
  password2: Yup.string()
    .oneOf([Yup.ref('password1')], 'Las contraseñas no  coinciden')
    .required('Campo Obligatorio')
})

export const RegisterFormikPage = () => {
  const initialValues = {
    name: '',
    email: '',
    password1: '',
    password2: ''
  }

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
            onSubmit={(values) => console.log(values)}
            initialValues={initialValues}
            validationSchema={validations}
        >
            {
                ({ handleReset }) => (
                    <Form>
                        <MyTextInput
                            label='Nombre'
                            name='name'
                            placeholder='el 10'
                        />

                        <MyTextInput
                            label='email'
                            name='email'
                            type='email'
                            placeholder='test@gmail.com'
                        />

                        <MyTextInput
                            label='Password'
                            name='password1'
                            type='password'
                        />

                        <MyTextInput
                            label='Repeat Password'
                            name='password2'
                            type='password'
                        />
                        <button type="submit">Submit</button>
                        <button onClick={handleReset}>Reset Form</button>
                    </Form>
                )
            }
        </Formik>

    </div>
  )
}
