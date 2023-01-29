import { faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import './menu.css'

export default function Menu () {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.menu')
    const menu = document.querySelector('.container-fluid')
    const hr = document.querySelector('.selector')
    header.classList.toggle('abajo', window.scrollY > 0)
    menu.classList.toggle('pad', window.scrollY < 1)
    hr?.classList.toggle('hr', window.scrollY < 1)
    document.querySelectorAll('.nav-lin')?.forEach(negro => {
      negro?.classList.toggle('negro', window.scrollY < 1)
    })
  })

  useEffect(() => {
    const btn = document.querySelector('.navbar-toggler')
    const menu = document.querySelector('.navbar-collapse')
    btn.addEventListener('click', () => {
      menu.classList.toggle('show')
    })
  })

  return (
    <>
      <nav className='navbar navbar-expand-lg menu'>
        <div className='container-fluid pad'>
          <Link to='/' className='navbar-brand'><img className='logo' src='assets/logo.webp' alt='Logo foretag' /></Link>
          <button
            className='navbar-toggler' type='button'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link to='/' className='nav-lin negro' aria-current='page'>Inicio</Link>
              </li>
              <li className='nav-item'>
                <Link to='/servicios' className='nav-lin negro'>Servicios</Link>
              </li>
              <li className='nav-item'>
                <Link to='/portafolio' className='nav-lin negro'>Portafolio</Link>
              </li>
              <li className='nav-item'>
                <a className='nav-lin negro' data-bs-toggle='modal' data-bs-target='#exampleModal'>Contacto</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='selector hr' />
      </nav>

      {/* Modal */}
      <div className='modal fade' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog modal-fullscreen modal-fullscreen-sm-down'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' />
            </div>
            <div className='modal-body row d-flex justify-content-center align-items-center'>
              <h5 className='h1 col-md-6'>Contactate con nosotros para resolver
                cualquier duda o
                contratar tu propia pagina web
              </h5>
              <div className='col-md-6'>
                <div className='p-4'>
                  <div className='links-c'>
                    <div className='email'>
                      <h4>Email: contacto@foretag.ml</h4>
                    </div>
                    <div>
                      <a href='https://www.facebook.com/profile.php?id=100085112133366' target='_blank' rel='noreferrer'> <Icon icon={faFacebookSquare} /></a>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-12 d-flex justify-content-center'>
                      <a className='what' href='https://wa.me/524445116978?text=Me%20interesa%20adquirir%20una%20página%20web' target='_blank' rel='noreferrer'>WhatsApp <Icon icon={faWhatsapp} /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
