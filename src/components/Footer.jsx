import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { AiOutlineYoutube } from "react-icons/ai"
import QR from "../assets/QRcode.png"
import { useLanguage } from "../context/LanguageContext"

const Footer = () => {
  const { language } = useLanguage()

  const melodiesLinks =
    language === "en"
      ? ["Departments", "Services", "Contact"]
      : ["الأقسام", "الخدمات", "اتصل بنا"]

  const accessLinks =
    language === "en"
      ? ["Explore", "Doctors", "Appointment", "Department"]
      : ["استكشف", "الأطباء", "احجز موعد", "الأقسام"]

  const contactLinks =
    language === "en"
      ? ["About", "Policy", "Support"]
      : ["من نحن", "السياسة", "الدعم"]

  return (
    <footer
      className="bg-gradient-to-r from-[var(--caribbean-current)] via-[var(--persian-green)] to-[var(--caribbean-current)] text-white py-10"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex flex-col justify-center gap-3">
        <div className="flex justify-center">
          <div className="grid grid-cols-[1.3fr_1.3fr_1.3fr_1.3fr] gap-x-8 items-start w-full max-w-[1200px] px-4">
         <div className={`col-span-1 ${language === "ar" ? "text-right" : "text-left"}`}>
              <h4 className="text-2xl font-bold mb-3 text-[#03312eff]">
                Healix
              </h4>
              <ul className="space-y-1">
                {melodiesLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          
            <div className={`col-span-1 ${language === "ar" ? "text-right" : "text-left"}`}>
              <h4 className="text-2xl font-bold mb-3 text-[#03312eff]">
                {language === "en" ? "Access" : "الوصول"}
              </h4>
              <ul className="space-y-1">
                {accessLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

      
            <div className={`col-span-1 ${language === "ar" ? "text-right" : "text-left"}`}>
              <h4 className="text-2xl font-bold mb-3 text-[#03312eff]">
                {language === "en" ? "Contact" : "تواصل"}
              </h4>
              <ul className="space-y-1">
                {contactLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-sm hover:text-gray-300 transition duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

           
            <div className="flex flex-col items-center justify-center w-[50%] h-[50%]">
              <img src={QR} alt="QR code" />
            </div>
          </div>
        </div>

       
        <div
          className={`flex md:flex-row flex-col items-center justify-between px-10 text-sm text-[#afafaf] pt-8 border-t border-[#afafaf] ${
            language === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <p className="mb-4 md:mb-0">
            {language === "en"
              ? "© 2025 Healix - All Rights Reserved"
              : "© 2025 Healix - جميع الحقوق محفوظة"}
          </p>

          <div className="flex space-x-4 rtl:space-x-reverse">
            <a
              href="#"
              className="hover:text-[var(--robin-egg-blue)] transition-colors duration-200"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-[var(--robin-egg-blue)] transition-colors duration-200"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-[var(--robin-egg-blue)] transition-colors duration-200"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:text-[var(--robin-egg-blue)] transition-colors duration-200"
            >
              <AiOutlineYoutube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
