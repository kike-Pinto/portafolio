import React from 'react'
import { useTranslation } from 'react-i18next'
import Works from './Works'
import './Work.css'

const Work = () => {
  const { t } = useTranslation()
  return (
    <section className='work section' id='portfolio'>
      <h2 className='section__title'>{t('portafolio.title')}</h2>
      <span className='section__subtitle'>{t('portafolio.subtitle')}</span>

      <Works />
    </section>
  )
}

export default Work
