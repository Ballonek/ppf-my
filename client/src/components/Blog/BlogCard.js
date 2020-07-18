import React, { useState } from "react"
import ReactHtmlParser from "react-html-parser"
import { Modal } from "reactstrap"
import { close } from "../../assets"

const BlogCard = ({ blue, title, shortText, longText, image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggle = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div
      className={"blog-card" + (blue ? " blog-card-blue" : " blog-card-red")}
      onClick={toggle}
    >
      <div className="blog-img-wrapper">
        <img className="blog-img" src={image} alt={title + " image"} />
      </div>
      <div className="blog-header">{ReactHtmlParser(title)}</div>
      <div className="blog-text">{ReactHtmlParser(shortText)}</div>
      <div className="modal-container">
        <Modal
          isOpen={modalIsOpen}
          autoFocus={true}
          toggle={toggle}
          scrollable={true}
          className={"blogModal" + (blue ? " blogModalBlue" : "")}

        >
          <div className="modalRowCareer">
            <div>
              <div className="noFuckingPadding">
                <div
                  className={
                    blue ? "headerImgWrapper" : "headerImgWrapperOrange"
                  }
                >
                  <img
                    className="headerImg"
                    src={image}
                    alt={title + " image"}
                  />
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
