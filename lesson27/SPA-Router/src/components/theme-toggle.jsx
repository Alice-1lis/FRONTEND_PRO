// src/components/ThemeToggle.jsx
import { useTheme } from '../context/theme-context.jsx'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button type="button" onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Темна' : '☀️ Світла'}
    </button>
  )
}

export default ThemeToggle