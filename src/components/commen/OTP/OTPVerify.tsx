"use client";
import { forgotApi, resendOtpApi, verifyOtpApi } from "@/api/apiService";
import { OTPFormSchema, forgotFormSchema } from "@/helper/validationSchema";
import { otpFormInput } from "@/utils/types";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const OTPVerify = (props: any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    otp: "",
  };
  const handleOTP = (data: otpFormInput, { resetForm }: any) => {
    try {
      setLoading(true);
      const userData = {
        otp: data.otp,
        email: props?.userMail,
        otpType: "email",
      };
      verifyOtpApi(userData)
        .then((responseData) => {
          if (responseData?.status) {
            toast.success(responseData?.message);
            props?.selectPage(props?.selectPrePage);
            resetForm();
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

  const handleResendOTP = () => {
    try {
      setLoading(true);
      const userData = {
        email: props?.userMail,
        otpType: "email",
        userId: props?.userId,
      };
      resendOtpApi(userData)
        .then((responseData) => {
          if (responseData?.status) {
            toast.success(responseData?.message);
            router.push("/login");
          }
          if (responseData?.error) {
            toast.error(
              responseData?.validation?.email || responseData?.message
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
      validationSchema={OTPFormSchema}
      onSubmit={handleOTP}
    >
      {({
        handleSubmit,
        values,
        errors,
        handleChange,
        handleBlur,
        touched,
      }) => (
        <form onSubmit={handleSubmit}>
          <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto mt-5 mb-5">
            <h6 className="mb-2 text-lg font-semibold text-center text-default-600 ">
              {" "}
              OTP
            </h6>
            <p className="text-center">
              To reset your password, enter the OTP sent to the email address
              registered with us.
            </p>
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
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
                          placeholder="123456"
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
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white transition-all border  border-[#0D4C92] duration-200 bg-[#0D4C92]  hover:text-[#0D4C92]  hover:bg-[#ef9bc2]"
                    >
                      {loading ? "Loading" : "Verify"}
                    </button>
                    <button
                      onClick={() => handleResendOTP()}
                      type="button"
                      className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white transition-all border  border-[#0D4C92] duration-200 bg-[#0D4C92]  hover:text-[#0D4C92]  hover:bg-[#ef9bc2]"
                    >
                      {"Resend"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      )}
    </Formik>
  );
};

export default OTPVerify;
