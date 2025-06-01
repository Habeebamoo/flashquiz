import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext.js'
import App from './App.js'
import { UserProvider } from './context/UserContext.js'

createRoot(document.getElementById('root')!).render(
  <UserProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </UserProvider>
)
