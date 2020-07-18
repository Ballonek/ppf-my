import React from "react"
import { withTranslation } from "react-multi-lang"
import MenuSocial from "./MenuSocial"
import scrollIntoView from 'scroll-into-view'

const MenuCard = ({ t, open, clickHandler }) => {
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

  const scrollTo = (e) => {
    clickHandler();
    const anchor = document.querySelector(`#${e.target.parentElement.name}`)
    scrollIntoView(anchor, {
      time: 1000
    })
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
        <button
          className="menu-button"
          key={item.title}
          name={item.title}
          onClick={scrollTo}
        >
          <span name={item.title}>{t(`menu.${item.title}`)}</span>
        </button>
      ))}
      <MenuSocial />
    </div>
  )
}

export default withTranslation(MenuCard)
