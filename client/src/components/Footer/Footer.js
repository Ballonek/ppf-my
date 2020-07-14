import React from "react";
import { withTranslation } from "react-multi-lang";
// import "@brainhubeu/react-carousel/lib/style.css";
// import { scroller as scroll } from 'react-scroll'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    const { t } = this.props;
    this.handleOpen = () => {
      this.setState((state) => ({ open: true }));
    };
    this.state = {
      open: false,
    };
  }

  render() {
    const { t } = this.props;
    return (
      <div className="footer">
        <div className="bluePanel"> 
          <h1>Kontakt</h1>
          <p className="leftBorder">
            <img className="mailIcon" src="/mail.svg" alt="Email icon"></img>
            <a href="mailto:info@ppfmedia.cz" className="mailLink">info@ppfmedia.cz</a>
          </p>
          <h4>NEJNOVĚJŠÍ PŘÍSPĚVKY</h4>
          <div className="leftBorder2">
            <button className="mailLink">Praktické tipy pro lepší SEO</button>
            <button className="mailLink">Koronavirová krize a bitcoin?</button>
          </div>
          <div className="curtain"></div>
        </div>
        <div className="break"></div>
        <div className="orangePanel">
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
      </div>
    );
  }
}

export default withTranslation(Footer);
