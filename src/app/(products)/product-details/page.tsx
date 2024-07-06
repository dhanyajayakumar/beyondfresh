"use client";
import Image from "next/image";
import React, { useState } from "react";

import dtp1 from "../../../../public/images/dt-p1.jpeg";
import dtp2 from "../../../../public/images/dt-p2.jpeg";
import dtp3 from "../../../../public/images/dt-p3.jpeg";
import dtp4 from "../../../../public/images/dt-p4.jpeg";

import dtpt from "../../../../public/images/dt-pt.jpeg";
import dtpt02 from "../../../../public/images/dt-pt-2.jpeg";
import dtpt03 from "../../../../public/images/dt-pt-3.jpeg";
import dtpt04 from "../../../../public/images/dt-pt-4.jpeg";

import delivery from "../../../../public/images/delivery.png";
import freedelivery from "../../../../public/images/free-delivery.png";
import payment1 from "../../../../public/images/payment1.png";
import payment2 from "../../../../public/images/payment2.png";
import payment3 from "../../../../public/images/payment3.png";
import payment4 from "../../../../public/images/payment4.png";
import payment5 from "../../../../public/images/payment5.png";
import payment6 from "../../../../public/images/payment6.png";
import Link from "next/link";
import product1 from "../../../../public/images/product1.jpg";
import product2 from "../../../../public/images/product2.jpg";
import Feature from "@/components/homepage/feature";
import Subscription from "@/components/homepage/subscription";

