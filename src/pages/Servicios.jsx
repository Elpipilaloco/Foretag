import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faCircleQuestion, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Popover } from 'bootstrap'
import { useEffect } from 'react'
import Footer from '../components/Footer'
import Icon from '../components/Icon'
import Menu from '../components/Menu'
import './servicios.css'

export default function Servicios () {
  useEffect(() => {
    const btn1 = document.querySelector('.btn-hidden-1')
    const btn2 = document.querySelector('.btn-hidden-2')
    const btn3 = document.querySelector('.btn-hidden-3')
    const btn4 = document.querySelector('.btn-hidden-4')
    const panel1 = document.querySelector('.panel-1')
    const panel2 = document.querySelector('.panel-2')
    const panel3 = document.querySelector('.panel-3')
    const panel4 = document.querySelector('.panel-4')
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl))
    const mostrar1 = () => {
      panel1.dataset.hidden = 'false'
      panel2.dataset.hidden = 'true'
      panel3.dataset.hidden = 'true'
      panel4.dataset.hidden = 'true'
      if (btn1?.classList.contains('btn-borde')) {
        console.log('nada')
      } else if (btn2?.classList.contains('btn-borde')) {
        btn2.classList.toggle('btn-borde')
        btn1?.classList.toggle('btn-borde')
      } else if (btn3?.classList.contains('btn-borde')) {
        btn3.classList.toggle('btn-borde')
        btn1?.classList.toggle('btn-borde')
      } else if (btn4?.classList.contains('btn-borde')) {
        btn4.classList.toggle('btn-borde')
        btn1?.classList.toggle('btn-borde')
      }
      panel1.style.animation = 'opacity 0.5s linear'
      setTimeout(() => {
        panel1.style.animation = ''
      }, 600)
    }
    const mostrar2 = () => {
      panel1.dataset.hidden = 'true'
      panel2.dataset.hidden = 'false'
      panel3.dataset.hidden = 'true'
      panel4.dataset.hidden = 'true'
      if (btn2?.classList.contains('btn-borde')) {
        console.log('nada')
      } else if (btn1?.classList.contains('btn-borde')) {
        btn1.classList.toggle('btn-borde')
        btn2?.classList.toggle('btn-borde')
      } else if (btn3?.classList.contains('btn-borde')) {
        btn3.classList.toggle('btn-borde')
        btn2?.classList.toggle('btn-borde')
      } else if (btn4?.classList.contains('btn-borde')) {
        btn4.classList.toggle('btn-borde')
        btn2?.classList.toggle('btn-borde')
      }
      panel2.style.animation = 'opacity 0.5s linear'
      setTimeout(() => {
        panel2.style.animation = ''
      }, 600)
    }
    const mostrar3 = () => {
      panel1.dataset.hidden = 'true'
      panel2.dataset.hidden = 'true'
      panel3.dataset.hidden = 'false'
      panel4.dataset.hidden = 'true'
      if (btn3?.classList.contains('btn-borde')) {
        console.log('nada')
      } else if (btn2?.classList.contains('btn-borde')) {
        btn2.classList.toggle('btn-borde')
        btn3?.classList.toggle('btn-borde')
      } else if (btn1?.classList.contains('btn-borde')) {
        btn1.classList.toggle('btn-borde')
        btn3?.classList.toggle('btn-borde')
      } else if (btn4?.classList.contains('btn-borde')) {
        btn4.classList.toggle('btn-borde')
        btn3?.classList.toggle('btn-borde')
      }
      panel3.style.animation = 'opacity 0.5s linear'
      setTimeout(() => {
        panel3.style.animation = ''
      }, 600)
    }
    const mostrar4 = () => {
      panel1.dataset.hidden = 'true'
      panel2.dataset.hidden = 'true'
      panel3.dataset.hidden = 'true'
      panel4.dataset.hidden = 'false'
      if (btn4?.classList.contains('btn-borde')) {
        console.log('nada')
      } else if (btn2?.classList.contains('btn-borde')) {
        btn2.classList.toggle('btn-borde')
        btn4?.classList.toggle('btn-borde')
      } else if (btn3?.classList.contains('btn-borde')) {
        btn3.classList.toggle('btn-borde')
        btn4?.classList.toggle('btn-borde')
      } else if (btn1?.classList.contains('btn-borde')) {
        btn1.classList.toggle('btn-borde')
        btn4?.classList.toggle('btn-borde')
      }
      panel4.style.animation = 'opacity 0.5s linear'
      setTimeout(() => {
        panel4.style.animation = ''
      }, 600)
    }

    btn1?.addEventListener('click', mostrar1)
    btn2?.addEventListener('click', mostrar2)
    btn3?.addEventListener('click', mostrar3)
    btn4?.addEventListener('click', mostrar4)
  })

  return (
    <>
      <Menu />
      <img src='assets/vector.webp' alt='Vector' className='w-100 vector' />
      <div className='cabezera-s' />
      <h1 className='text-center f mb-4'>Escoje el mejor plan para ti</h1>
      <div className='container anual-toggle'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card mb-3'>
              <h3 className='card-header text-center'>Página Web Básica.<br />$1,240.00</h3>
              <div className='card-body text-center'>
                <h5 className='card-title'>+$300.00/ Anual</h5>
                <h6 className='card-subtitle text-muted'>La mejor opcion si solo deseas mostrar tu servicio o
                  producto
                  de forma general
                </h6>
              </div>
              <div className='card-body d-flex flex-column'>
                <p className='card-text'>
                  <Icon icon={faCheck} className='fa-check' /> Tipo one page (1 Hoja o pestaña)
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> 3 Secciones: Inicio, Servicios y Datos de Contacto
                  <br />
                  <Icon icon={faXmark} className='fa-xmark' /> &nbsp;Mapa de ubicacion
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Boton flotante de whatsapp
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> SSL gratis <a tabIndex='0' role='button' data-bs-toggle='popover' data-bs-trigger='focus' data-bs-content='Protege tu sitio web y gana la confianza del cliente con un certificado SSL gratuito. El certificado encripta los datos, asegurándose de que no se vean comprometidos, espiados o falsificados, protegiendo la información confidencial del usuario en tu sitio web.'> <Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' /></a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Dominio gratis el 1er año&nbsp;
                  <a
                    tabIndex='0' role='button'
                    data-bs-toggle='popover' data-bs-trigger='focus'
                    data-bs-content='En el dominio solo se incluyen las extensiones .com, .net o .org, cualquier otra extensión podría tener un costo extra.'
                  >
                    <Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Diseño Responsivo
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Modificaciones semestrales al siteo web <a tabIndex='0' role='button' data-bs-toggle='popover' data-bs-trigger='focus' data-bs-title='En las modificaciones puedes hacer pequeños cambios en tu sitio web, cómo: cambiar alguna imágen de tu sitio web, cambiar el logo de tu sitio web, cambiar algún color, etc.' data-bs-content='Nota: las modificaciones no son incluir nuevas secciones o elementos/funciones no pactados inicialmente ya que estos generarían costo extra. Cualquier cambio o ajuste que se realice fuera del tiempo acordado generará un costo extra.'> <Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' /> </a>
                  <br />
                  <Icon icon={faXmark} className='fa-xmark' /> &nbsp;Aviso de privacidad, si es necesario <a tabIndex='0' role='button' data-bs-toggle='popover' data-bs-trigger='focus' data-bs-content='El aviso de privacidad es necesario si les solicitas a tus clientes que ingresen un dato personal en tu página web, por ejemplo un correo electrónico.'> <Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' /> </a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> 5 correos personalizados
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Manejo de hosting&nbsp;
                  <a
                    tabIndex='0' role='button'
                    data-bs-toggle='popover' data-bs-trigger='focus' data-bs-content='Para este plan nosotros nos encargaremos de adquirir el hosting y administrarlo por ti.
                            '
                  ><Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                </p>
                <a className='what-btn' href='https://wa.me/524445116978?text=Me%20interesa%20adquirir%20una%20página%20web' target='_blank' rel='noreferrer'>WhatsApp<Icon icon={faWhatsapp} /></a>
              </div>
              <div className='card-footer text-muted'>
                Tiempo de entrega: 2 Días.
                <br />
                Páginas Web NO administrables por el usuario.
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-3'>
              <h3 className='card-header text-center'>Página Web Landing.<br />$2,040.00</h3>
              <div className='card-body text-center'>
                <h5 className='card-title'>+$300.00/ Anual</h5>
                <h6 className='card-subtitle text-muted'>La mejor opcion si necesitas mostrar información sobre tu
                  negocio
                </h6>
              </div>
              <div className='card-body d-flex flex-column'>
                <p className='card-text'>
                  <Icon icon={faCheck} className='fa-check' /> Tipo one page (1 Hoja o pestaña)
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> 5 Secciones: Inicio, Nosotros, Servicios, Galería y Datos de
                  Contacto
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Mapa de ubicacion
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Boton flotante de whatsapp
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> SSL gratis&nbsp;
                  <a
                    tabIndex='0' role='button'
                    data-bs-toggle='popover' data-bs-trigger='focus'
                    data-bs-content='Protege tu sitio web y gana la confianza del cliente con un certificado SSL gratuito. El certificado encripta los datos, asegurándose de que no se vean comprometidos, espiados o falsificados, protegiendo la información confidencial del usuario en tu sitio web.'
                  ><Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Dominio gratis el 1er año&nbsp;
                  <a
                    tabIndex='0' role='button'
                    data-bs-toggle='popover' data-bs-trigger='focus'
                    data-bs-content='En el dominio solo se incluyen las extensiones .com, .net o .org, cualquier otra extensión podría tener un costo extra.'
                  >
                    <Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Diseño Responsivo
                  <br />
                  <Icon icon={faCheck} className='fa-check' />
                  &nbsp;Modificaciones trimestrales al siteo web&nbsp;
                  <a
                    tabIndex='0' role='button' data-bs-toggle='popover' data-bs-trigger='focus'
                    data-bs-title='En las modificaciones puedes hacer pequeños cambios en tu sitio web, cómo: cambiar alguna imágen de tu sitio web, cambiar el logo de tu sitio web, cambiar algún color, etc.'
                    data-bs-content='Nota: las modificaciones no son incluir nuevas secciones o elementos/funciones no pactados inicialmente ya que estos generarían costo extra. Cualquier cambio o ajuste que se realice fuera del tiempo acordado generará un costo extra.'
                  ><Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                  <br />
                  <Icon icon={faXmark} className='fa-xmark' /> &nbsp;Aviso de privacidad, si es necesario&nbsp;
                  <a
                    tabIndex='0' role='button' data-bs-toggle='popover' data-bs-trigger='focus'
                    data-bs-content='El aviso de privacidad es necesario si les solicitas a tus clientes que ingresen un dato personal en tu página web, por ejemplo un correo electrónico.'
                  >
                    <Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> 10 correos personalizados
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Manejo de hosting&nbsp;
                  <a
                    tabIndex='0' role='button'
                    data-bs-toggle='popover' data-bs-trigger='focus' data-bs-content='Para este plan nosotros nos encargaremos de adquirir el hosting y administrarlo por ti.
                            '
                  ><Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                </p>
                <a className='what-btn' href='https://wa.me/524445116978?text=Me%20interesa%20adquirir%20una%20página%20web' target='_blank' rel='noreferrer'>WhatsApp<Icon icon={faWhatsapp} /></a>
              </div>
              <div className='card-footer text-muted'>
                Tiempo de entrega: 3 Días.
                <br />
                Páginas Web NO administrables por el usuario.
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card mb-3'>
              <h3 className='card-header text-center'>Sitio Web Empresarial.<br />$3,240.00</h3>
              <div className='card-body text-center'>
                <h5 className='card-title'>+$500.00/ Anual</h5>
                <h6 className='card-subtitle text-muted'>La mejor opcion para negocios medianos y grandes que
                  necesiten mostrar informacion de forma detallada y organizada
                </h6>
              </div>
              <div className='card-body d-flex flex-column'>
                <p className='card-text'>
                  <Icon icon={faCheck} className='fa-check' /> Diseño de 3 pestañas +Inicio +Contacto
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> mapa de ubicacion
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Boton flotante de whatsapp
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> SSL gratis&nbsp;
                  <a
                    tabIndex='0' role='button' data-bs-toggle='popover' data-bs-trigger='focus'
                    data-bs-content='Protege tu sitio web y gana la confianza del cliente con un certificado SSL gratuito. El certificado encripta los datos, asegurándose de que no se vean comprometidos, espiados o falsificados, protegiendo la información confidencial del usuario en tu sitio web.'
                  >
                    <Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Dominio gratis el 1er año&nbsp;
                  <a
                    tabIndex='0' role='button'
                    data-bs-toggle='popover' data-bs-trigger='focus'
                    data-bs-content='En el dominio solo se incluyen las extensiones .com, .net o .org, cualquier otra extensión podría tener un costo extra.'
                  >
                    <Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Diseño Responsivo
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Modificaciones mensuales al siteo web&nbsp;
                  <a
                    tabIndex='0'
                    role='button' data-bs-toggle='popover' data-bs-trigger='focus'
                    data-bs-title='En las modificaciones puedes hacer pequeños cambios en tu sitio web, cómo: cambiar alguna imágen de tu sitio web, cambiar el logo de tu sitio web, cambiar algún color, etc.'
                    data-bs-content='Nota: las modificaciones no son incluir nuevas secciones o elementos/funciones no pactados inicialmente ya que estos generarían costo extra. Cualquier cambio o ajuste que se realice fuera del tiempo acordado generará un costo extra.
                        '
                  ><Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Aviso de privacidad, si es necesario&nbsp;
                  <a
                    tabIndex='0' role='button' data-bs-toggle='popover' data-bs-trigger='focus'
                    data-bs-content='El aviso de privacidad es necesario si les solicitas a tus clientes que ingresen un dato personal en tu página web, por ejemplo un correo electrónico.'
                  >
                    <Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> 25 correos personalizados
                  <br />
                  <Icon icon={faCheck} className='fa-check' /> Manejo de hosting&nbsp;
                  <a
                    tabIndex='0' role='button'
                    data-bs-toggle='popover' data-bs-trigger='focus' data-bs-content='Para este plan nosotros nos encargaremos de adquirir el hosting y administrarlo por ti.
                            '
                  ><Icon icon={faCircleQuestion} className='fa-solid fa-circle-question' />
                  </a>
                </p>
                <a className='what-btn' href='https://wa.me/524445116978?text=Me%20interesa%20adquirir%20una%20página%20web' target='_blank' rel='noreferrer'>WhatsApp <Icon icon={faWhatsapp} /></a>
              </div>
              <div className='card-footer text-muted'>
                Tiempo de entrega: De 4 a 6 Días.
                <br />
                Páginas Web NO administrables por el usuario.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cuadro-t'>
        <h1 className='text-center pt-4'>Como funciona</h1>
        <div className='container container-pasos'>
          <div className='row'>
            <div className='col-md-3'>
              <button className='btn-pasos btn-hidden-1 btn-borde'>Paso 1</button>
              <button className='btn-pasos btn-hidden-2'>Paso 2</button>
              <button className='btn-pasos btn-hidden-3'>Paso 3</button>
              <button className='btn-pasos btn-hidden-4'>Paso 4</button>
            </div>
            <div className='col-md-9 paneles'>
              <div className='panel-1' data-hidden='false'>
                <h3>Elige el plan.</h3>
                <div>
                  <p className='pp'>Contamos con diversas opciones, elige la que mejor se adapte a tus necesidades.
                  </p>
                </div>
              </div>
              <div className='panel-2' data-hidden='true'>
                <h3>Envíanos tu Información.</h3>
                <div>
                  <p className='pp'>Envíanos el texto de cada sección de tu sitio web en un archivo word, imágenes y tu logo en buena calidad sin fondo. Si cuentas con algún ejemplo de sitio también puedes mandarlo.</p>
                </div>
              </div>
              <div className='panel-3' data-hidden='true'>
                <h3>Pago de Anticipo.</h3>
                <div>
                  <p className='pp'>Una vez confirmada tu información, te solicitaremos el pago del 50% de anticipo.
                  </p>
                </div>
              </div>
              <div className='panel-4' data-hidden='true'>
                <h3>Comenzamos a crear</h3>
                <div>
                  <p className='pp'>Confirmado el anticipo te entregamos un mapa de ruta de los tiempos que tomará cada etapa de la creación de tu página web, y cuando estará lista para entregarte tu página y que la puedas revisar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
