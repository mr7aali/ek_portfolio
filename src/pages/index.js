import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/sheared/NavBar'
import HomePageBanner from '@/components/sheared/HomePageBanner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePageBanner/>
    </div>
  )
}
