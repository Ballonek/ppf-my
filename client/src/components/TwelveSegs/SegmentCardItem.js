import React from "react"

const SegmentCardItem = ({ icon, title, longText, shortText }) => {
  return (
    <div className="tw-segment-card-item">
      <div className="tw-segment-card-heading">
        <div className='tw-segment-card-heading-text'>{title}</div>
        <div className='tw-segment-card-heading-img'>
          <img src={icon} alt={title + " icon"} />
        </div>
      </div>
      <div className='tw-segment-card-content'>
        <p className="subtext" title={longText}>
          {shortText}
        </p>
      </div>
    </div>
  )
}

export default SegmentCardItem
