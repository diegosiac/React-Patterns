import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'

const initialValues: {[key: string]: any} = {}
const requiredFields: {[key: string]: any} = {}

for (const value of formJson) {
  initialValues[value.name] = value.value

  if (!value.validations) continue

  let schema = Yup.string()

  for (const rule of value.validations) {
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido')
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 2} caracteres `)
    }

    if (rule.type === 'email') {
      schema = schema.email('El email es incorrecto')
    }
  }

  requiredFields[value.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}

        >
            {
                ({ handleChange, values }) => (
                    <Form>
                        {
                            formJson.map(({ label, name, placeholder, type, options }) => {
                              if (type === 'input' || type === 'password' || type === 'email') {
                                return (
                                        <MyTextInput
                                            key={name}
                                            label={label}
                                            onChange={handleChange}
                                            name={name}
                                            placeholder={placeholder}
                                            type={type}
                                            value={values[name]}
                                        />
                                )
                              } else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        label={label}
                                        name={name}
                                    >
                                        {
                                            options?.map(({ id, label }) => (
                                                <option
                                                    key={id}
                                                    value={label}
                                                >
                                                    {label}
                                                </option>
                                            ))
                                        }
                                    </MySelect>
                                )
                              }

                              throw new Error(`El type: ${type}, no es soportado`)
                            })
                        }

                        <button type='submit'></button>
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}
