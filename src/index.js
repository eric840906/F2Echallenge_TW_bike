import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import Fonts from './theme/Fonts'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCS={true}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
