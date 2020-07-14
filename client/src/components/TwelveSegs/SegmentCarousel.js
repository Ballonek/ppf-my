import React, { useState } from "react"
import SegmentCard from "./SegmentCard"
import { withTranslation } from "react-multi-lang"
import {
  CarouselIndicators,
  CarouselControl,
  Carousel,
  CarouselItem,
} from "reactstrap"

const SegmentCarousel = ({ items, t }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {items.map((segment) => (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={segment.src}
        >
          <SegmentCard
            key={segment.name}
            title={t(`twelveSegs.card.${segment.name}.title`)}
            icon={segment.icon}
            shortText={t(`twelveSegs.card.${segment.name}.shortText`)}
            longText={t(`twelveSegs.card.${segment.name}.longText`)}
            longText2={t(`twelveSegs.card.${segment.name}.longText2`)}
          />
        </CarouselItem>
      ))}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default withTranslation(SegmentCarousel)
