import { useLocation, useParams } from 'react-router-dom';
import DatePickerInput from '../../components/ui/DatePickerInput';
import OnboardingSteps from "../../components/onboarding/OnboardingSteps"
const OnboardingPage = () => {
  const location = useLocation();
  const user = location.state?.user;
  const {id} = useParams();
  return (
    <div>
      <div className="max-w-full mx-auto p-8">
          <OnboardingSteps id={id} user={user}/>
      </div>
    </div>
  );
};
export default OnboardingPage;
