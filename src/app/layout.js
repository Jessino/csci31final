import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Logout from './logout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Veria Art',
  description: '',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ephesis&family=Outfit&family=Space+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <Theme>
        <body className={`${inter.className} bg-gradient-to-r from-violet-400 to-indigo-500`}>
          <nav>
            {' '}
            {!!session && <Logout />} {!session && <Link href={'/login'}>Login</Link>}{' '}
          </nav>
          {children}
        </body>
      </Theme>
      <Analytics />
    </html>
  )
}
