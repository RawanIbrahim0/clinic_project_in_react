import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"))
  };

  useEffect(() => {
    localStorage.setItem("lang", language);
    document.dir = language === "ar" ? "rtl" : "ltr"
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
