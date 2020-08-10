import React from "react"
import { withTranslation } from "react-multi-lang"
import "@brainhubeu/react-carousel/lib/style.css"
import "./style.scss"
import mail from "../../assets/mail.svg"
import { Container } from "reactstrap"
import TextLoop from "react-text-loop"

import scrollIntoView from "scroll-into-view"

const blogs = [
  { number: 1, icon: "icon-bitcoin" },
  { number: 2, icon: "icon-copywriting", blue: true },
  { number: 3, icon: "icon-pristupnost-web" },
  { number: 4, icon: "icon-seo", blue: true },
]

const Footer = ({ t }) => {
  const scrollTo = (e) => {
    // clickHandler();
    const anchor = document.querySelector(`#blog`)
    scrollIntoView(anchor, {
      time: 1000,
    })
  }

  return (
    <Container className="footer">
      <div className="bluePanel">
        <h1>Kontakt</h1>
        <p className="leftBorder">
          <img className="mailIcon" src={mail} alt="Email icon"></img>
          <a href="mailto:info@ppfmedia.cz" className="mailLink">
            info@ppfmedia.cz
          </a>
        </p>
        <h4>NEJNOVĚJŠÍ PŘÍSPĚVKY</h4>
        <div className="leftBorder2">
          <TextLoop mask={true}>
            {blogs.map((blog) => (
              <button onClick={scrollTo} href="#blog" className="mailLink">
                {t(`blog.blog${blog.number}.title`)}
              </button>
            ))}
          </TextLoop>
        </div>
        <div className="curtain"></div>
      </div>
      <div className="orangePanel">
        <div className="link">
          <a
            href="https://www.facebook.com/ppfmedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="orangeLink"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/ppfmedia/"
            target="_blank"
            rel="noopener noreferrer"
            className="orangeLink"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com/PPFmediaCZ"
            target="_blank"
            rel="noopener noreferrer"
            className="orangeLink"
          >
            Twitter
          </a>
          <a
            href="https://cz.linkedin.com/company/ppf-media"
            target="_blank"
            rel="noopener noreferrer"
            className="orangeLink"
          >
            LinkedIn
          </a>
        </div>
        <div className="tinyText">
          <a
            href="./files/cookies.html"
            target="_blank"
            rel="noopener noreferrer"
            className="orangeLink"
          >
            INFORMACE O ZPRACOVÁNÍ COOKIES
          </a>
          <span className="cookieDesktop"> | </span>
          <b>@ 2020 PPF MEDIA</b>
        </div>
      </div>
    </Container>
  )
}

export default withTranslation(Footer)
