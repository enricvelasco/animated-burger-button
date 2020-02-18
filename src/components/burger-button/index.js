import React, { useState, useEffect } from 'react'
import { ButtonContainer, AnimatedLine, HigerLine, LowerLine, Container, Text } from './style'

export const BurgerButton = ({ visibleText = false, text = '' }) => {
  const [showLine, setShowLine] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    console.log('SHOW LINE STATE', showLine, 'MENU OPENED', menuOpened)
    menuOpened && setShowLine(false)
  }, [menuOpened])

  const onHoverContainer = () => {
    setShowLine(!menuOpened && !showLine)
  }

  return (
    <Container>
      {showLine && visibleText && <Text>{text}</Text>}
      <ButtonContainer onMouseEnter={onHoverContainer} onMouseLeave={onHoverContainer} onClick={() => setMenuOpened(!menuOpened)}>
        <HigerLine activateSeparator={showLine} menuOpened={menuOpened} />
        {showLine && <AnimatedLine />}
        <LowerLine activateSeparator={showLine} menuOpened={menuOpened} />
      </ButtonContainer>
    </Container>
  )
}
