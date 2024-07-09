"use client";
import React, { useState } from "react";
import Image from "next/image";
// import bootmAd1 from "../../../public/images/bootm-ad1.png";
// import bootmAd1 from "../../../../public/imagesNew/"

import Link from "next/link";
import { Formik } from "formik";
import { registerFormSchema } from "@/helper/validationSchema";
import { registerFormInput } from "@/utils/types";
import { registerUserApi } from "@/api/apiService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Register = (props: any) => {

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    referralCode: "",
    password: "",
    rePassword: "",
    aggreeWithTermsAndCondions: false,
    otpType: "email"
  };

  const handleRegister = async (
    data: registerFormInput,
    { resetForm }: any
  ) => {
    try {
      if (data?.aggreeWithTermsAndCondions) {
        setLoading(true);
        const userData = {
          firstName: data?.name,
          email: data?.email,
          phone: data?.phone,
          password: data?.password,
          confirmPassword: data?.rePassword,
          otpType: "email",
          aggreeWithTermsAndCondions: data?.aggreeWithTermsAndCondions
        };
        registerUserApi(userData)
          .then((responseData) => {
            if (responseData?.status) {
              props?.userId(responseData?.requestedData?.userId);
              props?.userMail(responseData?.requestedData?.email);
              toast.success(responseData?.message);
              resetForm();
              props?.selectPage("otp");
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
      }
    } catch (error: any) {
      toast.error(error);
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerFormSchema}
      onSubmit={handleRegister}
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
                {/* section heading */}
                <div className="flex flex-col justify-between w-full mb-8 title-area">
                  <h1 className="mb-2 text-xl font-medium text-black">
                    Create an Account
                  </h1>
                  <p className="">
                    Already have an Account?{" "}
                    <span>
                      <Link
                        className="font-medium text-primary hover:text-primary hover:underline"
                        href="/login"
                      >
                        {" "}
                        Log In
                      </Link>
                    </span>
                  </p>
                </div>
                <div className="input-area">
                  <div className="flex flex-col mb-5 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                    {/* first name */}
                    <div className="w-full h-full input-com">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        htmlFor="fname"
                      >
                        Name*
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper border-qgray-border">
                        <input
                          placeholder="Name"
                          className={`input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px] ${errors.name && touched.name ? "inputError" : ""
                            }`}
                          type="text"
                          id="fname"
                          name="name"
                          value={values?.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors?.name && touched?.name ? (
                        <div className="errorMessage">{errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="flex flex-col mb-5 space-y-5 sm:flex-row sm:space-y-0 sm:space-x-5">
                    {/* email */}
                    <div className="w-full h-full input-com">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        htmlFor="email"
                      >
                        Email Address*
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper border-qgray-border ">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="abcd@gmail.com"
                          value={values?.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px] ${errors.email && touched.email ? "inputError" : ""
                            }`}
                        />
                      </div>
                      {errors?.email && touched?.email ? (
                        <div className="errorMessage">{errors.email}</div>
                      ) : null}
                    </div>
                    {/* phone number */}
                    <div className="w-full h-full input-com">
                      <label
                        htmlFor="phone-input"
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                      >
                        Phone number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 70.95 71.08"
                          >
                            <path d="M11.75,0c2,0,3.99,0,5.99,0,3.19,0,5.01,1.42,5.56,4.54.83,4.8,1.56,9.62,2.3,14.43.27,1.78-.26,3.38-1.6,4.57-1.76,1.57-3.63,3.02-5.45,4.53-.52.43-1.03.89-1.54,1.35-.37.34-.42.68-.15,1.16,5.16,9.27,12.27,16.6,21.44,21.92,1.51.88,1.49.84,2.81-.31,1.21-1.05,2.5-2.02,3.74-3.04.84-.7,1.67-1.42,2.48-2.16,1.44-1.33,3.07-1.84,5.03-1.51,4.77.82,9.55,1.53,14.31,2.37,2.63.46,4.14,2.1,4.2,4.76.1,4.53.12,9.07-.03,13.6-.11,3.14-2.08,4.87-5.24,4.88-3.63.01-7.24-.35-10.82-.96-8.81-1.51-17.02-4.62-24.5-9.52C16.15,51.34,6.83,38.54,2.34,22.23.86,16.87.1,11.4,0,5.84c-.01-.72.04-1.47.23-2.17C.82,1.41,2.69.08,5.25,0c.05,0,.1,0,.15,0,2.12,0,4.23,0,6.35,0Z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="phone-input"
                          aria-describedby="helper-text-explanation"
                          className={`bg-white border text-gray-900 text-sm block w-full h-[50px] ps-10 p-2.5  ${errors.name && touched.name ? "inputError" : ""
                            }`}
                          placeholder="123-456-7890"
                          name="phone"
                          value={values?.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors?.phone && touched?.phone ? (
                        <div className="errorMessage">{errors.phone}</div>
                      ) : null}
                    </div>
                  </div>
                  {/* address */}
                  <div className="mb-5 input-item">
                    <div className="w-full h-full input-com">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        htmlFor="address"
                      >
                        Referral Code
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper border-qgray-border ">
                        <input
                          placeholder="Referral Code"
                          className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]"
                          type="text"
                          id="address"
                          name="referralCode"
                          value={values?.referralCode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-[30px]">
                    {/* password */}
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
                          className={`input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px] ${errors.name && touched.name ? "inputError" : ""
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
                    {/* re-enter password */}
                    <div className="w-full h-full input-com">
                      <label
                        className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                        htmlFor="repassword"
                      >
                        Re-enter Password*
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper border-qgray-border ">
                        <input
                          placeholder="● ● ● ● ● ●"
                          className={`input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px] ${errors.name && touched.name ? "inputError" : ""
                            }`}
                          type="password"
                          id="repassword"
                          name="rePassword"
                          value={values?.rePassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors?.rePassword && touched?.rePassword ? (
                        <div className="errorMessage">{errors.rePassword}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center mb-6">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded ${errors.name && touched.name ? "inputError" : ""
                        }`}
                      name="aggreeWithTermsAndCondions"
                      checked={values?.aggreeWithTermsAndCondions}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label
                      htmlFor="link-checkbox"
                      className=" ms-2 dark:text-gray-800"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        className="font-medium text-primary hover:underline"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                  {errors?.aggreeWithTermsAndCondions && touched?.aggreeWithTermsAndCondions ? (
                    <div className="relative -top-2.5 errorMessage">
                      {errors.aggreeWithTermsAndCondions}
                    </div>
                  ) : null}
                  <div className="flex items-center w-full gap-5">
                    <button
                      type="submit"
                      // href="login.html"
                      className="flex items-center justify-center px-9 py-2.5 max-w-lg text-sm font-bold text-white transition-all border  border-[#0D4C92] duration-200 bg-[#0D4C92]  hover:text-[#0D4C92]  hover:bg-[#ef9bc2]"
                    >
                      {loading ? "Loading" : "Create Account"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                {/* <Image
                  src={bootmAd1}
                  className="object-cover h-full ml-6"
                  alt=""
                /> */}
              </div>
            </div>
          </section>
        </form>
      )}
    </Formik>
  );
};

export default Register;
