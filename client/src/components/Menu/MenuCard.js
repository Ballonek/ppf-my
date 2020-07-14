import React from "react"
// import { Link } from "react-router-dom";
import { Motion, spring } from "react-motion"
// import { scroller as scroll } from "react-scroll"
import { withTranslation } from "react-multi-lang"
import MenuSocial from "./MenuSocial"

const MenuCard = ({ t, open }) => {
  const menuItems = [
    { title: "whatWeDo" },
    { title: "creativeProcess" },
    { title: "priceConfig" },
    { title: "blog" },
    { title: "career" },
    { title: "contact" },
  ]

  
  const isOpen = () => {
    return open ? "open" : "closed"
  }

  return (
    <div
      className={"menu-card " + isOpen()}
      // style={{
      //   WebkitTransform: `translate(0, ${y}px)`,
      //   transform: `translate(0, ${y}px)`,
      // }}
    >
      {menuItems.map((item) => (
        <a className="menu-button" href={item.title} key={item.title}>
          {t(`menu.${item.title}`)}
        </a>
      ))}
      <MenuSocial />
    </div>
  )
}

export default withTranslation(MenuCard)
