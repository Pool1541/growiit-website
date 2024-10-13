import { PolicyLayout } from '@/components/layout/policy-layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos del servicio',
};

export default function Page() {
  return (
    <PolicyLayout>
      <article>
        <h1>Términos y Condiciones de Servicio</h1>
      </article>
      <article>
        <h2>1. Alcance del Servicio</h2>
        <p>
          Growiit ofrece el desarrollo de páginas web a medida bajo tres planes: Básico, Estándar, y
          Premium. Cada plan especifica un número máximo de páginas, características incluidas, y
          servicios adicionales que pueden ser cotizados por separado. Las páginas incluidas en cada
          plan son de carácter estático y no incluyen funcionalidades complejas como dashboards,
          blogs (a menos que se indique), o tiendas en línea, salvo que se acuerde y cotice de
          manera adicional.
        </p>
      </article>
      <article>
        <h2>2. Páginas y Secciones</h2>
        <p>
          Cada página del sitio web tiene un límite de hasta 4 secciones. Si una página excede este
          número, se reducirá el número de secciones de otras páginas del sitio web para mantener el
          balance. En el caso de que el cliente necesite más secciones, se podrá cotizar como un
          servicio adicional.
        </p>
      </article>
      <article>
        <h2>3. Optimización SEO</h2>
        <p>
          Growiit ofrece dos niveles de optimización SEO: básica y avanzada. La optimización básica
          cubre solo SEO on-page esencial, mientras que la avanzada incluye configuraciones más
          detalladas de SEO on-page. Ninguno de los planes incluye SEO off-page, investigación de
          palabras clave o generación de backlinks, a menos que se acuerde como un servicio
          adicional.
        </p>
      </article>
      <article>
        <h2>4. Dominio, Hosting y SSL</h2>
        <p>
          Growiit proporcionará un dominio, hosting y SSL de forma gratuita durante el primer año,
          siempre y cuando el dominio tenga un costo máximo de $10 USD. Si el costo es mayor, el
          cliente deberá cubrir la diferencia o elegir otro dominio. Después del primer año, el
          cliente podrá optar por renovar estos servicios a través de Growiit o contratar otros
          proveedores por su cuenta. El hosting es proporcionado a través de plataformas de
          infraestructura en la nube, y Growiit no se responsabiliza por problemas relacionados con
          la disponibilidad del servicio.
        </p>
      </article>
      <article>
        <h2>5. Subcontratación</h2>
        <p>
          Growiit se reserva el derecho de subcontratar servicios de terceros para cumplir con las
          obligaciones establecidas en los contratos de desarrollo web. Esto incluye, pero no se
          limita a, servicios de hosting, dominios y certificados SSL.
        </p>
      </article>
      <article>
        <h2>6. Revisiones</h2>
        <p>
          Los planes incluyen un número limitado de revisiones gratuitas. Estas revisiones son
          modificaciones menores que no implican cambios completos de diseño ni la creación de
          nuevas secciones. Las solicitudes de revisión deberán realizarse dentro del mes posterior
          a la entrega del proyecto. Cualquier solicitud de modificación fuera de este plazo o que
          implique un trabajo mayor será cotizada por separado.
        </p>
      </article>
      <article>
        <h2>7. Google Analytics</h2>
        <p>
          La integración de Google Analytics está incluida en el Plan Premium. Growiit solo realiza
          la configuración técnica para integrar Google Analytics en la página web del cliente; la
          gestión de la cuenta de Google Analytics es responsabilidad del cliente.
        </p>
      </article>
      <article>
        <h2>8. Integración de Blog</h2>
        <p>
          En el Plan Premium, Growiit incluye un blog con funciones básicas, cuyo diseño y
          funcionalidades se especificarán en el contrato. Si el cliente requiere un diseño
          personalizado o características avanzadas, esto deberá ser cotizado por separado.
        </p>
      </article>
      <article>
        <h2>9. Pagos</h2>
        <p>
          El pago por los servicios se realiza por hitos. Se requiere un adelanto del 20% para
          comenzar el proyecto, seguido de pagos adicionales a medida que se completan las etapas.
          El proyecto final no será entregado hasta que se haya liquidado el 100% del costo
          acordado. En caso de que el cliente no cumpla con los pagos dentro de un plazo máximo de 1
          mes, Growiit se reserva el derecho de suspender el desarrollo. No se realizan reembolsos
          una vez iniciado el desarrollo.
        </p>
      </article>
      <article>
        <h2>10. Servicios Adicionales</h2>
        <p>
          Cualquier característica o servicio que no esté especificado en los planes o en estos
          términos podrá ser ofrecido bajo una cotización adicional. Esto incluye, pero no se limita
          a, SEO avanzado, funcionalidad de blog personalizada, diseño web avanzado, y otras
          integraciones.
        </p>
      </article>
      <article>
        <h2>11. Limitación de Responsabilidad</h2>
        <p>
          Growiit no se hace responsable por interrupciones del servicio de hosting, problemas con
          plataformas de infraestructura en la nube, o cualquier inconveniente derivado de
          proveedores externos. En caso de fallos técnicos ajenos a Growiit, se brindará soporte
          para facilitar la resolución del problema con el proveedor correspondiente.
        </p>
      </article>
      <article>
        <h2>12. Actualización de Términos</h2>
        <p>
          Growiit se reserva el derecho de modificar estos Términos y Condiciones en cualquier
          momento. Cualquier cambio será comunicado al cliente, y el uso continuado del servicio
          después de dichas modificaciones implicará la aceptación de los nuevos términos.
        </p>
      </article>
      <article>
        <h2>13. Propiedad Intelectual</h2>
        <p>
          A menos que se acuerde explícitamente en el contrato, Growiit conserva los derechos sobre
          el código fuente desarrollado hasta que el cliente realice el pago completo. Una vez
          completado el pago, se entregarán los accesos y el código fuente según lo acordado.
        </p>
      </article>
      <article>
        <h2>14. Plazo de Vigencia</h2>
        <p>
          Los presentes Términos y Condiciones tienen vigencia desde la aceptación del contrato y se
          mantendrán en vigor hasta la finalización del proyecto, o hasta que se acuerden nuevos
          términos entre Growiit y el cliente.
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
