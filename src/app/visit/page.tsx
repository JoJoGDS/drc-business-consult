"use client";
import { motion } from "framer-motion"; // Named import only, required for Next.js app directory

export default function VisitPage() {
  return (
    <>
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
        <span className="block sm:inline">PRESENTATION</span>{' '}
        <span className="block sm:inline">DU MENU </span>
        <span className="block sm:inline text-transparent bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text">VISIT DRC</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 mt-1 leading-tight bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent max-w-3xl"
      >
        Concentrez-vous sur votre mission, nous gérons votre logistique
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-[#60758a] text-sm sm:text-base md:text-lg mb-4 sm:mb-6 font-body leading-relaxed"
      >
        Vous souhaitez vous rendre en RDC pour des raisons <strong className="font-bold text-[#F05E0E]">professionnelles</strong>, <strong className="font-bold text-[#F05E0E]">administratives</strong> ou <strong className="font-bold text-[#F05E0E]">privées</strong> ?
        <br className="hidden sm:block"/>
        Notre service <span className="font-bold text-[#FFA500]">Visit DRC</span> vous propose un accompagnement personnalisé tout au long de votre séjour :
      </motion.p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-[#111418] font-body">
        <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">VISA ET FORMALITÉS</li>
        <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">RÉSERVATIONS HÔTELIÈRES</li>
        <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">LOCATION VÉHICULES AVEC CHAUFFEUR</li>
        <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">ACCOMPAGNEMENT AÉROPORT</li>
        <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">CONCIERGERIE 24H/24</li>
        <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm">TRADUCTION OFFICIELLE, ASSISTANCE ADMINISTRATIVE, GUIDE LOCAL</li>
      </ul>

      <div className="mb-8">
        <h3 className="font-bold text-[#FFA500] text-lg flex items-center gap-2 mb-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><circle cx="10" cy="10" r="10" fill="#FFA500"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> Nos engagements:</h3>
        <ul className="list-disc list-inside space-y-1 text-[#111418]">
          <li>Une <span className="font-bold">disponibilité 24h/24</span>, week-end et jours fériés inclus</li>
          <li>Une équipe <span className="font-bold">réactive, multilingue et discrète</span></li>
          <li>Un réseau de prestataires <span className="font-bold">fiables</span> pour tous types de services</li>
          <li>La garantie d’un accompagnement <span className="font-bold">sur mesure</span>, pour les imprévus comme les exigences spécifiques</li>
        </ul>
        <blockquote className="mt-4 border-l-4 border-[#FFA500] pl-4 italic text-[#60758a] text-base">« Vous vous concentrez sur vos objectifs, nous gérons le reste. »</blockquote>
      </div>

      <h2 className="text-2xl md:text-3xl font-heading font-black mb-2 flex items-center gap-2 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><rect x="3" y="7" width="18" height="13" rx="2" fill="#FFA500"/><rect x="8" y="3" width="8" height="4" rx="1" fill="#FFA500"/><rect x="8" y="3" width="8" height="4" rx="1" stroke="#fff" strokeWidth="1.5"/></svg> FORMULES <span className="text-[#FFA500]">VISIT DRC</span></h2>
      <p className="text-[#60758a] mb-8 font-body">Concentrez-vous sur votre mission, nous gérons votre logistique<br/>Vous venez en RDC pour affaires, pour une mission temporaire ou pour un séjour privé ?<br/>Notre service Visit DRC vous accompagne à chaque étape avec des prestations modulables selon vos besoins.</p>

      <section className="mb-12">
  <div className="mx-auto max-w-4xl px-2">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Découverte */}
      <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="flex flex-col bg-white rounded-2xl shadow-xl border border-[#22c55e]/30 p-6 relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl font-body"
>
        <h3 className="text-lg font-bold text-[#22c55e] mb-2 flex items-center gap-2">
          <svg width="20" height="20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#22c55e"/></svg>
          Formule Découverte
        </h3>
        <div className="mb-3">
          <span className="text-3xl font-black text-[#111418]">GRATUIT</span>
        </div>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Abonnement à notre newsletter mensuelle</li>
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Actualités logistiques et réglementaires (visa, douane, sécurité…)</li>
        </ul>
        <button className="mt-auto w-full rounded-full bg-[#F05E0E] text-white font-bold py-3 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">Choisir</button>
      </motion.div>
      {/* Pratique (emphasized) */}
      <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.1 }}
  className="flex flex-col bg-white rounded-2xl shadow-2xl border-2 border-[#2563eb] p-8 relative scale-105 z-10 transition-transform duration-300 hover:scale-105 hover:shadow-2xl font-body"
>
        <h3 className="text-lg font-bold text-[#2563eb] mb-2 flex items-center gap-2">
          <svg width="20" height="20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#2563eb"/></svg>
          Formule Pratique
        </h3>
        <div className="mb-3">
          <span className="text-3xl font-black text-[#111418]">49 USD</span>
        </div>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Tout ce qui est inclus dans la formule gratuite</li>
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Assistance à l’obtention du visa (lettres d’invitation, formulaires, conseil juridique)</li>
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Recommandation et réservation d’hôtel (selon le budget)</li>
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Service client WhatsApp disponible 7j/7 avant votre arrivée</li>
        </ul>
        <button className="mt-auto w-full rounded-full bg-[#F05E0E] text-white font-bold py-3 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">Choisir</button>
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">Le plus populaire</span>
      </motion.div>
      {/* Prestige */}
      <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="flex flex-col bg-white rounded-2xl shadow-xl border-2 border-[#dc2626]/40 p-7 relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl font-body"
>
        <h3 className="text-lg font-bold text-[#dc2626] mb-2 flex items-center gap-2">
          <svg width="20" height="20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#dc2626"/></svg>
          Formule Prestige
        </h3>
        <div className="mb-3">
          <span className="text-3xl font-black text-[#111418]">129 USD</span>
        </div>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Tous les services de la formule Pratique</li>
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Accueil à l’aéroport et transfert privé</li>
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Service de conciergerie 24h/24 pendant 24h (réservations, urgences, demandes spéciales)</li>
          <li className="flex items-center gap-2 text-[#111418] text-sm"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Assistance administrative (accompagnement pour formalités, RDV administratifs) pendant 24 h</li>
        </ul>
        <button className="mt-auto w-full rounded-full border-2 border-[#F05E0E] text-[#F05E0E] bg-white font-heading font-bold py-3 text-base shadow-xl flex items-center justify-center gap-2 hover:bg-[#FFF7ED] hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all duration-200 group">
  Choisir
  <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1">
    <svg width='18' height='18' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14M13 6l6 6-6 6'/></svg>
  </span>
</button>
      </motion.div>
    </div>
  </div>
</section>

      <div className="bg-white rounded-xl shadow-xl border border-[#f0f2f5] p-8 mt-12 font-body">
        <h3 className="font-heading font-black mb-2 text-xl flex items-center gap-2 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><rect x="3" y="4" width="14" height="12" rx="2" fill="#FFA500"/><rect x="7" y="8" width="6" height="4" rx="1" fill="#fff"/></svg> Modes de paiement disponibles :</h3>
        <ul className="list-disc list-inside text-[#111418] text-base space-y-1">
          <li>Carte bancaire (Visa / Mastercard)</li>
          <li>PayPal</li>
          <li>Mobile Money (Airtel, Orange, M-Pesa)</li>
        </ul>
      </div>
    </section>
    </>
  );
}
