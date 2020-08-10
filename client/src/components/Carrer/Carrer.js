import React from "react"
import { withTranslation } from "react-multi-lang"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"
import CareerCard from "./CarrerCard"
import { grafik, vyvojar, obchodnik } from "../../assets/career"

import "./style.scss"
import { Container } from "reactstrap"

const employes = [
  { name: "designer", icon: grafik },
  { name: "developer", icon: vyvojar },
  { name: "salesman", icon: obchodnik },
]

const Carrer = ({ t }) => {
  return (
    <Container className="career-wrapper" id="career">
      <div className="header-text">Kariéra</div>
      <div className="header">
        {t("career.title.line1")}
        <span className="color2"> {t("career.title.line2")}</span>
      </div>
      <Carousel
        infinite
        arrows
        className="career-carousel"
        slidesPerPage="3"
        autoPlay={4000}
        animationSpeed={1000}
        breakpoints={{
          1130: {
            slidesPerPage: 2,
          },
          767: {
            slidesPerPage: 1,
          },
        }}
      >
        {employes.map((employe) => (
          <CareerCard
            key={employe.name}
            title={t(`career.${employe.name}.title`)}
            line1={t(`career.${employe.name}.line1`)}
            line2={t(`career.${employe.name}.line2`)}
            line3={t(`career.${employe.name}.line3`)}
            icon={employe.icon}
            long1={t(`career.${employe.name}.long1`)}
            long2={t(`career.${employe.name}.long2`)}
            long3={t(`career.${employe.name}.long3`)}
          ></CareerCard>
        ))}
      </Carousel>
    </Container>
  )
}

export default withTranslation(Carrer)
