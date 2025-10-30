import { useState } from 'react';

const AppointmentSearch = () => {
  const [department, setDepartment] = useState('')
  const [doctor, setDoctor] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const handleSearch = () => {
    console.log('Search initiated with:', {
      department,
      doctor,
      date,
      time,
    })
    // هنا يمكنك إضافة منطق البحث الفعلي (مثل استدعاء API)
    alert(`Searching for: Department: ${department}, Doctor: ${doctor}, Date: ${date}, Time: ${time}`);
  }

  // مكون فرعي لإنشاء حقل الاختيار (Dropdown) - لم يتغير
  const Dropdown = ({ label, value, onChange, options }) => (
    <div className="relative inline-block w-full">
      <select
        value={value}
        onChange={onChange}
        // Tailwind classes for styling (matching the blue/teal buttons in the image)
        className="
          appearance-none bg-opacity-70 bg-white border-none text-gray-800
          py-3 px-4 rounded-lg leading-tight focus:outline-none focus:bg-white
          text-sm font-medium cursor-pointer w-full
          h-full
        "
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', minWidth: '150px' }}
      >
        <option value="" disabled>{label}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* سهم مخصص للقائمة المنسدلة */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )


  // بيانات افتراضية للقوائم المنسدلة
  const departmentOptions = [
    { label: 'Cardiology', value: 'cardio' },
    { label: 'Dermatology', value: 'derma' },
  ]
  const doctorOptions = [
    { label: 'Dr. Ahmad', value: 'ahmad' },
    { label: 'Dr. Fatima', value: 'fatima' },
  ]
  const dateOptions = [
    { label: '2025-10-31', value: '31-10' },
    { label: '2025-11-01', value: '01-11' },
  ]
  const timeOptions = [
    { label: '09:00 AM', value: '0900' },
    { label: '02:00 PM', value: '1400' },
  ]


  return (
    <div className="flex justify-center p-4">
      <div
        // تصميم الشريط الأزرق/الأزرق المخضر
        className="
          bg-opacity-80 p-3 rounded-xl shadow-2xl flex flex-wrap justify-between
          space-x-2 sm:space-x-4 w-[100%] h-[500] bg-[var(--caribbean-current)]
        "
      >

        {/* حقل Select Department */}
        <div className="flex-1 min-w-[150px] mb-2 sm:mb-0">
          <Dropdown
            label="Select Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            options={departmentOptions}
          />
        </div>

        {/* حقل Select Doctor */}
        <div className="flex-1 min-w-[150px] mb-2 sm:mb-0">
          <Dropdown
            label="Select Doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            options={doctorOptions}
          />
        </div>

        {/* حقل Select Date */}
        <div className="flex-1 min-w-[150px] mb-2 sm:mb-0">
          <Dropdown
            label="Select Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            options={dateOptions}
          />
        </div>

        <div className="flex-1 min-w-[150px] mb-2 sm:mb-0">
          <Dropdown
            label="Select Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            options={timeOptions}
          />
        </div>

        {/* زر البحث (Search Button) */}
        <button
          onClick={handleSearch}
          // تصميم الزر الأبيض
          className="
            bg-white text-gray-700 font-bold py-3 px-6 rounded-lg
            hover:bg-gray-100 focus:outline-none focus:shadow-outline
            flex items-center justify-center text-sm transition duration-150 ease-in-out
            min-w-[100px] h-full
          "
        >
          {/* أيقونة البحث */}
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          Search
        </button>
      </div>
    </div>
  )
}

export default AppointmentSearch