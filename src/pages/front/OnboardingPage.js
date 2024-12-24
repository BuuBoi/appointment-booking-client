import { useLocation, useParams } from 'react-router-dom';
import DatePickerInput from '../../components/ui/DatePickerInput';

const OnboardingPage = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);
  const id = queryParam.get("id");

  return (
    <div>
      <h2>Welcom Doctor - {id}</h2>
      {/* <OnboardingForm /> */}
      <DatePickerInput />
    </div>
  );
};
export default OnboardingPage;
