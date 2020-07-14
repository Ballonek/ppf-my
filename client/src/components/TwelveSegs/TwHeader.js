import React from "react"
import { withTranslation } from "react-multi-lang"

const TwHeader = ({ t }) => {
  return (
    <div className="tw-header">
      {t("twelveSegs.title.line1")}
      <br />
      {t("twelveSegs.title.line2")}
    </div>
  )
}

export default withTranslation(TwHeader)
