import { IoIosArrowRoundForward } from "react-icons/io";
import { NavBar } from "./NavBar";

export const Hero = () => {
  return (
    <section className="bg-light overflow-hidden">
      <NavBar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* build advertisment */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <h1 className="text-3xl lg:text-5xl font-bold !leading-snug">
              Lets Learn to Build a{" "}
              <span className="text-secondary">Website </span> for your business
            </h1>

            <div className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 group">
                Get started
                <IoIosArrowRoundForward className="text-xl group-hover: translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </div>
          </div>
        </div>
        {/* build image */}
        <div className="flex justify-center items-center">
          <img
            src="https://raw.githubusercontent.com/dilshad-ahmed/thecodingjourney/main/src/assets/hero.png"
            className="w-[400px] xl:[600px] relative z-10 drop-shadow"
            alt=""
          />
    
        </div>
      </div>
    </section>
  );
};
