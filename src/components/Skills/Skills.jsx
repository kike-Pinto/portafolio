import React from 'react'
import './Skills.css'
import { useTranslation } from 'react-i18next'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  const { t } = useTranslation()

  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>{t('skills.title')}</h2>
      <span className='section__subtitle'>{t('skills.subtitle')}</span>

      <div className='skills__container container grid'>
        <Frontend />
        <Backend />
      </div>
    </section>
  )
}

export default Skills
