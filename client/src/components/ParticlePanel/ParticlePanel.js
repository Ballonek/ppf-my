import React from "react"
import Particles from "react-particles-js"
import { withTranslation } from "react-multi-lang"
import particles from "../../assets/particles/particles"
import "./style.scss"
import { Container } from "reactstrap"
import Rellax from "react-rellax"
import scrollIntoView from "scroll-into-view"

const ParticlePanel = ({ t }) => {
  const scrollTo = (e) => {
    const anchor = document.querySelector(`#contact`)
    scrollIntoView(anchor, {
      time: 1000,
    })
  }

  return (
    <div className="particles-wrapper" id="top">
      <Rellax speed={-4} className="block2" />
      <Rellax speed={-4} className="block3" />
      <Particles
        className="particles-canvas"
        params={{
          interactivity: {
            detect_on: "window",
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 300,
                duration: 0.5,
                speed: 0.1,
              },
            },
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 5000,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 1,
              direction: "top",
              out_mode: "out",
              bounce: false,
              straight: false,
            },
            shape: {
              type: ["image"],
              image: particles.map((particle) => ({
                src: particle,
                width: 123,
                height: 107,
              })),
            },
            size: {
              value: 50,
              random: true,
              animation: {
                destroy: "none",
                enable: true,
                minimumValue: 40,
                speed: 5,
                startValue: "max",
                sync: false,
              },
            },
            opacity: {
              value: 0.75,
              random: {
                enable: true,
              },
              animation: {
                enable: true,
              },
            },
          },
          retina_detect: true,
        }}
      />

      <div className="particle-panel">
        <Container>
          <Rellax speed={-3} className="block1" />
          <div className="particle-panel-center">
            <div className="header-text">
              {t("particlesPanel.title.line1")}
              <br />
              {t("particlesPanel.title.line2")}
            </div>
            <div className="subheader-text">{t("particlesPanel.subtitle")}</div>
            <div className="contact-us-btn-wrapper">
              <button
                className="contact-us-btn"
                onClick={() => {
                  scrollTo()
                }}
              >
                {t("global.contactUs")}
              </button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default withTranslation(ParticlePanel)
