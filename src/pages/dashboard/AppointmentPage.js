import React from 'react'
import PanelHeader from './../../components/Dashboard/appointment/PanelHeader'
import ListPanel from './../../components/Dashboard/appointment/ListPanel'
import { Outlet } from 'react-router-dom'

export default function AppointmentPage() {
  return (
    <div>
        <PanelHeader />
        <div className='grid grid-cols-2'>
            <div>
                <ListPanel />
            </div>
            <Outlet />
        </div>
    </div>
  )
}
