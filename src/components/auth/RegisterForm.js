import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Loader } from "lucide-react";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

export default function RegiterForm({
  onSubmit,
  isLoading,
  error
}) {
  const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const role = query.get("role");
  console.log(role);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const handleFormSubmit = (data) => {
  //   data.role = role || "USER";
  //   console.log(data);
  //   onSubmit(data).then(() => {onRegisterSuccess()});

  // };
  const handleFormSubmit = async (data) => {
    data.role = role || "USER";
    try {
      const result = await onSubmit(data); // Chờ đợi khi đăng ký thành công
      if(result) reset(); // Nếu thành công, xóa form

      //onRegisterSuccess(); // Nếu thành công, gọi thông báo và chuyển trang
    } catch (error) {
      console.log("Register error: ", error);
      // Bạn có thể xử lý thông báo lỗi tại đây nếu cần
    }
  };
  // Show error message if exists
  useEffect(() => {
    if (error) {
      console.log("Register error: ", error);
      toast.error( `${error}` || "Registration failed");
    }
  }, [error]);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="./medical-logo.png"
            className="mx-auto h-[120px] w-[100px]"
          />
          <h2 className="mt-1 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="fname"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  {...register("fname", {
                    required: "Name is required.",
                  })}
                  id="fname"
                  name="fname"
                  type="text"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.fname && (
                  <span className="text-red-600 text-sm">
                    {errors.fname.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email", {
                    required: "Email is required.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Email is invalid.",
                    },
                  })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {errors.email && (
                  <span className="text-red-600 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  {...register("password", {
                    required: "Password is required.",
                  })}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                {/* Nút hiển thị mật khẩu */}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showPassword ? (
                    // Biểu tượng con mắt mở
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.25c1.5-2.05 3.74-3.75 6.52-3.75s5.01 1.7 6.52 3.75M20.02 15.75c-1.5 2.05-3.74 3.75-6.52 3.75s-5.01-1.7-6.52-3.75M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  ) : (
                    // Biểu tượng con mắt đóng
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.25c1.5-2.05 3.74-3.75 6.52-3.75s5.01 1.7 6.52 3.75M20.02 15.75c-1.5 2.05-3.74 3.75-6.52 3.75s-5.01-1.7-6.52-3.75M12 6.75V12m-2.25-1.5h4.5"
                      />
                    </svg>
                  )}
                </button>
                {errors.password && (
                  <span className="text-red-600 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              {isLoading ? (
                <button
                  type="submit"
                  className="flex items-center w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <Loader className="h-4 w-4 mr-2 flex-shrink-0 animate-spin" />{" "}
                  Create account...
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create account
                </button>
              )}
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            You have account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
