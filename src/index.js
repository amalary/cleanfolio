import { render } from 'react-dom'
import React from 'react'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './index.css'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
