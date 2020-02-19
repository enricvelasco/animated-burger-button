import styled, { css } from 'styled-components'
import { showingLine, separatorTop, separatorBottom, fadeIn, createPositiveCross, createNegativeCross, invertedSeparatorTop, invertedSeparatorBottom, hideLine } from './animations'

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

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Text = styled.div`
  position: absolute;
  ${centerLine};
  width: fit-content;
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
  ${({ activateSeparator }) => activateSeparator ? separatorTop({ time: '1s' }) : invertedSeparatorTop({ time: '1s' })};
  ${({ menuOpened }) => menuOpened && createPositiveCross({ time: '1s' })});
  animation-fill-mode: forwards;
`

export const LowerLine = styled.div`
  ${line};
  position: absolute;
  ${({ activateSeparator }) => activateSeparator ? separatorBottom({ time: '1s' }) : invertedSeparatorBottom({ time: '1s' })};
  ${({ menuOpened }) => menuOpened && createNegativeCross({ time: '1s' })});
  animation-fill-mode: forwards;
`

export const AnimatedLine = styled.div`
  ${line};
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  ${({ activateSeparator }) => activateSeparator ? showingLine({ time: '1s' }) : hideLine({ time: '1s' })};
  animation-fill-mode: forwards;
  transform: translate(-50%, -50%);
`
