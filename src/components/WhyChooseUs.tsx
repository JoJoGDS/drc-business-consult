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
    <section id="why" className="px-6 md:px-20 py-12 bg-[#f9fafb]">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#111418] text-2xl font-bold mb-8 text-center"
      >
        Pourquoi nous choisir
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {avantages.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white rounded-lg shadow p-6 text-center"
          >
            <div className="flex justify-center mb-4">{a.icon}</div>
            <h3 className="text-[#111418] font-bold text-lg">{a.title}</h3>
            <p className="text-[#60758a] text-sm mt-2">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
