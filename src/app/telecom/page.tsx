"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TelecomPage() {
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
          PRESENTATION DE L&apos;OPTION <span className="block sm:inline">Télécommunications</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 mt-1 leading-tight bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent max-w-3xl"
        >
          Le levier numérique de la transformation congolaise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#60758a] text-sm sm:text-base md:text-lg mb-8 font-body leading-relaxed"
        >
          {`En pleine expansion, le secteur des télécommunications en RDC est l'un des plus dynamiques d'Afrique centrale. Porté par une forte demande en connectivité, la croissance de la population urbaine et la digitalisation des services publics et privés, il représente un fort potentiel d'investissement et d'innovation.`}
        </motion.p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Opportunités d’affaires */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle text-[#FFA500]"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M12 4v.01M4 12h.01M20 12h.01M12 20v.01"/></svg> {`Opportunités d'affaires`}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#111418] font-body">
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">{`Fourniture de services internet et mobile`}</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">{`Déploiement d'infrastructures (fibre optique, pylônes, data centers)`}</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">{`Développement d'applications mobiles (paiement, e-gouvernement, e-commerce)`}</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">{`Services de téléphonie rurale et satellite`}</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">{`Solutions d'entreprise (VPN, cloud, sécurité informatique)`}</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">{`Vente de matériel télécoms et installation`}</li>
            </ul>
          </motion.div>

          {/* Quelques chiffres clés */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle text-[#FFA500]"><path d="M3 3v18h18"/><path d="M18.7 8a5 5 0 0 1-6.4 0l-4.3 4.3a5 5 0 0 1 0 6.4l4.3-4.3a5 5 0 0 1 6.4 0z"/></svg> Quelques chiffres clés</h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>{`Plus de `}<span className="font-bold">50 millions</span>{` d'abonnés mobiles`}</li>
              <li>{`Taux de pénétration Internet en progression rapide (plus de `}<span className="font-bold">25 %</span>{` en 2023)`}</li>
              <li>{`Croissance annuelle du marché estimée à `}<span className="font-bold">8–10 %</span></li>
            </ul>
          </motion.div>

          {/* Pourquoi investir ? */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle text-[#FFA500]"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg> Pourquoi investir ?</h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>{`Marché vaste et encore sous-équipé, avec une population de plus de `}<span className="font-bold">100 millions</span>{` d'habitants`}</li>
              <li><span className="font-bold">Incitations fiscales</span>{` pour l'installation en zones mal desservies`}</li>
              <li>{`Partenariats possibles avec opérateurs `}<span className="font-bold">publics et privés</span></li>
              <li>{`Demande croissante en solutions `}<span className="font-bold">fintech, e-learning, e-santé, sécurité numérique</span></li>
            </ul>
          </motion.div>

          {/* Notre accompagnement */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-3"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block align-middle text-[#FFA500]"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6m3-3h-6"/></svg> Notre accompagnement</h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>{`Constitution de sociétés dans le secteur télécom ou IT`}</li>
              <li>{`Accompagnement dans l'obtention de licences de télécommunication (ARPTC)`}</li>
              <li>{`Appui juridique à la conformité sectorielle (RGPD, fiscalité TIC, etc.)`}</li>
              <li>{`Conseil stratégique sur l'implantation technique et commerciale`}</li>
              <li>{`Mise en relation avec des fournisseurs d'équipements, intégrateurs et partenaires locaux`}</li>
              <li>{`Accompagnement à l'importation et au dédouanement des équipements`}</li>
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.6 }} className="bg-white rounded-xl shadow-xl border border-[#f0f2f5] p-6 sm:p-8 mt-12 text-center">
          <Link href="/#contact" className="w-full sm:w-auto inline-block rounded-full bg-[#F05E0E] text-white font-bold py-3 px-8 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">
            Cliquez ici pour décrire votre projet numérique
          </Link>
        </motion.div>
      </section>
    </>
  );
}
