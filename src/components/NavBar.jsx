import { useContext } from "react"
import { Sun, Moon, Globe } from "lucide-react"
import Logo from "../assets/logo.png"

// import { ThemeContext } from "../context/ThemeContext"
// import { LanguageContext } from "../context/LanguageContext"

const NavBar = () => {
    // const { theme, toggleTheme } = useContext(ThemeContext)
    // const { lang, toggleLang } = useContext(LanguageContext)

    return (
        <nav className="flex w-full h-20  items-center justify-between">
           
            <img src={Logo} alt="logo" className="w-[17%] pt-7"  />

            <div className="clip-left-wave w-[80%] h-20 flex items-center justify-between 
    bg-[var(--persian-green)] rounded-bl-full shadow-md justify-self-end">

                <ul className="flex-1 flex justify-start pl-20 items-center gap-10 text-white text-xl">
                    <li className="hover:text-[var(--timberwolf)] hover:-translate-y-1 duration-300 font-medium cursor-pointer transition">Home</li>
                    <li className="hover:text-[var(--timberwolf)] hover:-translate-y-1 duration-300 font-medium  cursor-pointer transition">Doctors</li>
                    <li className="hover:text-[var(--timberwolf)] hover:-translate-y-1 duration-300 font-medium cursor-pointer transition">Contact</li>
                </ul>
                <div className="flex items-center gap-4 pr-5">
                    {/* حقل البحث */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
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

                    {/* أيقونة الثيم */}
                    <button
                        // onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-white/20 transition"
                    >
                        {/* theme === 'light' ? <Moon size={20} /> : <Sun size={20} /> */}
                        <Sun className="text-white" size={20} />
                    </button>

                    {/* أيقونة اللغة */}
                    <button
                        // onClick={toggleLang}
                        className="p-2 rounded-full hover:bg-white/20 transition"
                    >
                        <Globe className="text-white" size={20} />
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default NavBar
