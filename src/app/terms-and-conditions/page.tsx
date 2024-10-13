import { PolicyLayout } from '@/components/layout/policy-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y condiciones',
};

export default function Page() {
  return (
    <PolicyLayout>
      <h1>Términos y Condiciones</h1>
      <article>
        <h2>1. Aceptación de los Términos</h2>
        <p>
          Al contratar los servicios de Growiit, el cliente acepta los presentes Términos y
          Condiciones. Estos términos constituyen un acuerdo legal vinculante entre el cliente y
          Growiit. Si el cliente no está de acuerdo con alguna parte de estos términos, deberá
          abstenerse de utilizar los servicios de Growiit.
        </p>
      </article>
      <article>
        <h2>2. Propiedad Intelectual</h2>
        <p>
          Todos los derechos de propiedad intelectual sobre el diseño, desarrollo, código fuente, y
          cualquier otra creación derivada de los servicios proporcionados por Growiit, pertenecerán
          a Growiit hasta que el cliente haya realizado el pago completo del proyecto. Una vez
          completado el pago, el cliente tendrá derecho a la propiedad del sitio web y del código
          fuente, según lo establecido en el contrato específico. El cliente garantiza que posee o
          tiene derechos sobre cualquier contenido (imágenes, textos, logos, etc.) proporcionado a
          Growiit para su uso en el desarrollo del sitio web. El cliente será responsable de
          cualquier reclamación relacionada con la infracción de derechos de propiedad intelectual
          de terceros.
        </p>
      </article>
      <article>
        <h2>3. Confidencialidad</h2>
        <p>
          Ambas partes se comprometen a mantener la confidencialidad de cualquier información
          comercial, técnica o de otra naturaleza que sea intercambiada durante el desarrollo del
          proyecto. Ninguna de las partes podrá divulgar dicha información a terceros sin el
          consentimiento previo por escrito de la otra parte, salvo cuando sea requerido por la ley.
        </p>
      </article>
      <article>
        <h2>4. Protección de Datos</h2>
        <p>
          Growiit recopila y trata los datos personales de sus clientes de acuerdo con las leyes
          aplicables de protección de datos, incluyendo el Reglamento General de Protección de Datos
          (GDPR) de la Unión Europea, cuando corresponda. Growiit no compartirá ni divulgará los
          datos personales de los clientes a terceros, excepto en los casos necesarios para la
          prestación de servicios (como la contratación de dominios o servicios de hosting) o cuando
          lo requiera la ley. Los clientes pueden consultar la Política de Privacidad de Growiit
          para obtener más detalles sobre el tratamiento de sus datos.
        </p>
      </article>
      <article>
        <h2>5. Responsabilidad Limitada</h2>
        <p>
          Growiit no será responsable por cualquier daño directo o indirecto, pérdida de ingresos o
          datos, interrupciones del servicio, o cualquier otro perjuicio derivado de:
        </p>
        <ul>
          <li>El uso del sitio web desarrollado.</li>
          <li>
            Problemas con proveedores externos, incluyendo plataformas de infraestructura en la nube
            (hosting), proveedores de dominios, y otros servicios subcontratados.
          </li>
          <li>
            Incumplimientos del cliente en cuanto a pagos o entrega de información necesaria para la
            ejecución del proyecto.
          </li>
          <li>
            La responsabilidad de Growiit estará limitada al valor total del contrato acordado entre
            Growiit y el cliente.
          </li>
        </ul>
      </article>
      <article>
        <h2>6. Garantía y Soporte</h2>
        <p>
          El cliente tiene derecho a las revisiones y al soporte técnico especificado en el plan
          contratado. Cualquier solicitud de soporte adicional, mantenimiento o cambios mayores
          deberá ser cotizada por separado y estará sujeta a disponibilidad. Growiit garantiza el
          correcto funcionamiento del sitio web en los navegadores web más comunes al momento de la
          entrega (Google Chrome, Mozilla Firefox, Safari y Microsoft Edge). Sin embargo, Growiit no
          se hace responsable por problemas derivados de actualizaciones futuras de navegadores o
          tecnologías no cubiertas por el contrato.
        </p>
      </article>
      <article>
        <h2>7. Subcontratación</h2>
        <p>
          Growiit se reserva el derecho de subcontratar servicios a terceros para la provisión de
          infraestructura de hosting, registro de dominios, certificados SSL, y otros servicios
          necesarios para la ejecución de los proyectos. Sin embargo, Growiit será responsable de
          gestionar dichos servicios para asegurar el cumplimiento de los términos acordados.
        </p>
      </article>
      <article>
        <h2>8. Modificaciones a los Términos y Condiciones</h2>
        <p>
          Growiit se reserva el derecho de modificar estos Términos y Condiciones en cualquier
          momento. Cualquier modificación será notificada a los clientes a través de los canales de
          contacto habituales, y las actualizaciones estarán disponibles en el sitio web de Growiit.
          El uso continuado de los servicios después de la publicación de las modificaciones
          implicará la aceptación de los nuevos términos.
        </p>
      </article>
      <article>
        <h2>9. Suspensión y Terminación de Servicios</h2>
        <p>
          Growiit se reserva el derecho de suspender o terminar los servicios en caso de
          incumplimiento de estos Términos y Condiciones por parte del cliente, incluyendo pero no
          limitándose a:
        </p>
        <ul></ul>
        <li>Falta de pago.</li>
        <li>Suministro de información incorrecta o fraudulenta.</li>
        <li>Uso indebido o ilegal del sitio web desarrollado.</li>
        <li>
          En caso de suspensión o terminación del servicio, Growiit notificará al cliente con
          antelación y proporcionará instrucciones para corregir el incumplimiento cuando sea
          aplicable.
        </li>
      </article>
      <article>
        <h2>10. Ley Aplicable y Jurisdicción</h2>
        <p>
          Estos Términos y Condiciones se regirán por las leyes del país en el que Growiit tenga su
          sede o según se estipule en el contrato de servicios. En caso de disputas o conflictos que
          no puedan ser resueltos de manera amistosa, ambas partes se someterán a la jurisdicción de
          los tribunales competentes en dicha localidad.
        </p>
      </article>
      <article>
        <h2>11. Comunicaciones</h2>
        <p>
          Cualquier notificación o comunicación relacionada con estos Términos y Condiciones deberá
          ser realizada por escrito y enviada al correo electrónico o dirección postal proporcionada
          por cada parte al momento de la contratación del servicio.
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
