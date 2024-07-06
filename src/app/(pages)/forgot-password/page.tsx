"use client";
import { forgotApi, resetApi } from "@/api/apiService";
import { forgotFormSchema } from "@/helper/validationSchema";
import { forgotFormInput } from "@/utils/types";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [mailSent, setMailSent] = useState(false);

  const initialValues = {
    email: "",
    password: "",
    rePassword: "",
    otp: "",
  };

  const handleForgot = (mail: string) => {
    try {
      setLoading(true);
      const userData = {
        email: mail,
        otpType: "email",
      };
      forgotApi(userData)
        .then((responseData) => {
          if (responseData?.status) {
            toast.success(responseData?.message);
            setMailSent(true);
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

  const handleReset = (value: forgotFormInput, { resetForm }: any) => {
    try {
      setLoading(true);
      const userData = {
        email: value?.email,
        password: value?.password,
        confirmPassword: value?.rePassword,
        otp: value?.otp,
      };
      resetApi(userData)
        .then((responseData) => {
          if (responseData?.status) {
            resetForm();
            setMailSent(false);
            toast.success(responseData?.message);
            router.push("/login");
          }
          if (responseData?.error) {
            toast.error(responseData?.validation?.otp || responseData?.message);
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={forgotFormSchema}
        onSubmit={handleReset}
      >
        {({
          handleSubmit,
          values,
          errors,
          handleChange,
          handleBlur,
          touched,
        }) => (
          <form onSubmit={handleSubmit} method="post">
            <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto mt-5 mb-5">
              <h6 className="mb-2 text-lg font-semibold text-center text-default-600 ">
                {" "}
                RESET PASSWORD
              </h6>
              <p className="text-center">
                To reset your password, enter the email address registered with
                us.
              </p>
              <div className="flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
                  <div className="input-item flex space-x-2.5 mb-5 mt-5">
                    <div className="w-full h-full">
                      <div className="w-full h-full input-com">
                        <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                          Email*
                        </label>
                        <div className="relative w-full h-full overflow-hidden border input-wrapper border-gray-border ">
                          <input
                            className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                            type="email"
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
                    </div>
                  </div>
                  {mailSent && (
                    <>
                      <div className="input-item flex space-x-2.5 mb-5 mt-5">
                        <div className="w-full h-full">
                          <div className="w-full h-full input-com">
                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                              Password*
                            </label>
                            <div className="relative w-full h-full overflow-hidden border input-wrapper border-gray-border ">
                              <input
                                className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                                type="password"
                                name="password"
                                placeholder="● ● ● ● ● ●"
                                value={values?.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors?.password && touched?.password ? (
                              <div className="errorMessage">
                                {errors.password}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="input-item flex space-x-2.5 mb-5 mt-5">
                        <div className="w-full h-full">
                          <div className="w-full h-full input-com">
                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                              Confirm Password*
                            </label>
                            <div className="relative w-full h-full overflow-hidden border input-wrapper border-gray-border ">
                              <input
                                className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                                type="password"
                                name="rePassword"
                                placeholder="● ● ● ● ● ●"
                                value={values?.rePassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors?.rePassword && touched?.rePassword ? (
                              <div className="errorMessage">
                                {errors.rePassword}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="input-item flex space-x-2.5 mb-5 mt-5">
                        <div className="w-full h-full">
                          <div className="w-full h-full input-com">
                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                              OTP*
                            </label>
                            <div className="relative w-full h-full overflow-hidden border input-wrapper border-gray-border ">
                              <input
                                className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                                type="text"
                                name="otp"
                                placeholder="● ● ● ● ● ●"
                                value={values?.otp}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                            </div>
                            {errors?.otp && touched?.otp ? (
                              <div className="errorMessage">{errors.otp}</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mt-3 flex justify-between items-center">
                    <div className="flex space-x-2">
                      {!mailSent && (
                        <button
                          onClick={() =>
                            values?.email && handleForgot(values?.email)
                          }
                          type="button"
                          className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white transition-all border  border-[#0D4C92] duration-200 bg-[#0D4C92]  hover:text-[#0D4C92]  hover:bg-[#ef9bc2]"
                        >
                          {loading ? "Loading" : "Reset"}
                        </button>
                      )}
                      {mailSent && (
                        <button
                          type="submit"
                          className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white transition-all border  border-[#0D4C92] duration-200 bg-[#0D4C92]  hover:text-[#0D4C92]  hover:bg-[#ef9bc2]"
                        >
                          {loading ? "Loading" : "Reset Password"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ForgotPassword;
