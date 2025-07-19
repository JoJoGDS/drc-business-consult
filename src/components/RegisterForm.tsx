"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  useEffect(() => {
    // Check for OAuth callback error
    const error = searchParams.get('error');
    if (error) {
      setMessage({
        type: 'error',
        text: 'Une erreur est survenue lors de la connexion avec Google. Veuillez réessayer.'
      });
    }
  }, [searchParams]);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setMessage(null);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=/user/dashboard`,
          queryParams: {
            access_type: 'offline',
            prompt: 'select_account',
          },
        },
      });

      if (error) throw error;
      
    } catch (error: any) {
      setMessage({
        type: 'error',
        text: error.message || 'Une erreur est survenue lors de la connexion avec Google.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Créer un compte</h2>
          <p className="text-gray-600 mt-2">
            Rejoignez notre communauté en un clic
          </p>
        </div>

        {message && (
          <div 
            className={`mb-6 p-4 rounded-md ${
              message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="space-y-4">
          <div className="text-sm text-gray-600 text-center mb-6">
            En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
          </div>

          <div>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FcGoogle className="w-5 h-5" />
              {loading ? 'Connexion en cours...' : 'Continuer avec Google'}
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p>Déjà un compte ?{' '}
            <Link href="/login" className="font-medium text-orange-600 hover:text-orange-500">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
