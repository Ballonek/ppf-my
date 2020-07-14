import React, { useState } from "react"
import ReactHtmlParser from 'react-html-parser'
import {Modal} from 'reactstrap'

const BlogCard = ({ blue, title, shortText, longText, image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggle = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <div
      className={
        "blog-card" + (blue ? " blog-card-blue" : " blog-card-red")
      }
      onClick={toggle}
    >
      <div className="blog-img-wrapper">
        <img
          className="blog-img"
          src={image}
          alt={title + " image"}
        />
      </div>
      <div className="blog-header">{ReactHtmlParser(title)}</div>
      <div className="blog-text">{ReactHtmlParser(shortText)}</div>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={toggle}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          ariaHideApp={false}
          className={"blogModal" + (blue ? " blogModalBlue" : "")}
          overlayClassName="segmentModalOverlay"
        >
          <div className="modalRowCareer">
            <div>
              <div xs={12} className="noFuckingPadding">
                <div
                  className={
                    blue
                      ? "headerImgWrapper"
                      : "headerImgWrapperOrange"
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
              <div xs={12} className="panel1 justifyText">
                {ReactHtmlParser(longText)}
              </div>
            </div>
          </div>
          <button className="segmentModalClose" onClick={toggle}>
            <img src="/close.svg" alt="Close button" />
          </button>
        </Modal>
      </div>
    </div>
  )
}

export default BlogCard
