import React, { useState } from "react"
import { withTranslation } from "react-multi-lang"
import ReactHtmlParser from "react-html-parser"
import "../../custom.scss"
import { Modal, Container } from "reactstrap"
import close from "../../assets/close.svg"

const SegmentCardModal = ({
  icon,
  title,
  longText,
  shortText,
  longText2,
  modalIsOpen,
  toggle,
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal isOpen={modalIsOpen} toggle={toggle} className="segmentModal">
        <div className="modalRow">
          <div className="modalRow-inner">
            <div xs className="displayCop">
              <span className="helper"></span>
              <img className="centerIcon" src={icon} alt={title + " icon"} />
            </div>
            <div className="contentCop">
              <div className="title">{title}</div>
              <div className="subtitle">{shortText}</div>
              <div className="content">
                <div className="content-inner">
                  <div className="par1">{ReactHtmlParser(longText)}</div>
                  <div className="par2">{ReactHtmlParser(longText2)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="segmentModalClose" onClick={toggle}>
          <img src={close} alt="Close button" />
        </button>
      </Modal>
    </div>
  )
}

export default SegmentCardModal
