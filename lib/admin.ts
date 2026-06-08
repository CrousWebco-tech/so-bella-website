/**
 * Admin access control
 *
 * Only email addresses listed here (or in the NEXT_PUBLIC_ADMIN_EMAILS env var)
 * are allowed into the admin dashboard. Add the client's email below or in
 * .env.local as a comma-separated list, e.g.:
 *   NEXT_PUBLIC_ADMIN_EMAILS=owner@example.com,manager@example.com
 */

// Fallback allowlist if no env var is set. Replace with the client's email.
const DEFAULT_ADMIN_EMAILS = ['crouswebco@gmail.com']

export function getAdminEmails(): string[] {
  const fromEnv = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '')
    .split(',')
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean)

  const list = fromEnv.length > 0 ? fromEnv : DEFAULT_ADMIN_EMAILS
  return list.map((e) => e.toLowerCase())
}

export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false
  return getAdminEmails().includes(email.toLowerCase())
}
