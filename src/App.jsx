import React from 'react'
import './index.css'
import { motion } from "motion/react" 

const App = () => {
  return (
    <div>
      <motion.div 
      animate={{
        x:[0,800,800,0,0],
        y:[0,0,200,200,0],
        rotate: [0,360,0,-360,0],
      }}
      transition={{
        duration: 4,
        delay:1,
        repeat: Infinity,
        ease:'anticipate'
      }}
      className="box">
        Box Hu
      </motion.div>

      <motion.img src="https://tcrf.net/images/9/9c/Jerryescapeunusedtomrun.gif" 
        initial={{
          x: 800
        }}
        animate={{
          x:200,
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease:'anticipate'
        }}
        className='tombhai'
      />

      <motion.div 
      initial={{
        x: 200
      }}
      animate={{
        x:100,
        rotate: 360,
      }}
      transition={{
        duration: 1,
        delay:1,
        repeat: 2,
      }}
      className="circle">

        Circle Animation  
      </motion.div>
    </div>
  )
}

export default App