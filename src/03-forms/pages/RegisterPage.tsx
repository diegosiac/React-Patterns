import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {
  const { formData, email, password1, name, password2, onChange, resetForm } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <div>
        <h1>Register Page</h1>

        <form onSubmit={onSubmit} noValidate>
            <input
                type="text"
                placeholder="Name"
                name='name'
                value={name}
                onChange={onChange}
            />
            <input
                type="email"
                placeholder="Email"
                name='email'
                value={email}
                onChange={onChange}
            />
            <input
                type="password"
                placeholder="Password"
                name='password1'
                value={password1}
                onChange={onChange}
            />
            <input
                type="password"
                placeholder="Repeat password"
                name='password2'
                value={password2}
                onChange={onChange}
            />

            <button type="submit">Submit</button>
            <button onClick={resetForm}>Reset Form</button>
        </form>
    </div>
  )
}
