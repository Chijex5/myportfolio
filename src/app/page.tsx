"use client";
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Send,
  ChevronUp,
  FileText,
  ChevronRight,
  Briefcase,
  Award,
  Code2,
  BookOpen,
} from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
export default function Page() {
  const techStack = [
    {
      name: "React",
      icon: "bx bxl-react",
      color: "#61DAFB",
    },
    {
      name: "Python",
      icon: "bx bxl-python",
      color: "#3776AB",
    },
    {
      name: "Node.js",
      icon: "bx bxl-nodejs",
      color: "#339933",
    },
    {
      name: "SQL",
      icon: "bx bx-server",
      color: "#336791",
    },
    {
      name: "TypeScript",
      icon: "bx bxl-typescript",
      color: "#3178C6",
    },
    {
      name: "Docker",
      icon: "bx bxl-docker",
      color: "#000000",
    },
    {
      name: "Tailwind css",
      icon: "bx bxl-tailwind-css",
      color: "#000000",
    },
    {
      name: "Postgresql",
      icon: "bx bxl-postgresql",
      color: "#000000",
    },
    {
      name: "Git",
      icon: "bx bxl-git",
      color: "#000000",
    },
  ];
  const detailedProjects = [
    {
      title: "D'Footprint",
      challenge: "Streamline custom footwear orders with real-time admin control",
      solution: "Built a full-stack platform using Next.js + Flask",
      tech: [
        "Next.js (ISR)",
        "Tailwind",
        "Python Flask",
        "PostgreSQL",
        "JWT Auth",
      ],
      features: [
        "Admin dashboard for product/order management",
        "Custom design submission with image upload",
        "Order tracking pipeline (Pending → Production → Shipped)",
      ],
      impact: "Reduced order processing time by 40% for client",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fit=crop&w=800&h=500",
      // Placeholder image
      link: "https://dfootprint.vercel.app",
      github: "https://github.com/chijex5/dfootprint",
    },
    {
      title: "UniBooks",
      challenge: "Solve campus book shortages with a digital marketplace",
      solution: "React + Firebase e-commerce platform",
      tech: ["React", "Firebase Auth", "Firestore", "Context API", "Algolia"],
      features: [
        "Role-based access (Student/Admin)",
        "Wishlist sync across devices",
        "Dynamic search with Algolia",
      ],
      impact: "200+ active users during beta testing",
      image:
        "https://images.unsplash.com/photo-1532012197267-da84d127e765?fit=crop&w=800&h=500",
      // Placeholder image
      link: "https://unibooks-3f5h.onrender.com",
      github: "https://github.com/chijex5/test_public",
    },
  ];
  const skills = {
    Frontend: [
      {
        name: "React/Next.js",
        level: 90,
      },
      {
        name: "TypeScript",
        level: 85,
      },
      {
        name: "Tailwind CSS",
        level: 90,
      },
    ],
    Backend: [
      {
        name: "Node.js",
        level: 85,
      },
      {
        name: "Python/Flask",
        level: 80,
      },
      {
        name: "PostgreSQL",
        level: 75,
      },
    ],
    "Tools & DevOps": [
      {
        name: "Git",
        level: 85,
      },
      {
        name: "Docker",
        level: 70,
      },
      {
        name: "AWS",
        level: 65,
      },
    ],
  };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    });
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.5,
        },
      );
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section);
      });
      return () => observer.disconnect();
    }, []);
    return (
      <div className="min-h-screen bg-[#2A2A2A] text-white w-full relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#2DD4BF] text-[#2A2A2A] px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#2DD4BF] origin-left z-50"
          style={{
            scaleX,
          }}
        />
        <header className="fixed top-0 w-full bg-[#2A2A2A]/90 backdrop-blur-sm z-40 px-6 py-4">
          <nav
            className="max-w-6xl mx-auto flex justify-between items-center"
            role="navigation"
          >
            <a
              href="#"
              className="text-2xl font-bold text-[#2DD4BF] focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-[#2A2A2A] rounded-lg"
              aria-label="Home"
            >
              Uzodinma Chijioke
            </a>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`hover:text-[#2DD4BF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-[#2A2A2A] rounded-lg px-2 py-1 ${activeSection === item.toLowerCase() ? "text-[#2DD4BF]" : ""}`}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
            <button
              className="md:hidden p-2 hover:bg-[#3A3A3A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-[#2A2A2A]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
          <motion.div
            initial={false}
            animate={
              isMenuOpen
                ? {
                    height: "auto",
                    opacity: 1,
                  }
                : {
                    height: 0,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.2,
            }}
            className="md:hidden overflow-hidden bg-[#2A2A2A]"
          >
            {["About", "Skills", "Projects", "Experience", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-6 py-2 hover:bg-[#2DD4BF]/10 focus:outline-none focus:bg-[#2DD4BF]/10 ${activeSection === item.toLowerCase() ? "text-[#2DD4BF]" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ),
            )}
          </motion.div>
        </header>
        <main id="main-content" className="pt-20" role="main">
          <section className="min-h-screen flex flex-col items-center justify-center px-6 space-y-16">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="max-w-6xl mx-auto text-center"
            >
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold inline-block perspective-[1000px]">
                  {[
                    "F",
                    "u",
                    "l",
                    "l",
                    "-",
                    "S",
                    "t",
                    "a",
                    "c",
                    "k",
                    " ",
                    "D",
                    "e",
                    "v",
                    "e",
                    "l",
                    "o",
                    "p",
                    "e",
                    "r",
                  ].map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        opacity: 0,
                        rotateX: -90,
                        y: -20,
                      }}
                      animate={{
                        opacity: 1,
                        rotateX: 0,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        y: -5,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      style={{
                        display: "inline-block",
                        transformStyle: "preserve-3d",
                        textShadow: "0 4px 8px rgba(0,0,0,0.2)",
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                  <span className="text-[#2DD4BF]">.</span>
                </h1>
                
              </div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                }}
                className="text-xl md:text-2xl text-gray-400 mb-8"
              >
                Data Alchemist | Pixel-Perfect Creator
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                }}
                className="flex flex-wrap justify-center gap-6 mb-12"
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.1 * index,
                    }}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="w-16 h-16 rounded-xl bg-[#3A3A3A] flex items-center justify-center text-2xl group relative">
                      {/* Animated Icon */}
                      <i
                        className={`${tech.icon} transition-all duration-300 ease-in-out text-white group-hover:text-[#2DD4BF] group-hover:scale-125`}
                      ></i>
                      {/* Highlight Glow Effect */}
                      <span className="absolute inset-0 rounded-xl bg-[#2DD4BF] blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                    </div>
                    <span className="text-sm text-gray-400">{tech.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                }}
                className="flex justify-center space-x-6"
              >
                <a
                  href="https://github.com/chijex5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#2DD4BF] transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/chijioke-uzodinma-34389b267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:text-[#2DD4BF] transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:embroconnect3@gmail.com"
                  className="p-2 hover:text-[#2DD4BF] transition-colors"
                >
                  <Mail size={24} />
                </a>
              </motion.div>
            </motion.div>
          </section>
          <section id="about" className="py-20 px-6">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <div className="w-full aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-[#2DD4BF] rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-gray-400 mb-6">
                  I turn coffee into clean code and data into compelling stories. With extensive experience in both frontend and backend development, I bridge technical expertise with business needs to create impactful solutions.
                </p>

                {/* Interactive CV Preview Component */}
                <div className="group relative inline-block">
                  <div className="flex items-center gap-3 text-[#2DD4BF] cursor-pointer hover:text-[#2DD4BF]/90 transition-colors">
                    <FileText size={20} />
                    <span className="font-medium">Explore My Professional Journey</span>
                    <ChevronRight size={16} className="mt-0.5" />
                  </div>

                  {/* Hover Card */}
                  <div className="hidden group-hover:block absolute top-full left-0 mt-2 w-64 bg-[#2A2A2A] p-4 rounded-lg shadow-xl border border-gray-700">
                    <h3 className="text-sm font-semibold mb-2">Career Snapshot</h3>
                    <ul className="space-y-2 text-xs text-gray-300">
                      <li className="flex items-center gap-2">
                        <Briefcase size={14} />
                        <span>2+ Years Full-Stack Experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Award size={14} />
                        <span>Wema Bank Best Intern 2023</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Code2 size={14} />
                        <span>100+ Graphics Projects Delivered</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen size={14} />
                        <span>B.Sc Statistics in Progress</span>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          </section>
          <section id="skills" className="py-20 px-6 bg-[#333333]">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items], index) => (
                  <motion.div
                    key={category}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="bg-[#3A3A3A] p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-bold mb-6">{category}</h3>
                    <div className="space-y-4">
                      {items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span>{skill.name}</span>
                            <span className="text-[#2DD4BF]">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                            <motion.div
                              initial={{
                                width: 0,
                              }}
                              whileInView={{
                                width: `${skill.level}%`,
                              }}
                              transition={{
                                duration: 1,
                                ease: "easeOut",
                              }}
                              viewport={{
                                once: true,
                              }}
                              className="h-full bg-[#2DD4BF]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
          <section id="projects" className="py-20 px-6">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-12 text-center">
                Featured Projects
              </h2>
              <div className="space-y-20">
                {detailedProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div
                      className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}
                    >
                      <h3 className="text-2xl font-bold text-[#2DD4BF]">
                        {project.title}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            Challenge
                          </h4>
                          <p className="text-gray-400">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Solution</h4>
                          <p className="text-gray-400">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="text-sm px-3 py-1 bg-[#2DD4BF]/10 text-[#2DD4BF] rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            Key Features
                          </h4>
                          <ul className="list-disc list-inside text-gray-400 space-y-1">
                            {project.features.map((feature) => (
                              <li key={feature}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">Impact</h4>
                          <p className="text-gray-400">{project.impact}</p>
                        </div>
                        <div className="flex space-x-4 pt-2">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#2DD4BF] text-[#2A2A2A] px-4 py-2 rounded-lg font-medium hover:bg-[#2DD4BF]/90 transition-colors"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#3A3A3A] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#3A3A3A]/80 transition-colors"
                          >
                            <Github size={18} />
                            View Code
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`relative group ${index % 2 === 1 ? "md:order-1" : ""}`}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#2DD4BF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="absolute inset-0 border-2 border-[#2DD4BF] rounded-xl transform translate-x-4 translate-y-4 -z-10"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>
          <section id="contact" className="py-20 px-6">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-12 text-center">
                Get In Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Let&apos;s Talk</h3>
                  <p className="text-gray-400">
                    Have a project in mind? Looking to collaborate? Feel free to
                    reach out.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="mailto:contact@example.com"
                      className="flex items-center gap-3 text-gray-400 hover:text-[#2DD4BF]"
                    >
                      <Mail size={20} />
                      embroconnect3@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/chijioke-uzodinma-34389b267/"
                      className="flex items-center gap-3 text-gray-400 hover:text-[#2DD4BF]"
                    >
                      <Linkedin size={20} />
                      LinkedIn Profile
                    </a>
                    <a
                      href="https://github.com/chijex5"
                      className="flex items-center gap-3 text-gray-400 hover:text-[#2DD4BF]"
                    >
                      <Github size={20} />
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-[#3A3A3A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-[#3A3A3A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#3A3A3A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]"
                  ></textarea>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#2DD4BF] text-[#2A2A2A] px-6 py-3 rounded-lg font-medium hover:bg-[#2DD4BF]/90 transition-colors"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </section>
        </main>
        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: scrollYProgress.get() > 0.2 ? 1 : 0,
          }}
          className="fixed bottom-8 right-8 p-3 bg-[#2DD4BF] text-[#2A2A2A] rounded-full shadow-lg hover:bg-[#2DD4BF]/90 focus:outline-none focus:ring-2 focus:ring-[#2DD4BF] focus:ring-offset-2 focus:ring-offset-[#2A2A2A]"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </motion.button>
      </div>
    );
  }

