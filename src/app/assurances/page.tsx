"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AssurancesPage() {
  return (
    <>
      {/* This div creates space for the fixed header */}
      <div className="min-h-[58px] md:min-h-[64px]" />

      <section className="relative max-w-4xl mx-auto px-4 py-12 sm:py-16 font-body">
        {/* Blurred background shapes for depth */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#FFA500]/15 rounded-full blur-3xl z-0 animate-pulse-slow" aria-hidden="true"></div>
        <div className="absolute -bottom-32 right-0 w-80 h-80 bg-[#F05E0E]/10 rounded-full blur-3xl z-0 animate-pulse-slower" aria-hidden="true"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-2 sm:mb-3 leading-tight sm:leading-snug tracking-tight drop-shadow-sm bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent"
        >
          PRESENTATION DE L&apos;OPTION <span className="block sm:inline">Assurances</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 mt-1 leading-tight bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent max-w-3xl"
        >
          Un marché en forte croissance, structuré autour de nouvelles opportunités
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#60758a] text-sm sm:text-base md:text-lg mb-8 font-body leading-relaxed"
        >
          Depuis la libéralisation du marché des assurances en RDC en 2015, le secteur connaît une transformation profonde, marquée par l’arrivée d’acteurs privés, une meilleure régulation et une demande croissante en couverture des risques liée à l’essor des activités économiques (mines, transport, énergie, banque…). Le marché congolais, encore largement sous-assuré, constitue un terrain d’investissement à fort potentiel.
        </motion.p>

        <div className="space-y-10">
          {/* Opportunités d’affaires */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3 font-heading">
              Opportunités d’affaires
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#111418] font-body">
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Création de compagnies d’assurance vie ou non-vie</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Développement de courtiers ou agences de distribution</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Assurance spécialisée : risques industriels, santé, transport, responsabilité civile, etc.</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Micro-assurance et produits pour les zones rurales</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Digitalisation des services d’assurance (applications, plateformes, assurance mobile)</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Représentation locale de compagnies étrangères / partenariats</li>
            </ul>
          </motion.div>

          {/* Quelques chiffres clés */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3 font-heading">
              Quelques chiffres clés
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418] font-body">
              <li>Taux de pénétration de l’assurance : &lt; 2 % de la population</li>
              <li>Plus de 10 compagnies agréées depuis la réforme</li>
              <li>Croissance annuelle estimée à 20–25 % dans les 5 prochaines années</li>
              <li>Demande forte dans les secteurs minier, transport, santé, construction</li>
            </ul>
          </motion.div>
          {/* Pourquoi investir ? */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3 font-heading">
              Pourquoi investir ?
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418] font-body">
              <li>Marché vierge avec forte marge de progression</li>
              <li>Cadre juridique renforcé par la création de l&#39;ARCA (Autorité de Régulation et de Contrôle des Assurances)</li>
              <li>Obligation légale d’assurance pour plusieurs secteurs (véhicules, travaux publics, vie, etc.)</li>
              <li>Besoin croissant des entreprises pour se conformer aux normes de gestion des risques</li>
            </ul>
          </motion.div>
          {/* Notre accompagnement */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3 font-heading">
              Notre accompagnement
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418] font-body">
              <li>Création de sociétés d’assurance ou de courtage</li>
              <li>Agrément auprès de l’ARCA et constitution de dossier conforme</li>
              <li>Rédaction de contrats types (polices, conventions de réassurance, partenariats)</li>
              <li>Appui à la digitalisation des produits d’assurance</li>
              <li>Mise en relation avec des partenaires techniques, assureurs ou réassureurs</li>
              <li>Support juridique et fiscal dans l’implantation du modèle économique</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-white rounded-xl shadow-xl border border-[#f0f2f5] p-6 sm:p-8 mt-12 text-center font-body">
          <Link href="/#contact" className="w-full sm:w-auto inline-block rounded-full bg-[#F05E0E] text-white font-bold py-3 px-8 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">
            Cliquez ici pour recevoir un accompagnement personnalisé
          </Link>
        </motion.div>
      </section>
    </>
  );
}
