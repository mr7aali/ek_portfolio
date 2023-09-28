import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/sheared/NavBar'
import HomePageBanner from '@/components/sheared/HomePageBanner'
import HomeIntro from '@/components/sheared/HomeIntro'
import MixedProject from '@/components/sheared/MixedProject'
import Description from '@/components/sheared/Description'
import MoreVideoAdded from '@/components/sheared/MoreVideoAdded'
import ClintSection from '@/components/sheared/ClintSection'
import ClintSectionWithSponsore from '@/components/sheared/ClintSectionWithSponsore'
import LestsTalk from '@/components/sheared/LestsTalk'
import FreequentlyAsked from '@/components/sheared/FreequentlyAsked'
import Footer from '@/components/sheared/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePageBanner />
      <HomeIntro />
      <MixedProject />
      <Description />
      <MoreVideoAdded />
      <ClintSection />
      <ClintSectionWithSponsore/>
      <LestsTalk/>
      <FreequentlyAsked/>
      <Footer/>
    </div>
  )
}
