
import { Metadata } from 'next'
import HomeContainer from '@/components/Home/HomeContainer'

export const metadata: Metadata = {
  title: 'Ram Singh - Portfolio',
}

export default function Home() {
  return (
    <main>
      <HomeContainer />
    </main>
  )
}
