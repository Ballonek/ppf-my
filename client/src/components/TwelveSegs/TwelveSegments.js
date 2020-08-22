import React, { useEffect, useState } from "react"
import TwHeader from "./TwHeader"
import { withTranslation } from "react-multi-lang"
import SegmentCard from "./SegmentCard"
import { Container } from "reactstrap"
import "./style.scss"
import AnimateHeight from "react-animate-height"
import Carousel from "@brainhubeu/react-carousel"
import { plusko_1 } from "../../assets/segs"

import "@brainhubeu/react-carousel/lib/style.css"
import {
  analysis,
  anim,
  app_dev,
  cloud,
  corporate,
  graphics,
  hr,
  offline,
  photo,
  social,
  training,
  web_dev,
} from "../../assets/segs"

const segments = [
  { name: "webDevelopment", icon: web_dev },
  { name: "appDevelopment", icon: app_dev },
  { name: "designStudio", icon: graphics },
  { name: "corporateIdentity", icon: corporate },
  { name: "socialMedia", icon: social },
  { name: "animations", icon: anim },
  { name: "hrMarketing", icon: hr },
  { name: "offlineMarketing", icon: offline },
  { name: "analysis", icon: analysis },
  { name: "onlineStaffTraining", icon: training },
  { name: "photo", icon: photo },
  { name: "cloud", icon: cloud },
]

const TwelveSegments = ({ t }) => {
  const [matches, setMatches] = useState({
    matches: window.matchMedia("(min-width: 769px)").matches,
  })
  const [sliderIsOpen, setSliderIsOpen] = useState(false)

  const handleSliderOpen = (e) => {
    e.preventDefault()
    setSliderIsOpen(!sliderIsOpen)
  }

  useEffect(() => {
    const handler = (e) => setMatches({ matches: e.matches })
    window.matchMedia("(min-width: 769px)").addListener(handler)
  }, [matches])

  console.log(matches.matches)
  return (
    <Container className="tw-wrapper" id="whatWeDo">
      <TwHeader />
      <div className="tw-wrapper-inner">
        {segments.map((segment, idx) => {
          if (!matches.matches && idx > 5) return false
          else
            return (
              <SegmentCard
                key={idx}
                title={t(`twelveSegs.card.${segment.name}.title`)}
                icon={segment.icon}
                shortText={t(`twelveSegs.card.${segment.name}.shortText`)}
                longText={t(`twelveSegs.card.${segment.name}.longText`)}
                longText2={t(`twelveSegs.card.${segment.name}.longText2`)}
              />
            )
        })}
      </div>
      {!matches.matches && (
        <div>
          <AnimateHeight
            duration={500}
            height={sliderIsOpen ? "auto" : 0}
            // className="tw-wrapper-inner"
          >
            {segments.map((segment, idx) => {
              if (idx > 5) {
                return (
                  <SegmentCard
                    key={idx}
                    title={t(`twelveSegs.card.${segment.name}.title`)}
                    icon={segment.icon}
                    shortText={t(`twelveSegs.card.${segment.name}.shortText`)}
                    longText={t(`twelveSegs.card.${segment.name}.longText`)}
                    longText2={t(`twelveSegs.card.${segment.name}.longText2`)}
                  />
                )
              }
            })}
          </AnimateHeight>
          <button
            className={
              "windows-95-destruction" + (sliderIsOpen ? " expanded" : "")
            }
            onClick={handleSliderOpen}
          >
            <img src={plusko_1} alt="Expand section" />
          </button>
        </div>
      )}
    </Container>
  )
}

export default withTranslation(TwelveSegments)
