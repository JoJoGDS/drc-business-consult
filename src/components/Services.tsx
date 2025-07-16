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
    <section id="visit" className="px-4 sm:px-6 md:px-20 py-8 sm:py-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[#111418] text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center"
      >
        Nos Services
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-white shadow rounded-lg overflow-hidden flex flex-col group relative"
          >
            <div className="h-32 sm:h-40 md:h-48 bg-gray-100 flex items-center justify-center text-gray-300 text-4xl relative overflow-hidden">
  {s.image ? (
    <img
      src={s.image}
      alt={s.title}
      className="w-full h-full object-cover object-center"
      loading="lazy"
    />
  ) : null}
  {/* Gradient overlay on hover */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-[#FFA500] to-[#F05E0E] rounded-t-lg"></div>
</div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-[#111418] font-bold text-base sm:text-lg">{s.title}</h3>
              <p className="text-[#60758a] text-xs sm:text-sm mt-2 flex-1">{s.description}</p>
              {/* Example button using gradient */}
              <button className="mt-4 px-4 py-2 rounded bg-gradient-to-r from-[#FFA500] to-[#F05E0E] text-white font-semibold shadow hover:brightness-110 transition-all duration-300 self-start">En savoir plus</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
