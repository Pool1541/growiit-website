/* eslint-disable @next/next/no-img-element */
'use client';

import { ErrorMessage, Field, Form, Formik } from "formik";
import ReCAPTCHA from 'react-google-recaptcha';
import { Wrapper } from "@/components/layout/wrapper";
import { InputGroup, Title } from "@/components/ui";
import { validationSchema } from "@/lib";
import type { handleSubmit } from '@/types';
import styles from './contact.module.css'

export default function Contact() {

  const handleSubmit: handleSubmit<typeof validationSchema> = async function (values, { setSubmitting }) {
    const validatedData = validationSchema.validateSync(values, { abortEarly: false });

    const response = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_FORM_API}/save-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    });

    const data = await response.json();

    if (!response.ok) {
      // TODO: Manejar el error para darle feedback al usuario
      console.error(data);
      return;
    }

    setSubmitting(false);
  }

  function handleChange(token: string | null, setFieldValue: (field: string, value: string) => void) {
    if (token) setFieldValue('g-recaptcha-response', token);
  }

  return (
    <section id="contact" className={`${styles.contact} landing-section`} data-header-color='black'>
      <Wrapper className={`${styles['flex-wrapper']}`}>
          <div className={styles.left}>
            <div className={styles.header}>
              <Title as="h2">Hablemos de tu próximo proyecto</Title>
              <p>
                Queremos conocerte y entender tus objetivos. En Growiit, trabajamos contigo para diseñar soluciones digitales que impulsen tu negocio al siguiente nivel. ¡Contáctanos y hagamos que suceda!
              </p>
            </div>
            <Formik
            initialValues={{
              names: '',
              company: '',
              email: '',
              message: '',
              'g-recaptcha-response': '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ errors, touched, isSubmitting, setFieldValue }) => (
              <Form className={styles.form}>
                <InputGroup error={Boolean(touched.names && errors.names)}>
                  <div>
                    <label htmlFor='names'>Nombres*</label>
                    <Field type='text' id='names' name='names' />
                    <ErrorMessage component='span' name='names' />
                  </div>
                </InputGroup>
                <InputGroup error={Boolean(touched.company && errors.company)}>
                  <div>
                    <label htmlFor='company'>Empresa</label>
                    <Field type='text' id='company' name='company' />
                    <ErrorMessage component='span' name='company' />
                  </div>
                </InputGroup>
                <InputGroup error={Boolean(touched.email && errors.email)}>
                  <div>
                    <label htmlFor='email'>Email*</label>
                    <Field type='email' id='email' name='email' />
                    <ErrorMessage component='span' name='email' />
                  </div>
                </InputGroup>
                <InputGroup error={Boolean(touched.message && errors.message)}>
                  <div>
                    <label htmlFor='message'>¿Cómo podemos ayudarte?*</label>
                    <Field as='textarea' id='message' name='message' />
                    <ErrorMessage component='span' name='message' />
                  </div>
                </InputGroup>
                <InputGroup>
                  <div>
                    <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                      onChange={(token) => handleChange(token, setFieldValue)}
                      hl='es'
                    />
                      <ErrorMessage component='span' name='g-recaptcha-response' />
                  </div>
                </InputGroup>
                <InputGroup>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    title='Enviar mensaje'
                    style={{
                      marginTop: errors['g-recaptcha-response'] ? '1rem' : '0',
                    }}>
                    Enviar Mensaje
                  </button>
                </InputGroup>
              </Form>
            )}
          </Formik>
          </div>
          <div className={styles.right}>
            <div>
            <img
              src='https://d1ssfwckvhk5up.cloudfront.net/public/contact-image.webp'
              alt='Imagen de sección contáctanos'
              loading='lazy'
            />
            </div>
          </div>
      </Wrapper>
    </section>
  )
}