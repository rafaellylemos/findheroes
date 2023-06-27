import './globals.css'
import { Inter } from 'next/font/google'
import { Marvel } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const marvel = Marvel({
  subsets: ['latin'],
  weight: '700',
})

export const metadata = {
  title: 'Marvel Heroes',
  description: 'Find ur Marvel Hero!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={marvel.className}>{children}</body>
    </html>
  )
}
