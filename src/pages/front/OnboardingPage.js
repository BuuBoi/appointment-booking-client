import { useLocation, useParams } from 'react-router-dom';
import React from 'react';
import { useEffect } from 'react';
import DatePickerInput from '../../components/ui/DatePickerInput';
import OnboardingSteps from "../../components/onboarding/OnboardingSteps"
import { useDoctorForm } from '../../context/DoctorFormContext';
import { useUserProfile } from '../../context/userProfileContext';
import { use } from 'react';

const OnboardingPage = () => {
  const location = useLocation();
  // Kiểm tra xem pathname có bắt đầu bằng "/dashboard/doctor" hay không
  const isDashboardDoctorPath = location.pathname.startsWith('/dashboard/doctor');
  const user = location.state?.user;
  const {id} = useParams();
  // const { doctorData, updateDoctorData } = useDoctorForm();
  // const {userProfile} = useUserProfile();
  // useEffect(() => {
  //   if(userProfile){
  //     updateDoctorData(userProfile);
  //   }
  // }, [userProfile]);
  return (
    <div>
      <div className="max-w-full mx-auto p-8">
          {!isDashboardDoctorPath? 
            <OnboardingSteps id={id} user={user}/>
          : <OnboardingSteps id={id} user={user} basePath="/dashboard/doctor/onboarding"/>}
      </div>
    </div>
  );
};
export default OnboardingPage;
