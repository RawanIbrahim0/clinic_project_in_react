import AboutUsSection from "../components/AboutUs/AboutUsSection"
import DepartmentSection from "../components/Department/DepartmentSection"
import DoctorsSection from "../components/Doctors/DoctorsSection"
import AppointmentSearch from "./AppointmentSearch"
import Hero_section from "./Hero_section"
import { useEffect } from "react"



const Home = ({doctorRef}) => {

 useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return (
   <div>
    <Hero_section/>
    <AppointmentSearch/>
    <DepartmentSection/>
    <DoctorsSection ref={doctorRef}/>
    <AboutUsSection/>
   
   </div>
  )
}

export default Home
