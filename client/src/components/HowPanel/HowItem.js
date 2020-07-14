import React from "react"
import { withTranslation } from "react-multi-lang"
import ScrollAnimation from 'react-animate-on-scroll'

const HowItem = ({ step, t }) => {
  const isNumber = (item) => {
    return isNaN(item) ? "plus" : "number"
  }


  return (
    <div className={`big-wrapper`}>
      <div className={`bigNumbah ${isNumber(step)}`}>
        <ScrollAnimation
          animateIn="animate__fadeInLeft"
          offset={200}
          animateOnce={true}
        >
          {isNaN(step) ? step : `${step}.`}
        </ScrollAnimation>
      </div>
      <div className="big-text">
        <div className="big-text-header">{t(`howPanel.step${step}.title`)}</div>
        <div className="big-text-content">
          {t(`howPanel.step${step}.subtext`)}
        </div>
      </div>
    </div>
  )
}

export default withTranslation(HowItem)
