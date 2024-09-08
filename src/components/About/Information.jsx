import React from 'react'
import { useTranslation } from 'react-i18next'

const Information = () => {
  const { t } = useTranslation()

  return (
    <div className='about__info grid'>
      <div className='about__box'>
        <i class='bx bx-award about__icon'></i>
        <h3 className='about__title'>{t('information.title_experience')}</h3>
        <span className='about__subtitle'>
          {t('information.subtitle_experience')}
        </span>
      </div>

      <div className='about__box'>
        <i class='bx bx-briefcase-alt about__icon'></i>
        <h3 className='about__title'>{t('information.title_projects')}</h3>
        <span className='about__subtitle'>
          {t('information.subtitle_projects')}
        </span>
      </div>

      <div className='about__box'>
        <i class='bx bx-support about__icon'></i>
        <h3 className='about__title'>{t('information.title_support')}</h3>
        <span className='about__subtitle'>
          {t('information.subtitle_support')}
        </span>
      </div>
    </div>
  )
}
export default Information
