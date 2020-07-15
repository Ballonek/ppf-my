import React, { useEffect, useState } from "react"
import TwHeader from "./TwHeader"
import { withTranslation, getLanguage } from "react-multi-lang"
import SegmentCard from "./SegmentCard"
import { Container } from "reactstrap"
import "./style.scss"
import Carousel from "@brainhubeu/react-carousel"
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
  plusko_1,
  social,
  training,
  web_dev,
} from "../../assets/segs"
import SegmentCardItem from "./SegmentCardItem"

const segments = [
  { name: "webDevelopment", icon: web_dev },
  { name: "designStudio", icon: graphics },
  { name: "corporateIdentity", icon: corporate },
  { name: "hrMarketing", icon: hr },
  { name: "socialMedia", icon: social },
  { name: "analysis", icon: analysis },
  { name: "offlineMarketing", icon: offline },
  { name: "appDevelopment", icon: app_dev },
  { name: "onlineStaffTraining", icon: training },
  { name: "animations", icon: anim },
  { name: "photo", icon: photo },
  { name: "cloud", icon: cloud },
]

const TwelveSegments = ({ t }) => {
  const [matches, setMatches] = useState({
    matches: window.matchMedia("(min-width: 665px)").matches,
  })

  useEffect(() => {
    const handler = (e) => setMatches({ matches: e.matches })
    window.matchMedia("(min-width: 665px)").addListener(handler)
  }, [matches])

  return (
    <Container className="tw-wrapper" id="whatWeDo">
      <TwHeader />
      <div
        className={matches.matches ? "tw-wrapper-inner" : "tw-wrapper-carousel"}
      >
        {segments.map((segment) => (
          <SegmentCard
            key={segment.name}
            title={t(`twelveSegs.card.${segment.name}.title`)}
            icon={segment.icon}
            shortText={t(`twelveSegs.card.${segment.name}.shortText`)}
            longText={t(`twelveSegs.card.${segment.name}.longText`)}
            longText2={t(`twelveSegs.card.${segment.name}.longText2`)}
          />
        ))}
      </div>
    </Container>
  )
}

export default withTranslation(TwelveSegments)
