import React, { useState } from "react"
import ReactHtmlParser from "react-html-parser"
import { Modal } from "reactstrap"
import { close } from "../../assets"
import { Sipka } from "../../assets/blog"

const BlogCard = ({ blue, title, shortText, longText, icon }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggle = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const Icon = icon

  return (
    <div className={"blog-card blog-card-red"} onClick={toggle}>
      <div className="icon">
        <Icon />
      </div>
      <div className="blog-header">{ReactHtmlParser(title)}</div>
      <div className="blog-text">{ReactHtmlParser(shortText)}</div>
      <div className="blog-arrow">
        <Sipka />
      </div>
      <div className="modal-container">
        <Modal
          isOpen={modalIsOpen}
          autoFocus={true}
          toggle={toggle}
          scrollable={true}
          className={"blogModal"}
        >
          <div className="modalRowCareer">
            <div>
              <div className={"modal-wrapper blue"}>
                <div className="icon">
                  <i className={"untitled-font-3 " + icon} />
                </div>
                <div className="title">{title}</div>
              </div>
              <div className="panel1 justifyText">
                {ReactHtmlParser(longText)}
              </div>
            </div>
          </div>
          <button className="segmentModalClose" onClick={toggle}>
            <img src={close} alt="Close button" />
          </button>
        </Modal>
      </div>
    </div>
  )
}

export default BlogCard
