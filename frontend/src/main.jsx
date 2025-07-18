// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UserProvider from './components/UserProvider/UserProvider.jsx' // Adjust the import path as necessary
import { LanguageProvider } from './LanguageContext.jsx';

createRoot(document.getElementById('root')).render(

    <Router>
      <UserProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </UserProvider>
    </Router>
  
)
