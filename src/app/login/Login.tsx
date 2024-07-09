"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import bootmAd1 from "../../../public/images/bootm-ad1.png";
import Link from "next/link";
import { Formik } from "formik";
import { loginFormSchema } from "@/helper/validationSchema";
import { loginFormInput } from "@/utils/types";
import { toast } from "react-toastify";
import { bannerApi, loginUserApi } from "@/api/apiService";
import { loginUser } from "@/utils/redux/auth";
import { useDispatch } from "react-redux";
import ImageComponent from "@/components/commen/image/ImageComponent";
import { AnyARecord } from "dns";

const Login = (props: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      const params = { page: "login", pageReference: "top-right" };
      const result = await bannerApi(params);
      if (result?.status) {
        setData(result?.requestedData);
      }
    };
    fetchData();
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };
  const handleLogin = (data: loginFormInput, { resetForm }: any) => {
    try {
      setLoading(true);
      const userData = {
        email: data?.email,
        password: data?.password,
      };
      loginUserApi(userData)
        .then((responseData) => {
          if (responseData?.status) {
            if (!responseData?.requestedData?.isVerified) {
              toast.error("User OTP not verified");
              props?.userId(responseData?.requestedData?.userID);
              props?.userMail(responseData?.requestedData?.email);
              props?.selectPage("otp");
            } else {
              props?.selectPage("login");
              dispatch(loginUser(responseData?.requestedData));
              toast.success(responseData?.message);
              resetForm();
            }
          }
          if (responseData?.error) {
            toast.error(
              responseData?.validation?.email ||
              responseData?.validation?.phone ||
              responseData?.message
            );
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          toast.error(error?.message);
        });
    } catch (error: any) {
      toast.error(error);
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginFormSchema}
      onSubmit={handleLogin}
    >
      {({
        handleSubmit,
        values,
        errors,
        handleChange,
        handleBlur,
        touched,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto mt-5 mb-5">

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 login-wrapper">
              <div className="w-full my-auto">

                {/* section heading  */}
                <div className="flex flex-col justify-between w-full mb-8 title-area">
                  <h1 className="mb-2 text-xl font-medium text-black">Login</h1>
                  <p className="">Do not have an account? <span><Link className="font-medium text-primary hover:text-primary hover:underline" href="/register"> Create here</Link></span>
                  </p>
                </div>

                <div className="input-area mb-[30px]">

                  <div className="w-full h-full mb-5 input-com">
                    <label
                      className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                      htmlFor="email"
                    >
                      Email Address*
                    </label>
                    <div
                      className={`relative w-full h-full overflow-hidden border input-wrapper border-qgray-border ${errors.email && touched.email ? "inputError" : ""
                        }`}
                    >
                      <input
                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="abcd@gmail.com"
                        value={values?.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors?.email && touched?.email ? (
                      <div className="errorMessage">{errors.email}</div>
                    ) : null}
                  </div>


                  <div className="w-full h-full input-com">
                    <label
                      className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                      htmlFor="password"
                    >
                      Password*
                    </label>
                    <div className="relative w-full h-full overflow-hidden border input-wrapper border-qgray-border ">
                      <input
                        placeholder="● ● ● ● ● ●"
                        className={`input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px] ${errors.password && touched.password
                          ? "inputError"
                          : ""
                          }`}
                        type="password"
                        id="password"
                        name="password"
                        value={values?.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors?.password && touched?.password ? (
                      <div className="errorMessage">{errors.password}</div>
                    ) : null}
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-between">

                    <div className="flex items-center mb-6">
                      <input
                        id="link-checkbox"
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="link-checkbox"
                        className=" ms-2 dark:text-gray-800"
                      >
                        Remember me
                      </label>

                    </div>
                    <Link href="/forgot-password" className="font-medium text-black hover:text-primary hover:underline">Forgot Your
                      Password?
                    </Link>
                  </div>
                  <div className="flex items-center w-full gap-5">


                    <button type="submit"
                      className="flex items-center justify-center px-9 py-2.5 max-w-lg text-sm font-bold text-white transition-all border  border-[#0d916d] duration-200 bg-[#0d916d]  hover:text-[#0d916d]  hover:bg-[#d7f0db]">Login</button>
                  </div>
                </div>


                <div className="my-8 after:bg-gray-100 before:bg-gray-100 fo10t-sans text-center font-medium">OR</div>




                <div className="mx-auto flex justify-center mb-5">
                  <button className="text-sm max-w-xs mx-auto  inline-flex items-center cursor-pointer transition ease-in-out duration-300  
        text-center justify-center rounded-md focus:outline-none text-gray-600 bg-gray-100 shadow-sm hover:text-dark hover:bg-gray-300 h-11 w-full">

                    <svg
                      className="w-[20px]"
                      version="1.1"
                      id="fi_300221"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: 'new 0 0 512 512' } as any}
                      xmlSpace="preserve"
                    >
                      <path
                        style={{ fill: '#167EE6' }}
                        d="M492.668,211.489l-208.84-0.01c-9.222,0-16.697,7.474-16.697,16.696v66.715
      c0,9.22,7.475,16.696,16.696,16.696h117.606c-12.878,33.421-36.914,61.41-67.58,79.194L384,477.589
      c80.442-46.523,128-128.152,128-219.53c0-13.011-0.959-22.312-2.877-32.785C507.665,217.317,500.757,211.489,492.668,211.489z"
                      />
                      <path
                        style={{ fill: '#12B347' }}
                        d="M256,411.826c-57.554,0-107.798-31.446-134.783-77.979l-86.806,50.034
      C78.586,460.443,161.34,512,256,512c46.437,0,90.254-12.503,128-34.292v-0.119l-50.147-86.81
      C310.915,404.083,284.371,411.826,256,411.826z"
                      />
                      <path
                        style={{ fill: '#0F993E' }}
                        d="M384,477.708v-0.119l-50.147-86.81c-22.938,13.303-49.48,21.047-77.853,21.047V512
      C302.437,512,346.256,499.497,384,477.708z"
                      />
                      <path
                        style={{ fill: '#FFD500' }}
                        d="M100.174,256c0-28.369,7.742-54.91,21.043-77.847l-86.806-50.034C12.502,165.746,0,209.444,0,256
      s12.502,90.254,34.411,127.881l86.806-50.034C107.916,310.91,100.174,284.369,100.174,256z"
                      />
                      <path
                        style={{ fill: '#FF4B26' }}
                        d="M256,100.174c37.531,0,72.005,13.336,98.932,35.519c6.643,5.472,16.298,5.077,22.383-1.008
      l47.27-47.27c6.904-6.904,6.412-18.205-0.963-24.603C378.507,23.673,319.807,0,256,0C161.34,0,78.586,51.557,34.411,128.119
      l86.806,50.034C148.202,131.62,198.446,100.174,256,100.174z"
                      />
                      <path
                        style={{ fill: '#D93F21' }}
                        d="M354.932,135.693c6.643,5.472,16.299,5.077,22.383-1.008l47.27-47.27
      c6.903-6.904,6.411-18.205-0.963-24.603C378.507,23.672,319.807,0,256,0v100.174C293.53,100.174,328.005,113.51,354.932,135.693z"
                      />
                    </svg>
                    <span className="ml-2">Sign in with Google</span>

                  </button>

                </div>


              </div>
              <div className="hidden md:block">
                <Image src="/imagesNew/ad-100.jpeg" className="object-cover h-full ml-6" width={775} height={400} alt="" />
              </div>
            </div>



          </section>
        </form>
      )}
    </Formik>
  );
};

export default Login;
