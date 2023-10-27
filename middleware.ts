import { withAuth  } from 'next-auth/middleware'

export const config = {
	matcher: ['/trips', '/reservations', '/properties', '/favorites'],
}
export default withAuth(
  function middleware (req) {
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (
          req.nextUrl.pathname.startsWith('/protected') &&
          token === null
        ) {
          return false
        }
        return true
      }
    }
  }
)
