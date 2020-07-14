import React, { useState } from "react"
// import { animateScroll as scroll } from 'react-scroll'
import { withTranslation } from "react-multi-lang"
import { Formik, Field } from "formik"
import emailjs from "emailjs-com"
// import Modal from "react-modal"
// import AnimateHeight from "react-animate-height"
// import { Element } from "react-scroll"
import {Checkbox} from "../"

const ContactForm = ({ t }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [sliderIsOpen, setSliderIsOpen] = useState(false)

  const handleSliderOpen = () => {
    setSliderIsOpen(!sliderIsOpen)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }
  const openModal = () => {
    setModalIsOpen(true)
  }

  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        phone: "",
        comment: "",
        services: [],
      }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = t("priceConfig.required")
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = t("priceConfig.badEmail")
        }
        if (!values.name) {
          errors.name = t("priceConfig.required")
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          emailjs
            .send(
              "default_service",
              "vypln_n_kontakt_formul_e",
              {
                userEmail: values.email,
                userPhone: values.phone,
                userPrice: "NENÍ",
                userName: values.name,
                userSlider: "NENÍ",
                userComment: values.comment,
                userInfo: JSON.stringify(values.services),
              },
              "user_TQM6Hy6UpuGMtT5osi2WG"
            )
            .then(
              (response) => {
                console.log("SUCCESS!", response.status, response.text)
              },
              (err) => {
                console.log("FAILED...", err)
              }
            )
          setSubmitting(false)
          setModalIsOpen(true)
        }, 400)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="contactForm-wrapper">
            <div className="flex-tape">
              <div className="header-text">
                {t("contactForm.title.line1")}
                <br />
                {t("contactForm.title.line2")}
              </div>
              <div className="email-wrapper">
                <span className="email-title">{t("contactForm.name")}</span>
                <input
                  type="text"
                  name="name"
                  className="contactForm-email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <div className="emailErrors2">
                  {errors.name && touched.name && errors.name}
                </div>

                <span className="email-title">{t("contactForm.phone")}</span>
                <input
                  type="tel"
                  name="phone"
                  className="contactForm-email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                <div className="emailErrors2"></div>

                <span className="email-title">{t("contactForm.email")}</span>
                <input
                  type="email"
                  name="email"
                  className="contactForm-email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <div className="emailErrors2">
                  {errors.email && touched.email && errors.email}
                </div>
              </div>
            </div>
            <div className="header">{t("contactForm.subtitle1")}</div>
            <div className="configurator-wrapper-inner-flex contact-wrapper-upperonly">
              <Checkbox
                name="services"
                value="cf-webDevelopment"
                title={t("twelveSegs.card.webDevelopment.title")}
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-designStudio"
                title={t("twelveSegs.card.designStudio.title")}
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-corporateIdentity"
                title={t("twelveSegs.card.corporateIdentity.title")}
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-hrMarketing"
                title={t("twelveSegs.card.hrMarketing.title")}
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-socialNetworking"
                title={t("twelveSegs.card.socialMedia.title")}
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-appDevelopment"
                title={t("twelveSegs.card.appDevelopment.title")}
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-offlineMarketing"
                title={t("twelveSegs.card.offlineMarketing.title")}
                wrapped
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-onlineTraining"
                title={t("twelveSegs.card.onlineStaffTraining.title")}
                wrapped
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-marketAnalysis"
                title={t("twelveSegs.card.analysis.title")}
                wrapped
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-animations"
                title={t("twelveSegs.card.animations.title")}
                wrapped
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-photoVideo"
                title={t("twelveSegs.card.photo.title")}
                wrapped
                className="checkboxHack2"
              />
              <Checkbox
                name="services"
                value="cf-cloudSolutions"
                title={t("twelveSegs.card.cloud.title")}
                wrapped
                className="checkboxHack2"
              />
            </div>{
            // <AnimateHeight duration={500} height={sliderIsOpen ? "auto" : 0}>
            //   <div className="configurator-wrapper-inner-flex">
            //     <Checkbox
            //       name="services"
            //       value="cf-socialNetworking"
            //       title={t("twelveSegs.card.socialMedia.title")}
            //       className="checkboxHack2"
            //     />
            //     <Checkbox
            //       name="services"
            //       value="cf-appDevelopment"
            //       title={t("twelveSegs.card.appDevelopment.title")}
            //       className="checkboxHack2"
            //     />
            //     <Checkbox
            //       name="services"
            //       value="cf-offlineMarketing"
            //       title={t("twelveSegs.card.offlineMarketing.title")}
            //       wrapped
            //       className="checkboxHack2"
            //     />
            //     <Checkbox
            //       name="services"
            //       value="cf-onlineTraining"
            //       title={t("twelveSegs.card.onlineStaffTraining.title")}
            //       wrapped
            //       className="checkboxHack2"
            //     />
            //     <Checkbox
            //       name="services"
            //       value="cf-marketAnalysis"
            //       title={t("twelveSegs.card.analysis.title")}
            //       wrapped
            //       className="checkboxHack2"
            //     />
            //     <Checkbox
            //       name="services"
            //       value="cf-animations"
            //       title={t("twelveSegs.card.animations.title")}
            //       wrapped
            //       className="checkboxHack2"
            //     />
            //     <Checkbox
            //       name="services"
            //       value="cf-photoVideo"
            //       title={t("twelveSegs.card.photo.title")}
            //       wrapped
            //       className="checkboxHack2"
            //     />
            //     <Checkbox
            //       name="services"
            //       value="cf-cloudSolutions"
            //       title={t("twelveSegs.card.cloud.title")}
            //       wrapped
            //       className="checkboxHack2"
            //     />
            //   </div>
            //     </AnimateHeight>
              }
            <button
              className={
                "windows-95-destruction" + (sliderIsOpen ? " expanded" : "")
              }
              onClick={handleSliderOpen}
            >
              <img src="segs/plusko_1.svg" alt="Expand section"></img>
            </button>

            <div className="header666">{t("contactForm.subtitle2")}</div>
            <textarea
              name="comment"
              className="contactForm-text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
              rows="3"
            />
            <div className="priceContact-wrapper">
              <button
                type="submit"
                disabled={isSubmitting}
                className="priceContact-submit"
              >
                {t("contactForm.submit")}
              </button>
            </div>
            <div onClick={(e) => e.stopPropagation()}>{
              // <Modal
              //   isOpen={modalIsOpen}
              //   onRequestClose={closeModal}
              //   shouldCloseOnOverlayClick={true}
              //   shouldCloseOnEsc={true}
              //   ariaHideApp={false}
              //   className="priceConfigModal"
              //   overlayClassName="priceConfigModalOverlay"
              // >
              //   <p>{t("priceConfig.msgSent")}</p>
              //   <p>
              //     <button onClick={closeModal}>OK</button>
              //   </p>
              // </Modal>
            }</div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default withTranslation(ContactForm)
