"use client";

import dynamic from 'next/dynamic';

// Use dynamic import with ssr disabled to prevent hydration errors
const ReservationForm = dynamic(() => import("@/components/ReservationForm"), { 
  ssr: false,
  loading: () => (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>
  )
});

export default function ReservationFormWrapper() {
  return <ReservationForm />;
}
