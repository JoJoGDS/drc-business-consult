import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of public paths that don't require authentication
const publicPaths = [
  '/admin/login',
  '/auth/callback',
  '/api/auth/callback',
  '/_next/static',
  '/_next/image',
  '/favicon.ico',
  '/logo.png'
]

// List of auth paths that should redirect to dashboard if already authenticated
const authPaths = ['/admin/login']

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const { pathname } = req.nextUrl
  
  // Skip middleware for public paths
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return res
  }

  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  // If user is not signed in and trying to access admin routes
  if (!session) {
    if (pathname.startsWith('/admin')) {
      const redirectUrl = new URL('/admin/login', req.url)
      redirectUrl.searchParams.set('redirectedFrom', pathname)
      return NextResponse.redirect(redirectUrl)
    }
    return res
  }

  // If user is signed in and trying to access auth pages, redirect to dashboard
  if (authPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/admin/reservations', req.url))
  }

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/auth/|auth/callback).*)',
  ],
}
