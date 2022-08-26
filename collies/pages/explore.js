import React from 'react'
import Widgets from "../components/Widgets";
import { getProviders, getSession, useSession } from "next-auth/react";
import { motion } from "framer-motion"
import { AiFillHtml5 } from "react-icons/ai";
import { GiBrain } from "react-icons/gi"
import { SiGooglecloud } from "react-icons/si"
import { FaChessKnight } from "react-icons/fa"
import Scene from '../components/Scene'
import { MdOutlineSecurity } from "react-icons/md"
import { FaRss } from 'react-icons/fa'
function explore({ trendingResults, followResults, providers }) {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  
  return (
      <div className="flex align-center">
        {/* <motion.pointLight animate={{ x: 2 }} />

        <motion.meshStandardMaterial
    initial="hidden"
    animate="visible"
    variants={variants}
  /> */}

{/* <motion.div
      whileHover={{ scale: 1.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(true)}
    >
      <Scene />
    </motion.div> */}



          {/* <div className="text-white">explore</div> */}
      
          <Widgets className="flex min-h-screen  max-w-[1500px] mx-auto"
          trendingResults={trendingResults}
          followResults={followResults}
        />

<motion.div 
   animate={{ y: [-600, 600, 0] }}
   transition={{ duration: 2.0 }}
className="justify-center h-full align-center w-[75%] ">
        <div class="grid grid-cols-4 gap-4 col-span-3 pt-[30px] ">
          <div className='border-4 rounded-2xl flex justify-center   p-[10px] cursor-pointer '><AiFillHtml5/>
 <div>web dev</div>
  </div>
          <div className='border-4 rounded-2xl flex justify-center p-[10px]  cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
          <div>Data analytics</div>
</div>
          <div className='border-4 rounded-2xl flex justify-center p-[10px] cursor-pointer'>
    <GiBrain/>
    <div>machine learning</div>
 </div>
          <div className='border-4 rounded-2xl flex justify-center p-[10px] cursor-pointer' >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <div> competitive programming </div>
 </div>
          <div className='border-4 rounded-2xl flex justify-center p-[10px] cursor-pointer' ><SiGooglecloud/>
  <div>cloud computing</div>
</div>
          <div className='border-4 rounded-2xl flex justify-center p-[10px] cursor-pointer'>
            <FaChessKnight />
            <div>Game Development</div>
 </div>
          <div className='border-4 rounded-2xl flex justify-center p-[10px] cursor-pointer'>
            <MdOutlineSecurity />
            <div>cyber security</div>
 </div>
          <div className='border-4 rounded-2xl  flex justify-center p-[10px] cursor-pointer'>
            <FaRss />
            <div>Networking</div>
 </div>

</div>
      {/* <motion.div 
       animate={{ y: [-600, 600, 0] }}
       transition={{ duration: 2.0 }}
      className="text-white text-center top-3 mt-[400px]"> 

        #EXPLORE YOURSELF
      </motion.div> */}

</motion.div>
          
      </div>
  )
}

export default explore


export async function getServerSideProps(context) {
    const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
      (res) => res.json()
    );
    const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
      (res) => res.json()
    );
    const providers = await getProviders();
    const session = await getSession(context);
  
    return {
      props: {
        trendingResults,
        followResults,
        providers,
        session,
      },
    };
  }