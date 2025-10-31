import { useContext } from "react"
import DepartmentCard from "./DepartmentCard"
import { DataContext } from "../../context/DataContext"
import { useLanguage } from "../../context/LanguageContext"

import heartIcon from "../../assets/icons/heart.jpg"
import skinIcon from "../../assets/icons/skin.png"
import lungsIcon from "../../assets/icons/lungs.jpg"
import toothIcon from "../../assets/icons/tooth.png"
import brainIcon from "../../assets/icons/brain.jpg"
import boneIcon from "../../assets/icons/bone.png"

const iconsMap = {
  Cardiology: heartIcon,
  Dermatology: skinIcon,
  Pediatrics: lungsIcon,
  Neurology: brainIcon,
  "General Medicine": toothIcon,
  Orthopedics: boneIcon,
}

const DepartmentSection = () => {
  const { doctors } = useContext(DataContext)
  const { language } = useLanguage()

  const departments = [...new Set(doctors.map((doc) => doc.specialty))]

  return (
    <section className="flex flex-col justify-center items-center gap-5 w-[100%] text-center">
      <h2 className="text-3xl font-bold mb-2 text-[var(--dark-green)]">
        {language === "en" ? "Department Category" : "أقسام العيادات"}
      </h2>
      <p className="text-xl text-gray-500 mb-8">
        {language === "en"
          ? "Browse by department for tailored services and expert solutions."
          : "تصفح حسب القسم للحصول على خدمات مخصصة وحلول من الخبراء."}
      </p>

      <div className="w-[100%] flex flex-wrap justify-center gap-6">
        {departments.map((dept, index) => (
          <DepartmentCard
            key={index}
            name={dept}
            icon={iconsMap[dept] || heartIcon}
          />
        ))}
      </div>
    </section>
  )
}

export default DepartmentSection
