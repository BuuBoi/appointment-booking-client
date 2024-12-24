import RegisterPage from "../pages/front/RegisterPage";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";


const mapStateToProps = (state) => {
  return {
    user: state.register.user,
    isLoading: state.register.loading,
    error: state.register.error,
    isRegistered: state.register.isRegistered,
  };
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(actions.register(data)),
});


const RegisterContainer = ({onSubmit, isLoading, error,isRegistered, user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const role = query.get("role");
  // const handleRegisterSuccess = () => {
  //   toast.success("Đăng ký thành công!");
  //   navigate("/login");
  // };
  useEffect(() => {
    if (isRegistered) {
      toast.success("Đăng ký thành công!");
      if(role === "DOCTOR") {
        navigate(`/onboarding/${user.id}`, {
          state: {
            user: user, 
          }
        });
      } else {
        navigate("/login");
    }}
  }, [isRegistered]);
  return <RegisterPage onSubmit = {onSubmit} isLoading = {isLoading} error = {error} isRegistered={isRegistered} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);