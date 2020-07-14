import React, { useState } from "react"
// import { animateScroll as scroll } from 'react-scroll'
import { withTranslation } from "react-multi-lang"
import { Formik, Field } from "formik"
import Slider from "rc-slider/lib/Slider"
import "rc-slider/assets/index.css"
import emailjs from "emailjs-com"
// import Modal from "react-modal"
import CurrencyFormat from "react-currency-format"
import AnimateHeight from "react-animate-height"
// import { Element } from "react-scroll"
import { Checkbox } from "../"
import './style.scss'
import { Container } from "reactstrap"

const segments = [
  { name: "webDevelopment", price: 40000, value: "webDevelopment" },
  { name: "designStudio", price: 20000, value: "designStudio" },
  { name: "corporateIdentity", price: 10000, value: "corporateIdentity" },
  { name: "hrMarketing", price: 30000, value: "hrMarketing" },
  { name: "socialMedia", price: 10000, value: "socialNetworking" },
  { name: "appDevelopment", price: 50000, value: "appDevelopment" },
  { name: "offlineMarketing", price: 10000, value: "offlineMarketing" },
  { name: "onlineStaffTraining", price: 10000, value: "onlineMarketing" },
  { name: "analysis", price: 10000, value: "marketAnalysis" },
  { name: "animations", price: 50000, value: "animations" },
  { name: "photo", price: 20000, value: "photoVideo" },
  { name: "cloud", price: 20000, value: "cloudSolutions" },
]

const PriceConfig = ({ t }) => {
  const [sliderValue, setSliderValue] = useState(0)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [priceBase, setPriceBase] = useState(0)
  const [sliderIsOpen, setSliderIsOpen] = useState(false)
  const [priceMultiplier, setPriceMultiper] = useState(1)

  const handleSliderOpen = () => {
    setSliderIsOpen(!sliderIsOpen)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const handleSliderChange = (value) => {
    setSliderValue(value)
    var pmp = 1
    if (value === 25) pmp = 2
    if (value === 50) pmp = 5
    if (value === 75) pmp = 10
    if (value === 100) pmp = 20
    setPriceMultiper(pmp)
  }

  return (
    <Formik
      initialValues={{ email: "", services: [] }}
      validate={(values) => {
        let pbs = 0
        segments.map((segment) => {
          if (values.services.includes(segment.value)) {
            pbs += segment.price
          }
        })
        setPriceBase(pbs)

        const errors = {}
        if (!values.email) {
          errors.email = t("priceConfig.required")
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = t("priceConfig.badEmail")
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
                userPhone: "NENÍ",
                userPrice: priceBase * priceMultiplier,
                userName: "NENÍ",
                userComment: "NENÍ",
                userInfo: JSON.stringify(values.services),
                userSlider: sliderValue,
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
          <Container className="configurator">
            <div className="header-text">{t("priceConfig.title")}</div>
            <div className="configurator-wrapper-inner">
              <div className="header">{t("priceConfig.subtitle1")}</div>
              <div className="configurator-wrapper-inner-flex contact-wrapper-upperonly">
                {segments.map((segment) => (
                  <Checkbox
                    key={segment.name}
                    name="services"
                    value={segment.value}
                    title={t(`twelveSegs.card.${segment.name}.title`)}
                    className="checkboxHack"
                  />
                ))}
              </div>{
              // <AnimateHeight duration={500} height={sliderIsOpen ? "auto" : 0}>
              //   <div className="configurator-wrapper-inner-flex">
              //   </div>
              // </AnimateHeight>
              }<button
                className={
                  "windows-95-destruction" + (sliderIsOpen ? " expanded" : "")
                }
                onClick={handleSliderOpen}
              >
                <img src="segs/plusko_1.svg" alt="Expand section"></img>
              </button>

              <div className="header header2">{t("priceConfig.subtitle2")}</div>
              <Slider
                step="25"
                dots={true}
                onChange={handleSliderChange}
                handleStyle={{
                  content: "url(priceconf/handle.svg)",
                  width: "70px",
                  height: "70px",
                  border: "none",
                  top: "-175%",
                }}
                trackStyle={{ backgroundColor: "#FF6427"}}
                railStyle={{ backgroundColor: "#FF6427" }}
                dotStyle={{ color: "#FFF" }}
                marks={{ 0: "|", 25: "|", 50: "|", 75: "|", 100: "|" }}
              />
              <>
                <p className="sliderTitle">
                  {t("priceConfig.sliderText." + sliderValue + ".title")}
                </p>
                <p className="sliderText">
                  {t("priceConfig.sliderText." + sliderValue + ".subtext")}
                </p>
              </>
              <div className="priceTag-wrapper">
                <div className="priceTag-header">
                  {t("priceConfig.estimate")}
                </div>
                <div className="priceTag">
                  <CurrencyFormat
                    value={priceBase * priceMultiplier}
                    displayType={"text"}
                    thousandSeparator={" "}
                    suffix={" CZK"}
                  />
                </div>
              </div>
              <div className="priceContact-wrapper">
                <div className="priceContact-email-wrapper">
                  <input
                    type="email"
                    name="email"
                    className="priceContact-email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder={t("priceConfig.yourEmail")}
                  />
                  <div className="emailErrors">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="priceContact-submit"
                >
                  {t("priceConfig.contactMe")}
                </button>
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
            </div>
          </Container>
        </form>
      )}
    </Formik>
  )
}

export default withTranslation(PriceConfig)