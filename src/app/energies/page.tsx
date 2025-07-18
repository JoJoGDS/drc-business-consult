"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EnergiesPage() {
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
          PRESENTATION DE L&apos;OPTION <span className="block sm:inline">Énergie</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 mt-1 leading-tight bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent max-w-3xl"
        >
          Un potentiel hydroélectrique exceptionnel au service de l’Afrique
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#60758a] text-sm sm:text-base md:text-lg mb-8 font-body leading-relaxed"
        >
          La RDC dispose de l’un des plus grands potentiels énergétiques inexploités au monde, notamment grâce à son immense réseau fluvial. Ce secteur est stratégique pour le développement industriel, l’accès à l’électricité des populations et les ambitions d’exportation vers les pays voisins.
        </motion.p>

        <div className="space-y-10">
          {/* Opportunités d’affaires */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Opportunités d’affaires
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#111418] font-body">
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Projets hydroélectriques (grands et mini-barrages)</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Production d’électricité solaire, thermique et hybride</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Réseaux de transport et distribution d’énergie</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Solutions d’électrification rurale décentralisée (kits solaires, mini-grids)</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Maintenance, équipement et ingénierie électrique</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">Fourniture d’énergie aux zones minières, industrielles ou isolées</li>
            </ul>
          </motion.div>

          {/* Quelques chiffres clés */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Quelques chiffres clés
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Plus de 100 000 MW de potentiel hydroélectrique (dont seulement 3 % exploités)</li>
              <li>Moins de 20 % de la population a accès à une électricité stable</li>
              <li>Objectif national : augmentation du taux d’électrification à 30 % d’ici 2030</li>
            </ul>
          </motion.div>

          {/* Pourquoi investir ? */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Pourquoi investir ?
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Besoin massif d’électrification pour accompagner la croissance démographique et industrielle</li>
              <li>Environnement propice aux partenariats public-privé (PPP) et concessions énergétiques</li>
              <li>Incitations fiscales pour les investissements dans les énergies renouvelables</li>
              <li>Forte demande locale + perspectives d’exportation vers l’Afrique australe (SAPP)</li>
            </ul>
          </motion.div>

          {/* Notre accompagnement */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3">
              Notre accompagnement
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Création d’entreprises dans le secteur énergétique</li>
              <li>Obtention de licences (ARE, ministère, autorités locales)</li>
              <li>Montage de projets PPP ou IPP (Producteurs indépendants)</li>
              <li>Appui à la structuration juridique et financière</li>
              <li>Accès aux partenaires techniques et institutionnels</li>
              <li>Assistance à l’importation et à la fiscalité des équipements énergétiques</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-white rounded-xl shadow-xl border border-[#f0f2f5] p-6 sm:p-8 mt-12 text-center">
          <Link href="/#contact" className="w-full sm:w-auto inline-block rounded-full bg-[#F05E0E] text-white font-bold py-3 px-8 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">
            Cliquez ici pour discuter de votre projet énergétique
          </Link>
        </motion.div>
      </section>
    </>
  );
}
