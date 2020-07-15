import React, { useState } from "react"
import ReactHtmlParser from "react-html-parser"
import { Modal } from "reactstrap"
import {close} from '../../assets'


const CarrerCard = ({
  icon,
  line1,
  line2,
  line3,
  title,
  long1,
  long2,
  long3,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggle = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div className="career-card" onClick={toggle}>
      <img className="icon" alt="Career icon" src={icon}></img>
      <div className="career-header">{ReactHtmlParser(title)}</div>
      <div className="career-text">
        {ReactHtmlParser(line1)}
        <br />
        {ReactHtmlParser(line2)}
        <br />
        {ReactHtmlParser(line3)}
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <Modal
          isOpen={modalIsOpen}
          className="careerModal"
        >
          <div className="modalRowCareer">
            <div className="icon-wrapper">
              <img className="careerIcon" src={icon} alt={title + " icon"} />
              <div className="title">{ReactHtmlParser(title)}</div>
            </div>
            <div className="panel1 leftText">
              <b>{ReactHtmlParser(long1)}</b>
            </div>
            <div className="panel2 leftText">
              <b>{ReactHtmlParser(long2)}</b>
            </div>
            <div className="panel3 justifyText">{ReactHtmlParser(long3)}</div>
          </div>
          <button className="segmentModalClose" onClick={toggle}>
            <img src={close} alt="Close button" />
          </button>
        </Modal>
      </div>
    </div>
  )
}
export default CarrerCard
