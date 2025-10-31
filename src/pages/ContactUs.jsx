import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import { useLanguage } from "../context/LanguageContext"

const ContactUs = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      console.log("Message sent:", formData)
      setIsSubmitting(false)
      alert(
        language === "en"
          ? "Thank you! Your message has been sent successfully and we'll get back to you soon."
          : "شكرًا لك! تم إرسال رسالتك بنجاح وسنعود للرد عليك قريبًا."
      )
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 2000)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen w-[100%] pt-25 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            {language === "en" ? "Contact Us" : "اتصل بنا"}
          </h1>
          <p className="text-black text-xl max-w-2xl mx-auto">
            {language === "en"
              ? "We're here to assist you! Reach out for appointments, inquiries, or feedback."
              : "نحن هنا لمساعدتك! تواصل معنا لحجز المواعيد، الاستفسارات، أو الملاحظات."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[var(--timberwolf)]/90 backdrop-blur-sm rounded-2xl shadow-2xl
           p-8 border-4 border-amber-50/10">
            <h2 className="text-2xl font-bold text-[var(--black)] mb-6">
              {language === "en" ? "Send us a Message" : "أرسل لنا رسالة"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[var(--black)] text-sm mb-2">
                    {language === "en" ? "Full Name" : "الاسم الكامل"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={
                      language === "en"
                        ? "Enter your full name"
                        : "أدخل اسمك الكامل"
                    }
                    className="w-full p-4 rounded-xl bg-[#616161]/40 border border-amber-50/20
                     text-amber-50 focus:outline-none focus:ring-2 focus:ring-[var(--caribbean-current)]
                      transition duration-300"
                  />
                </div>

                <div>
                  <label className="block text-[var(--black)] text-sm mb-2">
                    {language === "en" ? "Email Address" : "البريد الإلكتروني"}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full p-4 rounded-xl bg-[#616161]/40 border border-amber-50/20
                     text-amber-50 focus:outline-none focus:ring-2 focus:ring-[var(--caribbean-current)]
                      transition duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[var(--black)] text-sm mb-2">
                  {language === "en" ? "Subject" : "الموضوع"}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder={
                    language === "en" ? "Message subject" : "موضوع الرسالة"
                  }
                  className="w-full p-4 rounded-xl bg-[#616161]/40 border border-amber-50/20
                   text-amber-50 focus:outline-none focus:ring-2 focus:ring-[var(--caribbean-current)] 
                   transition duration-300"
                />
              </div>

              <div>
                <label className="block text-[var(--black)] text-sm mb-2">
                  {language === "en" ? "Message" : "الرسالة"}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder={
                    language === "en"
                      ? "Type your message here..."
                      : "اكتب رسالتك هنا..."
                  }
                  className="w-full p-4 rounded-xl bg-[#616161]/40 border border-amber-50/20 text-amber-50 focus:outline-none focus:ring-2 focus:ring-[var(--caribbean-current)] transition duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--caribbean-current)] hover:bg-[var(--persian-green)] disabled:bg-yellow-500/50 text-white font-bold py-4 px-6 rounded-xl transition duration-300 transform hover:scale-105 disabled:scale-100"
              >
                {isSubmitting
                  ? language === "en"
                    ? "Sending..."
                    : "جاري الإرسال..."
                  : language === "en"
                  ? "Send Message"
                  : "إرسال الرسالة"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[var(--timberwolf)]/90 backdrop-blur-sm rounded-2xl shadow-2xl
             p-8 border-4 border-amber-50/10">
              <h2 className="text-2xl font-bold text-[var(--black)] mb-6">
                {language === "en" ? "Contact Information" : "معلومات الاتصال"}
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                     <svg
                          className="w-6 h-6 text-[var(--caribbean-current)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--caribbean-current)] font-semibold text-lg">
                      {language === "en" ? "Phone" : "الهاتف"}
                    </h3>
                    <p className="text-[var(--black)]">+962 7 9012 3456</p>
                    <p className="text-[var(--black)]">+962 7 7890 1234</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-[var(--caribbean-current)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--caribbean-current)] font-semibold text-lg">
                      {language === "en" ? "Email" : "البريد الإلكتروني"}
                    </h3>
                    <p className="text-[var(--black)]">support@clinic.com</p>
                    <p className="text-[var(--black)]">info@clinic.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                         <svg
                          className="w-6 h-6 text-[var(--caribbean-current)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--caribbean-current)] font-semibold text-lg">
                      {language === "en" ? "Address" : "العنوان"}
                    </h3>
                    <p className="text-[var(--black)]">
                      Amman, Al Madinah Al Munawarah Street
                    </p>
                    <p className="text-[var(--black)]">Jordan</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                          className="w-6 h-6 text-[var(--caribbean-current)]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                  </div>
                  <div>
                    <h3 className="text-[var(--caribbean-current)] font-semibold text-lg">
                      {language === "en" ? "Business Hours" : "ساعات العمل"}
                    </h3>
                    <p className="text-[var(--black)]">
                      {language === "en"
                        ? "Sunday - Thursday: 9:00 AM - 6:00 PM"
                        : "الأحد - الخميس: 9:00 صباحًا - 6:00 مساءً"}
                    </p>
                    <p className="text-[var(--black)]">
                      {language === "en"
                        ? "Friday - Saturday: Closed"
                        : "الجمعة - السبت: مغلق"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/")}
            className="bg-transparent hover:bg-amber-50/10 text-amber-50 font-semibold py-3
             px-8 rounded-xl border border-amber-50/30 transition duration-300 transform 
             hover:scale-105"
          >
            {language === "en" ? "Back to Home" : "العودة للرئيسية"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
