import React, { useState } from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import SegmentCard from "./SegmentCard"
import { withTranslation } from "react-multi-lang"

const SegmentCarousel = ({ items, t }) => {
  const cards = items.map((segment, idx) => (
    <SegmentCard
      key={idx}
      title={t(`twelveSegs.card.${segment.name}.title`)}
      icon={segment.icon}
      shortText={t(`twelveSegs.card.${segment.name}.shortText`)}
      longText={t(`twelveSegs.card.${segment.name}.longText`)}
      longText2={t(`twelveSegs.card.${segment.name}.longText2`)}
    />
  ))
  return <Carousel>{cards}</Carousel>
}

export default withTranslation(SegmentCarousel)
