"use client";
import { allAddressApi, manageAddressApi } from "@/api/apiService";
import { MapComponent } from "@/components/googleMap/map";
import Loading from "@/components/loader/loading";
import { AddAddressFormSchema } from "@/helper/validationSchema";
import { Formik } from "formik";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddAddress = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const queryType = searchParams && searchParams.get("type");
  const atype = searchParams && searchParams.get("atype");
  const aid = searchParams && searchParams.get("aid");

  const [initialValues, setinitialValues] = useState({
    fullName: "",
    phone: "",
    apartment: "",
    street: "",
    postalCode: "",
    country: "",
    state: "",
  });

  // useEffect(() => {
  //   if (aid) {
  //     const fetchData = async () => {
  //       const result = await allAddressApi();
  //       if (result?.status) {
  //         const findOne = result?.requestedData?.find(
  //           (_a: any) => _a?._id === aid
  //         );
  //         console.log(findOne);
  //         setinitialValues({
  //           fullName: findOne?.name,
  //           phone: findOne?.phoneNumber,
  //           apartment: findOne?.address1,
  //           street: findOne?.street,
  //           postalCode: findOne?.zipCode,
  //           country: locationDetails?.country || "",
  //           state: locationDetails?.state || "",
  //         });
  //       }
  //     };
  //     fetchData();
  //   }
  // }, [aid]);

  const handleSubmit = (data: any, { resetForm }: any) => {
    const apiData = {
      addressType: atype || "home",
      defaultAddress: true,
      addressMode: queryType,
      name: data?.fullName,
      address1: data?.apartment,
      phoneNumber: data?.phone,
      country: data?.country,
      state: data?.state,
      city: data?.city,
      street: data?.street,
      zipCode: data?.postalCode,
      longitude: data?.longitude,
      latitude: data?.latitude,
    };
    manageAddressApi(apiData)
      .then((responseData) => {
        if (responseData?.status) {
          router.push("/checkout");
          toast.success(responseData?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  const handleCancel = () => {
    router.push("/checkout");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddAddressFormSchema}
      onSubmit={handleSubmit}
      // enableReinitialize
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
        <form onSubmit={handleSubmit} method="post">
          <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto mt-5 mb-10">
            <h6 className="mb-2 text-lg font-semibold text-center text-default-600 ">
              ADD ADDRESS
            </h6>
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-4xl">
                <div className="input-item flex space-x-2.5 mb-5 mt-3">
                  <div className="w-full h-full">
                    <div className="w-full h-full input-com">
                      <label className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal">
                        Full Name *
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper !border-gray-300 !dark:border-gray-400">
                        <input
                          className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                          type="text"
                          placeholder="Full Name"
                          name="fullName"
                          value={values?.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors?.fullName && touched?.fullName ? (
                        <div className="errorMessage">{errors.fullName}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="input-item flex space-x-2.5 mb-5 mt-5">
                  <div className="w-full h-full">
                    <div className="w-full h-full input-com">
                      <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                        Phone Number*
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper border-gray-border ">
                        <input
                          placeholder="012 3  *******"
                          className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                          type="text"
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
                </div>
                <div className="mb-5 mt-5">
                  <div className="w-full h-full">
                    <div className="w-full h-full input-com">
                      <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                        Select your location Number*
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper border-gray-border ">
                      
                        <MapComponent
                          // location={setLocationDetails}
                          setFieldValue={setFieldValue}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-item flex space-x-2.5 mb-5 mt-5">
                  <div className="w-full h-full">
                    <div className="w-full h-full input-com">
                      <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                        Apartment*
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper border-gray-border ">
                        <input
                          placeholder="Apartment"
                          className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                          type="text"
                          name="apartment"
                          value={values?.apartment}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors?.apartment && touched?.apartment ? (
                        <div className="errorMessage">{errors.apartment}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="input-item flex space-x-2.5 mb-5 mt-3">
                  <div className="w-full h-full">
                    <div className="w-full h-full input-com">
                      <label className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal">
                        Street
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper !border-gray-300 !dark:border-gray-400">
                        <input
                          placeholder="Street"
                          className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                          type="text"
                          name="street"
                          value={values?.street}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors?.street && touched?.street ? (
                        <div className="errorMessage">{errors.street}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="input-item flex space-x-2.5 mb-5 mt-3">
                  <div className="w-full h-full">
                    <div className="w-full h-full input-com">
                      <label className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal">
                        Postal Code / Zip
                      </label>
                      <div className="relative w-full h-full overflow-hidden border input-wrapper !border-gray-300 !dark:border-gray-400">
                        <input
                          placeholder="000000"
                          className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                          type="text"
                          name="postalCode"
                          value={values?.postalCode}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </div>
                      {errors?.postalCode && touched?.postalCode ? (
                        <div className="errorMessage">{errors.postalCode}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="input-item flex space-x-2.5 mb-5 mt-3">
                  <div className="w-full h-full input-com">
                    <label className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal">
                      Country*
                    </label>
                    <input
                      placeholder="Country"
                      className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                      name="country"
                      value={values?.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {/* <select
                      id="country"
                      className="!bg-gray-50 border !border-gray-300 !text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      name="country"
                      value={values?.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option selected>Country*</option>
                      <option value="TV">UAE</option>
                      <option value="PC">KSA</option>
                      <option value="GA">USA</option>
                      <option value="PH">QATAR</option>
                    </select>
                    {errors?.country && touched?.country ? (
                      <div className="errorMessage">{errors.country}</div>
                    ) : null} */}
                  </div>
                </div>
                <div className="input-item flex space-x-2.5 mb-5 mt-3">
                  <div className="w-full h-full input-com">
                    <label className="input-label capitalize block  mb-2 text-gray text-[13px] font-normal">
                      State*
                    </label>
                    <input
                      placeholder="State"
                      className="input-field placeholder:text-sm text-sm px-5 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none h-[40px]"
                      name="state"
                      value={values?.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {/* <select
                      id="state"
                      className="!bg-gray-50 border !border-gray-300 !text-gray-900 text-sm focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value={values?.state}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option selected>State*</option>
                      <option value="TV">UAE</option>
                      <option value="PC">KSA</option>
                      <option value="GA">USA</option>
                      <option value="PH">QATAR</option>
                    </select>
                    {errors?.state && touched?.state ? (
                      <div className="errorMessage">{errors.state}</div>
                    ) : null} */}
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <button
                      className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-center text-[#0D4C92] border border-[#0D4C92] transition-all duration-200 hover:text-[#0D4C92]  hover:bg-[#ef9bc2] "
                      type="button"
                      onClick={() => handleCancel()}
                    >
                      Cancel
                    </button>
                    <button
                      className="flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white transition-all border  border-[#0D4C92] duration-200 bg-[#0D4C92]  hover:text-[#0D4C92]  hover:bg-[#ef9bc2]"
                      type="submit"
                    >
                      Save Address
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

const AddAddressContent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AddAddress />
    </Suspense>
  );
};

export default AddAddressContent;
