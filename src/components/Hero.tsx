"use client"
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative flex justify-center w-full px-4 py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div
        className="relative w-full max-w-4xl xl:max-w-6xl rounded-xl overflow-hidden shadow-xl mx-auto flex flex-col items-center justify-center text-center min-h-[420px] sm:min-h-[480px] md:min-h-[520px] lg:min-h-[600px]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.65)), url('/images/kinshasa-banner.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Blurred color shape for depth */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FFA500]/30 rounded-full blur-3xl z-0 animate-pulse-slow" aria-hidden="true"></div>
        <div className="absolute -bottom-24 right-0 w-80 h-80 bg-[#F05E0E]/20 rounded-full blur-3xl z-0 animate-pulse-slower" aria-hidden="true"></div>
        
        {/* Tagline above headline */}
        <motion.span
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="block text-xs sm:text-sm uppercase tracking-[0.2em] font-heading font-semibold mb-2 sm:mb-3 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent px-4"
        >
          Votre partenaire en RDC
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-tight drop-shadow-lg px-4 sm:px-6"
        >
          <span className="block sm:inline">Simplifier, Connecter,</span>{' '}
          <span className="bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent">Réussir</span> en RDC
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-4 sm:mt-6 text-white text-sm sm:text-base md:text-lg px-6 max-w-2xl mx-auto"
        >
          Votre porte d'entrée stratégique en République Démocratique du Congo
        </motion.p>

      <motion.div
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 justify-center z-10 w-full px-4 sm:px-6"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        {/* Main CTA - solid orange, premium, animated arrow */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="h-12 sm:h-14 px-5 sm:px-7 bg-[#F05E0E] text-white font-heading font-bold rounded-full shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg hover:shadow-2xl hover:bg-[#ffa500] focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all duration-200 group w-full sm:w-auto"
        >
          Découvrir nos services
          <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" className="hidden sm:block">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
            </svg>
          </span>
        </motion.button>
        {/* Secondary CTA - outlined */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="h-12 sm:h-14 px-5 sm:px-7 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-heading font-bold rounded-full shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg hover:shadow-xl hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-200 w-full sm:w-auto"
        >
          Prendre rendez-vous
        </motion.button>
      </motion.div>
      {/* Animated arrow down */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="mt-10 flex justify-center z-10"
        aria-hidden="true"
      >
        <svg width="32" height="32" fill="none" stroke="#FFA500" strokeWidth="2.5" viewBox="0 0 24 24" className="animate-bounce-slow">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-5-5m5 5l5-5" />
        </svg>
      </motion.div>
    </div>
</section>
  )
}
