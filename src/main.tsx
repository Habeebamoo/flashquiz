import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.js'
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
