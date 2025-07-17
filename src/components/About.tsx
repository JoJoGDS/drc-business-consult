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
      <strong>DRC Business Consult – Simplifier, Connecter, Réussir en RDC.</strong>
Chez DRC Business Consult, nous croyons que la réussite d’un projet – qu’il s’agisse d’un séjour professionnel, d’un investissement ou de l’implantation d’une entreprise – commence par une <strong>bonne orientation, des démarches fluides et un accompagnement de qualité.</strong>
Nous accompagnons particuliers, entreprises et institutions dans leurs démarches de voyage, d’implantation, de création d’entreprise et de développement d’activités en RDC.
Notre approche est fondée sur la connaissance du terrain, la rigueur administrative et un réseau d’experts multidisciplinaires.
Qu’il s’agisse d’un séjour professionnel, d’un projet d’investissement ou de la structuration d’un partenariat local, nous vous apportons des solutions concrètes, sécurisées et sur mesure. 
<strong>Notre mission : simplifier vos démarches, maximiser vos opportunités.</strong>
      </p>
    </motion.section>
  )
}
