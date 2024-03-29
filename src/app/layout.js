import { Merriweather } from 'next/font/google'
import './globals.css'
import Header from '../pages/layout/header'
import Footer from '../pages/layout/footer'

const merri = Merriweather({ subsets: ['latin'], weight: ['300', '400', '700']})

export const metadata = {
  title: 'PrepMate',
  description: 'Food!',
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
// import { Roboto } from 'next/font/google'
// import './globals.css'
// import Header from '../pages/layout/header'
// import Footer from '../pages/layout/footer'

// const roboto = Roboto({ subsets: ['latin'], weight: ['300', '400', '700']})

// export const metadata = {
//   title: 'PrepMate',
//   description: 'Food!',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={roboto.className}>
//         <Header />
//         <main className='mx-auto'>
//         {children}
//         <Footer />
//         </main>
//       </body>
//     </html>
//   )
// }