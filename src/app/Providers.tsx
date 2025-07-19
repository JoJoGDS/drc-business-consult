'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // Show loading state until mounted
  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }
  
  // Add a key that combines pathname and search params to force re-render on any route change
  const key = `${pathname}?${searchParams.toString()}`
  
  return (
    <div key={key} className="min-h-screen flex flex-col">
      {children}
    </div>
  )
}
