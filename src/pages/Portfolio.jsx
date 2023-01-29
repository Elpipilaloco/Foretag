import Menu from '../components/Menu'
import Footer from '../components/Footer'
import './portfolio.css'
import Icon from '../components/Icon'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio () {
  return (
    <>
      <Menu />
      <div className='contenedor-porta' />
      <div className='conte'>
        <h1 className='text-center title-portfolio mb-5'>Proyectos recientemente completados</h1>
        <div id='carouselExampleFade' className='carousel slide carousel-fade mb-5'>
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src='assets/portfolio/1.webp' className='img-slider' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src='assets/portfolio/2.webp' className='img-slider' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src='assets/portfolio/3.webp' className='img-slider' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src='assets/portfolio/4.webp' className='img-slider' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src='assets/portfolio/5.webp' className='img-slider' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src='assets/portfolio/6.webp' className='img-slider' alt='...' />
            </div>
            <div className='carousel-item'>
              <img src='assets/portfolio/7.webp' className='img-slider' alt='...' />
            </div>
          </div>
          <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='prev'>
            <Icon icon={faChevronCircleLeft} className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='visually-hidden'>Previous</span>
          </button>
          <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleFade' data-bs-slide='next'>
            <Icon icon={faChevronCircleRight} className='carousel-control-prev-icon' aria-hidden='true' />
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

/* <div className='row'>
          <div className='col-lg-4 col-md-6 portfolio-item '>
            <div className='rounded overflow-hidden'>
              <div className='position-relative overflow-hidden'>
                <img className='img-fluid w-100' src='assets/kiss.webp' alt='' />
                <div className='portfolio-overlay'>
                  <a className='btn btn-square btn-outline-light mx-1' data-lightbox='portfolio'><Icon icon={faEye} /></a>
                </div>
              </div>
              <div className='bg-light p-4'>
                <p className='text-primary mb-2'>UI / UX Design</p>
                <p className='lh-base mb-0 title-p'>Digital Agency Website Design And Development</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 portfolio-item '>
            <div className='rounded overflow-hidden'>
              <div className='position-relative overflow-hidden'>
                <img className='img-fluid w-100' src='assets/kiss.webp' alt='' />
                <div className='portfolio-overlay'>
                  <a className='btn btn-square btn-outline-light mx-1' data-lightbox='portfolio'><Icon icon={faEye} /></a>
                </div>
              </div>
              <div className='bg-light p-4'>
                <p className='text-primary mb-2'>UI / UX Design</p>
                <p className='lh-base mb-0 title-p'>Digital Agency Website Design And Development</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 portfolio-item'>
            <div className='rounded overflow-hidden'>
              <div className='position-relative overflow-hidden'>
                <img className='img-fluid w-100' src='assets/kiss.webp' alt='' />
                <div className='portfolio-overlay'>
                  <a className='btn btn-square btn-outline-light mx-1' href='' data-lightbox='portfolio'><Icon icon={faEye} /></a>
                </div>
              </div>
              <div className='bg-light p-4'>
                <p className='text-primary mb-2'>UI / UX Design</p>
                <p className='lh-base mb-0 title-p'>Digital Agency Website Design And Development</p>
              </div>
            </div>
          </div>
        </div> */
