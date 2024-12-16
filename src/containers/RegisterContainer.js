import RegisterPage from "../pages/front/RegisterPage";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const mapStateToProps = (state) => {
  return {
    user: state.register.user,
    isLoading: state.register.loading,
    error: state.register.error,
  };
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(actions.register(data)),
});


const RegisterContainer = ({onSubmit, isLoading, error,isRegistered }) => {
  
  const navigate = useNavigate();
  // const handleRegisterSuccess = () => {
  //   toast.success("Đăng ký thành công!");
  //   navigate("/login");
  // };
  useEffect(() => {
    if (isRegistered) {
      toast.success("Đăng ký thành công!");
      navigate("/login");
    }
  }, [isRegistered]);
  return <RegisterPage onSubmit = {onSubmit} isLoading = {isLoading} error = {error} isRegistered={isRegistered} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);