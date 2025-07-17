"use client"
import { motion } from "framer-motion"

const avantages = [
  {
    title: "Expertise locale",
    desc: "Nous connaissons en profondeur les réalités du terrain et les exigences légales.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#0c7ff2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Gain de temps et sécurité",
    desc: "Nous simplifions vos démarches pour une expérience sereine et productive.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#0c7ff2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Réseau fiable",
    desc: "Nous vous connectons aux meilleurs prestataires et partenaires locaux.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#0c7ff2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a4 4 0 00-4-4h-1m-4 6v-2a4 4 0 00-4-4H8m4 6H6a4 4 0 01-4-4v-1m16-4V7a4 4 0 00-4-4h-1m-4 6V5a4 4 0 00-4-4H8m4 6h.01" />
      </svg>
    )
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#f8f9fa] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-sm sm:text-base font-medium text-[#F05E0E] bg-[#FEE9D7] px-4 py-1.5 rounded-full mb-3 sm:mb-4">
            Notre valeur ajoutée
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-3 sm:mb-4 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent drop-shadow">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-[#4b5563] max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Notre expertise et notre engagement font la différence pour votre réussite en RDC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {avantages.map((reason, index) => (
            <motion.div
              key={index}
              className="group bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
            >
              {/* Animated background element */}
              <div className="absolute -right-10 -top-10 w-36 h-36 rounded-full bg-[#FFA500]/5 group-hover:bg-[#F05E0E]/10 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-white text-2xl rounded-xl mb-5 sm:mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, #FFA500 0%, #F05E0E 100%)',
                    boxShadow: '0 4px 15px -3px rgba(240, 94, 14, 0.3)'
                  }}
                >
                  {reason.icon}
                </div>
                
                <h3 className="text-lg sm:text-xl font-heading font-bold text-[#111827] mb-3 sm:mb-4 group-hover:text-[#F05E0E] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed">
                  {reason.desc}
                </p>
                
                <div className="mt-5 sm:mt-6 flex items-center text-[#F05E0E] font-medium text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                  En savoir plus
                  <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
