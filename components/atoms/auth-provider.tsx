'use client'

import { SafeUser } from "@/app/types"
import { SessionProvider } from "next-auth/react"

export default function AuthProvider ({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}): React.ReactNode {
  return <SessionProvider session={session}>
    {children}
  </SessionProvider>
}
