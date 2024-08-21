import { IoIosArrowRoundForward } from "react-icons/io";
import { NavBar } from "./NavBar";
import { animate, motion } from "framer-motion";


export const FadeUp = (delay:number) => {
    return {
      initial: {
        opacity: 0,
        y: 50,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          duration: 0.5,
          delay: delay,
          ease: "easeInOut",
        },
      },
    };
  };

export const Hero = () => {
  return (
    <section className="bg-light overflow-hidden">
      <NavBar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
        {/* build advertisment */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
          <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate" className="text-3xl lg:text-5xl font-bold !leading-snug">
              Lets Learn to Build a{" "}
              <span className="text-secondary">Website </span> for your business
            </motion.h1>

            <motion.div
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2 group">
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>
        {/* build image */}
        <div className="flex justify-center items-center">
        <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src="https://raw.githubusercontent.com/dilshad-ahmed/thecodingjourney/main/src/assets/hero.png"
            className="w-[400px] xl:[600px] relative z-10 drop-shadow"
            alt=""
          />
    
        </div>
      </div>
    </section>
  );
};
