"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative flex justify-center w-full px-2 py-8 sm:py-14 md:py-20 bg-white">
  <div
    className="relative w-full max-w-4xl md:max-w-5xl rounded-xl overflow-hidden shadow-xl mx-auto flex flex-col items-center justify-center text-center min-h-[380px] md:min-h-[480px]"
    style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('/images/kinshasa-banner.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
      {/* Tagline above headline */}
      <motion.span
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="block text-xs uppercase tracking-[0.2em] font-semibold mb-2 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent"
      >
        Votre partenaire en RDC
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="text-white text-4xl md:text-5xl font-black leading-tight drop-shadow-lg"
      >
        Simplifier, Connecter, <span className="bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent">Réussir</span> en RDC
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="mt-4 text-white text-base md:text-lg"
      >
        Votre porte d’entrée stratégique en République Démocratique du Congo
      </motion.p>

      <motion.div
        className="mt-8 flex flex-wrap gap-3 justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="h-12 px-6 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] text-white font-bold rounded-lg shadow-lg hover:brightness-110 transition-all duration-300"
        >
          Découvrir nos services
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="h-12 px-6 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] text-white font-bold rounded-lg shadow-lg hover:brightness-110 transition-all duration-300"
        >
          Prendre rendez-vous
        </motion.button>
      </motion.div>
    </div>
</section>
  )
}
