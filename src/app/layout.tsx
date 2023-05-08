import { Layout } from '@/common/components/Layout'
import { Providers } from './providers'
import '@styles/globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
    </html>
  )
}
