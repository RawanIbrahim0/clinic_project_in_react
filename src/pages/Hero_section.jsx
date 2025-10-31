import ImageSlider from "../components/ImageSlider"
import back from "../assets/back.png"
import { useLanguage } from "../context/LanguageContext"

const Hero_section = () => {
  const { language } = useLanguage()

  return (
    <div
      className={`text-start pt-15 flex justify-between items-center pl-10 pr-10 transition-all 
        duration-500 
      `}
    >
      {/* النصوص */}
      <div
        className={`items-start flex flex-col justify-center gap-5 h-[100vh] p-5 transition-all duration-500
        `}
      >
        <h1 className="text-4xl font-bold text-[var(--dark-green)]">
          {language === "en"
            ? "Transforming Your Health Journey"
            : "نحو رحلة صحية أفضل تبدأ من هنا"}
        </h1>

        <p className="text-2xl text-[var(--dark-green)]">
          {language === "en"
            ? "Empowering your wellness journey with effortless booking,"
            : "نمكّنك من العناية بصحتك عبر حجز سهل وسريع"}
        </p>

        <p className="text-2xl text-[var(--dark-green)]">
          {language === "en"
            ? "trusted doctors, and personalized care because your health deserves simplicity."
            : "مع أطباء موثوقين ورعاية مخصصة لأن صحتك تستحق البساطة."}
        </p>

        <p className="text-2xl text-[var(--dark-green)]">
          {language === "en"
            ? "Transforming your healthcare journey where effortless booking"
            : "نحو تجربة طبية متكاملة تجمع بين السهولة والدقة"}
        </p>

        <p className="text-2xl text-[var(--dark-green)]">
          {language === "en"
            ? "meets expert care."
            : "حيث يلتقي الحجز السلس مع الرعاية المتخصصة."}
        </p>

        <button
          className="mt-5 bg-[var(--caribbean-current)] text-white p-3 rounded-full 
        hover:-translate-y-1 font-medium duration-300 hover:bg-[var(--robin-egg-blue)] text-xl"
        >
          {language === "en" ? "Book Your Visit" : "احجز زيارتك الآن"}
        </button>
      </div>

      {/* الصورة + السلايدر */}
      <div className="relative h-[100vh] w-[30%] p-5">
        <div className="absolute inset-0 z-0">
          <img className="w-[99%] h-[80%]" src={back} alt="back" />
        </div>
        <div className="absolute inset-0 z-10">
          <ImageSlider />
        </div>
      </div>
    </div>
  )
}

export default Hero_section
