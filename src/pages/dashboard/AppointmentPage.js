import React, { useEffect } from 'react'
import PanelHeader from './../../components/Dashboard/appointment/PanelHeader'
import ListPanel from './../../components/Dashboard/appointment/ListPanel'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useUserProfile } from '../../context/userProfileContext'
import { getAppointmentByDoctorId} from './../../services/appointment'

export default function AppointmentPage() {
  const { userProfile } = useUserProfile();
  const doctorId = userProfile?.id;
  const [appointments, setAppointments] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAppointmentByDoctorId(doctorId);
        setAppointments(response);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchData();
  }, [doctorId]);


  return (
    <div>
        <PanelHeader />
        <div className='grid grid-cols-2'>
            <div>
                <ListPanel appointments={appointments}/>
            </div>
            <Outlet />
        </div>
    </div>
  )
}
