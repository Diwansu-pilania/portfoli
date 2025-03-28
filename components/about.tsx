"use client"

import { motion } from "framer-motion"
import { Code, GraduationCap, Award, Briefcase } from "lucide-react"

export default function About() {
  const skills = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-Learn",
    "OpenCV",
    "Pandas",
    "NumPy",
    "Keras",
    "Deep Learning",
    "NLP",
    "Data Analysis",
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-400">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I am an AI & Machine Learning enthusiast with a passion for building intelligent solutions that solve
              real-world problems. My journey in the world of artificial intelligence began during learning about basic machine
              learning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a strong foundation in mathematics and computer science, I specialize in developing machine learning
              models, particularly in the areas of computer vision and natural language processing. I am constantly
              exploring new technologies and methodologies to enhance my skills and create more efficient AI solutions.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium">Education</h4>
                  <p className="text-gray-400">BE in Information Technology, 2024-Present</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/10 text-purple-400">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium">Certifications</h4>
                  <p className="text-gray-400">Deep Learning Specialization, Coursera</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-purple-400">Technical Skills</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mt-1">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-medium">Tech Stack</h4>
                  <motion.div
                    className="flex flex-wrap gap-2 mt-3"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        variants={item}
                        className="px-3 py-1 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-purple-500/30 rounded-full text-sm font-medium text-gray-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <h4 className="text-xl font-medium">Areas of Expertise</h4>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Machine Learning</span>
                    <span className="text-gray-400">60%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Deep Learning</span>
                    <span className="text-gray-400">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">Natural Language Processing</span>
                    <span className="text-gray-400">35%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "35%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

