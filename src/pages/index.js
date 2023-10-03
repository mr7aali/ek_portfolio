import dynamic from "next/dynamic";

const  ClintSectionWithSponsore= dynamic(()=>import("@/components/HomePage/ClintSectionWithSponsore"));
const  ClintSection= dynamic(()=>import("@/components/HomePage/ClintSection"));
const Description = dynamic(() => import("@/components/HomePage/Description"));
const FreequentlyAsked = dynamic(() => import("@/components/HomePage/FreequentlyAsked"));
const HomeIntro = dynamic(() => import("@/components/HomePage/HomeIntro"));
const HomePageBanner = dynamic(() => import("@/components/HomePage/HomePageBanner"));
const LestsTalk = dynamic(() => import("@/components/HomePage/LestsTalk"));
const LetsTalk2 = dynamic(() => import("@/components/HomePage/LestsTalk2"));
const MixedProject = dynamic(() => import("@/components/HomePage/MixedProject"));
const MoreVideoAdded = dynamic(() => import("@/components/HomePage/MoreVideoAdded"));
const VideoPlayModal = dynamic(() => import("@/components/HomePage/VideoPlayModal"));
const Footer = dynamic(() => import("@/components/sheared/Footer"));
const HeadTag = dynamic(() => import("@/components/sheared/HeadTag"));
const NavBar = dynamic(() => import("@/components/sheared/NavBar"));



// import Description from "@/components/HomePage/Description";
// import FreequentlyAsked from "@/components/HomePage/FreequentlyAsked";
// import HomeIntro from "@/components/HomePage/HomeIntro";
// import HomePageBanner from "@/components/HomePage/HomePageBanner";
// import LestsTalk from "@/components/HomePage/LestsTalk";
// import LetsTalk2 from "@/components/HomePage/LestsTalk2";
// import MixedProject from "@/components/HomePage/MixedProject";
// import MoreVideoAdded from "@/components/HomePage/MoreVideoAdded";
// import VideoPlayModal from "@/components/HomePage/VideoPlayModal";
// import Footer from "@/components/sheared/Footer";
// import HeadTag from "@/components/sheared/HeadTag";
// import NavBar from "@/components/sheared/NavBar";


import { motion, useScroll } from "framer-motion";
import { useState } from "react";






export default function Home() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (

    <div>
      <HeadTag title={'Home'} descriptionContent={"Tech products home page"} />
      <motion.div
        className="progress-bar"
        style={{ border: '5px solid #ff0055', scaleX: scrollYProgress, zIndex: 2000 }}
      />

      <NavBar />
      <HomePageBanner />
      <HomeIntro />
        <MixedProject />
        <Description />
        <MoreVideoAdded />
        <ClintSection />
        <ClintSectionWithSponsore />
        {/* <LestsTalk />   */}
                   {/* /this component has some error */}
        <div style={{border:"1px solid red"}} className="h-[31px]">
        </div>
        {/* <LetsTalk2/>   */}
        <FreequentlyAsked />
        <Footer />
        <VideoPlayModal open={open} setOpen={setOpen} />


    </div>
  )
}
