"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import pdtemp1 from "../../../../public/images/prodcuts/pd-temp-1.jpg";
import { useAppSelector } from "@/utils/redux/store";
import Link from "next/link";
import {
  allAddressApi,
  cartListApi,
  makeDefaultAddressApi,
  removeAddressApi,
} from "@/api/apiService";
import { addressMode } from "@/helper/constants";
import { toast } from "react-toastify";
import ImageComponent from "@/components/commen/image/ImageComponent";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const userDetails = useAppSelector((state) => state.auth.userDetails);
  const loader = useAppSelector((state) => state.auth.loader);
  const [data, setData] = useState<any>([]);
  const [cart, setCart] = useState<any>([]);
  const [refetch, setRefetch] = useState<boolean>(false);
  const [selectedAddressType, setSelectedAddressType] = useState("home");
  const router = useRouter();

  useEffect(() => {
    if (loader) {
      return; // If loader is true, user details are still loading
    }

    if (!userDetails) {
      // If user is not authenticated, redirect to login
      router.push("/login");
    } else {
      // Fetch data if user is logged in
      const fetchData = async () => {
        const result = await allAddressApi();
        if (result?.status) {
          setData(result?.requestedData);
          setRefetch(false);
        }
      };

      const fetchCartData = async () => {
        const result = await cartListApi();
        if (result?.status) {
          setCart(result?.requestedData);
        }
      };

      fetchData();
      fetchCartData();
    }
  }, [userDetails, loader, router, refetch]);

  const makeDefaultAddress = (id: string) => {
    const apiData = {
      defaultAddress: true,
    };
    makeDefaultAddressApi(id, apiData)
      .then((responseData) => {
        if (responseData?.status) {
          setRefetch(true);
          toast.success(responseData?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  const removeAddress = (id: string) => {
    removeAddressApi(id)
      .then((responseData) => {
        if (responseData?.status) {
          setRefetch(true);
          toast.success(responseData?.message);
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };
  return (
    <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto mt-5 mb-10">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items Section */}
          <div className="w-full lg:w-2/3 ">
            <div className="bg-white shadow-md border rounded-lg p-2 lg:p-4 my-3 mb-5">
              <div className="flex gap-3">
                <svg
                  width="18pt"
                  height="18pt"
                  id="fi_15501313"
                  enableBackground="new 0 0 1024 1024"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="XMLID_3_">
                    <g id="XMLID_1_">
                      <g id="XMLID_16_">
                        <path
                          id="XMLID_24_"
                          d="m695.2 275.5c0 9.8-.7 19.5-2 29.2.4-2.7.7-5.3 1.1-8-2.6 18.3-7.4 36.2-14.5 53.2 1-2.4 2-4.8 3-7.2-5.3 12.6-11.8 24.7-19.4 36-1.9 2.9-4 5.8-6.1 8.6-4.4 5.9 3.8-4.7.7-.9-1.1 1.4-2.2 2.7-3.3 4.1-4.2 5-8.6 9.9-13.2 14.5s-9.5 9.1-14.5 13.2c-1.3 1.1-2.7 2.2-4.1 3.3-3.9 3.1 6.8-5.1.9-.7-2.8 2.1-5.7 4.1-8.6 6.1-11.4 7.6-23.4 14-36 19.4l7.2-3c-17.1 7.1-34.9 12-53.2 14.5 2.7-.4 5.3-.7 8-1.1-19.4 2.6-38.9 2.6-58.3 0 2.7.4 5.3.7 8 1.1-18.3-2.6-36.2-7.4-53.2-14.5l7.2 3c-12.6-5.3-24.7-11.8-36-19.4-2.9-1.9-5.8-4-8.6-6.1-5.9-4.4 4.7 3.8.9.7-1.4-1.1-2.7-2.2-4.1-3.3-5-4.2-9.9-8.6-14.5-13.2s-9.1-9.5-13.2-14.5c-1.1-1.3-2.2-2.7-3.3-4.1-3.1-3.9 5.1 6.8.7.9-2.1-2.8-4.1-5.7-6.1-8.6-7.6-11.4-14-23.4-19.4-36 1 2.4 2 4.8 3 7.2-7.1-17.1-12-34.9-14.5-53.2.4 2.7.7 5.3 1.1 8-2.6-19.4-2.6-38.9 0-58.3-.4 2.7-.7 5.3-1.1 8 2.6-18.3 7.4-36.2 14.5-53.2-1 2.4-2 4.8-3 7.2 5.3-12.6 11.8-24.7 19.4-36 1.9-2.9 4-5.8 6.1-8.6 4.4-5.9-3.8 4.7-.7.9 1.1-1.4 2.2-2.7 3.3-4.1 4.2-5 8.6-9.9 13.2-14.5s9.5-9.1 14.5-13.2c1.3-1.1 2.7-2.2 4.1-3.3 3.9-3.1-6.8 5.1-.9.7 2.8-2.1 5.7-4.1 8.6-6.1 11.4-7.6 23.4-14 36-19.4-2.4 1-4.8 2-7.2 3 17.1-7.1 34.9-12 53.2-14.5-2.7.4-5.3.7-8 1.1 19.4-2.6 38.9-2.6 58.3 0-2.7-.4-5.3-.7-8-1.1 18.3 2.6 36.2 7.4 53.2 14.5-2.4-1-4.8-2-7.2-3 12.6 5.3 24.7 11.8 36 19.4 2.9 1.9 5.8 4 8.6 6.1 5.9 4.4-4.7-3.8-.9-.7 1.4 1.1 2.7 2.2 4.1 3.3 5 4.2 9.9 8.6 14.5 13.2s9.1 9.5 13.2 14.5c1.1 1.3 2.2 2.7 3.3 4.1 3.1 3.9-5.1-6.8-.7-.9 2.1 2.8 4.1 5.7 6.1 8.6 7.6 11.4 14 23.4 19.4 36-1-2.4-2-4.8-3-7.2 7.1 17.1 12 34.9 14.5 53.2-.4-2.7-.7-5.3-1.1-8 1.3 9.7 2 19.4 2 29.1.1 15.7 13.8 30.7 30 30s30.1-13.2 30-30c-.2-49.1-15-98.8-43.7-138.9-29.6-41.5-70-72.5-117.8-90.1-93.3-34.4-204.6-4.2-267.7 72.6-32.9 40.1-52.5 87.9-56.5 139.7-3.8 49.3 8.7 100.3 34.4 142.6 24.8 40.8 62.1 75.1 105.8 94.7 25 11.2 50.1 18.1 77.3 21.3 25.2 3 50.8 1.2 75.7-3.9 95.7-19.4 174.6-101.2 189.2-198 2-13.2 3.4-26.5 3.4-39.9.1-15.7-13.8-30.7-30-30-16.4.7-30 13.1-30.1 29.9z"
                        ></path>
                      </g>
                    </g>
                    <g id="XMLID_2_">
                      <g id="XMLID_17_">
                        <path
                          id="XMLID_25_"
                          d="m828.7 931.7c-21.3 0-42.6 0-63.9 0-50.8 0-101.7 0-152.5 0-61.3 0-122.6 0-183.9 0-52.8 0-105.5 0-158.3 0-24.8 0-49.5.1-74.3 0-2.5 0-5-.2-7.5-.5 2.7.4 5.3.7 8 1.1-4-.6-7.8-1.7-11.5-3.2l7.2 3c-2.8-1.2-5.5-2.6-8.1-4.3s-3.5-4 1.9 1.6c-1-1.1-2.3-2-3.3-3-.3-.3-3.2-3.2-3-3.3 0 0 5.2 7.3 1.6 1.9-1.7-2.5-3.1-5.2-4.3-8.1 1 2.4 2 4.8 3 7.2-1.5-3.7-2.5-7.6-3.2-11.5.4 2.7.7 5.3 1.1 8-.7-5.6-.5-11.4-.5-17 0-9.7 0-19.5 0-29.2 0-19.4 0-38.8 0-58.2 0-11.5.5-23 2-34.4-.4 2.7-.7 5.3-1.1 8 2.8-20.5 8.2-40.6 16.3-59.7-1 2.4-2 4.8-3 7.2 4.5-10.5 9.7-20.7 15.7-30.5 3-4.9 6.1-9.6 9.5-14.2.8-1.1 1.5-2.1 2.3-3.2.4-.5.8-1 1.2-1.6 1.7-2.3-2.8 4-2.7 3.5.4-2.1 4.4-5.5 5.8-7.1 7.2-8.5 15-16.4 23.4-23.8 2.1-1.9 4.3-3.7 6.5-5.5 1-.8 2-1.6 3.1-2.5 3.4-2.8-6.2 4.6-1.4 1.1 4.6-3.4 9.2-6.7 14-9.7 10.9-7 22.5-13.1 34.4-18.2-2.4 1-4.8 2-7.2 3 19.1-8 39.1-13.5 59.7-16.3-2.7.4-5.3.7-8 1.1 16.4-2.1 32.8-2 49.3-2h67.1 156.6c18.6 0 37.1-.4 55.6 2-2.7-.4-5.3-.7-8-1.1 20.5 2.8 40.6 8.2 59.7 16.3-2.4-1-4.8-2-7.2-3 10.5 4.5 20.7 9.7 30.5 15.7 4.9 3 9.6 6.1 14.2 9.5 1.1.8 2.1 1.5 3.2 2.3.5.4 1 .8 1.6 1.2 2.3 1.7-4-2.8-3.5-2.7 2.1.4 5.5 4.4 7.1 5.8 8.5 7.2 16.4 15 23.8 23.4 1.9 2.1 3.7 4.3 5.5 6.5.8 1 1.6 2 2.5 3.1 2.8 3.4-4.6-6.2-1.1-1.4 3.4 4.6 6.7 9.2 9.7 14 7 10.9 13.1 22.5 18.2 34.4-1-2.4-2-4.8-3-7.2 8 19.1 13.5 39.1 16.3 59.7-.4-2.7-.7-5.3-1.1-8 2.3 18 2 36.1 2 54.2v64.2c0 6.7.4 13.6-.5 20.3.4-2.7.7-5.3 1.1-8-.6 4-1.7 7.8-3.2 11.5 1-2.4 2-4.8 3-7.2-1.2 2.8-2.6 5.5-4.3 8.1s-4 3.5 1.6-1.9c-1.1 1-2 2.3-3 3.3-.3.3-3.2 3.2-3.3 3 0 0 7.3-5.2 1.9-1.6-2.5 1.7-5.2 3.1-8.1 4.3l7.2-3c-3.7 1.5-7.6 2.5-11.5 3.2 2.7-.4 5.3-.7 8-1.1-2.3.3-4.5.4-6.9.5-15.7.2-30.7 13.6-30 30 .7 16.1 13.2 30.2 30 30 36.1-.5 70.5-26.6 76.4-63.2 2.2-13.6 1.6-27.4 1.6-41.1 0-18.1 0-36.3 0-54.4 0-12.7.3-25.5-.7-38.2-4.3-57.8-26.9-111.9-65.1-155.6-35.8-41-86-70.6-139.3-81.8-27.4-5.8-54.6-6.1-82.3-6.1-32.8 0-65.6 0-98.5 0-34.9 0-69.7 0-104.6 0-21.2 0-42.8-.9-63.9 1.4-30.3 3.4-58.6 11.1-86.3 23.9-24.5 11.3-47.2 27.2-66.9 45.6-39.8 37.2-68.2 88.3-77.6 142-6.1 35.1-4.5 70.7-4.5 106.2v41.5c0 28.9 15.4 58.1 42.1 71 12.4 6 25.3 8.8 39.1 8.8h15.1 61.1 92 109 113.2 104.7 82.1 47 6.2c15.7 0 30.7-13.8 30-30-.6-16.3-13-30-29.9-30z"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <p className="mukta-medium text-gray-600">
                  Logged in as{" "}
                  <span className="text-green-600">{userDetails?.email}</span>
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto">
              <h1 className="text-xl font-bold mb-4">Delivery Address</h1>
              <div
                id="delivery-section"
                className="bg-white shadow-md border rounded-lg p-2 lg:p-4 my-3"
              >
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-5">
                  {data
                    ?.filter(
                      (_a: any) =>
                        _a?.addressMode === addressMode.SHIPPING_ADDRESS
                    )
                    .map((_a: any) => (
                      <div
                        className="border border-green-300 p-4 rounded-lg flex-1"
                        key={_a?._id}
                      >
                        {_a?.defaultAddress && (
                          <span className="flex items-center gap-2 bg-green-100 py-2 px-2 mb-3">
                            <svg
                              className="w-[20px] h-[20px]"
                              id="fi_4436481"
                              enableBackground="new 0 0 512 512"
                              height={512}
                              viewBox="0 0 512 512"
                              width={512}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipRule="evenodd" fillRule="evenodd">
                                <path
                                  d="m256 0c-141.2 0-256 114.8-256 256s114.8 256 256 256 256-114.8 256-256-114.8-256-256-256z"
                                  fill="#4bae4f"
                                />
                                <path
                                  d="m379.8 169.7c6.2 6.2 6.2 16.4 0 22.6l-150 150c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7l-75-75c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l63.7 63.7 138.7-138.7c6.2-6.3 16.4-6.3 22.6 0z"
                                  fill="#fff"
                                />
                              </g>
                            </svg>
                            <p className="">Default Address</p>
                          </span>
                        )}
                        <p
                          className="font-bold"
                          onClick={() => makeDefaultAddress(_a?._id)}
                        >
                          {_a?.name}
                        </p>
                        <p>
                          {_a?.address1}
                          <br /> {_a?.address2}
                          <br /> {_a?.street}
                        </p>
                        <p className="mt-2">{_a?.phoneNumber}</p>
                        <div className="flex justify-between mt-3">
                          <Link
                            href={{
                              pathname: "/add-address",
                              query: { id: _a?._id },
                            }}
                            className="text-blue-500 mr-3"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => removeAddress(_a?._id)}
                            className="text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  <div className="border border-gray-300 bg-gray-50 p-4 rounded-lg flex items-center justify-center flex-1">
                    <Link
                      href={{
                        pathname: "/add-address",
                        query: {
                          type: addressMode.SHIPPING_ADDRESS,
                          atype: selectedAddressType,
                        },
                      }}
                      className="text-dark flex flex-col items-center justify-center gap-3 text-center"
                    >
                      <svg
                        className="w-[30px]"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        id="fi_2997933"
                      >
                        <g id="_03_Login" data-name="03 Login">
                          <path d="m256 512a25 25 0 0 1 -25-25v-462a25 25 0 0 1 50 0v462a25 25 0 0 1 -25 25z" />
                          <path d="m487 281h-462a25 25 0 0 1 0-50h462a25 25 0 0 1 0 50z" />
                        </g>
                      </svg>
                      <span>Add New Address</span>
                    </Link>
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="delivery-instructions"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Delivery instructions
                  </label>
                  <textarea
                    id="delivery-instructions"
                    className="block w-full p-2 border border-gray-300 rounded-lg"
                    rows={3}
                    placeholder="Enter your message"
                    defaultValue={""}
                  />
                </div>
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Please choose address type
                  </label>
                  <div className="flex items-center mb-4">
                    <input
                      id="work"
                      type="radio"
                      name="address-type"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      value="work"
                      checked={selectedAddressType === "work"}
                      onChange={(event) =>
                        setSelectedAddressType(event.target.value)
                      }
                    />
                    <label
                      htmlFor="work"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Work
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="home"
                      type="radio"
                      name="address-type"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      value="home"
                      checked={selectedAddressType === "home"}
                      onChange={(event) =>
                        setSelectedAddressType(event.target.value)
                      }
                    />
                    <label
                      htmlFor="home"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Home
                    </label>
                  </div>
                </div>
              </div>
              <h1 className="text-xl font-bold mb-4 mt-8">Billing Address</h1>
              <div
                id="billing-section"
                className="bg-white shadow-md border rounded-lg p-2 lg:p-4 my-3"
              >
                <div className="mb-5">
                  <div className="flex items-center mb-4">
                    <input
                      id="new-billing-address"
                      type="radio"
                      name="billing-address-type"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      defaultChecked
                    />
                    <label
                      htmlFor="new-billing-address"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Add New Billing Address
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="same-billing-address"
                      type="radio"
                      name="billing-address-type"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="same-billing-address"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Continue with Same Address
                    </label>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-5">
                  {data
                    ?.filter(
                      (_a: any) =>
                        _a?.addressMode === addressMode.BILLING_ADDRESS
                    )
                    .map((_a: any) => (
                      <div
                        className="border border-green-300 p-4 rounded-lg flex-1"
                        key={_a?._id}
                      >
                        <p className="font-bold">{_a?.name}</p>
                        <p>
                          {_a?.address1}
                          <br /> {_a?.address2}
                          <br /> {_a?.street}
                        </p>
                        <p className="mt-2">{_a?.phoneNumber}</p>
                        <div className="flex justify-between mt-3">
                          <Link
                            href={{
                              pathname: "/add-address",
                              query: { id: _a?._id },
                            }}
                            className="text-blue-500 mr-3"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => removeAddress(_a?._id)}
                            className="text-red-500"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}

                  <div className="border border-gray-300 bg-gray-50 p-4 rounded-lg flex items-center justify-center flex-1">
                    <Link
                      href={{
                        pathname: "/add-address",
                        query: { type: addressMode.BILLING_ADDRESS },
                      }}
                      className="text-dark flex flex-col items-center justify-center gap-3 text-center"
                    >
                      <svg
                        className="w-[30px]"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                        id="fi_2997933"
                      >
                        <g id="_03_Login" data-name="03 Login">
                          <path d="m256 512a25 25 0 0 1 -25-25v-462a25 25 0 0 1 50 0v462a25 25 0 0 1 -25 25z" />
                          <path d="m487 281h-462a25 25 0 0 1 0-50h462a25 25 0 0 1 0 50z" />
                        </g>
                      </svg>
                      <span>Add New Address</span>
                    </Link>
                  </div>
                </div>
              </div>
              <h1 className="text-xl font-bold mb-4 mt-8">Payment Method</h1>
              <div
                id="payment-section"
                className="bg-white shadow-md border rounded-lg p-2 lg:p-4 my-3"
              >
                <div className="mb-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Select Payment Method
                  </label>
                  <div className="flex items-center mb-4">
                    <input
                      id="credit-card"
                      type="radio"
                      name="payment-method"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="credit-card"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Credit Card
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="cod"
                      type="radio"
                      name="payment-method"
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor="cod"
                      className="ml-2 text-sm font-medium text-gray-700"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="max-w-xs flex items-center justify-center px-4 py-2.5 text-sm font-bold text-white transition-all border border-[#ef9bc2] duration-200 bg-[#ef9bc2] hover:text-[#ef9bc2] hover:bg-[#e4dfc9]">
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Cart Summary Section */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-[120px] bg-white shadow-md border rounded-lg p-4 mt-3 ">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex flex-col w-full h-full justify-between items-center bg-white rounded overflow-x-auto">
                {cart?.products?.map((_a: any) => (
                  <div
                    className=" w-full h-auto flex justify-start items-center bg-white py-3 px-0 border-b transition-all border-gray-100 relative last:border-b-0"
                    key={_a?._id}
                  >
                    <div className="relative flex border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 mr-3">
                      <ImageComponent
                        src={_a?.productDetails?.productImageUrl}
                        width={40}
                        height={50}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col w-full overflow-hidden">
                      <a
                        className="mukta-regular text-sm font-medium text-gray-700 text-heading "
                        href=""
                      >
                        {_a?.productDetails?.productTitle}
                      </a>
                      <span className="text-xs text-gray-400 py-1">
                        {
                          _a?.productDetails?.variantDetails
                            ?.productVariantAttributes?.[0]?.attributeTitle
                        }
                        {": "}
                        {
                          _a?.productDetails?.variantDetails
                            ?.productVariantAttributes?.[0]?.attributeDetail
                            ?.itemName
                        }
                      </span>
                      <div className="flex items-center justify-between">
                        <div className="h-5 flex flex-wrap items-start py-1  bg-white text-gray-600 rounded-md">
                          <p className="text-sm font-semibold text-dark">
                            Qty: {_a?.quantity}
                          </p>
                        </div>
                        <div className="font-bold text-sm text-heading leading-5">
                          <span className="text-[#0D4C92] ">
                            AED {_a?.productAmount}
                          </span>
                        </div>
                      </div>
                      {/* <p className="text-xs text-gray-500 py-2">
                        Expected Delivery on{" "}
                        <span className="text-black"> May 31, 2024</span> When
                        you order now
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-md font-medium text-gray-700 mb-2">
                  <span>Subtotal</span>
                  <span>AED {cart?.totalProductAmount?.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-md font-medium text-gray-700 mb-2">
                  <span>Delivery Charges</span>
                  <span className="text-green-500 ">
                    {cart?.totalShippingAmount === 0
                      ? "FREE"
                      : cart?.totalShippingAmount}
                  </span>
                </div>
                <div className="my-4 border-b border-default-200" />
                <div className="flex justify-between text-md font-medium text-gray-900 mb-2">
                  <span>
                    Total{" "}
                    <span className="text-[9px] text-gray-500">
                      (Inclusive of vat)
                    </span>
                  </span>
                  <span className="text-base font-bold text-default-700">
                    AED {cart?.totalAmount?.toFixed(2)}
                  </span>
                </div>
                <a
                  className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all border  border-[#0D4C92] duration-200 bg-[#0D4C92]  hover:text-[#0D4C92]  hover:bg-[#ef9bc2]"
                  href="order-success.html"
                >
                  Proceed to Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
