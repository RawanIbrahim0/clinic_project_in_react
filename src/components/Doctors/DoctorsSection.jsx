import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import DoctorCard from "./DoctorCard"
import { useLanguage } from "../../context/LanguageContext"

const DoctorsSection = ({ doctorRef }) => {
  const { doctors } = useContext(DataContext)
  const { language } = useLanguage()

  return (
    <section
     ref={doctorRef}
    className="mt-12 flex flex-col gap-5 py-12 text-center bg-[var(--mint-cream)]">
      <h2 className="text-3xl text-[var(--dark-green)] font-bold mb-2">
        {language === "en" ? "Our Specialists" : "أطباؤنا المتخصصون"}
      </h2>
      <p className="text-xl text-gray-500 mb-8">
        {language === "en"
          ? "Meet our team of experienced doctors ready to care for you"
          : "تعرف على فريقنا من الأطباء ذوي الخبرة المستعدين للاعتناء بك"}
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  )
}

export default DoctorsSection
