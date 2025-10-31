import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext"

const MakeAppointmentSection = ({ doctor }) => {
  const { language } = useLanguage()

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", phone: "" });

  const handleConfirm = () => {
    if (!userInfo.name || !userInfo.phone) {
      alert(
        language === "en"
          ? "Please fill in your full name and phone number."
          : "يرجى إدخال الاسم الكامل ورقم الهاتف."
      );
      return;
    }
    alert(
      language === "en"
        ? `Appointment confirmed with ${doctor.name} on ${selectedDate} at ${selectedTime}\nName: ${userInfo.name}\nPhone: ${userInfo.phone}`
        : `تم حجز موعد مع ${doctor.name} بتاريخ ${selectedDate} في الساعة ${selectedTime}\nالاسم: ${userInfo.name}\nرقم الهاتف: ${userInfo.phone}`
    );
    setShowForm(false);
    setSelectedDate("");
    setSelectedTime("");
    setUserInfo({ name: "", phone: "" });
  };

  return (
    <section
      className={`mt-12 mb-12 flex flex-col justify-center items-center gap-5 text-center ${language === "ar" ? "rtl" : "ltr"
        }`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <motion.h2
        className="text-3xl text-[var(--dark-green)] font-bold mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {language === "en" ? "Make an Appointment" : "احجز موعدك"}
      </motion.h2>

      <motion.p
        className="text-xl text-gray-500 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {language === "en"
          ? "Select a date and time"
          : "اختر اليوم والوقت المناسب"}
      </motion.p>

      {/* كارد المواعيد */}
      <motion.div
        className="flex flex-col justify-center items-center gap-6 shadow-[0_4px_20px_rgba(64,224,208,0.6)] py-6 px-8 rounded-2xl w-[90%] md:w-[60%]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* اختيار اليوم */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {doctor.availableSlots.map((slot, idx) => (
            <motion.button
              key={idx}
              onClick={() => {
                setSelectedDate(slot.date);
                setSelectedTime("");
                setShowForm(false);
              }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg font-medium border transition ${selectedDate === slot.date
                  ? "bg-[var(--caribbean-current)] text-white"
                  : "bg-white text-[var(--dark-green)] hover:bg-[var(--robin-egg-blue)] hover:text-white"
                }`}
            >
              {slot.date}
            </motion.button>
          ))}
        </motion.div>

        {/* اختيار الوقت */}
        <AnimatePresence>
          {selectedDate && (
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-4"
              key="times"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              {doctor.availableSlots
                .find((slot) => slot.date === selectedDate)
                ?.times.map((time, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      setSelectedTime(time);
                      setShowForm(false);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-medium border transition ${selectedTime === time
                        ? "bg-[var(--caribbean-current)] text-white"
                        : "bg-white text-[var(--dark-green)] hover:bg-[var(--robin-egg-blue)] hover:text-white"
                      }`}
                  >
                    {time}
                  </motion.button>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* زر التثبيت */}
        <AnimatePresence>
          {selectedDate && selectedTime && !showForm && (
            <motion.button
              key="confirm-btn"
              onClick={() => setShowForm(true)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mt-6 bg-[var(--persian-green)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--dark-green)] transition"
            >
              {language === "en"
                ? "Confirm Appointment"
                : "تأكيد الموعد"}
            </motion.button>
          )}
        </AnimatePresence>

        {/* نموذج البيانات */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              key="form"
              className="mt-6 w-full flex flex-col items-center gap-4 bg-white p-6 
              rounded-xl shadow-md "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[var(--caribbean-current)]">
                {language === "en"
                  ? "Please enter your information"
                  : "الرجاء إدخال معلوماتك"}
              </p>

              <input
                type="text"
                placeholder={
                  language === "en" ? "Full Name" : "الاسم الكامل"
                }
                value={userInfo.name}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 w-[80%] 
                focus:outline-none focus:ring-2 focus:ring-[var(--caribbean-current)]"
              />
              <input
                type="tel"
                placeholder={
                  language === "en" ? "Phone Number" : "رقم الهاتف"
                }
                value={userInfo.phone}
                inputMode="numeric"
                pattern="[0-9]*"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phone: e.target.value })
                }
                className={`border border-gray-300 rounded-lg px-4 py-2 w-[80%] focus:outline-none
                   focus:ring-2 focus:ring-[var(--caribbean-current)] 
                  ${language === "en" ? "text-start" : "text-end"}`}

              />

              <motion.button
                onClick={handleConfirm}
                whileHover={{ scale: 1.05 }}
                className="bg-[var(--persian-green)] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[var(--dark-green)] transition"
              >
                {language === "en"
                  ? "Confirm Appointment"
                  : "تأكيد الموعد"}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default MakeAppointmentSection
