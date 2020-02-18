import React from 'react'
import { BurgerButton } from '../burger-button'
import { Nav, MenuContainer } from './style'

const NavBar = () => (
  <Nav>
    <MenuContainer>
      <BurgerButton visibleText text='Menu' />
    </MenuContainer>
  </Nav>
)

export default NavBar
