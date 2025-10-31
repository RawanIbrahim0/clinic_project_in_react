
const AboutCard = ({ title, description }) => {
  return (
    <div className="
      bg-[var(--timberwolf)] p-6 rounded-lg 
      transform transition-all duration-300 ease-in-out
      shadow-[0_4px_20px_rgba(64,224,208,0.6)] 
      hover:shadow-[0_6px_25px_rgba(64,224,208,0.8)]
      hover:-translate-y-1 transition-all duration-200
      hover:scale-105 hover:bg-[var(--persian-green)]
      cursor-pointer
      text-[var(--black)]
      hover:text-[var(--timberwolf)]
      hover:font-bold
    ">
      <h3 className="text-2xl mb-4 text-[var(--dark-green)]">
        {title}
      </h3>
      {description && (
        <p className="">
          {description}
        </p>
      )}

      {title === "OUR VALUES" && (
        <ul className="list-disc list-inside space-y-2">
          <li>Innovation, Community</li>
          <li>Quality</li>
          <li>Accessibility</li>
        </ul>
      )}
    </div>
  );
};

export default AboutCard;