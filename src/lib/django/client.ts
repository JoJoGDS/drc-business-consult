// Django API client
const API_URL = process.env.NEXT_PUBLIC_DJANGO_API_URL || 'http://localhost:8000/api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
  role?: string;
}

interface ReservationData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message?: string;
}

export async function login({ email, password }: LoginCredentials) {
  const response = await fetch(`${API_URL}/auth/signin/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
}

export async function signup(credentials: SignUpCredentials) {
  const response = await fetch(`${API_URL}/auth/signup/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Signup failed');
  }

  return response.json();
}

export async function getUserProfile(token: string) {
  const response = await fetch(`${API_URL}/auth/profile/`, {
    headers: {
      'Authorization': `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  return response.json();
}

export async function createReservation(data: ReservationData, token?: string) {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Token ${token}`;
  }

  const response = await fetch(`${API_URL}/reservations/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to create reservation');
  }

  return response.json();
}

export async function getReservations(token: string) {
  const response = await fetch(`${API_URL}/reservations/`, {
    headers: {
      'Authorization': `Token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch reservations');
  }

  return response.json();
}

export async function logout(token: string) {
  // On the client side, we can just remove the token
  // No need to call the backend for logout
  return { success: true };
}
