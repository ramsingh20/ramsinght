
import { Metadata } from 'next'
import Hero from '@/components/Home/Hero'
import Work from '@/components/Home/work'
import TimeLine from '@/components/Home/timeline'
import GlobalReach from '@/components/Home/GlobalReach'
import Faq from '@/components/Home/Faq'

export const metadata: Metadata = {
  title: 'Ram Singh - Portfolio',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <GlobalReach/>
      <TimeLine />
      <Faq/>
    </main>
  )
}
