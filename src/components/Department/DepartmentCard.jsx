
const DepartmentCard = ({ name, icon }) => {
  return (
    <div
      className="
    flex flex-col items-center justify-between
    bg-white rounded-2xl 
    shadow-[0_4px_20px_rgba(64,224,208,0.6)] 
    hover:shadow-[0_6px_25px_rgba(64,224,208,0.8)]
    hover:-translate-y-1 transition-all duration-200
    w-[18%] h-[350px] cursor-pointer
  "
    >

      <img src={icon} alt={name} className="rounded-t-2xl w-[100%] h-[80%] mb-3" />
      <h3 className="text-2xl font-semibold text-[var(--caribbean-current)] text-center pb-7">
        {name}
      </h3>
    </div>
  )
}

export default DepartmentCard
