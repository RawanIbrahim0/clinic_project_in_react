import React from "react";

const Home = () => {
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
      <div>
        <div className="water-drop">
         
        </div>
      </div>
    </div>
  );
};

export default Home;
