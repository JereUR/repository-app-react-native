import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup.string().email('Invalid email.').required('Email is required.'),
  password: yup
    .string()
    .min(5, 'Password is too short.')
    .max(1000, 'Password is too long.')
    .required('Password is required.')
})
