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
