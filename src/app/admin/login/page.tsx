"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClientComponentClient();
  const [isMounted, setIsMounted] = useState(false);

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          redirectToDashboard();
        }
      } catch (err) {
        console.error('Error checking session:', err);
      } finally {
        setIsMounted(true);
      }
    };

    checkSession();
  }, []);

  const redirectToDashboard = () => {
    const redirectTo = searchParams.get('redirectedFrom') || '/admin/reservations';
    // Ensure we're not redirecting back to login to prevent loops
    if (redirectTo === '/admin/login') {
      router.push('/admin/reservations');
    } else {
      router.push(redirectTo);
    }
    router.refresh();
  };

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (isLoading || !email) return;
    
    setIsLoading(true);
    setError("");

    try {
      const redirectTo = new URL('/auth/callback', window.location.origin);
      redirectTo.searchParams.set('next', '/admin/reservations');
      
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectTo.toString(),
        },
      });

      if (error) {
        setError(error.message || "Une erreur est survenue. Veuillez réessayer.");
      } else {
        setIsEmailSent(true);
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsLoading(false);
    }
  }

  // Show loading state until we've checked the session
  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-[#f9fafb] to-[#f0f2f5]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-[#f9fafb] to-[#f0f2f5] p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-black mb-2 bg-gradient-to-r from-[#FFA500] to-[#F05E0E] bg-clip-text text-transparent">
            Tableau de bord
          </h1>
          <p className="text-gray-600">
            {isEmailSent 
              ? "Vérifiez votre email pour le lien de connexion" 
              : "Entrez votre email pour vous connecter"}
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-[#FFA500] to-[#F05E0E] p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          {isEmailSent ? (
            <div className="text-center py-6">
              <div className="mb-4 text-green-600">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Vérifiez votre boîte mail</h3>
              <p className="text-sm text-gray-500 mb-6">
                Nous avons envoyé un lien de connexion à <span className="font-medium">{email}</span>.
                Cliquez sur le lien pour vous connecter.
              </p>
              <button
                onClick={() => {
                  setIsEmailSent(false);
                  setEmail('');
                  setError('');
                }}
                className="text-sm font-medium text-orange-600 hover:text-orange-500"
              >
                Utiliser une autre adresse email
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading || !email}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#FFA500] to-[#F05E0E] hover:from-[#F05E0E] hover:to-[#FFA500] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-200 ${isLoading || !email ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Envoi en cours...
                    </>
                  ) : 'Envoyer le lien de connexion'}
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Pour toute assistance, veuillez contacter l&apos;administrateur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
