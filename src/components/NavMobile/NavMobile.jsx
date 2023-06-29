import React from 'react'
import { Logo, NavLinks } from "../../components"
import { images } from "../../constants"

const NavMobile = () => {

  const nav = document.querySelector(".nav-links");
  const menu = document.querySelector("#btn1");
  const close = document.querySelector("#btn2");

  function openMenu(){

    menu.style.display = "none"
    close.style.display = "block"
    nav.classList.add("active")

  }

  function closeMenu(){

    menu.style.display = "block"
    close.style.display = "none"
    nav.classList.remove("active")

  }

  const items = document.querySelectorAll(".navItem")
  items.forEach(item => item.onclick = closeMenu)


  return (
    <nav className="mobileNav">
      <Logo />
      <div className="btns">
        <button id='btn1' onClick={openMenu} >
          <img src={images.menu} alt="" />
        </button>
        <button id='btn2' onClick={closeMenu} >
          <img src={images.close} alt="" />
        </button>
      </div>
      <NavLinks />
    </nav>
  )
}

export default NavMobile