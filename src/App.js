import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import NavBar from './components/nav-bar'

const App = () => (
  <div>
    <GlobalStyle />
    <NavBar />
    <h1>Hi this is React Starter!!</h1>
    <p>This is an alternative to 'create-react-app'</p>
    <p>remember that you owe this project has no style</p>
    <p>we recommend that you use styled-components <a href='https://www.npmjs.com/package/styled-components' target='_blank' rel='noopener noreferrer'>https://www.npmjs.com/package/styled-components</a></p>
  </div>
)

export default App
