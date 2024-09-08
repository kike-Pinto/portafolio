import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Header.css'
import logo from '../../assets/myLogo3.png'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

const HeaderTemp = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en'
    i18n.changeLanguage(newLanguage)
  }

  /*================ Change Background Header ====================*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header')
    // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header')
    else header.classList.remove('scroll-header')
  })

  // Toggle Menu
  const [Toggle, showMenu] = useState(false)
  const [activeNav, setActiveNav] = useState('#home')

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          <img src={logo} alt='Logo' className='nav__logo-img' />
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a
                href='#home'
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className='uil uil-estate nav__icon'></i> {t('header.home')}
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#about'
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className='uil uil-user nav__icon'></i> {t('header.about')}
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#skills'
                onClick={() => setActiveNav('#skills')}
                className={
                  activeNav === '#skills'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-file-alt nav__icon'></i>{' '}
                {t('header.skills')}
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#services'
                onClick={() => setActiveNav('#services')}
                className={
                  activeNav === '#services'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-briefcase-alt nav__icon'></i>{' '}
                {t('header.services')}
              </a>
            </li>

            <li className='nav__item'>
              <a
                href='#portfolio'
                onClick={() => setActiveNav('#portfolio')}
                className={
                  activeNav === '#portfolio'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className='uil uil-scenery nav__icon'></i>{' '}
                {t('header.portfolio')}
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
            <div className='header__actions'>
              <button
                className='header__language-toggle'
                onClick={() =>
                  toggleLanguage(i18n.language === 'en' ? 'es' : 'en')
                }
              >
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </button>
            </div>
          </ul>
          <a
            href='#contact'
            onClick={() => setActiveNav('#contact')}
            className='contact-in'
          >
            {t('header.contact')}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='white'
              className='small-icon'
              // style={{ transform: 'translateY(9px)' }}
            >
              <path d='M12.006 2.007a9.927 9.927 0 0 0-7.071 2.922c-3.898 3.899-3.898 10.243 0 14.142 1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.898 3.898-10.242 0-14.142a9.928 9.928 0 0 0-7.071-2.922zm5.657 15.649c-1.507 1.507-3.517 2.337-5.657 2.337s-4.15-.83-5.657-2.337c-3.118-3.119-3.118-8.194 0-11.313 1.507-1.507 3.516-2.336 5.657-2.336s4.15.829 5.657 2.336c3.118 3.119 3.118 8.194 0 11.313z'></path>
              <path d='m11.467 11.125-3.214 3.214 1.414 1.414 3.214-3.214 2.125 2.124V9H9.343z'></path>
            </svg>
          </a>
        </div>
        <a
          href='#contact'
          onClick={() => setActiveNav('#contact')}
          className='contact-out'
        >
          {t('header.contact')}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            // style='fill: rgba(0, 0, 0, 1);transform: ;msFilter:;'
            fill='white'
            className='small-icon'
            // style={{ transform: 'translateY(9px)' }}
          >
            <path d='M12.006 2.007a9.927 9.927 0 0 0-7.071 2.922c-3.898 3.899-3.898 10.243 0 14.142 1.885 1.885 4.396 2.923 7.071 2.923s5.187-1.038 7.071-2.923c3.898-3.898 3.898-10.242 0-14.142a9.928 9.928 0 0 0-7.071-2.922zm5.657 15.649c-1.507 1.507-3.517 2.337-5.657 2.337s-4.15-.83-5.657-2.337c-3.118-3.119-3.118-8.194 0-11.313 1.507-1.507 3.516-2.336 5.657-2.336s4.15.829 5.657 2.336c3.118 3.119 3.118 8.194 0 11.313z'></path>
            <path d='m11.467 11.125-3.214 3.214 1.414 1.414 3.214-3.214 2.125 2.124V9H9.343z'></path>
          </svg>
        </a>

        {Toggle ? (
          <i
            class='uil uil-times nav__close'
            onClick={() => showMenu(!Toggle)}
          ></i>
        ) : (
          <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
            <i class='uil uil-apps'></i>
          </div>
        )}
      </nav>
    </header>
  )
}

export default HeaderTemp
