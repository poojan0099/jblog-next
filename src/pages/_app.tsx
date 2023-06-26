import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/main.scss'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    )

}
