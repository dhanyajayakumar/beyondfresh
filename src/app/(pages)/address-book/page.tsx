"use client";
import { allAddressApi, removeAddressApi } from "@/api/apiService";
import { addressMode } from "@/helper/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddressBook = () => {
  const [data, setData] = useState<any>([]);
  const [refetch, setRefetch] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await allAddressApi();
      if (result?.status) {
        setData(result?.requestedData);
        setRefetch(false);
      }
    };
    fetchData();
  }, [refetch]);

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
      <div className="flex justify-between itemms-center pb-5">
        <h2 className="font-semibold  text-xl m-0 text-heading text-dark flex items-center ">
          {" "}
          My Address Book
        </h2>
        <Link
          href={{
            pathname: "/add-address",
            query: {
              type: addressMode.SHIPPING_ADDRESS,
              atype: "home",
            },
          }}
          className=" px-4 py-2 flex justify-center items-center duration-200  bg-[#ef9bc2] group hover:bg-[#0D4C92] hover:text-white"
        >
          <svg
            className="w-[20px] fill-dark group-hover:fill-white pr-1"
            viewBox="0 0 426.66667 426.66667"
            xmlns="http://www.w3.org/2000/svg"
            id="fi_1828925"
          >
            <path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0" />
          </svg>
          Add New Address
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* address */}
        {data?.map((_a: any, i: number) => (
          <div className="flex-1 duration-150 border hover:shadow-lg" key={i}>
            <div className="flex items-center justify-between border-b">
              <p className="flex items-center gap-2 pl-3 text-base font-medium text-nowrap">
                <svg
                  width="18px"
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 359.31 409.6"
                >
                  <path
                    d="M187.74,0c9.63,1.8,19.46,2.9,28.86,5.54,26.51,7.45,48.3,22.4,65.64,43.76,12.87,15.85,21.65,33.83,25.95,53.8,7.51,34.89,2.51,68-16.57,98.23-32.96,52.23-66.53,104.07-99.84,156.08-.5.78-.99,1.58-1.52,2.35-5.73,8.33-15.44,8.38-21.02-.07-6.23-9.44-12.23-19.04-18.33-28.57-27.47-42.94-55.08-85.8-82.37-128.86-17.91-28.27-24.2-59.16-18.54-92.19C59.34,55.69,99.25,14.33,153.29,2.72,159.36,1.41,165.6.89,171.77,0,177.09,0,182.41,0,187.74,0ZM239.62,131.85c-.09-33.02-27.18-59.99-60.12-59.84-32.81.15-59.59,27.08-59.62,59.94-.03,33.01,26.98,60.07,59.92,60.04,32.95-.03,59.91-27.13,59.82-60.14Z"
                    style={{ fill: "#000", strokeWidth: 0 }}
                  />
                </svg>
                Address #{i + 1}
              </p>
              <Link
                href={{
                  pathname: "/add-address",
                  query: {
                    aid: _a?._id,
                  },
                }}
                className="px-3 py-2 text-sm font-bold text-center text-[#0D4C92] border border-[#0D4C92] transition-all duration-200 hover:text-[#0D4C92]  hover:bg-[#ef9bc2]"
              >
                Edit Address
              </Link>
              <button
                type="button"
                className="w-[50px] h-[50px] flex justify-center items-center duration-200 group bg-[#ef9bc2] hover:bg-[#0D4C92]"
                onClick={() => removeAddress(_a?._id)}
              >
                <svg
                  className="w-[25px] fill-[#0D4C92] group-hover:fill-white"
                  id="fi_3096673"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z" />
                    <path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" />
                    <path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" />
                    <path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z" />
                  </g>
                </svg>
              </button>
            </div>
            <div className="p-3 bg-[#F4F4F4]">
              <table>
                <tbody>
                  <tr className="">
                    <td className="text-sm w-[150px] mb-5">
                      <div>Name :</div>
                    </td>
                    <td className="text-base text-black">{_a?.name}</td>
                  </tr>
                  <tr className="mb-5">
                    <td className="text-sm w-[150px] mb-5">
                      <div>Phone Number :</div>
                    </td>
                    <td className="text-base text-black">{_a?.phoneNumber}</td>
                  </tr>
                  <tr className="mb-5">
                    <td className="text-sm w-[150px] mb-5">
                      <div>Address Line 1 :</div>
                    </td>
                    <td className="text-base text-black">{_a?.address1}</td>
                  </tr>
                  <tr className="mb-5">
                    <td className="text-sm w-[150px] mb-5">
                      <div>Street :</div>
                    </td>
                    <td className="text-base text-black"> {_a?.street}</td>
                  </tr>
                  <tr className="mb-5">
                    <td className="text-sm w-[150px] mb-5">
                      <div>City :</div>
                    </td>
                    <td className="text-base text-black">{_a?.city}</td>
                  </tr>
                  <tr className="mb-5">
                    <td className="text-sm w-[150px] mb-5">
                      <div>Zip :</div>
                    </td>
                    <td className="text-base text-black">{_a?.zipCode}</td>
                  </tr>
                  <tr className="mb-5">
                    <td className="text-sm w-[150px] mb-5">
                      <div>Country :</div>
                    </td>
                    <td className="text-base text-black">{_a?.country}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddressBook;
