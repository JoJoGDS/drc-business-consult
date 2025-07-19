'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function SignUpForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/private')
    }

    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      {error && (
        <p className="text-red-600 text-center mb-4">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="email"
          placeholder="Votre email"
          type="email"
          required
          className="border p-2 w-full rounded"
        />
        <input
          name="password"
          placeholder="Votre mot de passe"
          type="password"
          required
          className="border p-2 w-full rounded"
        />
        <button
          disabled={loading}
          className="bg-orange-500 text-white px-4 py-2 rounded w-full"
        >
          {loading ? 'Création...' : 'Créer un compte'}
        </button>
      </form>
    </div>
  )
}
