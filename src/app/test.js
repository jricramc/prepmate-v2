import { Merriweather } from 'next/font/google'
import './globals.css'
import Header from '../pages/layout/header'
import Footer from '../pages/layout/footer'
import React from 'react'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700']})

export const metadata = {
  title: 'PrepMate',
  description: 'Food!',
}

export default function RootLayout({ children }) {
  return (
    <React.StrictMode>
    <html lang="en">
      <body className={merri.className}>
        <Header />
        <main className='mx-auto'>
        {children}
        <Footer />
        </main>
      </body>
    </html>
    </React.StrictMode>
    )
}