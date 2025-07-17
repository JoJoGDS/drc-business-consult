"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 text-center bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 sm:mb-8 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent drop-shadow">
          À propos de nous
        </h2>
        <div className="space-y-6 text-left max-w-4xl mx-auto">
          <p className="text-[#111418] text-base sm:text-lg md:text-xl leading-relaxed font-medium">
            <span className="bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent font-semibold">
              DRC Business Consult – Simplifier, Connecter, Réussir en RDC.
            </span>
          </p>
          
          <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed">
            Chez DRC Business Consult, nous croyons que la réussite d'un projet – qu'il s'agisse d'un séjour professionnel, d'un investissement ou de l'implantation d'une entreprise – commence par une <span className="text-[#111418] font-medium">bonne orientation, des démarches fluides et un accompagnement de qualité.</span>
          </p>
          
          <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed">
            Nous accompagnons particuliers, entreprises et institutions dans leurs démarches de voyage, d'implantation, de création d'entreprise et de développement d'activités en RDC. Notre approche est fondée sur la connaissance du terrain, la rigueur administrative et un réseau d'experts multidisciplinaires.
          </p>
          
          <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed">
            Qu'il s'agisse d'un séjour professionnel, d'un projet d'investissement ou de la structuration d'un partenariat local, nous vous apportons des solutions concrètes, sécurisées et sur mesure.
          </p>
          
          <p className="text-[#111418] text-base sm:text-lg font-medium mt-6">
            <span className="relative inline-block">
              <span className="relative z-10">Notre mission : simplifier vos démarches, maximiser vos opportunités.</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-[#FFA500]/20 -z-0 transform -rotate-1"></span>
            </span>
          </p>
        </div>
      </div>
    </motion.section>
  )
}
