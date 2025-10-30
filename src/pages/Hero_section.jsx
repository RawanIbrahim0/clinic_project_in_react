import ImageSlider from "../components/ImageSlider";
import back from "../assets/back.png"

const Hero_section = () => {
  return (
     <div className="flex justify-between items-center pl-10 pr-10">
      <div className="flex flex-col justify-center items-start p-5 text-start gap-5 h-[100vh]">
        <h1 className="text-3xl font-bold text-[var(--dark-green)]">
          Transforming Your Health Journey
        </h1>
        <p className="text-2xl text-[var(--dark-green)]">
          Intuitive Booking. Expert Care. Your Future Expert Care.
        </p>
        <p className="text-2xl text-[var(--dark-green)]">
          Intuitive Booking. Expert Care. Your Future Expert{" "}
        </p>
        <p className="text-2xl text-[var(--dark-green)]">
          Intuitive Booking. Expert Care. Your Future.
        </p>
        <button
          className="mt-5 bg-[var(--caribbean-current)] text-white p-3 rounded-full 
        hover:-translate-y-1 font-medium duration-300 hover:bg-[var(--robin-egg-blue)] text-xl"
        >
          Book Your Visit
        </button>
      </div>

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
