import React, { useState } from "react"
import { withTranslation } from "react-multi-lang"
import ReactHtmlParser from "react-html-parser"
import "../../custom.scss"
import { Modal, Container } from "reactstrap"

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
                <div>
                  <div>{ReactHtmlParser(longText)}</div>
                  <dirv className="par2">{ReactHtmlParser(longText2)}</dirv>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="segmentModalClose" onClick={toggle}>
          <img src="/close.svg" alt="Close button" />
        </button>
      </Modal>
    </div>
  )
}

export default SegmentCardModal
