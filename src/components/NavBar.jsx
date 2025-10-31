import { useContext, useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const NavBar = ({ doctorRef }) => {
  const navigate = useNavigate();
  const { doctors } = useContext(DataContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const scrollToDoctors = () => {
    doctorRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();

      const foundByName = doctors.find((doc) =>
        doc.name.toLowerCase().includes(term)
      );

      if (foundByName) {
        navigate("/doctor", { state: { doctor: foundByName } });
        setSearchTerm("");
        return;
      }

      const foundBySpecialty = doctors.find((doc) =>
        doc.specialty.toLowerCase().includes(term)
      );

      if (foundBySpecialty) {
        navigate("/doctor", { state: { doctor: foundBySpecialty } });
        setSearchTerm("");
        return;
      }

      alert(
        language === "en"
          ? "No matching doctor or specialty found!"
          : "لم يتم العثور على طبيب أو تخصص مطابق!"
      );
    }
  };

  return (
    <nav className="fixed flex w-full h-20 items-center justify-between z-1000 transition-all duration-500">
      <img src={Logo} alt="logo" className="w-[17%] pt-7" />

      <div
        className={`
          clip-left-wave w-[80%] h-20 flex items-center justify-between
          bg-[var(--persian-green)] shadow-md justify-self-end transition-all duration-700
          ${language === "ar" ? "rounded-br-full  pr-20 pl-10" : "rounded-bl-full pl-20"}
        `}
      >
        <ul
          className={`
            flex-1 flex items-center gap-10 text-white text-xl transition-all duration-500
            ${language === "ar" ? "justify-start pl-20 pr-5 " : "justify-start pl-20"}
          `}
        >
          <li
            className="hover:text-[var(--timberwolf)] hover:-translate-y-1 duration-300 font-medium 
            cursor-pointer transition"
            onClick={() => navigate("/")}
          >
            {language === "en" ? "Home" : "الرئيسية"}
          </li>
          <li
            className="hover:text-[var(--timberwolf)] hover:-translate-y-1 duration-300 font-medium 
            cursor-pointer transition"
            onClick={scrollToDoctors}
          >
            {language === "en" ? "Doctors" : "الأطباء"}
          </li>
          <li
            className="hover:text-[var(--timberwolf)] hover:-translate-y-1 duration-300 font-medium cursor-pointer transition"
            onClick={() => navigate("/contact")}
          >
            {language === "en" ? "Contact" : "اتصل بنا"}
          </li>
        </ul>

        <div className="flex items-center gap-4 pr-5">
          {/* حقل البحث */}
          <div className="relative">
            <input
              type="text"
              placeholder={language === "en" ? "Search..." : "ابحث..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
              className="pl-3 pr-8 py-1 rounded-full border border-white/40 bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition w-32"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 absolute right-3 top-2 text-white/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>

          {/* زر الثيم */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/20 transition"
          >
            {theme === "light" ? (
              <Moon className="text-white transition-all duration-500" size={20} />
            ) : (
              <Sun className="text-yellow-400 transition-all duration-500" size={20} />
            )}
          </button>

          {/* زر اللغة */}
          <button
            className="p-2 rounded-full hover:bg-white/20 transition"
            onClick={toggleLanguage}
            title={language === "en" ? "Switch to Arabic" : "تحويل إلى الإنجليزية"}
          >
            <Globe className="text-white transition-all duration-500" size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar
