import React, { useRef, useState, useEffect } from 'react'
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

      <motion.div 
        drag // pakad ke kahin bhi fek do

        whileDrag={{
          rotate:45
        }}
        dragConstraints={{
          left:0,
          top:0,
          right:1000,
          bottom:500
        }}
        // dragDirectionLock={true} //ek hi direction me jaega
        whileHover={{
          backgroundColor:"green"
        }}
        whileTap={{
          scale:0.8
        }}
      className="anotherbox">
        mujhe uthao aur feko
      </motion.div>
    </div>
  )
}

export default App