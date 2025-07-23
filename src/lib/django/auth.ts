// Authentication middleware for Django token
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function checkAuth(request: NextRequest) {
  // Get token from cookie or localStorage (browser-only)
  const token = request.cookies.get('authToken')?.value;

  if (!token) {
    return false;
  }

  try {
    // Verify token with Django backend
    const response = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/auth/profile/`, {
      headers: {
        'Authorization': `Token ${token}`,
      },
    });

    return response.ok;
  } catch (error) {
    console.error('Auth check error:', error);
    return false;
  }
}
