import React from 'react'
import SettingLayout from '../../components/setting/SettingLayout';

export default function SettingPage() {
    console.log(window.location.pathname);
  return (
    <div className="min-h-screen p-10 w-full">
          <div className=" mx-auto space-y-6">
            <SettingLayout />
          </div>
        </div>
  )
}
