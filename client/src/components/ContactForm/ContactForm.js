import React, { useState, useEffect } from "react"
import { withTranslation } from "react-multi-lang"
import { Formik } from "formik"
import emailjs from "emailjs-com"
import AnimateHeight from "react-animate-height"
import { Checkbox } from "../"
import { Container, Modal } from "reactstrap"
import "./styles.scss"
import { plusko_1 } from "../../assets/segs"

const segments = [
  { name: "webDevelopment", price: 40000, value: "webDevelopment" },
  { name: "appDevelopment", price: 50000, value: "appDevelopment" },
  { name: "designStudio", price: 20000, value: "designStudio" },
  { name: "corporateIdentity", price: 10000, value: "corporateIdentity" },
  { name: "socialMedia", price: 10000, value: "socialNetworking" },
  { name: "animations", price: 50000, value: "animations" },
  { name: "hrMarketing", price: 30000, value: "hrMarketing" },
  { name: "offlineMarketing", price: 10000, value: "offlineMarketing" },
  { name: "analysis", price: 10000, value: "marketAnalysis" },
  { name: "onlineStaffTraining", price: 10000, value: "onlineMarketing" },
  { name: "photo", price: 20000, value: "photoVideo" },
  { name: "cloud", price: 20000, value: "cloudSolutions" },
]

const ContactForm = ({ t }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [sliderIsOpen, setSliderIsOpen] = useState(false)
  const [matches, setMatches] = useState({
    matches: window.matchMedia("(max-width: 1200px)").matches,
  })

  useEffect(() => {
    const handler = (e) => setMatches({ matches: e.matches })
    window.matchMedia("(max-width: 1200px)").addListener(handler)
  }, [matches])

  const handleSliderOpen = (e) => {
    e.preventDefault();
    setSliderIsOpen(!sliderIsOpen)
  }

  const toggle = () => {
    setModalIsOpen(!modalIsOpen)
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
              "ppf_media_email",
              "template_ppf",
              {
                userEmail: values.email,
                userPhone: values.phone,
                userPrice: "NENÍ",
                userName: values.name,
                userSlider: "NENÍ",
                userComment: values.comment,
                userInfo: JSON.stringify(values.services),
              },
              "user_vSaiMoxEWbf3Sgz6BrrFy"
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
        <Container id="contact">
          <form onSubmit={handleSubmit}>
            <Container className="contactForm-wrapper">
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
                {segments.map((segment, idx) => {
                  if (matches.matches && idx > 3) return false
                  else
                    return (
                      <Checkbox
                        key={idx}
                        name="services"
                        value={`cf-${segment.value}`}
                        title={t(`twelveSegs.card.${segment.name}.title`)}
                        className="checkboxHack2"
                      />
                    )
                })}
              </div>
              <AnimateHeight duration={500} height={sliderIsOpen ? "auto" : 0}>
                <div className="configurator-wrapper-inner-flex">
                  {segments.map((segment, idx) => {
                    if (idx > 3) {
                      return (
                        <Checkbox
                          key={idx}
                          name="services"
                          value={`cf-${segment.value}`}
                          title={t(`twelveSegs.card.${segment.name}.title`)}
                          className="checkboxHack2"
                        />
                      )
                    } else return false
                  })}
                </div>
              </AnimateHeight>

              <button
                className={
                  "windows-95-destruction" + (sliderIsOpen ? " expanded" : "")
                }
                onClick={handleSliderOpen}
              >
                <img src={plusko_1} alt="Expand section"></img>
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
              <div>
                <Modal isOpen={modalIsOpen} className="priceConfigModal">
                  <p>{t("priceConfig.msgSent")}</p>
                  <p>
                    <button onClick={toggle}>OK</button>
                  </p>
                </Modal>
              </div>
            </Container>
          </form>
        </Container>
      )}
    </Formik>
  )
}

export default withTranslation(ContactForm)
