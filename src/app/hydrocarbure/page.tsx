"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HydrocarburePage() {
  return (
    <>
      {/* This div creates space for the fixed header */}
      <div className="min-h-[58px] md:min-h-[64px]" />

      <section className="relative max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Blurred background shapes for depth */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#FFA500]/15 rounded-full blur-3xl z-0 animate-pulse-slow" aria-hidden="true"></div>
        <div className="absolute -bottom-32 right-0 w-80 h-80 bg-[#F05E0E]/10 rounded-full blur-3xl z-0 animate-pulse-slower" aria-hidden="true"></div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-2 sm:mb-3 leading-tight sm:leading-snug tracking-tight drop-shadow-sm bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent"
        >
          PRESENTATION DE L&apos;OPTION <span className="block sm:inline">Hydrocarbures</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 mt-1 leading-tight bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent max-w-3xl"
        >
          Un marché en pleine structuration, riche en perspectives
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#60758a] text-sm sm:text-base md:text-lg mb-8 font-body leading-relaxed"
        >
          Longtemps sous-exploité, le secteur des hydrocarbures en République Démocratique du Congo représente aujourd’hui un axe stratégique de diversification économique. Avec d&apos;importantes réserves prouvées et une volonté politique d&apos;ouverture aux investisseurs privés, la RDC attire un intérêt croissant dans l’exploration, la production et la distribution pétrolière et gazière.
        </motion.p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Opportunités d’affaires */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Opportunités d’affaires
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#111418] font-body">
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Exploration et exploitation de blocs pétroliers onshore et offshore</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Distribution et commercialisation de produits pétroliers (stations-service, stockage, transport)</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Développement d’infrastructures (dépôts, pipelines, terminaux)</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Raffinage local et mini-raffineries</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Projets gaziers (valorisation du gaz associé, GPL, gaz naturel liquéfié)</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Audit environnemental et services spécialisés (forage, inspection, etc.)</li>
            </ul>
          </motion.div>

          {/* Quelques chiffres clés */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Quelques chiffres clés
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Plus de 30 blocs pétroliers identifiés, dont plusieurs ouverts à l’appel d’offres</li>
              <li>Réserves estimées à plus de <span className="font-bold">22 milliards</span> de barils de pétrole brut</li>
              <li>Bassins actifs : Cuvette Centrale, Graben Albertine, Graben Tanganyika et côtes atlantiques (Muanda)</li>
              <li>Forte croissance de la demande en produits raffinés et en infrastructures de stockage</li>
            </ul>
          </motion.div>

          {/* Pourquoi investir ? */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Pourquoi investir ?
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Nouveau Code des hydrocarbures (2015) offrant un cadre clair et incitatif</li>
              <li>Politique d’ouverture aux investissements privés, y compris pour l’exploration</li>
              <li>Besoin de modernisation de l’appareil logistique et de transformation locale</li>
              <li>Opportunité d’anticiper la transition énergétique (gaz, biocarburants, etc.)</li>
            </ul>
          </motion.div>

          {/* Notre accompagnement */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Notre accompagnement
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Création d’entreprise ou de succursale dans le secteur pétrolier</li>
              <li>Assistance aux procédures d’attribution de blocs ou de licences de distribution</li>
              <li>Conformité au cadre juridique, fiscal et environnemental</li>
              <li>Rédaction de contrats (joint-ventures, services, partage de production)</li>
              <li>Mise en relation avec des acteurs publics (Ministère, SONAHYDROC, Autorité de régulation)</li>
              <li>Support pour la logistique, le permis d’importation et l’implantation sur site</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-white rounded-xl shadow-xl border border-[#f0f2f5] p-6 sm:p-8 mt-12 text-center">
          <Link href="/#contact" className="w-full sm:w-auto inline-block rounded-full bg-[#F05E0E] text-white font-bold py-3 px-8 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">
            Cliquez ici pour parler à un consultant spécialisé
          </Link>
        </motion.div>
      </section>
    </>
  );
}
