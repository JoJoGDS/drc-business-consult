"use client";
import { motion } from "framer-motion"; // Named import only, required for Next.js app directory
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VisitPage() {
  return (
    <div className="bg-gradient-to-b from-white via-[#f9fafb] to-[#f0f2f5] antialiased">
      <Header />
      <div className="min-h-[58px] md:min-h-[64px]" />
      <main>
        <div>
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
              PRESENTATION DU MENU DOING BUSINESS IN DRC
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4 sm:mb-6 mt-1 leading-tight bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent max-w-3xl"
            >
              Votre passerelle pour investir et créer une entreprise en RDC
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-[#60758a] text-sm sm:text-base md:text-lg mb-4 sm:mb-6 font-body leading-relaxed"
            >
              Nous vous accompagnons dans toutes les procédures administratives pour vore implantation et l&apos;obtention de licences et autorisations spécifiques dans les secteurs régulés :
            </motion.p>

            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8 text-[#111418] font-body">
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm text-center">Création d’une Société</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm text-center">Mines</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm text-center">Énergie</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm text-center">Hydrocarbures</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm text-center">Télécoms</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm text-center">Transport</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm text-center">Assurance</li>
              <li className="bg-[#fff7ed] rounded-lg px-4 py-2 font-semibold shadow-sm text-center">Autres Services</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-heading font-black mb-2 mt-12 flex items-center gap-2 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><rect x="3" y="7" width="18" height="13" rx="2" fill="#FFA500"/><rect x="8" y="3" width="8" height="4" rx="1" fill="#FFA500"/><rect x="8" y="3" width="8" height="4" rx="1" stroke="#fff" strokeWidth="1.5"/></svg>
              Nos Formules d’Accompagnement Juridique & Business
            </h2>
            <p className="text-[#60758a] mb-8 font-body">
              Vous souhaitez obtenir des conseils fiables pour créer ou développer votre entreprise en RDC ? Choisissez la formule qui vous convient et bénéficiez de notre expertise adaptée à vos besoins :
            </p>

            <section className="mb-12">
              <div className="mx-auto max-w-5xl px-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Basique */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col bg-white rounded-2xl shadow-xl border border-[#22c55e]/30 p-6 relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl font-body"
                  >
                    <h3 className="text-lg font-bold text-[#22c55e] mb-2 flex items-center gap-2">
                      <svg width="20" height="20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#22c55e"/></svg>
                      Formule Basique
                    </h3>
                    <div className="mb-3">
                      <span className="text-3xl font-black text-[#111418]">GRATUIT</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-[#111418]">✅ Abonnement à notre newsletter mensuelle</li>
                      <li className="flex items-center gap-2 text-[#111418]">✅ Actualités juridiques et économiques en RDC</li>
                    </ul>
                    <button className="mt-auto w-full rounded-full bg-[#F05E0E] text-white font-bold py-3 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">Choisir</button>
                  </motion.div>
                  {/* Standard */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="flex flex-col bg-white rounded-2xl shadow-xl border border-gray-200 p-6 font-body transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Formule Standard</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-black text-[#111418]">20 USD</span> <span className="text-gray-500 text-sm">/ mois</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Tout ce qui est inclus dans la formule gratuite</li>
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>5 avis juridiques sur la création de votre société</li>
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Réponses claires et personnalisées par nos experts</li>
                    </ul>
                    <button className="mt-auto w-full rounded-full bg-[#F05E0E] text-white font-bold py-3 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">Choisir</button>
                  </motion.div>
                  {/* Premium */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-col bg-white rounded-2xl shadow-2xl border-2 border-[#2563eb] p-7 relative z-10 font-body transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#2563eb] to-[#60a5fa] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">Populaire</span>
                    <h3 className="text-lg font-bold text-[#2563eb] mb-2">Formule Premium</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-black text-[#111418]">39 USD</span> <span className="text-gray-500 text-sm">/ mois</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Tous les avantages de la formule Standard</li>
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>10 avis juridiques sur la création de votre société</li>
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Rédaction de 5 contrats types personnalisés</li>
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Relecture et ajustements inclus</li>
                    </ul>
                    <button className="mt-auto w-full rounded-full bg-[#F05E0E] text-white font-bold py-3 text-base shadow-lg hover:scale-105 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#FFA500] transition-all">Choisir</button>
                  </motion.div>
                  {/* VIP */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col bg-white rounded-2xl shadow-xl border-2 border-[#dc2626]/40 p-7 relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl font-body"
                  >
                    <h3 className="text-lg font-bold text-[#dc2626] mb-2 flex items-center gap-2">
                      <svg width="20" height="20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="10" fill="#dc2626"/></svg>
                      Formule VIP
                    </h3>
                    <div className="mb-4">
                      <span className="text-3xl font-black text-[#111418]">50 USD</span> <span className="text-gray-500 text-sm">/ mois</span>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Tous les avantages de la formule Premium</li>
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Rédaction d’actes notariés (PV, cessions…)</li>
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Assistance 24h/24, 7j/7 par email ou WhatsApp</li>
                      <li className="flex items-center gap-2 text-[#111418]"><svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>Accompagnement illimité sur toutes les questions</li>
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
              <h3 className="font-heading font-black mb-2 text-xl flex items-center gap-2 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><rect x="3" y="4" width="14" height="12" rx="2" fill="#FFA500"/><rect x="7" y="8" width="6" height="4" rx="1" fill="#fff"/></svg>
                Moyens de paiement disponibles :
              </h3>
              <ul className="list-disc list-inside text-[#111418] text-base space-y-1">
                <li>Carte bancaire (Visa / Mastercard)</li>
                <li>PayPal</li>
                <li>Mobile Money (Orange, Airtel, M-Pesa)</li>
              </ul>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}
