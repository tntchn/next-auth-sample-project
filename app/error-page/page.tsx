import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'

export default async function ErrorPage () {
  const session = await auth()
  console.log(session)
  
  return (
    <SessionProvider>
      <div>Error page</div>
    </SessionProvider>
  )
}
