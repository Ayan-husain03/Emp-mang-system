import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashbord from './components/Dashbord/EmployeeDashbord'
import AdminDashboard from './components/Dashbord/AdminDashboard'

function App() {
  return (
    <div className=''>
      {/* <Login /> */}
      {/* <EmployeeDashbord /> */}
      <AdminDashboard />
    </div>
  )
}

export default App