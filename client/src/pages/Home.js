import React from "react"
import {
  ParticlePanel,
  TwelveSegments,
  HowPanel,
  PriceConfig,
  Blog,
  Career,
  ContactForm,
  FooterText,
  Footer,
} from "../components"
import Rellax from "react-rellax"

const Home = () => {
  return (
    <div>
      <Rellax speed={-3} className="block1" />
      <Rellax speed={-4} className="block2" />
      <Rellax speed={-4} className="block3" />
      <ParticlePanel />
      <TwelveSegments />
      <HowPanel />
      <PriceConfig />
      <Blog />
      <Career />
      <ContactForm />
      <FooterText />
      <Footer />
    </div>
  )
}

export default Home
