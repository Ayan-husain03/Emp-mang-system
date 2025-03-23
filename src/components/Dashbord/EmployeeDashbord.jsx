import React from 'react'
import Header from '../others/Header'
import AllTaskList from '../others/AllTaskList'
import EmpTaskList from '../TaskList/EmpTaskList'

const EmployeeDashbord = () => {
  return (
    <div className='bg-slate-800 min-h-screen text-white '>
      <Header />
      <AllTaskList />
      <EmpTaskList />
    </div>
  )
}

export default EmployeeDashbord