import { useLocation } from "react-router"
import { useEffect } from "react"

import back from "../assets/back.png"
import { FaMapMarkerAlt } from "react-icons/fa"

import MakeAppointmentSection from "../components/MakeAppointmentSection"

const OneDoctor = () => {
    const location = useLocation()
    const doctor = location.state?.doctor

    if (!doctor) {
        return <p className="text-center pt-20">No doctor data found.</p>
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>
            <div className="pt-20 flex justify-between items-center pl-10 pr-10">
                <div className="flex flex-col justify-center items-start p-5 text-start gap-5 h-[100vh]">
                    <h1 className="text-3xl font-bold text-[var(--dark-green)]">
                        {doctor.name}
                    </h1>
                    <p className="text-2xl font-bold text-[var(--caribbean-current)]">
                        {doctor.specialty}
                    </p>
                    <p className="text-2xl  text-[var(--dark-green)]">
                        {doctor.bio}
                    </p>
                    <p className="flex items-center gap-2 text-2xl mt-30 text-[var(--caribbean-current)]">
                        <FaMapMarkerAlt className="text-[var(--persian-green)]" />
                        {doctor.location}
                    </p>

                </div>

                <div className="relative h-[95vh] w-[50%]">
                    <div className="absolute inset-0 z-0">
                        <img
                            className="w-[99%] h-[80%] float-animationShap"
                            src={back}
                            alt="back"
                        />
                    </div>

                    <div className="absolute inset-0 z-10 mt-15">
                        <img
                            src={doctor.photo}
                            alt={doctor.name}
                            className="float-animation w-[70%] h-[50%] object-cover border-6
                             border-[var(--caribbean-current)]"
                        />
                    </div>
                </div>

            </div>
            <MakeAppointmentSection doctor={doctor} />
        </div>
    )
}

export default OneDoctor
