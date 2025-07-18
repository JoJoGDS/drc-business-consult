"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MinesPage() {
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
          PRESENTATION DE L&apos;OPTION <span className="block sm:inline">MINES</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 mt-1 leading-tight bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent max-w-3xl"
        >
          Une richesse inégalée au cœur de l’Afrique
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#60758a] text-sm sm:text-base md:text-lg mb-8 font-body leading-relaxed"
        >
          La République Démocratique du Congo (RDC) abrite l’un des plus importants potentiels miniers au monde, représentant une opportunité stratégique pour les investisseurs à la recherche de rendements solides et durables.
        </motion.p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Opportunités d’affaires */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Opportunités d’affaires
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#111418] font-body">
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Premier producteur africain de cuivre et de cobalt (plus de 70% de la production mondiale de cobalt).</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Gisements importants de lithium, or, coltan, étain, zinc, manganèse, diamant et autres minerais critiques.</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Opportunités dans : exploitation minière artisanale et industrielle</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Transformation locale des minerais</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Services de logistique, traitement, sous-traitance</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Récupération des remblais et rejets miniers (valorisation des déchets miniers)</li>
            </ul>
          </motion.div>

          {/* Quelques chiffres clés */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Quelques chiffres clés
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Le secteur représente plus de 95 % des exportations du pays.</li>
              <li>En 2023, la RDC a produit plus de <span className="font-bold">2,5 millions</span> de tonnes de cuivre et plus de <span className="font-bold">130 000</span> tonnes de cobalt.</li>
              <li>La part du secteur minier dans le PIB dépasse <span className="font-bold">25 %</span>.</li>
            </ul>
          </motion.div>

          {/* Pourquoi investir ? */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Pourquoi investir ?
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Cadre légal modernisé avec le Code Minier de 2018 (régime d’investissement, clauses environnementales, contribution communautaire, etc.).</li>
              <li>Potentiel géologique encore largement sous-exploré.</li>
              <li>Position géographique stratégique avec des corridors d’exportation vers l’Afrique australe, l’Asie et l’Europe.</li>
            </ul>
          </motion.div>

          {/* Notre accompagnement */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Notre accompagnement
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Constitution de sociétés minières ou de sous-traitance dans le secteur Minier</li>
              <li>Obtention des permis miniers</li>
              <li>Ouverture d’un Comptoir d’achat</li>
              <li>Obtention du « titre d’acheteur des produits miniers »</li>
              <li>Appui aux démarches réglementaires</li>
              <li>Conseil et Rédaction de contrats miniers, JV, accords d’amodiation</li>
              <li>Conseil stratégique sur les zones à fort potentiel</li>
              <li>Mise en relation avec des partenaires locaux et techniques</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-white rounded-xl shadow-xl border border-[#f0f2f5] p-6 sm:p-8 mt-12 text-center">
          <Link href="/#contact" className="w-full sm:w-auto inline-block rounded-full bg-[#F05E0E] text-white font-bold py-3 px-8 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">
            Cliquez ici pour échanger avec un expert
          </Link>
        </motion.div>
      </section>
    </>
  );
}
