"use client"
import { motion } from "framer-motion"

const services = [
  {
    title: "Stratégie & Croissance",
    description: "Nous aidons les entreprises à définir et à mettre en œuvre des stratégies gagnantes pour leur croissance.",
    image: "/images/strategie-croissance.jpg",
  },
  {
    title: "Transformation digitale",
    description: "Accompagnement dans la digitalisation des processus métiers pour améliorer l’efficacité et l’innovation.",
    image: "/images/transformation-digitale.jpg",
  },
  {
    title: "Gestion de projet",
    description: "Pilotage de projets complexes pour garantir leur succès, du cadrage à la livraison.",
    image: "/images/gestion-projet.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-[#f9fafb]">
      {/* Blurred shape for depth */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#FFA500]/20 rounded-full blur-3xl z-0 animate-pulse-slow" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-3 sm:mb-4 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent drop-shadow">
            Nos Services
          </h2>
          <p className="text-[#4b5563] text-sm sm:text-base max-w-3xl mx-auto">
            Des solutions complètes adaptées à vos besoins en République Démocratique du Congo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-[#f0f2f5] overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-40 sm:h-48 md:h-56 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#FFA500]/10 to-[#F05E0E]/10 flex items-center justify-center">
                    <span className="text-4xl text-[#FFA500]/30">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-[#111827] font-heading font-bold text-lg sm:text-xl mb-2 group-hover:text-[#F05E0E] transition-colors duration-200">
                  {s.title}
                </h3>
                <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed mb-4 flex-1">
                  {s.description}
                </p>
                
                <button 
                  className="mt-auto w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm sm:text-base font-heading font-semibold rounded-full text-white bg-[#F05E0E] hover:bg-[#e04b00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFA500]/50 transition-all duration-200 group/button"
                >
                  En savoir plus
                  <svg className="w-4 h-4 ml-2 -mr-1 group-hover/button:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
