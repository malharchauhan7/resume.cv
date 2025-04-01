import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaDownload,
} from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import Loading from "../components/Loading";
import { AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a minimum loading time for smooth transition
    const minimumLoadingTime = 800;
    const startTime = Date.now();

    if (document.readyState === "complete") {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);

      setTimeout(() => setIsLoading(false), remainingTime);
    } else {
      window.addEventListener("load", () => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);

        setTimeout(() => setIsLoading(false), remainingTime);
      });
    }
  }, []);

  const resumeData = {
    name: "Malhar Chauhan",
    title: "Full Stack Developer",
    location: "Ahmedabad India",
    email: "malharchauhan02@gmail.com",
    about:
      "Final-year Computer Engineering student with a strong foundation in software development and web technologies.",
    workExperience: [
      {
        title: "Python Developer Intern",
        company: "Grownited Private Limited",
        duration: "Jan 2025 - Present",
        description:
          "Developing and optimizing web applications using React, FastAPI, and MongoDB.",
        achievements: [
          "Built a full-stack expense management application (ExpenseMate)",
          "Designed and implemented efficient FastAPI endpoints",
        ],
      },
      {
        title: "Summer Intern",
        company: "Tatvasoft",
        duration: "June 2024 - July 2024",
        description:
          "Completed a summer internship with consistency, hard work, and accountability in all tasks.",
        achievements: [
          "Accomplished the Virtual Community Support Project successfully.",
          "Developed various APIs for different entities to perform CRUD operations on a database.",
        ],
      },
    ],
    projects: {
      featured: [
        {
          title: "ExpenseMate",
          description:
            "A full-stack expense tracking application built with React and FastAPI",
          github: "https://github.com/malharchauhan7/Expense_Tracker",
          // demo: "https://expensemate.demo.com",
          image: "https://i.ibb.co/nsxNMdtH/expensemate.png",
          technologies: ["React", "FastAPI", "MongoDB", "TailwindCSS"],
          highlights: [
            "Implemented user authentication with JWT",
            "Built RESTful APIs for expense management",
            "Designed responsive UI with Tailwind CSS",
          ],
        },
        {
          title: "Ziply - URL Shortner",
          description:
            "A modern URL shortening service built with the MERN stack",
          github: "https://github.com/malharchauhan7/Ziply",
          // demo: "https://github.com/malharchauhan7/Ziply",
          technologies: ["Node.js", "Express", "MongoDB", "React"],
          highlights: [
            "Developed Click Analytics Feature",
            "Copy to clipboard Feature",
            "Responsive Design",
          ],
        },
        {
          title: "Personal Website",
          description:
            "I redesign my personal website and added blogs and more projects",

          demo: "https://malhar.vercel.app/",
          image: "https://i.ibb.co/nsxNMdtH/expensemate.png",
          technologies: ["React", "Framer-motion", "Vercel", "TailwindCSS"],
          highlights: ["Designed responsive UI with Tailwind CSS"],
        },
      ],
    },
    skills: {
      technical: [
        "Python",
        "JavaScript",
        "React",
        "Node.js",
        "ExpressJS",
        "MongoDB",
        "FastAPI",
        "SQL",
        "Tailwind CSS",
        "HTML & CSS",
        "Git & GitHub",
        "Vercel",
        "PostgreSQL",
      ],
      soft: ["Communication", "Problem Solving"],
    },
    social: {
      github: "https://github.com/malharchauhan7",
      linkedin:
        "https://www.linkedin.com/in/malhar-chauhan-539100238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Fmalharportfolio.vercel.app%2F",
      twitter: "https://x.com/Malhar_7?t=AOSeo52_MVYwdtSzNqfl2A&s=09",
      Portfolio: "https://malhar.vercel.app/",
    },
  };

  const Section = ({ title, children }) => (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-medium mb-8 pb-2 border-b border-neutral-800">
        {title}
      </h2>
      {children}
    </motion.section>
  );

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loading key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.5 },
          }}
          className="flex flex-col items-center min-h-screen p-4 sm:p-6 md:py-16 bg-neutral-900 text-neutral-200"
        >
          <article className="w-full max-w-[95%] md:max-w-2xl mx-auto">
            <header className="text-center mb-12 md:mb-20 mt-4 md:mt-5">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                {resumeData.name}
              </h1>
              <p className="text-xl md:text-2xl text-neutral-400 mb-3 md:mb-4">
                {resumeData.title}
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-neutral-500 mb-4 md:mb-6">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="hover:text-neutral-300 transition-colors"
                >
                  {resumeData.email}
                </a>
                <span className="hidden sm:block">•</span>
                <span>{resumeData.location}</span>
              </div>
              <p className="text-neutral-400 max-w-2xl mx-auto leading-relaxed text-base md:text-lg px-2">
                {resumeData.about}
              </p>
            </header>

            <Section title="Experience">
              {resumeData.workExperience.map((exp, index) => (
                <div key={index} className="mb-8 md:mb-10 last:mb-0">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0 mb-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-medium text-neutral-200">
                        {exp.title}
                      </h3>
                      <p className="text-neutral-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-neutral-500 bg-neutral-800/50 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-neutral-300 mt-2 mb-3 leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-neutral-400">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Section>

            <Section title="Projects">
              {resumeData.projects.featured.map((project, index) => (
                <div
                  key={index}
                  className="mb-8 md:mb-12 last:mb-0 py-4 md:py-6
                    border-b border-neutral-800/50
                    transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3 mb-4">
                    <h3 className="text-lg md:text-xl font-medium text-neutral-200">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
                          title="View Source Code"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
                          title="View Live Demo"
                        >
                          <TbExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-neutral-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-neutral-800/50 text-neutral-300 px-3 py-1 rounded-full text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Section>

            <Section title="Skills">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-base md:text-lg text-neutral-300 mb-3 md:mb-4">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {resumeData.skills.technical.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-neutral-800/50 text-neutral-300 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Section>

            <Section title="Contact">
              <div className="space-y-6 md:space-y-8">
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                  {Object.entries(resumeData.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg 
                        bg-neutral-800/20 hover:bg-neutral-700/30 
                        border border-neutral-700/50
                        transition-all duration-200 text-xs md:text-sm
                        transform hover:-translate-y-0.5"
                      title={`Visit ${platform}`}
                    >
                      {platform === "github" && (
                        <FaGithub className="w-4 h-4" />
                      )}
                      {platform === "linkedin" && (
                        <FaLinkedin className="w-4 h-4" />
                      )}
                      {platform === "twitter" && (
                        <FaTwitter className="w-4 h-4" />
                      )}
                      {platform === "website" && (
                        <FaGlobe className="w-4 h-4" />
                      )}
                      <span className="capitalize">{platform}</span>
                    </a>
                  ))}
                </div>

                <div className="flex justify-center">
                  <motion.a
                    href="https://drive.google.com/uc?export=download&id=1g9vVpa0QTTOb4a7X_96FDsJT1lAgPcBk"
                    className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm
                      rounded-md bg-neutral-200/90 text-neutral-900 
                      hover:bg-neutral-200 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaDownload className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    <span className="font-medium">Download CV</span>
                  </motion.a>
                </div>
              </div>
            </Section>
          </article>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Resume;
