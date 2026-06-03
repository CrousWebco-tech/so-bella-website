'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    if (!supabase) {
      setMessage('Supabase is not configured. Please contact the developer.')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      setMessage('If that email exists, a sign-in link has been sent.')
      setEmail('')
    } catch (err: any) {
      setMessage(err.message || 'Error sending sign-in link')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blush to-beauty-white">
      <div className="bg-beauty-white rounded-2xl shadow-luxury p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl font-bold text-beauty-black mb-2">🔐</h1>
          <h2 className="font-serif text-2xl font-bold text-beauty-black">Admin Sign In</h2>
          <p className="text-beauty-black/60 text-sm mt-2">Enter your email to receive a sign-in link</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-beauty-black mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="w-full px-4 py-2 border border-gold/20 rounded-lg focus:outline-none focus:border-gold bg-beauty-white"
            />
          </div>

          {message && (
            <div className="text-sm text-beauty-black/70 bg-blush/10 p-3 rounded-lg">{message}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-gradient-luxury text-beauty-black font-semibold rounded-lg hover:shadow-luxury transition-all disabled:opacity-60"
          >
            {loading ? 'Sending...' : 'Send sign-in link'}
          </button>
        </form>

        <p className="text-xs text-beauty-black/40 text-center mt-6">Need help? Contact your developer.</p>
      </div>
    </div>
  )
}
