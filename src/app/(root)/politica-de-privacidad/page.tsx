import { Metadata } from 'next';
import { PolicyLayout } from '@/components/layout/policy-layout';

export const metadata: Metadata = {
  title: 'Política de privacidad',
};

export default function Page() {
  return (
    <PolicyLayout>
      <article>
        <h1>Política de Privacidad</h1>
        <p>
          En Growiit, nos comprometemos a proteger la privacidad y seguridad de la información
          personal que nuestros clientes y usuarios nos proporcionan. Esta política de privacidad
          describe cómo recopilamos, utilizamos y protegemos la información personal que obtenemos a
          través de nuestro sitio web y formularios de contacto.
        </p>
      </article>
      <article>
        <h2>1. Información que Recopilamos</h2>
        <p>
          A través de nuestro formulario de contacto, recopilamos los siguientes datos personales de
          los usuarios:
        </p>
        <ul>
          <li>Nombre</li>
          <li>Empresa</li>
          <li>Correo electrónico</li>
          <li>Cualquier dato que el usuario incluya en el campo de mensaje</li>
        </ul>
        <p>
          Estos datos son proporcionados voluntariamente por el usuario cuando nos contacta a través
          de nuestro formulario de contacto.
          <br />
          Además, nuestro sitio web utiliza los siguientes servicios de terceros para la
          recopilación de información:
        </p>
        <p>
          <strong>Google reCAPTCHA:</strong> Usamos reCAPTCHA para proteger nuestro formulario de
          contacto y prevenir el uso malintencionado del mismo por parte de bots. Este servicio
          puede recopilar información sobre los hábitos de navegación del usuario para verificar que
          no se trate de un bot. La información recopilada por reCAPTCHA está sujeta a la Política
          de Privacidad de Google.
          <br />
          <br />
          <strong>Google Analytics 4:</strong> Utilizamos Google Analytics 4 para obtener
          información sobre el uso y la interacción de los usuarios con nuestro sitio web,
          incluyendo métricas como las páginas vistas, el tiempo de permanencia en el sitio, y otros
          datos de comportamiento de los usuarios. Google Analytics recopila información como el
          tipo de dispositivo, navegador utilizado, y la ubicación general del usuario. Esta
          información se recopila de forma anónima y no se utiliza para identificar a usuarios
          específicos. Los datos recopilados por Google Analytics también están sujetos a la
          Política de Privacidad de Google.
        </p>
      </article>
      <article>
        <h2>2. Uso de la Información Recopilada</h2>
        <p>
          La información que recopilamos a través de nuestro formulario de contacto será utilizada
          únicamente para los siguientes fines:
        </p>
        <ul>
          <li>Responder a las solicitudes y consultas enviadas a través del formulario.</li>
          <li>
            Mantener una comunicación con los clientes o usuarios que hayan solicitado
            información.
          </li>
          <li>
            Mejorar la experiencia de usuario en nuestro sitio web mediante el análisis de los
            datos de interacción y comportamiento (mediante Google Analytics 4).
          </li>
          <li>
            No compartimos ni vendemos la información personal de los usuarios a terceros, excepto
            cuando sea necesario para la prestación de servicios (como el uso de Google reCAPTCHA
            y Google Analytics) o cuando sea requerido por ley.
          </li>
        </ul>
      </article>
      <article>
        <h2>3. Protección de la Información</h2>
        <p>
          En Growiit nos tomamos en serio la seguridad de los datos personales. Implementamos
          medidas de seguridad técnicas y organizativas para proteger la información personal que
          recopilamos contra el acceso no autorizado, la alteración, divulgación o destrucción de
          los datos.
          <br />
          Sin embargo, como sucede con todas las transmisiones de datos en línea, no podemos
          garantizar la seguridad absoluta de la información durante la transmisión a través de
          Internet. Una vez que la información llega a nuestro sistema, aplicamos estrictos
          controles de seguridad para protegerla.
        </p>
      </article>
      <article>
        <h2>4. Derechos del Usuario</h2>
        <p>
          De acuerdo con las leyes de protección de datos aplicables, los usuarios tienen los
          siguientes derechos respecto a sus datos personales:
        </p>
        <ul>
          <li>
            <b>Acceso:</b> Los usuarios tienen derecho a solicitar una copia de los datos
            personales que hemos recopilado.
          </li>
          <li>
            <b>Rectificación:</b> Los usuarios pueden solicitar la corrección de cualquier dato
            incorrecto o incompleto.
          </li>
          <li>
            <b>Eliminación:</b> Los usuarios pueden solicitar la eliminación de sus datos
            personales, salvo en los casos en los que la ley nos obligue a conservarlos.
          </li>
          <li>
            <b>Restricción del tratamiento:</b> Los usuarios pueden solicitar que se limiten
            ciertos usos de sus datos personales.
          </li>
          <li>
            <b>Portabilidad de datos:</b> En ciertas circunstancias, los usuarios pueden solicitar
            que sus datos sean transferidos a otro proveedor de servicios.
          </li>
        </ul>
        <p>
          Para ejercer estos derechos, los usuarios pueden ponerse en contacto con nosotros a través
          de la información proporcionada en esta política.
        </p>
      </article>
      <article>
        <h2>5. Uso de Cookies</h2>
        <p>
          Nuestro sitio web puede utilizar cookies para mejorar la experiencia del usuario. Las
          cookies son pequeños archivos de texto que se almacenan en el navegador del usuario y que
          permiten a nuestro sitio web recordar información como las preferencias del usuario y sus
          interacciones previas con el sitio. Los usuarios pueden configurar su navegador para
          rechazar las cookies o para recibir una notificación cuando se envíen cookies. Sin
          embargo, esto podría afectar el funcionamiento de algunas partes de nuestro sitio web.
        </p>
      </article>
      <article>
        <h2>6. Terceros Proveedores de Servicios</h2>
        <p>
          Como se mencionó anteriormente, utilizamos Google reCAPTCHA y Google Analytics como
          proveedores de servicios externos. Estos servicios pueden recopilar información sobre los
          usuarios, y el tratamiento de estos datos está regulado por la política de privacidad de
          Google.
        </p>
      </article>
      <article>
        <h2>7. Modificaciones a la Política de Privacidad</h2>
        <p>
          Growiit se reserva el derecho de modificar esta Política de Privacidad en cualquier
          momento. Cualquier cambio será publicado en esta página, y los usuarios serán notificados
          de cualquier modificación significativa a través de los medios adecuados. El uso
          continuado de nuestro sitio web después de la publicación de los cambios implicará la
          aceptación de la nueva política.
        </p>
      </article>
      <article>
        <h2>8. Edad de Consentimiento</h2>
        <p>
          Al brindar sus datos personales a Growiit, el Usuario declara tener al menos
          dieciocho años de edad o ser tutor de un menor de edad para otorgar el consentimiento de
          forma válida de acuerdo a la Ley. Growiit no llevará a cabo voluntariamente el
          tratamiento de Datos Personales relativos a menores de edad, salvo que se cuenten con el
          debido consentimiento de acuerdo a la norma aplicable. En el supuesto de que se tenga
          conocimiento que los Datos Personales recogidos corresponden a un menor de edad sin
          autorización de su tutor legal, se adoptarán las medidas oportunas para eliminarlos.
        </p>
      </article>
      <article>
        <h2>9. Contacto</h2>
        <p>
          Si tienes alguna pregunta o inquietud sobre nuestra Política de Privacidad o sobre el
          tratamiento de tus datos personales, puedes ponerte en contacto con nosotros a través del
          siguiente correo electrónico:{' '}
          <a href='mailto:contacto@growiit.com'>contacto@growiit.com</a>.
        </p>
      </article>
      <article>
        <p>
          Fecha de última actualización: 15 de octubre de 2024.
        </p>
      </article>
    </PolicyLayout>
  );
}
