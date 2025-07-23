import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// API route to handle reservation requests
export async function POST(request: NextRequest) {
  const data = await request.json();
  
  try {
    // Forward request to Django API
    const response = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/reservations/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const result = await response.json();
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('Error creating reservation:', error);
    return NextResponse.json(
      { error: 'Failed to create reservation' },
      { status: 500 }
    );
  }
}
