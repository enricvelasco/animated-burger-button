import React, { useState, useEffect } from 'react'
import { ButtonContainer, AnimatedLine, HigerLine, LowerLine, Container, Text } from './style'

export const BurgerButton = ({ visibleText = false, text = '', onClose, onOpen }) => {
  const [showLine, setShowLine] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)
  const [firstRender, setFistRender] = useState(true)

  useEffect(() => {
    if (!firstRender) {
      menuOpened ? setShowLine(false) : setShowLine(true)
      menuOpened ? onOpen() : onClose()
    }
    setFistRender(false)
  }, [menuOpened])

  const onHoverContainer = () => {
    !menuOpened && setShowLine(!menuOpened && !showLine)
  }

  return (
    <Container>
      {showLine && visibleText && <Text><p>{text}</p></Text>}
      <ButtonContainer onMouseEnter={onHoverContainer} onMouseLeave={onHoverContainer} onClick={() => setMenuOpened(!menuOpened)}>
        <HigerLine activateSeparator={showLine} menuOpened={menuOpened} />
        <AnimatedLine activateSeparator={showLine} />
        <LowerLine activateSeparator={showLine} menuOpened={menuOpened} />
      </ButtonContainer>
    </Container>
  )
}
