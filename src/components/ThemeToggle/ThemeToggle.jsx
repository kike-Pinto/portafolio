import React, { useState, useEffect } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi' // Usaremos iconos para mejor UX
import './ThemeToggle.css' // Archivo CSS para estilos específicos del botón

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light')

  // Cargar tema desde localStorage si existe
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
    } else if (prefersDark) {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  // Guardar tema en localStorage y aplicarlo al cambiar
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button className='theme-toggle' onClick={toggleTheme}>
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  )
}

export default ThemeToggle
