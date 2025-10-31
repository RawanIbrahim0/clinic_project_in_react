import { useNavigate } from "react-router";



const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/doctor", { state: { doctor } })
  }

  return (
    <div
      onClick={handleClick}
      className="
        flex flex-col items-center justify-center
        hover:-translate-y-1 transition-all duration-200
        cursor-pointer p-4 w-[17%]
      "
    >
      <div
        className="
    relative w-[100%] h-[100%] rounded-full p-[6px]
    bg-gradient-to-r from-[var(--persian-green)] via-[var(--caribbean-current)]
     to-[var(--caribbean-current)]
     shadow-[0_4px_20px_rgba(64,224,208,0.6)] 
    hover:shadow-[0_6px_25px_rgba(64,224,208,0.8)]
    hover:-translate-y-1 transition-all duration-200
    mb-4
  "
      >
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-full h-full rounded-full object-cover border-2 border-white"
        />
      </div>

      {/*    <img
        src={doctor.photo}
        alt={doctor.name}
        className="w-[100%] h-[100%] rounded-full object-cover mb-3 border-6
         border-gradient-to-r from-[var(--persian-green)] via-[var(--caribbean-current)]
          to-[var(--robin-egg-blue)]"
      /> */}
      <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
      <p className="text-[var(--caribbean-current)] text-lg font-bold">
        {doctor.specialty}
      </p>
    </div>
  )
}

export default DoctorCard
