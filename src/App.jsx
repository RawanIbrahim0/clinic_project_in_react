import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { DataProvider } from "./context/DataContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import OneDoctor from './pages/OneDoctor'
import ContactUs from './pages/ContactUs'
import { useRef } from "react"
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'



function App() {
  const doctorRef = useRef(null)

  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
        <DataProvider>
          <NavBar doctorRef={doctorRef} />
          <Routes>
            <Route path="/" element={<Home doctorRef={doctorRef} />} />
            <Route path="/doctor" element={<OneDoctor />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer />
        </DataProvider>
        </LanguageProvider>
      </ThemeProvider>

    </>
  )
}

export default App
