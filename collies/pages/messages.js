import React from 'react'
import {motion} from 'framer-motion'

function messages() {
  return (
    <motion.div 
    animate={{ x: [-1000, 1000, 0] }}
    // animate={{ rotate: 360 }}
    transition={{ duration: 0.5 }}
    className="text-white align-center justify-center flex  h-[100vh] position-absolute w-[100vw]">
      {/* <div>
        <Image src="https://www.istockphoto.com/illustrations/book-club" height="100vh" width="100vh"/>
      </div> */}
      <div className="mt-[400px]">
         ## OOPS NO MESSAGES YET 😕
      </div>
       </motion.div>
  )
}

export default messages