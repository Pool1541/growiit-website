'use client';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import clsx from 'clsx';
import { Wrapper } from '../wrapper';
import { useStatus } from '@/hooks';
import { newsletterSchema } from '@/lib';
import type { handleSubmit } from '@/types';
import styles from './newsletter.module.css';

export default function Newsletter() {
  const { status, updateStatus } = useStatus('idle');

  const handleSubmit: handleSubmit<typeof newsletterSchema> = async function (values,{ setSubmitting }) {
    updateStatus('idle');
    const validatedData = newsletterSchema.validateSync(values, { abortEarly: false });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_CONTACT_FORM_API}/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (!response.ok) throw Error('Error en la suscripción al newsletter');

      updateStatus('success');
    } catch (error) {
      console.error(error);
      updateStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section>
      <Wrapper>
        <div className={styles.newsletter}>
          <div className={styles.caption}>
            <h2>No te pierdas nuestras novedades</h2>
            <p>
              Recibe las últimas actualizaciones de nuestro blog directamente en tu bandeja de entrada. ¡Suscríbete a nuestro newsletter y mantente informado!
            </p>
          </div>
          <Formik
            initialValues={{
              email: '',
              terms: false,
            }}
            validationSchema={newsletterSchema}
            onSubmit={handleSubmit}>
            {({ isSubmitting, isValid, dirty }) => (
              <Form className={clsx(styles.form, {[styles.hidden]: status !== "idle"})}>
                <div className={styles['input-button']}>
                  <Field type='text' id='email' name='email' placeholder="Correo electrónico" />
                  <button type='submit' disabled={!isValid || !dirty || isSubmitting}>
                    <span>Suscríbete</span>
                  </button>
                  <ErrorMessage component='span' name='email' className={styles.error} />
                </div>
                <div className={styles.checkbox}>
                  <Field type='checkbox' id='terms' name='terms' />
                  <label htmlFor='terms'>Acepto recibir correos electrónicos de Growiit.</label>
                </div>
              </Form>
            )}
          </Formik>
          <div className={clsx(styles.success, {[styles.hidden]: status !== 'success'})}>
            <h2>🎉 ¡Gracias por suscribirte!</h2>
            <p>
            ¡Te has suscrito exitosamente a nuestro newsletter! A partir de ahora, recibirás las últimas noticias, consejos y actualizaciones directamente en tu correo.
            Estamos emocionados de que formes parte de nuestra comunidad. ✨
            </p>
          </div>

          <div className={clsx(styles.error, {[styles.hidden]: status !== 'error'})}>
            <h2>¡Ups! Ocurrió un error</h2>
            <p>
              Parece que hubo un problema al procesar tu suscripción. Por favor, inténtalo nuevamente más tarde.
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
