import styled from 'styled-components'

export const Cross = styled.div`
  position: absolute;
  opacity: 0.3;
  &:before, &:after {
    position: absolute;
    content: ' ';
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
