import { motion } from 'framer-motion'
import React from 'react'

function Arohance() {
  return (
    <div className='w-full pt-1 bg-zinc-950 overflow-hidden'>
      <motion.div 
        className='flex'
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          whiteSpace: 'nowrap',
          willChange: 'transform',
        }}
      >
        {[...Array(8)].map((_, i) => (
          <div key={i} className='flex items-center px-4'>
            <span className='text-[15rem] font-bold text-white gap-4 leading-none select-none'>
              Arohance
            </span>
            
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Arohance