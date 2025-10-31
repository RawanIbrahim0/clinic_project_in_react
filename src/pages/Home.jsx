import AboutUsSection from "../components/AboutUs/AboutUsSection"
import DepartmentSection from "../components/Department/DepartmentSection"
import DoctorsSection from "../components/Doctors/DoctorsSection"
import AppointmentSearch from "./AppointmentSearch"
import Hero_section from "./Hero_section"
import { useEffect } from "react"
import { useLocation } from "react-router"



const Home = ({doctorRef}) => {

  const location = useLocation()

 useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

useEffect(() => {
  if (location.state?.scrollToDoctors) {
    setTimeout(() => {
      const element = doctorRef.current
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top: offset, behavior: "smooth" })
      }
    }, 300)
  }
}, [location])

  return (
   <div>
    <Hero_section/>
    <AppointmentSearch/>
    <DepartmentSection/>
    <DoctorsSection doctorRef={doctorRef}/>
    <AboutUsSection/>
   
   </div>
  )
}

export default Home
