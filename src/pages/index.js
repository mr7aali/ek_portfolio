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
import { useState } from 'react'
import VideoPlayModal from '@/components/sheared/VideoPlayModal'
import { useScroll, motion } from "framer-motion"


export default function Home() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (

    <div>
      <motion.div
        className="progress-bar"
        style={{ border:'5px solid #ff0055',scaleX: scrollYProgress,zIndex:2000 }}  
      />

      <Navbar />
      <HomePageBanner />
      <HomeIntro />
      <MixedProject />
      <Description />
      <MoreVideoAdded />
      <ClintSection />
      <ClintSectionWithSponsore />
      <LestsTalk />
      <FreequentlyAsked />
      <Footer />
      <VideoPlayModal open={open} setOpen={setOpen} />


    </div>
  )
}
