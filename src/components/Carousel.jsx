import '../../public/assets/owlcarousel/assets/owl.carousel.css'
import OwlCarousel from 'react-owl-carousel'
import '../App.css'
import Icon from './Icon'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default function App () {
  return (
    <div>
      <div className='container-xxl py-5'>
        <div className='container py-5 px-lg-5'>
          <h1 className='text-center mb-5'>Que dicen nuestros clientes!</h1>
          <div className='owl-carousel testimonial-carousel'>
            <OwlCarousel
              loop
              nav
              items={1}
              navText={[
                '<svg class="icono-move" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>',
                '<svg class="icono-move" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>'
              ]}

            >
              <div className='testimonial-item bg-light rounded m-2'>
                <p className='fs-5'><Icon icon={faQuoteLeft} className='fa-4x cita-carousel mt-n4 me-3' />
                  Después de investigar varias empresas de desarrollo de sitios web, elegí a este negocio y no me arrepiento. El proceso de diseño fue fácil y eficiente, y el resultado final es una página web impresionante que supera mis expectativas. El equipo también ofreció un excelente servicio de mantenimiento y actualizaciones, lo que me permite mantener mi sitio web actualizado y funcionando sin problemas. Sin duda, volvería a trabajar con ellos en el futuro.
                </p>
                {/* <div className='d-flex align-items-center'>
                  <img
                    className='img-fluid flex-shrink-0 rounded-circle' src='assets/anual.webp' style={{ width: '65px', height: '65px' }}
                  />
                  <div className='ps-4'>
                    <h5 className='mb-1'>Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div> */}
              </div>
              <div className='testimonial-item bg-light rounded m-2'>
                <p className='fs-5'><Icon icon={faQuoteLeft} className='fa-4x cita-carousel mt-n4 me-3' />
                  Acabé de comprar una página web para mi negocio de construcción y estoy increíblemente satisfecho con el servicio que recibí. El equipo de diseño fue muy receptivo a mis necesidades y me ayudaron a crear una página web que refleja perfectamente mi marca y atrae a nuevos clientes. Altamente recomendado.
                </p>
                {/* <div className='d-flex align-items-center'>
                  <img
                    className='img-fluid flex-shrink-0 rounded-circle' src='assets/anual.webp' style={{ width: '65px', height: '65px' }}
                  />
                  <div className='ps-4'>
                    <h5 className='mb-1'>Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div> */}
              </div>
              <div className='testimonial-item bg-light rounded m-2'>
                <p className='fs-5'><Icon icon={faQuoteLeft} className='fa-4x cita-carousel mt-n4 me-3' />
                  Acabo de lanzar mi nueva página web con este negocio y no podría estar más contento con el resultado. El equipo de diseño trabajó para capturar la esencia de mi negocio y traducirlo en un sitio web atractivo y fácil de navegar. Además, el servicio de soporte ha sido excepcional, siempre disponible para ayudarme con cualquier pregunta o problema. Sin duda recomendaría a este negocio a cualquiera que busque un servicio de calidad para su página web.
                </p>
                {/* <div className='d-flex align-items-center'>
                  <img
                    className='img-fluid flex-shrink-0 rounded-circle' src='assets/anual.webp' style={{ width: '65px', height: '65px' }}
                  />
                  <div className='ps-4'>
                    <h5 className='mb-1'>Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div> */}
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}
