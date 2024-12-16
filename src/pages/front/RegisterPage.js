import React from 'react'
import RegisterForm from '../../components/auth/RegisterForm'

export default function RegisterPage({onSubmit, isLoading, error, isRegistered}) {
  return (
    <div className="bg-blue-100 min-h-screen py-4">
      <div
        className="grid sm:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto p-4 bg-white border border-gray-200 rouned-lg 
        shadow sm:p-2 md:p-3 dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="hidden md:flex">
            <img src="./login-doctor.jpg" alt = "" className=" object-cover rounded-lg"></img>
        </div>
        <div>
          <RegisterForm onSubmit = {onSubmit} isLoading = {isLoading} error = {error} isRegistered={isRegistered}/>
        </div>
      </div>
    </div>
  )
}
