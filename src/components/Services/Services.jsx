import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Services.css'

const Services = () => {
  const { t } = useTranslation()
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className='services section' id='services'>
      <h2 className='section__title'>{t('services.title')}</h2>
      <span className='section__subtitle'>{t('services.subtitle')}</span>

      <div className='services__container container grid'>
        <div className='services__content'>
          <div>
            <i class='uil uil-web-grid services__icon'></i>
            <h3 className='services__title'>
              {t('services.product')} <br /> {t('services.designer')}
            </h3>
          </div>

          <span className='services__button' onClick={() => toggleTab(1)}>
            {t('services.view_more')}
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div
            className={
              toggleState === 1
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>

              <h3 className='services__modal-title'>
                {t('services.modal_title1')}
              </h3>
              <p className='services__modal-description'>
                {t('services.modal_description1')}
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info1')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info12')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info13')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info14')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info15')}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}

        <div className='services__content'>
          <div>
            <i class='uil uil-arrow services__icon'></i>
            <h3 className='services__title'>
              UI/UX <br /> {t('services.designer')}
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className='services__button'>
            {t('services.view_more')}
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div
            className={
              toggleState === 2
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>

              <h3 className='services__modal-title'>
                {t('services.modal_title2')}
              </h3>
              <p className='services__modal-description'>
                {t('services.modal_description2')}
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info2')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info22')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info23')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info24')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info25')}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/*  */}
        {/*  */}

        <div className='services__content'>
          <div>
            <i class='uil uil-edit services__icon'></i>
            <h3 className='services__title'>
              {t('services.visual')} <br /> {t('services.designer')}
            </h3>
          </div>

          <span onClick={() => toggleTab(3)} className='services__button'>
            {t('services.view_more')}
            <i className='uil uil-arrow-right services__button-icon'></i>
          </span>

          <div
            className={
              toggleState === 3
                ? 'services__modal active-modal'
                : 'services__modal'
            }
          >
            <div className='services__modal-content'>
              <i
                onClick={() => toggleTab(0)}
                className='uil uil-times services__modal-close'
              ></i>

              <h3 className='services__modal-title'>
                {t('services.modal_title3')}
              </h3>
              <p className='services__modal-description'>
                {t('services.modal_description3')}
              </p>

              <ul className='services__modal-services grid'>
                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info3')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info32')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info33')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info34')}
                  </p>
                </li>

                <li className='services__modal-service'>
                  <i className='uil uil-check-circle services__modal-icon'></i>
                  <p className='services__modal-info'>
                    {t('services.modal_info35')}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
