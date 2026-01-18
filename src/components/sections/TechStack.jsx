import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase, SiFlutter } from "react-icons/si";

const technologies = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "var(--next-color)" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  

];

const TechStack = () => {

  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Our Tech Stack
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Powering your solutions with cutting-edge technologies
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative w-full">
        
        {/* --- Gradient Fades (Left & Right Effects) --- */}
        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 z-10 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none" />

        {/* Moving Track */}
        <motion.div
          className="flex"
          // Animation Logic
          animate={{
            x: ["0%", "-50%"], // 0 සිට -50% දක්වා යනවා (ලිස්ට් එක ඩබල් කරපු නිසා මැදට යද්දී ආයේ මුල පෙනෙනවා)
          }}
          transition={{
            x: {
              repeat: Infinity, // දිගටම යන්න
              repeatType: "loop",
              duration: 25, // තත්පර 25ක් ගන්නවා වටයක් යන්න (වේගය අඩු කරන්න මේ ගාණ වැඩි කරන්න)
              ease: "linear", // ගැස්සෙන්නේ නැතුව එකම වේගයෙන් යන්න
            },
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 md:mx-10 flex flex-col items-center justify-center group cursor-default"
            >
              {/* Icon Circle */}
              <div 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white dark:bg-slate-900 shadow-md border border-slate-200 dark:border-slate-800 flex items-center justify-center text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110"
              >
                 <span 
                    className="transition-colors duration-300 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                    style={{ 
                        color: tech.name === "Next.js" ? undefined : tech.color 
                    }}
                 >
                   {/* Next.js color fix for dark mode using CSS class logic inside span */}
                   <span className={tech.name === "Next.js" ? "text-black dark:text-white" : ""}>
                     {tech.icon}
                   </span>
                 </span>
              </div>
              
              {/* Name (Optional - Hover කළාම පේන්න හදන්නත් පුළුවන්) */}
              <span className="mt-3 text-sm font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;