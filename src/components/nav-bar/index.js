import React from 'react'
import { BurgerButton } from '../burger-button'
import { Nav, MenuContainer } from './style'

const closeMenu = () => {
  console.log('CLOSE MENU')
}

const openMenu = () => {
  console.log('OPEN MENU')
}

const NavBar = () => (
  <Nav>
    <MenuContainer>
      <BurgerButton visibleText text='Menu' onClose={closeMenu} onOpen={openMenu} />
    </MenuContainer>
  </Nav>
)

export default NavBar
