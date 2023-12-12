import { Merriweather } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700']})

export const metadata = {
  title: 'PrepMate',
  description: 'Generated ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merri.className}>
        <Header />
        <main className='mx-auto'>
        {children}
        <Footer />
        </main>
      </body>
    </html>
  )
}
