export default function VisitPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl md:text-5xl font-black text-[#111418] mb-2 tracking-tight drop-shadow-sm">
        PRESENTATION DU MENU <span className="text-transparent bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text">VISIT DRC</span>
      </h1>
      <h2 className="text-lg md:text-xl font-semibold text-[#F05E0E] mb-6 mt-1">Concentrez-vous sur votre mission, nous gérons votre logistique</h2>

      <p className="text-[#111418] text-base md:text-lg mb-4">
        Vous souhaitez vous rendre en RDC pour des raisons <strong className="font-bold text-[#F05E0E]">professionnelles</strong>, <strong className="font-bold text-[#F05E0E]">administratives</strong> ou <strong className="font-bold text-[#F05E0E]">privées</strong> ?<br/>
        Notre service <span className="font-bold text-[#FFA500]">Visit DRC</span> vous propose un accompagnement personnalisé tout au long de votre séjour :
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-[#111418]">
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

      <h2 className="text-2xl font-bold text-[#111418] mb-2 flex items-center gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><rect x="3" y="7" width="18" height="13" rx="2" fill="#FFA500"/><rect x="8" y="3" width="8" height="4" rx="1" fill="#FFA500"/><rect x="8" y="3" width="8" height="4" rx="1" stroke="#fff" strokeWidth="1.5"/></svg> FORMULES <span className="text-[#FFA500]">VISIT DRC</span></h2>
      <p className="text-[#60758a] mb-6">Concentrez-vous sur votre mission, nous gérons votre logistique<br/>Vous venez en RDC pour affaires, pour une mission temporaire ou pour un séjour privé ?<br/>Notre service Visit DRC vous accompagne à chaque étape avec des prestations modulables selon vos besoins.</p>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mb-8">
        {/* Formule Découverte */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-[#22c55e]/30 p-5 mb-4 md:mb-0 flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl focus-within:shadow-2xl outline-none" tabIndex={0}>
  <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-[#22c55e] to-[#a7f3d0]" aria-hidden="true"></div>
  <div className="flex items-center mb-3 mt-2">
    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="inline-block align-middle mr-2"><circle cx="9" cy="9" r="9" fill="#22c55e"/></svg></span>
    <span className="font-bold text-lg">Formule Découverte</span>
    <span className="absolute top-3 right-4 text-xs bg-green-100 text-green-700 rounded-full px-3 py-1 font-semibold shadow border border-green-200">GRATUIT</span>
  </div>
  <ul className="list-disc list-inside text-[#111418] text-base space-y-1">
    <li>Abonnement à notre newsletter mensuelle</li>
    <li>Actualités logistiques et réglementaires (visa, douane, sécurité…)</li>
  </ul>
</div>
        {/* Formule Pratique */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-[#2563eb]/30 p-5 mb-4 md:mb-0 flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl focus-within:shadow-2xl outline-none" tabIndex={0}>
  <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-[#2563eb] to-[#93c5fd]" aria-hidden="true"></div>
  <div className="flex items-center mb-3 mt-2">
    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="inline-block align-middle mr-2"><circle cx="9" cy="9" r="9" fill="#2563eb"/></svg></span>
    <span className="font-bold text-lg">Formule Pratique</span>
    <span className="absolute top-3 right-4 text-xs bg-blue-100 text-blue-700 rounded-full px-3 py-1 font-semibold shadow border border-blue-200">49 USD</span>
  </div>
  <ul className="list-disc list-inside text-[#111418] text-base space-y-1">
    <li>Tout ce qui est inclus dans la formule gratuite</li>
    <li>Assistance à l’obtention du visa (lettres d’invitation, remplissage des formulaires officiels, conseil juridique)</li>
    <li>Recommandation et réservation d’hôtel (selon le budget)</li>
    <li>Service client WhatsApp disponible 7j/7 avant votre arrivée</li>
  </ul>
</div>
        {/* Formule Prestige */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-[#dc2626]/30 p-5 mb-4 md:mb-0 flex flex-col transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl focus-within:shadow-2xl outline-none" tabIndex={0}>
  <div className="absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r from-[#dc2626] to-[#fecaca]" aria-hidden="true"></div>
  <div className="flex items-center mb-3 mt-2">
    <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="inline-block align-middle mr-2"><circle cx="9" cy="9" r="9" fill="#dc2626"/></svg></span>
    <span className="font-bold text-lg">Formule Prestige</span>
    <span className="absolute top-3 right-4 text-xs bg-red-100 text-red-700 rounded-full px-3 py-1 font-semibold shadow border border-red-200">129 USD</span>
  </div>
  <ul className="list-disc list-inside text-[#111418] text-base space-y-1">
    <li>Tous les services de la formule Pratique</li>
    <li>Accueil à l’aéroport et transfert privé</li>
    <li>Service de conciergerie 24h/24 pendant 24h (réservations, urgences, demandes spéciales)</li>
    <li>Assistance administrative (accompagnement pour formalités, RDV administratifs) pendant 24 h</li>
  </ul>
</div>
      </div>

      <div className="bg-[#f0f2f5] rounded-xl p-6 shadow-sm">
        <h3 className="font-bold text-[#111418] mb-2 text-lg flex items-center gap-2"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="inline-block align-middle text-[#FFA500]"><rect x="3" y="4" width="14" height="12" rx="2" fill="#FFA500"/><rect x="7" y="8" width="6" height="4" rx="1" fill="#fff"/></svg> Modes de paiement disponibles :</h3>
        <ul className="list-disc list-inside text-[#111418] text-base space-y-1">
          <li>Carte bancaire (Visa / Mastercard)</li>
          <li>PayPal</li>
          <li>Mobile Money (Airtel, Orange, M-Pesa)</li>
        </ul>
      </div>
    </section>
  );
}
