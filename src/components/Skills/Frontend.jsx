import React from 'react'
import { useTranslation } from 'react-i18next'

const Frontend = () => {
  const { t } = useTranslation()

  return (
    <div className='skills__content'>
      <h3 className='skills__title'>{t('frontend.title')}</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>HTML</h3>
              <span className='skills__level'>{t('frontend.html')}</span>
            </div>
          </div>
          {/*  */}
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>CSS</h3>
              <span className='skills__level'>{t('frontend.css')}</span>
            </div>
          </div>
          {/*  */}
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>JavaScript</h3>
              <span className='skills__level'>{t('frontend.javascript')}</span>
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}

        <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Bootstrap</h3>
              <span className='skills__level'>{t('frontend.bootstrap')}</span>
            </div>
          </div>
          {/*  */}
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>TypeScript</h3>
              <span className='skills__level'>{t('frontend.typescript')}</span>
            </div>
          </div>
          {/*  */}
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>React</h3>
              <span className='skills__level'>{t('frontend.react')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend
