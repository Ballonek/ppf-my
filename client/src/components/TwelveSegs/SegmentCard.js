import React, { useState } from "react"
import { withTranslation } from "react-multi-lang"
import "../../custom.scss"
import SegmentCardItem from "./SegmentCardItem"
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap"
import SegmentCardModal from "./SegmentCardModal"

const SegmentCard = ({
  wrapped,
  icon,
  title,
  longText,
  shortText,
  longText2,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggle = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div className="tw-segment-card" onClick={toggle}>
      <SegmentCardItem
        icon={icon}
        title={title}
        longText={longText}
        shortText={shortText}
        modalIsOpen={modalIsOpen}
        closeModal={toggle}
      />
      <SegmentCardModal
        icon={icon}
        title={title}
        longText={longText}
        shortText={shortText}
        longText2={longText2}
        modalIsOpen={modalIsOpen}
        toggle={toggle}
      />
    </div>
  )
}

export default withTranslation(SegmentCard)
