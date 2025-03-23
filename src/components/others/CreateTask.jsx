import React from 'react'
import { motion } from 'motion/react';

const CreateTask = () => {
  return (
    <div className="p-2 shadow-2xl w-full md:w-3/4 mx-auto my-2">
    <form className="p-2 shadow-2xl grid md:grid-cols-2 md:space-x-5 w-full mx-auto">
      <div className="flex flex-col">
        <label htmlFor="task-title">Task title</label>
        <input
          type="text"
          placeholder="Enter task title"
          className="border border-blue-600 p-2 rounded-xl outline-0 my-2 focus:ring-2 focus:ring-blue-500 "
        />
        <label htmlFor="task-description">Task description</label>
        <textarea
          placeholder="Enter task description"
          className="border border-blue-600 p-2 rounded-xl outline-0 my-2 focus:ring-2 focus:ring-blue-500 "
          cols={30}
          rows={5}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          className="border border-blue-600 p-2 rounded-xl outline-0 my-2 focus:ring-2 focus:ring-blue-500 "
        />
        <label htmlFor="">Assign to</label>
        <input
          type="text"
          placeholder="Enter employee name"
          className="border border-blue-600 p-2 rounded-xl outline-0 my-2 focus:ring-2 focus:ring-blue-500 "
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          className="border border-blue-600 p-2 rounded-xl outline-0 my-2 focus:ring-2 focus:ring-blue-500 bg-slate-800"
        >
          <option className='' value="web">Web</option>
          <option value="mobile">Mobile</option>
          <option value="desktop">Desktop</option>
        </select>
        <motion.button className="mt-2 bg-blue-500 text-white p-2 rounded-xl"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        >
          Create Task
        </motion.button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask