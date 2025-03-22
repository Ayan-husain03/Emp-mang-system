import React from 'react'
import { motion } from 'motion/react'


const AllTaskList = () => {
    
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 max-w-screen py-4 px-3 md:px-8 gap-2'>
        <motion.div className='p-5 bg-rose-500 rounded-xl'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='md:text-xl'>New Task</h2>
        </motion.div>
        <motion.div className='p-5 bg-emerald-500 rounded-xl'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='md:text-xl'>New Task</h2>
        </motion.div>
        <motion.div className='p-5 bg-cyan-300 rounded-xl'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='md:text-xl'>New Task</h2>
        </motion.div>
        <motion.div className='p-5 bg-violet-600 rounded-xl'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
            <h2 className='text-3xl font-semibold'>0</h2>
            <h2 className='md:text-xl'>New Task</h2>
        </motion.div>
        
    </div>
  )
}

export default AllTaskList