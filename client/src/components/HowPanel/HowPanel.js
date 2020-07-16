import React from "react"
import { withTranslation } from "react-multi-lang"
import { Container } from "reactstrap"
import "./style.scss"
import HowItem from "./HowItem"

const steps = [1, 2, 3, 4, "+"]

const HowPanel = ({ t }) => {
  return (
    <Container id="creativeProcess" className="how-wrapper">
      <p className="bigTextah">
        {t("howPanel.title.line1")}
        <br />
        {t("howPanel.title.line2")}
      </p>
      <div className="how-wrapper-inner">
        {steps.map((step, idx) => (
          <HowItem step={step} key={idx} className={step} />
        ))}

        <div className="howCurtain"></div>
      </div>
    </Container>
  )
}

export default withTranslation(HowPanel)
