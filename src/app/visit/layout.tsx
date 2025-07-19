import React from 'react';

export default function VisitLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="font-['Work_Sans','Noto_Sans',sans-serif] bg-white min-h-[60vh]">
        {children}
      </main>
    </>
  );
}