import React from 'react'
import { useTranslation } from 'react-i18next'

const Backend = () => {
  const { t } = useTranslation()

  return (
    <div className='skills__content'>
      <h3 className='skills__title'>{t('backend.title')}</h3>

      <div className='skills__box'>
        <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Java</h3>
              <span className='skills__level'>{t('backend.java')}</span>
            </div>
          </div>
          {/*  */}
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Node Js</h3>
              <span className='skills__level'>{t('backend.node')}</span>
            </div>
          </div>
          {/*  */}
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Python</h3>
              <span className='skills__level'>{t('backend.python')}</span>
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}

        <div className='skills__group'>
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>MySQL</h3>
              <span className='skills__level'>{t('backend.mysql')}</span>
            </div>
          </div>
          {/*  */}
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>MongoDB</h3>
              <span className='skills__level'>{t('backend.mongodb')}</span>
            </div>
          </div>
          {/*  */}
          <div className='skills__data'>
            <i class='bx bx-badge-check'></i>

            <div>
              <h3 className='skills__name'>Git</h3>
              <span className='skills__level'>{t('backend.git')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend
