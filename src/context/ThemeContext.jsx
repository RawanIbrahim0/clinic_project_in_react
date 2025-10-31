import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  useEffect(() => {
    document.documentElement.classList.add("theme-transition")

    if (theme === "dark") {
      document.documentElement.classList.add("theme-dark")
    } else {
      document.documentElement.classList.remove("theme-dark")
    }

    localStorage.setItem("theme", theme)

    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition")
    }, 400)

    return () => clearTimeout(timeout)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
