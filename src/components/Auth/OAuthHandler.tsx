'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export function OAuthHandler() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    const handleOAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          return;
        }

        if (data?.session) {
          // User is authenticated, redirect to dashboard or home
          router.push('/admin/reservations');
        }
      } catch (error) {
        console.error('Error handling OAuth callback:', error);
      }
    };

    handleOAuthCallback();
  }, [router, supabase]);

  return null;
}
