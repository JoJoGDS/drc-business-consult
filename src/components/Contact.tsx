export default function Contact() {
    return (
      <section id="contact" className="relative px-6 md:px-20 py-16 text-center">
        {/* Blurred shape for depth */}
        <div className="absolute -top-20 right-0 w-72 h-72 bg-[#F05E0E]/10 rounded-full blur-3xl z-0 animate-pulse-slower" aria-hidden="true"></div>
        <h2 className="text-3xl md:text-4xl font-heading font-black mb-4 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent drop-shadow">Contactez-nous</h2>
        <p className="text-[#60758a] mb-8 font-body">
          Écrivez-nous pour discuter de votre projet ou planifier un rendez-vous. Notre équipe d&apos;experts est à votre disposition pour vous accompagner dans la réalisation de vos objectifs en République Démocratique du Congo.
        </p>
        <div className="space-y-4 max-w-md mx-auto bg-white rounded-xl shadow-xl border border-[#f0f2f5] p-8 mt-8">
          <p className="text-[#111418] flex items-center justify-center gap-2 font-body">
            <svg width='18' height='18' fill='none' stroke='#F05E0E' strokeWidth='2' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M16 12H8m8 0a4 4 0 01-8 0m8 0V7a4 4 0 00-4-4m0 0a4 4 0 00-4 4v5m8 0a4 4 0 01-8 0'></path>
            </svg>
            <strong>Email :</strong> info@drcbusinessconsult.com
          </p>
          <p className="text-[#111418] flex items-center justify-center gap-2 font-body">
            <svg width='18' height='18' fill='none' stroke='#0c7ff2' strokeWidth='2' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2zm14-14a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5a2 2 0 012-2h2zm0 14a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z'></path>
            </svg>
            <strong>Téléphone :</strong> +243 xxx xxx xxx
          </p>
        </div>
      </section>
    )
  }
  