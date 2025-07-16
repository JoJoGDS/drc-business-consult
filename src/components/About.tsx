"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      className="px-6 md:px-20 py-12 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-[#111418] text-2xl font-bold leading-tight mb-4">À propos de nous</h2>
      <p className="text-[#111418] text-base leading-relaxed max-w-3xl mx-auto">
        DRC Business Consult simplifie vos démarches en République Démocratique du Congo. 
        Nous accompagnons les voyageurs, investisseurs et entrepreneurs dans la préparation, 
        la création d’entreprise, l’implantation et le développement d’activités en RDC. 
        Grâce à notre expertise locale, notre réseau d’experts et notre maîtrise des réalités 
        administratives, nous transformons la complexité en solutions concrètes.
      </p>
    </motion.section>
  )
}
