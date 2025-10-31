import { useState, useContext, useEffect } from "react"
import { DataContext } from "../context/DataContext"
import { useLanguage } from "../context/LanguageContext"

const AppointmentSearch = () => {
  const { doctors } = useContext(DataContext)
  const { language } = useLanguage()

  const [department, setDepartment] = useState("")
  const [doctor, setDoctor] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [availableDates, setAvailableDates] = useState([])
  const [availableTimes, setAvailableTimes] = useState([])

  useEffect(() => {
    if (department) {
      const filtered = doctors.filter((d) => d.specialty === department)
      setFilteredDoctors(filtered)
      setDoctor("")
      setDate("")
      setTime("")
      setAvailableDates([])
      setAvailableTimes([])
    } else {
      setFilteredDoctors([])
    }
  }, [department, doctors])

  useEffect(() => {
    if (doctor) {
      const selectedDoctor = doctors.find((d) => d.name === doctor)
      if (selectedDoctor) {
        const dates = selectedDoctor.availableSlots.map((slot) => slot.date)
        setAvailableDates(dates)
        setDate("")
        setTime("")
        setAvailableTimes([])
      }
    }
  }, [doctor])

  useEffect(() => {
    if (doctor && date) {
      const selectedDoctor = doctors.find((d) => d.name === doctor)
      const selectedDate = selectedDoctor?.availableSlots.find(
        (slot) => slot.date === date
      )
      setAvailableTimes(selectedDate ? selectedDate.times : [])
      setTime("")
    }
  }, [date])

  const handleSearch = () => {
    alert(
      language === "en"
        ? `Confirm for:\nDepartment: ${department}\nDoctor: ${doctor}\nDate: ${date}\nTime: ${time}`
        : `تأكيد للمواعيد:\nالقسم: ${department}\nالطبيب: ${doctor}\nالتاريخ: ${date}\nالوقت: ${time}`
    )
  }

  const Dropdown = ({ label, value, onChange, options }) => (
    <select
      value={value}
      onChange={onChange}
      className="appearance-none bg-opacity-70 bg-white border-none text-gray-800 py-3 px-4 
      rounded-lg leading-tight focus:outline-none focus:bg-white text-sm font-medium
       cursor-pointer w-full"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", minWidth: "150px" }}
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  )

  const departments = [...new Set(doctors.map((doc) => doc.specialty))]

  return (
    <div className="flex justify-center p-4 mb-25">
      <div className="bg-opacity-80 p-3 rounded-xl shadow-2xl flex flex-wrap justify-between space-x-2 sm:space-x-4 w-[100%] bg-[var(--caribbean-current)]">
      
        <div className="flex-1 min-w-[150px] mb-2 sm:mb-0">
          <Dropdown
            label={language === "en" ? "Select Department" : "اختر القسم"}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            options={departments}
          />
        </div>

        
        <div className="flex-1 min-w-[150px] mb-2 sm:mb-0">
          <Dropdown
            label={language === "en" ? "Select Doctor" : "اختر الطبيب"}
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            options={filteredDoctors.map((d) => d.name)}
          />
        </div>

      
        <div className="flex-1 min-w-[150px] mb-2 sm:mb-0">
          <Dropdown
            label={language === "en" ? "Select Date" : "اختر التاريخ"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            options={availableDates}
          />
        </div>

      
        <div className="flex-1 min-w-[150px] mb-2 sm:mb-0">
          <Dropdown
            label={language === "en" ? "Select Time" : "اختر الوقت"}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            options={availableTimes}
          />
        </div>

       
        <button
          onClick={handleSearch}
          className="bg-white text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline flex items-center justify-center text-sm transition duration-150 ease-in-out min-w-[100px]"
        >
          {language === "en" ? "Add Appointment" : "إضافة موعد"}
        </button>
      </div>
    </div>
  )
}

export default AppointmentSearch
