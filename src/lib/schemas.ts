import * as Yup from 'yup';

export const validationSchema = Yup.object({
  names: Yup.string()
    .required('Por favor, ingrese su nombre')
    .max(50, 'Máximo 50 caracteres')
    .min(3, 'Debe tener al menos 3 caracteres')
    .trim()
    .lowercase(),
  company: Yup.string().optional().max(50, 'Máximo 50 caracteres').trim().lowercase(),
  email: Yup.string()
    .required('Por favor ingrese su email')
    .max(50, 'Máximo 50 caracteres')
    .trim()
    .lowercase()
    .email('Debe ser un email válido'),
  message: Yup.string()
    .required('Por favor ingrese el mensaje')
    .max(2000, 'Máximo 2000 caracteres')
    .min(10, 'Debe tener al menos 20 caracteres')
    .trim()
    .lowercase(),
  'g-recaptcha-response': Yup.string().required('Por favor, complete el captcha'),
});