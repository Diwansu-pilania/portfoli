"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, ChevronRight } from "lucide-react"

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Handwritten Digit Recognition",
      description:
        "A deep learning model using Convolutional Neural Networks to classify handwritten digits with high accuracy.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-26%20150818-YN7WTSn79sYlEBSjEhTSDMA9tatQYS.png",
      category: "deep-learning",
      technologies: ["Python", "TensorFlow", "CNN", "MNIST"],
      githubLink: "https://github.com/Diwansu-pilania/DIGIT-pridiction",
      demoLink: "https://kaggle.com/",
      features: [
        "Implemented a CNN architecture with multiple convolutional layers",
        "Achieved 99.2% accuracy on the MNIST test dataset",
        "Optimized model size for mobile deployment",
        "Added data augmentation to improve model robustness",
      ],
    },{
      id: 4,
      title: "No₂ Prediction Machine Learning Model",
      description: 
        "A machine learning model for predicting NO₂ levels using air quality data. The model leverages regression techniques and feature engineering to provide accurate predictions.",
      image: 
        "https://i.postimg.cc/yxGST2Ky/Screenshot-2025-03-26-233729.png", 
      category: "machine-learning",
      technologies: ["Python", "Scikit-learn", "Pandas", "Regression", "Flask"],
      githubLink: "https://github.com/Diwansu-pilania/streamlit-ml-app/blob/main/trainit.ipynb",
      demoLink: "https://bare-truthful-zzyzx.anvil.app/",
      features: [
        "Predicts NO₂ concentration based on real-time environmental data",
        "Uses feature selection and preprocessing for improved accuracy",
        "Implements regression algorithms for precise estimations",
        "Deployed as a web app for user-friendly interaction"
      ],
    },
    {
      id: 2,
      title: "Hybrid Prediction Model",
      description:
        "A machine learning model that combines multiple algorithms to enhance predictive accuracy for financial forecasting.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20212926-SLwS8MaBrUWnCmQLed6RIhQHtKZY2P.png",
      category: "machine-learning",
      technologies: ["Python", "Scikit-Learn", "Pandas", "XGBoost"],
      githubLink: "https://github.com/Diwansu-pilania/hybrid_predicton",
      demoLink: "https://kaggle.com/",
      features: [
        "Ensemble of Random Forest, XGBoost, and LSTM models",
        "Feature engineering pipeline for time-series data",
        "Cross-validation framework for robust evaluation",
        "Interactive visualization dashboard for results",
      ],
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "deep-learning", label: "Deep Learning" },
    { id: "machine-learning", label: "Machine Learning" },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-black/50 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of AI and machine learning projects, showcasing my skills and expertise in building
            intelligent solutions.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      className="h-[500px] perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden border border-purple-500/20 bg-zinc-900/80">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70" />
          </div>

          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="text-gray-400 line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 text-xs font-medium bg-blue-900/30 text-blue-300 rounded-md">
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center text-sm text-purple-300">
              <span>View details</span>
              <ChevronRight size={16} className="ml-1" />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl overflow-hidden border border-purple-500/20 bg-zinc-900/90 p-6">
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>

            <div className="flex-grow space-y-4">
              <h4 className="text-blue-400 font-medium">Key Features:</h4>
              <ul className="space-y-2 text-gray-300">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-between mt-6">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                  <span>Code</span>
                </Link>
              )}

              {project.demoLink && (
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </Link>
              )}
            </div>

            <div className="pt-4 text-center text-sm text-purple-300">
              <span>Click to flip back</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

