import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  title: 'The Yard | Content Strategy Studio',
  description: 'The Yard is a content strategy studio that helps brands figure out what to say, why it matters, and how to turn it into a long-term content engine.',
  keywords: ['content strategy', 'brand strategy', 'content systems', 'editorial planning', 'content audit'],
  openGraph: {
    title: 'The Yard | Content Strategy Studio',
    description: 'Strategy first. Content second.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
