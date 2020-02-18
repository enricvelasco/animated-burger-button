import styled, { css } from 'styled-components'
import { showingLine, separatorTop, separatorBottom, fadeIn } from './animations'

const line = css`
  height: 2px;
  background-color: black;
  width: 100%;
  border-radius: 25px;
`

export const centerLine = css`
  top: 50%;
  transform: translateY(-50%);
`

export const rotatePositive = css`
  transform: rotate(45deg);
`

export const rotateNegative = css`
  transform: rotate(-45deg);
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Text = styled.div`
  position: absolute;
  ${centerLine};
  max-width: 75px;
  left: calc(-100% - 20px);
  ${fadeIn({ time: '1s' })};
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`

export const HigerLine = styled.div`
  ${line};
  position: absolute;
  ${({ activateSeparator }) => activateSeparator ? separatorTop({ time: '1s' }) : 'top: 35%'};
  animation-fill-mode: forwards;
  ${({ menuOpened }) => menuOpened && rotatePositive});
`

export const LowerLine = styled.div`
  ${line};
  position: absolute;
  ${({ activateSeparator }) => activateSeparator ? separatorBottom({ time: '1s' }) : 'bottom: 35%'};
  animation-fill-mode: forwards;
  ${({ menuOpened }) => menuOpened && rotateNegative});
`

export const AnimatedLine = styled.div`
  ${line};
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  ${showingLine({ time: '1s' })};
  animation-fill-mode: forwards;
  transform: translate(-50%, -50%);
`
