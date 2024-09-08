import React from 'react'
import { useTranslation } from 'react-i18next'
import './Footer.css'
import logo from '../../assets/myLogo3.png'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className='footer'>
      <div className='footer__container container'>
        {/* <h1 className='footer__list'>Pinto.</h1> */}
        <a href='index.html' className='footer__list'>
          <img src={logo} alt='Logo' className='nav__logo-img' />
        </a>

        <ul className='footer__list'>
          <li>
            <a href='#about' className='footer__link'>
              {t('footer.about')}
            </a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>
              {t('footer.projects')}
            </a>
          </li>

          <li>
            <a href='#testimonials' className='footer__link'>
              {t('footer.testimonials')}
            </a>
          </li>
        </ul>

        <div className='footer__social'>
          <a
            href='https://www.facebook.com/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          >
            <i class='bx bxl-facebook'></i>
          </a>

          <a
            href='https://instagram.com/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          >
            <i class='bx bxl-instagram'></i>
          </a>

          <a
            href='https://twitter.com/'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          >
            <i class='bx bxl-twitter'></i>
          </a>
        </div>

        <span className='footer__copy'>&#169; {t('footer.right')}</span>
      </div>
    </div>
  )
}

export default Footer