const ProductDetail = () => {
  const [activeColor, setActiveColor] = useState<string | null>(null);
  const [valueColor, setValueColor] = useState<string>("");

  const handleClickColors = () => {
    setActiveColor("XS");
    setValueColor("Whole Uncut");
  };

  const [active, setActive] = useState<string | null>(null);
  const [value, setValue] = useState<string>("");

  const options = [
    { label: "Whole Uncut", imgSrc: product2 },
    { label: "Large Cuts (8 pcs)", imgSrc: product2 },
  ];

  const handleClick = (size: string) => {
    setActive(size);
    setValue(size);
  };

  const [activeAge, setActiveAge] = useState<string | null>(null);
  const [valueAge, setValueAge] = useState<string>("");

  const optionsAge = [
    { label: "3-4 Yrs", value: "3-4 Yrs" },
    { label: "5-6 Yrs", value: "5-6 Yrs" },
    { label: "6-7 Yrs", value: "6-7 Yrs" },
    { label: "7-8 Yrs", value: "7-8 Yrs" },
  ];

  const handleClickAge = (optionValue: string) => {
    setActiveAge(optionValue);
    setValueAge(optionValue);
  };

  return (
    <>
      <section className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto mb-10 mt-10">
        <div className="flex flex-col w-full gap-10 md:gap-8 lg:gap-0 md:flex-row lg:flex-row px-4 md:px-0">
          <div className="relative flex-1 md:w-2/5 lg:w-2/5">
            <div className="sticky top-[140px] flex-col lg:flex">
              <div className="lg:w-[90%] xl:w-[90%] lg:ml-0 lg:mr-0">
                <div className="product-main mb-3">
                  <div className=" relative  m-[0px] p-0">
                    <div className="relative image-zoom bg-[length:840px]">
                      <Image
                        className="object-cover w-full h-full transition-all duration-300 cursor-crosshair"
                        src={dtp1}
                        alt="image of a product"
                      />
                    </div>
                  </div>
                  {/* <div className="relative m-[0px] p-0">
                  <div className="relative image-zoom bg-[length:840px]">
                    <Image
                      className="object-cover w-full h-full transition-all duration-300 cursor-crosshair"
                      src={dtp2}
                      alt="image of a product"
                    />
                  </div>
                </div>
                <div className="relative  m-[0px] p-0">
                  <div className="relative image-zoom bg-[length:840px]">
                    <Image
                      className="object-cover w-full h-full transition-all duration-300 cursor-crosshair"
                      src={dtp3}
                      alt="image of a product"
                    />
                  </div>
                </div>
                <div className="relative  m-[0px] p-0">
                  <div className="relative image-zoom bg-[length:840px]">
                    <Image
                      className="object-cover w-full h-full transition-all duration-300 cursor-crosshair"
                      src={dtp4}
                      alt="image of a product"
                    />
                  </div>
                </div> */}
                </div>
                <div className="order-second prodcuts-slid scrollbar  w-full overflow-hidden">
                  <div className="items-start gap-0 product-nav lg:flex lg:flex-col slick-slider slider p-0">
                    <div className="aspect-square border-2">
                      <Image
                        className="h-full w-full object-cover min-w-[7px]"
                        src={dtpt}
                        alt="image of a product"
                      />
                    </div>
                    {/* <div className=" aspect-square border-2">
                    <Image
                      className="h-full w-full object-cover min-w-[70px]"
                      src={dtp2}
                      alt="image of a product"
                    />
                  </div>
                  <div className=" aspect-square border-2">
                    <Image
                      className="h-full w-full object-cover min-w-[70px]"
                      src={dtp3}
                      alt="image of a product"
                    />
                  </div>
                  <div className=" aspect-square border-2">
                    <Image
                      className="h-full w-full object-cover min-w-[70px]"
                      src={dtp4}
                      alt="image of a product"
                    />
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 w-5/5 md:w-3/5 lg:w-3/5">
            <div className="w-12/12 lg:w-8/12 2xl:w-10:12 md:flex-1 lg:flex-auto">
              <div className="flex">
                <div>
                  {/* basic info */}
                  <div>
                    <h3 className="text-2xl text-black font-bold md:text-heading-4 pb-4">
                      Boy Printed Zipper Jacket With Inner T-shirt, White
                    </h3>
                  </div>
                  <div className="flex gap-3 justify-between w-full items-center mb-3">
                    <p className="font-normal text-sm">
                      <span className="text-[#868e96]">SKU:</span>{" "}
                      S24KFG2464B-2-3Y
                    </p>
                    <div className="flex flex-row gap-2  items-center font-normal text-sm">
                      <span className="text-[#868e96]">Availability:</span>
                      <p className="flex items-center">
                        <svg
                          width={10}
                          height={10}
                          className="mr-2"
                          clipRule="evenodd"
                          fillRule="evenodd"
                          imageRendering="optimizeQuality"
                          shapeRendering="geometricPrecision"
                          textRendering="geometricPrecision"
                          viewBox="0 0 21.0002 21.0002"
                          xmlns="http://www.w3.org/2000/svg"
                          id="fi_14035769"
                        >
                          <g id="图层_x0020_1">
                            <path d="m0 0h21v21h-21z" fill="none" />
                            <circle
                              cx="10.5"
                              cy="10.5"
                              fill="#00ba00"
                              r="8.96"
                            />
                          </g>
                        </svg>{" "}
                        (In stock)
                      </p>
                    </div>
                    <div className=" flex  items-center">
                      <span>
                        <svg
                          className="cursor-pointer"
                          fill="#f27d0c"
                          enableBackground="new 0 0 32 32"
                          height={15}
                          viewBox="0 0 32 32"
                          width={15}
                          xmlns="http://www.w3.org/2000/svg"
                          id="fi_2893811"
                        >
                          <g id="star">
                            <path d="m29.911 13.75-6.229 6.072 1.471 8.576c.064.375-.09.754-.398.978-.174.127-.381.191-.588.191-.159 0-.319-.038-.465-.115l-7.702-4.049-7.701 4.048c-.336.178-.745.149-1.053-.076-.308-.224-.462-.603-.398-.978l1.471-8.576-6.23-6.071c-.272-.266-.371-.664-.253-1.025s.431-.626.808-.681l8.609-1.25 3.85-7.802c.337-.683 1.457-.683 1.794 0l3.85 7.802 8.609 1.25c.377.055.69.319.808.681s.019.758-.253 1.025z"></path>
                          </g>
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="cursor-pointer"
                          fill="#f27d0c"
                          enableBackground="new 0 0 32 32"
                          height={15}
                          viewBox="0 0 32 32"
                          width={15}
                          xmlns="http://www.w3.org/2000/svg"
                          id="fi_2893811"
                        >
                          <g id="star">
                            <path d="m29.911 13.75-6.229 6.072 1.471 8.576c.064.375-.09.754-.398.978-.174.127-.381.191-.588.191-.159 0-.319-.038-.465-.115l-7.702-4.049-7.701 4.048c-.336.178-.745.149-1.053-.076-.308-.224-.462-.603-.398-.978l1.471-8.576-6.23-6.071c-.272-.266-.371-.664-.253-1.025s.431-.626.808-.681l8.609-1.25 3.85-7.802c.337-.683 1.457-.683 1.794 0l3.85 7.802 8.609 1.25c.377.055.69.319.808.681s.019.758-.253 1.025z"></path>
                          </g>
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="cursor-pointer"
                          fill="#ddd"
                          enableBackground="new 0 0 32 32"
                          height={15}
                          viewBox="0 0 32 32"
                          width={15}
                          xmlns="http://www.w3.org/2000/svg"
                          id="fi_2893811"
                        >
                          <g id="star">
                            <path d="m29.911 13.75-6.229 6.072 1.471 8.576c.064.375-.09.754-.398.978-.174.127-.381.191-.588.191-.159 0-.319-.038-.465-.115l-7.702-4.049-7.701 4.048c-.336.178-.745.149-1.053-.076-.308-.224-.462-.603-.398-.978l1.471-8.576-6.23-6.071c-.272-.266-.371-.664-.253-1.025s.431-.626.808-.681l8.609-1.25 3.85-7.802c.337-.683 1.457-.683 1.794 0l3.85 7.802 8.609 1.25c.377.055.69.319.808.681s.019.758-.253 1.025z"></path>
                          </g>
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="cursor-pointer"
                          fill="#ddd"
                          enableBackground="new 0 0 32 32"
                          height={15}
                          viewBox="0 0 32 32"
                          width={15}
                          xmlns="http://www.w3.org/2000/svg"
                          id="fi_2893811"
                        >
                          <g id="star">
                            <path d="m29.911 13.75-6.229 6.072 1.471 8.576c.064.375-.09.754-.398.978-.174.127-.381.191-.588.191-.159 0-.319-.038-.465-.115l-7.702-4.049-7.701 4.048c-.336.178-.745.149-1.053-.076-.308-.224-.462-.603-.398-.978l1.471-8.576-6.23-6.071c-.272-.266-.371-.664-.253-1.025s.431-.626.808-.681l8.609-1.25 3.85-7.802c.337-.683 1.457-.683 1.794 0l3.85 7.802 8.609 1.25c.377.055.69.319.808.681s.019.758-.253 1.025z"></path>
                          </g>
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="cursor-pointer"
                          fill="#ddd"
                          enableBackground="new 0 0 32 32"
                          height={15}
                          viewBox="0 0 32 32"
                          width={15}
                          xmlns="http://www.w3.org/2000/svg"
                          id="fi_2893811"
                        >
                          <g id="star">
                            <path d="m29.911 13.75-6.229 6.072 1.471 8.576c.064.375-.09.754-.398.978-.174.127-.381.191-.588.191-.159 0-.319-.038-.465-.115l-7.702-4.049-7.701 4.048c-.336.178-.745.149-1.053-.076-.308-.224-.462-.603-.398-.978l1.471-8.576-6.23-6.071c-.272-.266-.371-.664-.253-1.025s.431-.626.808-.681l8.609-1.25 3.85-7.802c.337-.683 1.457-.683 1.794 0l3.85 7.802 8.609 1.25c.377.055.69.319.808.681s.019.758-.253 1.025z"></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center pb-2">
                    <h2 className="mr-4 text-2xl font-bold md:text-heading-3 text-primary">
                      AED 56
                    </h2>
                    <button className="bg-[#D5076E] py-1 px-4 text-sm text-white rounded-md font-roboto roboto-medium ">
                      28 % OFF
                    </button>
                    <p className="w-full mt-1 text-gray-500 text-text ">
                      <span className="line-through">AED 200</span>{" "}
                      <span className="font-medium text-black">
                        VAT Inclusive
                      </span>
                    </p>
                  </div>
                </div>
                <div>
                  <button className="border mr-5   px-4 py-2 rounded-full flex items-center flex-nowrap gap-1">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <h4 className="mb-2 font-bold">Colors</h4>
              <div className="flex flex-row gap-4 pt-0 mb-3">
                <label
                  className={`group basis-1/12 relative flex items-center justify-center border-2 border-[#ef9bc2] p-0 focus:outline-none cursor-pointer shadow-sm ${
                    activeColor === "XS" ? "ring-2 ring-[#d5076e]" : ""
                  }`}
                  onClick={handleClickColors}
                >
                  <input
                    type="radio"
                    name="size-choice"
                    value="Whole Uncut"
                    className="sr-only"
                    aria-labelledby="size-choice-1-label"
                  />
                  <span id="size-choice-1-label">
                    <Image src={dtpt} alt="Product Image" />
                  </span>
                  <span
                    className={`pointer-events-none absolute -inset-px rounded-md border-2 border-transparent ${
                      activeColor === "XS" ? "border" : "border-2"
                    } ${
                      valueColor === "XS"
                        ? "border-[#d5076e]"
                        : "border-transparent"
                    }`}
                    aria-hidden="true"
                  />
                </label>
              </div>
              <h4 className="mb-2 font-bold">Size</h4>
              <div className="flex flex-row gap-2 flex-wrap mb-4"></div>
              <>
                <h4 className="mb-2 font-bold"> Quantity</h4>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-3">
                    <form className="">
                      <div className="relative flex items-center max-w-[9rem] rounded-md overflow-hidden border">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          className="py-2 px-4 bg-white  hover:bg-gray-200 h-12 focus:outline-none"
                        >
                          <svg
                            className="w-3 h-3 tex-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="quantity-input"
                          data-input-counter=""
                          aria-describedby="helper-text-explanation"
                          className="bg-white  border-0 h-12 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2  dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder={"0"}
                          required
                        />
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          className="py-2 px-4 bg-white  hover:bg-gray-200 h-12 focus:outline-none"
                        >
                          <svg
                            className="w-3 h-3 tex-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                    <button className="grid items-center border border-[#603813] capitalize bg-white hs-btn text-[#603813] flex-1 visible md:visible lg:hidden text-nowrap">
                      Add to Cart
                    </button>
                    <button className="grid items-center flex-1 visible text-white capitalize hs-btn bg-[#0d4c92] md:visible lg:hidden text-nowrap">
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="py-2 md:hidden">
                  <a
                    href="#"
                    className="inline-flex items-center mb-3 px-5 w-full justify-center py-3 text-sm font-medium text-center bg-[#0d4c92] text-white rounded-lg hover:bg-[#d5076e] uppercase"
                  >
                    Add to Bag
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-5 w-full justify-center py-3 text-sm font-medium text-center border bg-white text-[#D5076E] border-[#D5076E] rounded-lg hover:bg-[#d5076e] uppercase"
                  >
                    BUY NOW
                  </a>
                </div>
                <div className="py-5">
                  <h4 className="mb-3 font-bold">Browse More Products</h4>
                  {/* product description */}
                  <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-3 ">
                    <a
                      href="#"
                      className="bg-[#F2F2F2] py-3 px-5 block rounded flex items-center justify-center gap-2 rounded-full"
                    >
                      <span>Baby Girls Clothes </span>
                      <svg
                        className="w-4 h-4 text-gray-800 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[#F2F2F2] py-3 px-5 block rounded flex items-center  justify-center gap-2 rounded-full"
                    >
                      <span>Dresses, Gowns &amp; Frocks </span>
                      <svg
                        className="w-4 h-4 text-gray-800 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[#F2F2F2] py-3 px-5 block rounded flex items-center  justify-center gap-2 rounded-full"
                    >
                      <span>Red Dresses, Gowns &amp; Frocks </span>
                      <svg
                        className="w-4 h-4 text-gray-800 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-[#F2F2F2] py-3 px-5 block rounded flex items-center  justify-center gap-2 rounded-full"
                    >
                      <span> Products from Juniors </span>
                      <svg
                        className="w-4 h-4 text-gray-800 dark:text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m9 5 7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="py-5">
                  <h4 className="mb-5 font-bold text-xl">Product Details</h4>
                  <p>
                    With its easy slip-on style, dressing up has never been so
                    effortless. The high-quality construction ensures
                    durability, allowing your little princess to enjoy this
                    dress for years to come. Pair it with her favorite
                    accessories and shoes to complete the look.
                  </p>
                  <div className="relative overflow-x-auto  mt-4">
                    <h4 className="mb-3 font-bold text-xl">Material</h4>
                    <table className="w-full mb-3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <tbody>
                        <tr className="odd:bg-white !bg-[#F5F5F5]">
                          <th
                            scope="row"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Material
                          </th>
                          <td className="px-3 py-2 font-medium text-black">
                            Cotton
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h4 className="mb-3 font-bold text-xl">
                      General Specifications
                    </h4>
                    <table className="w-full mb-3  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      {/* <thead class="text-xs text-gray-700 ">
                        <tr>
                           <th scope="col" class="px-6 py-3">
                              Product name
                           </th>
                           <th scope="col" class="px-6 py-3">
                              Action
                           </th>
                        </tr>
                     </thead> */}
                      <tbody>
                        <tr className="odd:bg-white !bg-[#F5F5F5]">
                          <th
                            scope="row"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Age Group
                          </th>
                          <td className="px-3 py-2 font-medium text-black">
                            Toddler Boy (1-6 years)
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Occasion
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Casual
                          </th>
                        </tr>
                        <tr className="odd:bg-white !bg-[#F5F5F5]">
                          <th
                            scope="row"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Pattern
                          </th>
                          <td className="px-3 py-2 font-medium text-black">
                            Printed
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="col"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Type
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-2 font-medium text-black"
                          >
                            A-line Dress
                          </th>
                        </tr>
                        <tr className="odd:bg-white !bg-[#F5F5F5]">
                          <th
                            scope="row"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Use
                          </th>
                          <td className="px-3 py-2 font-medium text-black">
                            Casual
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Fit Type
                          </th>
                          <td className="px-3 py-2 font-medium text-black">
                            Regular
                          </td>
                        </tr>
                        <tr className="odd:bg-white !bg-[#F5F5F5]">
                          <th
                            scope="row"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Neckline
                          </th>
                          <td className="px-3 py-2 font-medium text-black">
                            Round
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Sleeve Length
                          </th>
                          <td className="px-3 py-2 font-medium text-black">
                            Long Sleeves
                          </td>
                        </tr>
                        <tr className="odd:bg-white !bg-[#F5F5F5]">
                          <th
                            scope="row"
                            className="px-3 py-2 font-medium text-black"
                          >
                            Length
                          </th>
                          <td className="px-3 py-2 font-medium text-black">
                            Knee Length
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            </div>
            <div className="relative hidden lg:w-5/12 xl:w-4/12 md:w-5/12 2xl:w-2:12 md:hidden lg:block xl:block">
              <div className="flex flex-col gap-4 p-5 bg-white top-[140px] border border-[#D0D0D0] rounded-lg hover:shadow-lg transition-all mb-5">
                <div className=" flex flex-wrap xl:flex-nowrap gap-4overflow-hidden items-start gap-5">
                  <Image
                    className=" md:invisible lg:visible"
                    src={delivery}
                    alt=""
                  />
                  <div className="">
                    <h3 className="font-bold capitalize text-[#D5076E]">
                      get it tomorrow
                    </h3>
                    <p className="text-xs">
                      Order Within 19 Hours &amp; 58 Minutes Deliver to{" "}
                      <a href="#" className="text-[#0067B6]">
                        Select your area
                      </a>{" "}
                    </p>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center px-5 w-full justify-center py-3 text-sm font-medium text-center bg-[#0d4c92] text-white rounded-lg hover:bg-[#ef9bc2] uppercase"
                >
                  Add to Bag
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-5 w-full justify-center py-3 text-sm font-medium text-center border bg-white text-[#D5076E] border-[#D5076E] rounded-lg hover:bg-[#0067b6] hover:text-white hover:border-transparent uppercase"
                >
                  BUY NOW
                </a>
              </div>
              <div className="relative">
                <div className="grid grid-cols-3 gap-3">
                  <Image src={payment1} alt="" />
                  <Image src={payment2} alt="" />
                  <Image src={payment3} alt="" />
                  <Image src={payment4} alt="" />
                  <Image src={payment5} alt="" />
                  <Image src={payment6} alt="" />
                </div>
              </div>
              <div className="py-5">
                <Image src={freedelivery} alt="" />
              </div>
              <div className="py-4 flex items-center gap-3">
                <span>Share:</span>
                <div className="flex items-center gap-2">
                  <a href="#">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                        clipRule="evenodd"
                      />
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto">
        <div className="py-6 border-y  flex items-center justify-between mx-4 md:mx-0">
          <h5 className="font-semibold">Reviews</h5>
          <ul className="flex items-center fl gap-5 flex-">
            <li>
              <a href="#">Returns Process</a>
            </li>
            <li>
              <a href="#">Returns Policy</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
          </ul>
        </div>
        <div className=" mx-auto bg-white p-6 mb-7 mt-5 rounded-lg shadow-md">
          <div className="max-w-lg pb-3">
            <span>Average Rating</span>
            <h4 className="text-6xl">4</h4>
            <span>Out of 5 stars</span>
            <div className="max-w-lg pb-4">
              <div className="flex items-center mt-2">
                <p className="text-sm font-medium text-grey-900">5 star</p>
                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded ">
                  <div
                    className="h-2 bg-yellow-300 rounded"
                    style={{ width: "70%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  70%
                </span>
              </div>
              <div className="flex items-center mt-2">
                <p className="text-sm font-medium text-grey-900">4 star</p>
                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded ">
                  <div
                    className="h-2 bg-yellow-300 rounded"
                    style={{ width: "17%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  17%
                </span>
              </div>
              <div className="flex items-center mt-2">
                <a className="text-sm font-medium text-grey-900">3 star</a>
                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded ">
                  <div
                    className="h-2 bg-yellow-300 rounded"
                    style={{ width: "8%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  8%
                </span>
              </div>
              <div className="flex items-center mt-2">
                <p className="text-sm font-medium text-grey-900">2 star</p>
                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded ">
                  <div
                    className="h-2 bg-yellow-300 rounded"
                    style={{ width: "4%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  4%
                </span>
              </div>
              <div className="flex items-center mt-2">
                <p className="text-sm font-medium text-grey-900">1 star</p>
                <div className="w-2/4 h-2 mx-4 bg-gray-200 rounded ">
                  <div
                    className="h-2 bg-yellow-300 rounded"
                    style={{ width: "1%" }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  1%
                </span>
              </div>
            </div>
            <div id="reviewsContainer" className="mt-2 max-w-lg mx-auto">
              <div
                id="reviewsCount"
                className="mb-4 text-gray-700 flex items-center"
              >
                Total Reviews: 0 (5 Stars:
                <span id="fiveStarReviews" className="flex items-center">
                  <svg
                    className="star-icon"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <span id="fiveStarCount">0</span>
                </span>
                )
              </div>
              <div id="reviewsList" className="space-y-4" />
            </div>
          </div>
          <div className="max-w-lg">
            <h2 className=" text-2xl font-bold mb-4">Add a Review</h2>
            <form id="reviewForm" className="space-y-4">
              <div>
                <label
                  htmlFor="userName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="profilePicture"
                  className="block text-sm font-medium text-gray-700"
                >
                  Profile Picture URL
                </label>
                <input
                  type="text"
                  id="profilePicture"
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="reviewText"
                  className="block text-sm font-medium text-gray-700"
                >
                  Review
                </label>
                <textarea
                  id="reviewText"
                  rows={4}
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  defaultValue={""}
                />
              </div>
              <div>
                <label
                  htmlFor="reviewRating"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rating
                </label>
                <select
                  id="reviewRating"
                  className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={5}>5 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={2}>2 Stars</option>
                  <option value={1}>1 Star</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="reviewImage"
                  className="block text-sm font-medium text-gray-700"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="reviewImage"
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0d4c92] text-white py-2.5 rounded-md hover:bg-[#d5076e]"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-[#7B3D1F] sm:text-3xl mb-5">
            RELATED PRODUCTS
          </h2>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 xl:grid-cols-5">
            <div className="order-1 relative  group transition-all rounded-lg duration-300 hover:border-primary hover:shadow-2xl">
              <Link href="/products/product-details">
                <div className="relative h-full">
                  <div className="bg-white shadow-lg rounded-full w-8 h-8  absolute z-10 top-3 right-3">
                    <svg
                      className="w-6 h-6 text-gray-800 hover:fill-[#0D4C92] hover:text-[#0D4C92] m-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative  overflow-hidden ">
                    <Image
                      className="object-cover w-full h-full group-hover:p-3 transform transition-transform duration-300 group-hover:scale-110"
                      src={product1}
                      alt=""
                    />
                  </div>
                  <div className="px-6 pl-0 group-hover:hidden">
                    <div className="flex items-baseline gap-2 mt-2">
                      <h4 className="font-bold font-chivo text-[20px] xl:text-heading-5 text-primary">
                        AED 29
                      </h4>
                      <span className="text-gray-400 line-through text-tiny lg:text-md">
                        AED 150
                      </span>
                    </div>
                    <h3 className=" text-sm font-medium text-gray-900">
                      <a href="#" title="">
                        Girl Shimmer&amp;Shine Hooded
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                    </h3>
                  </div>
                  <div className="bg-white w-full absolute group-hover:z-[9999] transition-all duration-300 shadow-xl transition-all z-50 pt-3 hidden group-hover:block group-hover:shadow-2xl p-4">
                    <h4>Color</h4>
                    <div className="flex flex-row gap-4 my-3">
                      {options.map((option, index) => (
                        <label
                          key={index}
                          className={`group relative basis-3/12 flex items-center justify-center border py-0 px-0 focus:outline-none cursor-pointer shadow-sm ${
                            active === option?.label
                              ? "ring-2 ring-[#d5076e]"
                              : ""
                          }`}
                          onClick={() => handleClick(option?.label)}
                        >
                          <input
                            type="radio"
                            name="size-choice"
                            value={option.label}
                            className="sr-only"
                            checked={value === option.label}
                            onChange={() => setValue(option.label)}
                            aria-labelledby={`size-choice-${index}-label`}
                          />
                          <span id={`size-choice-${index}-label`}>
                            <Image src={option.imgSrc} alt={option.label} />
                          </span>
                          <span
                            className={`pointer-events-none absolute -inset-px rounded-md ${
                              active === option.label ? "border" : "border-2"
                            } ${
                              value === option.label
                                ? "border-[#d5076e]"
                                : "border-transparent"
                            }`}
                            aria-hidden="true"
                          />
                        </label>
                      ))}
                    </div>
                    <h4 className="mb-3">Size</h4>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {optionsAge.map((option, index) => (
                        <label
                          key={index}
                          className={`group relative flex items-center justify-center rounded-md border py-3 px-1 text-xs roboto-medium hover:bg-gray-50 focus:outline-none sm:py-3 cursor-pointer bg-white text-gray-900 shadow-sm ${
                            activeAge === option.value
                              ? "ring-2 ring-[#d5076e]"
                              : ""
                          }`}
                          onClick={() => handleClickAge(option.value)}
                        >
                          <input
                            type="radio"
                            name="size-choice"
                            value={option.value}
                            className="sr-only"
                            checked={valueAge === option.value}
                            onChange={() => setValueAge(option.value)}
                            aria-labelledby={`size-choice-${index}-label`}
                          />
                          <span id={`size-choice-${index}-label`}>
                            {option.label}
                          </span>
                          <span
                            className={`pointer-events-none absolute -inset-px rounded-md ${
                              activeAge === option.value ? "border" : "border-2"
                            } ${
                              valueAge === option.value
                                ? "border-[#d5076e]"
                                : "border-transparent"
                            }`}
                            aria-hidden="true"
                          />
                        </label>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center px-5 w-full justify-center py-3 text-sm font-medium text-center bg-[#0d4c92] text-white rounded-lg hover:bg-[#d5076e] uppercase"
                    >
                      <svg
                        className="w-6 h-6 text-white mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                        ></path>
                      </svg>
                      Add to Bag
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#7B3D1F] sm:text-3xl mb-5">
            YOU MAY ALSO LIKE
          </h2>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 xl:grid-cols-5">
            <div className="order-1 relative  group transition-all rounded-lg duration-300 hover:border-primary hover:shadow-2xl">
              <Link href="/products/product-details">
                <div className="relative h-full">
                  <div className="bg-white shadow-lg rounded-full w-8 h-8  absolute z-10 top-3 right-3">
                    <svg
                      className="w-6 h-6 text-gray-800 hover:fill-[#0D4C92] hover:text-[#0D4C92] m-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                  </div>
                  <div className="aspect-w-1 aspect-h-1 relative  overflow-hidden ">
                    <Image
                      className="object-cover w-full h-full group-hover:p-3 transform transition-transform duration-300 group-hover:scale-110"
                      src={product1}
                      alt=""
                    />
                  </div>
                  <div className="px-6 pl-0 group-hover:hidden">
                    <div className="flex items-baseline gap-2 mt-2">
                      <h4 className="font-bold font-chivo text-[20px] xl:text-heading-5 text-primary">
                        AED 29
                      </h4>
                      <span className="text-gray-400 line-through text-tiny lg:text-md">
                        AED 150
                      </span>
                    </div>
                    <h3 className=" text-sm font-medium text-gray-900">
                      <a href="#" title="">
                        Girl Shimmer&amp;Shine Hooded
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                    </h3>
                  </div>
                  <div className="bg-white w-full absolute group-hover:z-[9999] transition-all duration-300 shadow-xl transition-all z-50 pt-3 hidden group-hover:block group-hover:shadow-2xl p-4">
                    <h4>Color</h4>
                    <div className="flex flex-row gap-4 my-3">
                      {options.map((option, index) => (
                        <label
                          key={index}
                          className={`group relative basis-3/12 flex items-center justify-center border py-0 px-0 focus:outline-none cursor-pointer shadow-sm ${
                            active === option?.label
                              ? "ring-2 ring-[#d5076e]"
                              : ""
                          }`}
                          onClick={() => handleClick(option?.label)}
                        >
                          <input
                            type="radio"
                            name="size-choice"
                            value={option.label}
                            className="sr-only"
                            checked={value === option.label}
                            onChange={() => setValue(option.label)}
                            aria-labelledby={`size-choice-${index}-label`}
                          />
                          <span id={`size-choice-${index}-label`}>
                            <Image src={option.imgSrc} alt={option.label} />
                          </span>
                          <span
                            className={`pointer-events-none absolute -inset-px rounded-md ${
                              active === option.label ? "border" : "border-2"
                            } ${
                              value === option.label
                                ? "border-[#d5076e]"
                                : "border-transparent"
                            }`}
                            aria-hidden="true"
                          />
                        </label>
                      ))}
                    </div>
                    <h4 className="mb-3">Size</h4>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {optionsAge.map((option, index) => (
                        <label
                          key={index}
                          className={`group relative flex items-center justify-center rounded-md border py-3 px-1 text-xs roboto-medium hover:bg-gray-50 focus:outline-none sm:py-3 cursor-pointer bg-white text-gray-900 shadow-sm ${
                            activeAge === option.value
                              ? "ring-2 ring-[#d5076e]"
                              : ""
                          }`}
                          onClick={() => handleClickAge(option.value)}
                        >
                          <input
                            type="radio"
                            name="size-choice"
                            value={option.value}
                            className="sr-only"
                            checked={valueAge === option.value}
                            onChange={() => setValueAge(option.value)}
                            aria-labelledby={`size-choice-${index}-label`}
                          />
                          <span id={`size-choice-${index}-label`}>
                            {option.label}
                          </span>
                          <span
                            className={`pointer-events-none absolute -inset-px rounded-md ${
                              activeAge === option.value ? "border" : "border-2"
                            } ${
                              valueAge === option.value
                                ? "border-[#d5076e]"
                                : "border-transparent"
                            }`}
                            aria-hidden="true"
                          />
                        </label>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center px-5 w-full justify-center py-3 text-sm font-medium text-center bg-[#0d4c92] text-white rounded-lg hover:bg-[#d5076e] uppercase"
                    >
                      <svg
                        className="w-6 h-6 text-white mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                        ></path>
                      </svg>
                      Add to Bag
                    </a>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Feature />
      <Subscription />
    </>
  );
};

export default ProductDetail;
