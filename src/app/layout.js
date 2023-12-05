import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import '@radix-ui/themes/styles.css'
import { Theme, ThemePanel } from '@radix-ui/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Veria Art',
  description: '',
}

export default function RootLayout({ children }) {
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
        <body className={`${inter.className} bg-gradient-to-r from-violet-400 to-indigo-500`}>{children}</body>
        <ThemePanel />
      </Theme>
      <Analytics />
    </html>
  )
}
