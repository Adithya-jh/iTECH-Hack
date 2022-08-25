import { signIn } from "next-auth/react";
import Image from "next/image";
// import World from '../World/world';
import {useState} from "next"
import hour from './assets/hour.png'
import rr from './assets/rr.png'
import { motion } from "framer-motion"

function Login({ providers }) {

  return (

    // <div className="flex flex-col items-center space-y-20 pt-48 justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[100vh]">
    <div className="flex flex-col items-center space-y-20 pt-48 justify-center bg-[url('./assets/rr.png')]">
      {/* <Image
        src={rr}
        width={300}
        height={150}
        objectFit="contain"
        className="poistion-absolute top-0 left-0 h-[100vh] w-[100vh] z-[-10]"
      /> */}

      
      <motion.div
        // animate={{ rotate: 360 }}
        animate={{ x: [-600, 600, 0] }}
        transition={{ duration: 1.0 }}
     className="text-[30px] text-center text-bold font-sans text-[#ffffff] "> 
     THE <span className="text-[#9981dd] font-BasementGrotesque">SOCIAL </span>NETWORK 
     <div className="text-[white] text-[10px]"># still more to style</div>

     </motion.div>

     {/* <motion.circle cx={500} animate={{ cx: [null, 100] }} className="bg-white"/> */}
   
      <div className="flex flex-col space-y-7 ">
       
        {
        Object.values(providers).map((provider) => (
          <motion.div key={provider.name}
          whileHover={{
            scale: 1.5,
            transition: { duration: 0.5 },
          }}
          >
            {/* https://devdojo.com/tailwindcss/buttons#_ */}
            <button
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#905ffb] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Sign in with {provider.name}
              </span>
            </button>
          </motion.div>
        ))}

        
      </div>
    </div>
  );
}

export default Login;
