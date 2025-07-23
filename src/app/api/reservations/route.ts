import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // No caching

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Forward the reservation to Django API
    const response = await fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/reservations/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: 'Failed to create reservation', details: errorData },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Reservation error:', error);
    return NextResponse.json(
      { error: 'Failed to process reservation' },
      { status: 500 }
    );
  }
}
