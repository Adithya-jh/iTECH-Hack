import React from 'react'
import Widgets from "../components/Widgets";
import { getProviders, getSession, useSession } from "next-auth/react";
import { motion } from "framer-motion"

import Scene from '../components/Scene'

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

      <motion.div 
       animate={{ y: [-600, 600, 0] }}
       transition={{ duration: 2.0 }}
      className="text-white text-center top-3 mt-[400px]"> 

        #EXPLORE YOURSELF
      </motion.div>

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