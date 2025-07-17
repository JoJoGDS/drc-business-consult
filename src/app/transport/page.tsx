"use client";
import { motion } from "framer-motion";

export default function TransportPage() {
  return (
    <>
      <div className="min-h-[58px] md:min-h-[64px]" />
      <section className="relative max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#FFA500]/15 rounded-full blur-3xl z-0 animate-pulse-slow" aria-hidden="true"></div>
        <div className="absolute -bottom-32 right-0 w-80 h-80 bg-[#F05E0E]/10 rounded-full blur-3xl z-0 animate-pulse-slower" aria-hidden="true"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-2 sm:mb-3 leading-tight sm:leading-snug tracking-tight drop-shadow-sm bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent"
        >
          PRESENTATION DE L’OPTION Transport
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 mt-1 leading-tight bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent max-w-3xl"
        >
          La colonne vertébrale du commerce en RDC
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#60758a] text-sm sm:text-base md:text-lg mb-4 sm:mb-6 font-body leading-relaxed"
        >
          Avec un territoire vaste, riche en ressources et enclavé dans plusieurs zones stratégiques, la République Démocratique du Congo a un besoin structurel de solutions de transport efficaces pour connecter ses provinces, ses sites miniers, ses partenaires frontaliers et ses ports d’exportation.
          <br className="hidden sm:block"/>
          Le secteur du transport est donc à la fois un défi logistique majeur et une opportunité d’affaires durable.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><circle cx="10" cy="10" r="10" fill="#FFA500"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Opportunités d’affaires</h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Transport routier de marchandises (mines, agriculture, industrie)</li>
              <li>Logistique intégrée : affrètement, stockage, manutention</li>
              <li>Transport fluvial et lacustre (Congo, Kasai, Lualaba, Tanganyika)</li>
              <li>Transport ferroviaire (réhabilitation, partenariat avec la SNCC)</li>
              <li>Transport aérien (fret, charter, aviation d’affaires)</li>
              <li>Services d’assistance logistique et de transit douanier</li>
              <li>Maintenance, gestion de flotte, services de géolocalisation</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><circle cx="10" cy="10" r="10" fill="#FFA500"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Quelques chiffres clés</h3>
            <ul className="list-disc list-inside space-y-1 text-[#111418]">
              <li>Plus de 2 500 km de routes prioritaires à réhabiliter</li>
              <li>Le corridor Sud (Kolwezi – Kasumbalesa – Durban) est le plus fréquenté d’Afrique centrale</li>
              <li>La RDC possède plus de 15 000 km de voies navigables naturelles</li>
              <li>Moins de 20 % des routes sont asphaltées sur un réseau estimé à 150 000 km</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><circle cx="10" cy="10" r="10" fill="#FFA500"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Pourquoi investir ?</h3>
          <ul className="list-disc list-inside space-y-1 text-[#111418]">
            <li>Besoins croissants des secteurs miniers, industriels et commerciaux</li>
            <li>Potentiel de partenariats public-privé pour la réhabilitation des infrastructures</li>
            <li>Programmes de financement internationaux disponibles (Banque mondiale, BAD, etc.)</li>
            <li>Zones logistiques à fort potentiel (Kasumbalesa, Matadi, Kalemie, Goma…)</li>
          </ul>
        </div>

        <div className="mb-12">
          <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><circle cx="10" cy="10" r="10" fill="#FFA500"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Notre accompagnement</h3>
          <ul className="list-disc list-inside space-y-1 text-[#111418]">
            <li>Création d’entreprise de transport ou de logistique</li>
            <li>Assistance à l’obtention de licences d’exploitation et autorisations douanières</li>
            <li>Conseil juridique pour les contrats de sous-traitance et transit</li>
            <li>Mise en relation avec partenaires miniers, industriels et institutions</li>
            <li>Accompagnement à l’importation de véhicules lourds ou d’équipements logistiques</li>
            <li>Structuration de partenariats avec les autorités portuaires, ferroviaires et aéroportuaires</li>
          </ul>
        </div>

        <div className="text-center">
          <a href="#contact" className="inline-block bg-gradient-to-r from-[#FFA500] to-[#F05E0E] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">
            Cliquez ici pour échanger sur votre projet logistique
          </a>
        </div>

      </section>
    </>
  );
}
