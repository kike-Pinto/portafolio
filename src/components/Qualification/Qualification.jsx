import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Qualification.css'

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1)
  const { t } = useTranslation()

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className='qualification section' id='qualifications'>
      <h2 className='section__title'>{t('qualifications.title')}</h2>
      <span className='section__subtitle'>{t('qualifications.subtitle')}</span>

      <div className='qualification__container container'>
        <div className='qualification__tabs'>
          <div
            className={
              toggleState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className='uil uil-graduation-cap qualification__icon'></i>{' '}
            {t('qualifications.education')}
          </div>

          <div
            className={
              toggleState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className='uil uil-briefcase-alt qualification__icon'></i>{' '}
            {t('qualifications.experience')}
          </div>
        </div>

        <div className='qualification__sections'>
          <div
            className={
              toggleState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  {t('qualifications.qualification_title1')}
                </h3>
                <span className='qualification__subtitle'>
                  {t('qualifications.qualification_place1')}
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>{' '}
                  {t('qualifications.qualification_year1')}
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>
                  {' '}
                  {t('qualifications.qualification_title2')}
                </h3>
                <span className='qualification__subtitle'>
                  {t('qualifications.qualification_place2')}
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>{' '}
                  {t('qualifications.qualification_year2')}
                </div>
              </div>
            </div>

            {/*  */}
            {/*  */}

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  {t('qualifications.qualification_title3')}
                </h3>
                <span className='qualification__subtitle'>
                  {t('qualifications.qualification_place3')}
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>{' '}
                  {t('qualifications.qualification_year3')}
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>
                  {' '}
                  {t('qualifications.qualification_title4')}
                </h3>
                <span className='qualification__subtitle'>
                  {t('qualifications.qualification_place4')}
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>{' '}
                  {t('qualifications.qualification_year4')}
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          {/*  */}

          <div
            className={
              toggleState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  {t('qualifications.qualification_title5')}
                </h3>
                <span className='qualification__subtitle'>
                  {t('qualifications.qualification_place5')}
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>{' '}
                  {t('qualifications.qualification_year5')}
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>

            <div className='qualification__data'>
              <div></div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>

              <div>
                <h3 className='qualification__title'>
                  {t('qualifications.qualification_title6')}
                </h3>
                <span className='qualification__subtitle'>
                  {t('qualifications.qualification_place6')}
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>{' '}
                  {t('qualifications.qualification_year6')}
                </div>
              </div>
            </div>

            {/*  */}
            {/*  */}

            <div className='qualification__data'>
              <div>
                <h3 className='qualification__title'>
                  {t('qualifications.qualification_title7')}
                </h3>
                <span className='qualification__subtitle'>
                  {t('qualifications.qualification_place7')}
                </span>
                <div className='qualification__calender'>
                  <i className='uil uil-calendar-alt'></i>{' '}
                  {t('qualifications.qualification_year7')}
                </div>
              </div>

              <div>
                <span className='qualification__rounder'></span>
                <span className='qualification__line'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification
