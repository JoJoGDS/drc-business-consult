import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of public paths that don't require authentication
const publicPaths = [
  '/admin/login',
  '/login',
  '/register',
  '/auth/callback',
  '/api/auth/callback',
  '/_next/static',
  '/_next/image',
  '/favicon.ico',
  '/logo.png',
  '/api/contact',
  '/api/subscribe',
  '/api/reservations',
  '/api/contact',
  '/api/subscribe',
  '/api/reservations',
  '/api/services',
  '/api/team',
  '/api/testimonials'
]

// List of auth paths that should redirect to dashboard if already authenticated
const authPaths = ['/admin/login', '/login', '/register']

// List of admin paths
const adminPaths = ['/admin']

// List of user paths
const userPaths = ['/user']

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const { pathname } = req.nextUrl
  
  // Skip middleware for public paths
  if (publicPaths.some(path => pathname.startsWith(path))) {
    return res
  }

  const supabase = createMiddlewareClient({ req, res })
  const { data: { session } } = await supabase.auth.getSession()

  // If user is not signed in
  if (!session) {
    // Redirect to login if trying to access protected routes
    if (adminPaths.some(path => pathname.startsWith(path))) {
      const redirectUrl = new URL('/admin/login', req.url)
      redirectUrl.searchParams.set('redirectedFrom', pathname)
      return NextResponse.redirect(redirectUrl)
    } else if (userPaths.some(path => pathname.startsWith(path))) {
      const redirectUrl = new URL('/login', req.url)
      redirectUrl.searchParams.set('redirectedFrom', pathname)
      return NextResponse.redirect(redirectUrl)
    }
    return res
  }

  // Check user role
  const { data: userData } = await supabase
    .from('users')
    .select('role')
    .eq('id', session.user.id)
    .single()

  const userRole = userData?.role || 'user'

  // Redirect users trying to access admin routes without admin role
  if (pathname.startsWith('/admin') && userRole !== 'admin') {
    return NextResponse.redirect(new URL('/user/dashboard', req.url))
  }

  // Redirect admins trying to access user routes to admin dashboard
  if (pathname.startsWith('/user') && userRole === 'admin') {
    return NextResponse.redirect(new URL('/admin/reservations', req.url))
  }

  // Redirect authenticated users away from auth pages
  if (authPaths.some(path => pathname.startsWith(path))) {
    const redirectTo = userRole === 'admin' ? '/admin/reservations' : '/user/dashboard'
    return NextResponse.redirect(new URL(redirectTo, req.url))
  }

  return res
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api/auth/|auth/callback).*)',
  ],
  // Limit the middleware to run only on specific paths
  // This helps with performance by not running the middleware on every request
  // Uncomment if you notice performance issues
  // matcher: [
  //   '/user/:path*',
  //   '/admin/:path*',
  //   '/login',
  //   '/register',
  //   '/auth/callback',
  // ]
}
