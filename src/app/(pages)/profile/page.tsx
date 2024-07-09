"use client";
import React, { useEffect, useState } from "react";
import { getProfile, updateProfile } from "@/api/apiService";
import { Formik } from "formik";
import { myProfileFormSchema } from "@/helper/validationSchema";
import { myProfileInput } from "@/utils/types";
import { toast } from "react-toastify";

const Profile = () => {
  const [initialValues, setInitialValues] = useState<myProfileInput>({
    email: "",
    firstName: "",
    phone: ""
  });
  const [loading, setLoading] = useState(false);
  const [refetch, setRefetch] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProfile();
      if (result?.status) {
        setInitialValues({
          email: result.requestedData.email,
          firstName: result.requestedData.firstName,
          phone: result.requestedData.phone,
        });
        setRefetch(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  const handleUpdateProfile = (value: myProfileInput, { resetForm }: any) => {
    try {
      setLoading(true);
      const userData = {
        email: value?.email,
        firstName: value?.firstName,
        phone: value?.phone
      };
      updateProfile(userData)
        .then((responseData) => {
          if (responseData?.status) {
            resetForm();
            toast.success(responseData?.message);
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
    <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto mt-5 mb-10">
      <h2 className="text-2xl text-center font-bold text-[#111111] sm:text-3xl ">
        My <span className="text-[#65b54c]">Profile</span>
      </h2>

      <div className="flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
          <div className="mt-3 flex justify-end items-center">
            <div className="flex space-x-2">
              <a
                className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-center text-[#65b54c] border border-[#65b54c] transition-all duration-200 hover:text-[#65b54c] hover:bg-[#d7f0db]"
                href="change_password.html"
              >
                Change Password
              </a>
            </div>
          </div>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={myProfileFormSchema}
            onSubmit={handleUpdateProfile}
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
                <div className="input-item flex space-x-2.5 mb-5 mt-3">
                  <div className="w-full h-full">
                    <div className="w-full h-full input-com">
                      <label className="input-label capitalize block mb-2 text-gray text-[13px] font-normal">
                        Name
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper !border-gray-300 !dark:border-gray-400">
                        <input
                          className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                          type="text"
                          name="firstName"
                          placeholder="Name"
                          value={values?.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="input-item flex space-x-2.5 mb-5 mt-5">
                  <div className="w-full h-full">
                    <div className="w-full h-full input-com">
                      <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                        Email*
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper border-gray-border">
                        <input
                          className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                          type="email"
                          name="email"
                          placeholder="abc@gmail.com"
                          value={values?.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="input-item flex space-x-2.5 mb-5 mt-5">
                  <div className="w-full h-full">
                    <div className="w-full h-full input-com">
                      <label className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                        Phone Number*
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper border-gray-border">
                        <input
                          className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          value={values?.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          disabled={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <a
                      className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-center text-[#65b54c] border border-[#65b54c] transition-all duration-200 hover:text-[#65b54c] hover:bg-[#d7f0db]"
                      href="re-turn.html"
                    >
                      Cancel
                    </a>
                    <button
                      className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white transition-all border border-[#65b54c] duration-200 bg-[#65b54c] hover:text-[#65b54c] hover:bg-[#d7f0db]"
                      type="submit"
                      disabled={loading}
                    >
                      Update profile
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Profile;
