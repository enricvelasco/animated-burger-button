import { css, keyframes } from 'styled-components'

const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter: blur(0);
        opacity: 1;
    }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
    animation: ${time} ${fadeInKeyframes} ${type};
`

const showingLineKeyframes = keyframes`
  from {
        width: 0;
        opacity: 0;
  }
  to {
      width: 50%;
      opacity: 1;
  }
`

export const showingLine = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${showingLineKeyframes} ${type};
`

const hideLineKeyframes = keyframes`
  from {
    width: 50%;
    opacity: 1;
  }
  to {
    width: 0;
    opacity: 0;
  }
`

export const hideLine = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${hideLineKeyframes} ${type};
`

const separatorTopLinesKeyframes = keyframes`
  from {
    top: 35%;
  }
  to {
    top: 20%;
  }
`

export const separatorTop = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${separatorTopLinesKeyframes} ${type};
`

const invertedSeparatorTopLinesKeyframes = keyframes`
  from {
    top: 20%;
  }
  to {
    top: 35%;
  }
`

export const invertedSeparatorTop = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${invertedSeparatorTopLinesKeyframes} ${type};
`

const separatorBottomLinesKeyframes = keyframes`
  from {
    bottom: 35%;
  }
  to {
    bottom: 20%;
  }
`

export const separatorBottom = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${separatorBottomLinesKeyframes} ${type};
`

const invertedSeparatorBottomLinesKeyframes = keyframes`
  from {
    bottom: 20%;
  }
  to {
    bottom: 35%;
  }
`

export const invertedSeparatorBottom = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${invertedSeparatorBottomLinesKeyframes} ${type};
`

const createCrossPositiveKeyframes = keyframes`
  from {
    top: 35%;
  }
  to {
    top: 50%;
    transform: rotate(45deg) translateY(-50%);
  }
`

export const createPositiveCross = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${createCrossPositiveKeyframes} ${type};
`

const createCrossNegativeKeyframes = keyframes`
  from {
    bottom: 35%;
  }
  to {
    top: 50%;
    transform: rotate(-45deg) translateY(-50%);
  }
`

export const createNegativeCross = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${createCrossNegativeKeyframes} ${type};
`

