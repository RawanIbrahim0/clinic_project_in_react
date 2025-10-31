import AboutCard from "./AboutCard"
import { useLanguage } from "../../context/LanguageContext"

const AboutUsSection = () => {
  const { language } = useLanguage()

  return (
    <div className="flex-1 p-8">
      <div className="flex flex-col md:flex-row items-center justify-center mb-16 space-y-8 md:space-y-0">
        <div className="text-center md:text-center">
          <h1 className="text-3xl font-bold mb-4 text-[var(--dark-green)]">
            {language === "en" ? "OUR STORY" : "قصتنا"}
          </h1>
          <p className="text-xl text-gray-500">
            {language === "en"
              ? "Dedicated to providing expert medical care with compassion and trust."
              : "ملتزمون بتقديم رعاية طبية متخصصة مليئة بالاهتمام والثقة."}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <AboutCard
          title={language === "en" ? "OUR MISSION" : "مهمتنا"}
          description={
            language === "en"
              ? "To ensure accessible, high-quality healthcare for every patient."
              : "ضمان رعاية صحية عالية الجودة ومتاحة لكل مريض."}
        />
        <AboutCard
          title={language === "en" ? "OUR VISION" : "رؤيتنا"}
          description={
            language === "en"
              ? "To be the most trusted and compassionate healthcare provider in the community."
              : "أن نكون المزود الصحي الأكثر ثقة ورعاية في مجتمعنا."}
        />
        <AboutCard
          title={language === "en" ? "OUR VALUES" : "قيمنا"}
          description={
            language === "en"
              ? "Compassion, professionalism, integrity, and patient-centered care."
              : "الرحمة، الاحترافية، النزاهة، ورعاية المريض أولاً."}
        />
        <AboutCard
          title={language === "en" ? "OUR TEAM" : "فريقنا"}
          description={
            language === "en"
              ? "Experienced specialists dedicated to your well-being."
              : "أخصائيون ذوو خبرة ملتزمون بصحتك وراحتك."}
        />
      </div>

      <div className="text-center mb-8">
        <p className="text-xl text-[var(--caribbean-current)] mb-6">
          {language === "en"
            ? "Join us on a journey to better health."
            : "انضموا إلينا في رحلة نحو صحة أفضل."}
        </p>
        <button className="bg-[var(--caribbean-current)] hover:bg-[var(--robin-egg-blue)] text-[#fafaffff] font-bold py-3 px-8 rounded-full transition-colors duration-300">
          {language === "en" ? "Learn More" : "تعرف أكثر"}
        </button>
      </div>
    </div>
  )
}

export default AboutUsSection
