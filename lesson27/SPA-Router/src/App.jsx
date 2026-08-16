import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/header.jsx'
import ErrorBoundary from './components/error-boundary.jsx'
import { ThemeProvider } from './context/theme-context.jsx'
import Home from './pages/home.jsx'
import Contacts from './pages/contacts.jsx'
import About from './pages/about.jsx'
import './App.css'

function App() {
  const location = useLocation()
  return (
    <ThemeProvider>
      <Header />
      <ErrorBoundary key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App



