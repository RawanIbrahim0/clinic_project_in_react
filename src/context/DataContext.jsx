import { createContext, useEffect, useState } from "react"

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    fetch("/src/assets/data/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data))
      .catch((err) => console.error("Error loading doctors data:", err))
  }, [])

  return (
    <DataContext.Provider value={{ doctors }}>
      {children}
    </DataContext.Provider>
  )
}
