import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import './footer.css'

export default function Footer () {
  return (
    <div className='pie'>
      <div className='container'>
        <div className='flexi'>
          <div className='mt-2'>
            <p className='text-white'>Contactanos</p>
            <p className='text-white'>Email: contacto@foretag.ml</p>
            <p className='text-white'>Whatsapp: +52 444 511 6978</p>
          </div>
          <div className='logogo-foretag'>
            <Link to='/'><img className='w-50' src='assets/logo.webp' alt='Logo Foretag' /></Link>
          </div>
          <div>
            <ul>
              <li>
                <div className='link'>
                  <a href='https://www.facebook.com/profile.php?id=100085112133366' target='_blank' rel='noreferrer' />
                  <a href='https://www.facebook.com/profile.php?id=100085112133366' target='_blank' rel='noreferrer' />
                  <a href='https://www.facebook.com/profile.php?id=100085112133366' target='_blank' rel='noreferrer' />
                  <a href='https://www.facebook.com/profile.php?id=100085112133366' target='_blank' rel='noreferrer' />
                  <div className='cube github'>
                    <div />
                    <div />
                    <div />
                    <div />
                    <div>
                      <Icon className='fill' icon={faFacebookF} />
                    </div>
                    <div>/foretagweb</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='derechos'>
          <p className='text-white'>© Foretag, All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}
