import React, { useState } from "react"
import { Navbar, Container } from "reactstrap"
import MenuToggle from "./MenuToggle"
import MenuCard from "./MenuCard"
import logo from "../../assets/logo.svg"
import "./style.scss"
import scrollIntoView from 'scroll-into-view'

const Menu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  const scrollTo = (e) => {
    const anchor = document.querySelector(`#${e.target.parentElement.name}`)
    scrollIntoView(anchor, {
      time: 1000
    })
  }

  return (
    <div>
      <MenuCard open={menuIsOpen} clickHandler={toggleMenu}></MenuCard>
      <Navbar className="navbar" fixed="top">
        <Container className="navbar-container">
          <div className="scroll-button">
            <button name='top' onClick={scrollTo}>
              <img
                className="scroll-button-img"
                src={logo}
                alt="Logo PPF Media"
              />
            </button>
          </div>
          <MenuToggle clickHandler={toggleMenu} />
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu
