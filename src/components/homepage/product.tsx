import React from "react";
import Image from "next/image";
import title1 from "../../../public/images/title1.png";
import product1 from "../../../public/images/product1.jpg";
import product2 from "../../../public/images/product2.jpg";
import product3 from "../../../public/images/product3.jpg";
import product4 from "../../../public/images/product4.jpg";
import product5 from "../../../public/images/product5.jpg";

const Product = () => {
  return (
    <section className="my-10 px-3 md:px-0 mt-[150px]">
      <div className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto mb-5">
        <Image src={title1} className="w-full" alt="" />
        <div className="grid gap-5 grid-cols-2 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 mt-4">
          <div className="order-1 relative group transition-all rounded-lg duration-300 hover:border-primary hover:shadow-2xl">
            <a href="products-details.html"></a>
            <div className="relative h-full ">
              <a href="products-details.html">
                <div className="bg-white shadow-lg rounded-full w-8 h-8 absolute z-10 top-3 right-3 ">
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
                <div className="aspect-w-1 aspect-h-1 relative">
                  <Image
                    className="object-cover w-full h-full"
                    src={product1}
                    alt=""
                  />
                </div>
              </a>
              <div className="pt-1 pb-3 px-2 group">
                <a href="products-details.html">
                  <div className="flex items-baseline gap-2 mt-2">
                    <h4 className="font-bold font-chivo text-[20px] xl:text-heading-5 text-primary">
                      AED 29
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      AED 150
                    </span>
                  </div>
                </a>
                <h3 className=" text-sm font-medium text-gray-900 pb-3">
                  <a href="products-details.html"></a>
                  <a href="#" title="">
                    Girl Shimmer&amp;Shine Hooded
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center px-3 w-full justify-center py-2 text-sm font-medium text-center bg-[#0d4c92] text-white rounded-lg hover:bg-[#d5076e] uppercase"
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
          </div>
          <div className="order-1 relative  group transition-all rounded-lg duration-300 hover:border-primary hover:shadow-2xl">
            <a href="products-details.html"></a>
            <div className="relative h-full">
              <a href="products-details.html">
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
                <div className="aspect-w-1 aspect-h-1 relative">
                  <Image
                    className="object-cover w-full h-full"
                    src={product2}
                    alt=""
                  />
                </div>
              </a>
              <div className="pt-1 pb-3 px-2 group">
                <a href="products-details.html">
                  <div className="flex items-baseline gap-2 mt-2">
                    <h4 className="font-bold font-chivo text-[20px] xl:text-heading-5 text-primary">
                      AED 99
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      AED 120
                    </span>
                  </div>
                </a>
                <h3 className=" text-sm font-medium text-gray-900 pb-3">
                  <a href="products-details.html"></a>
                  <a href="#" title="">
                    Girl V-Neckline Plain Dress
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center px-3 w-full justify-center py-2 text-sm font-medium text-center bg-[#0d4c92] text-white rounded-lg hover:bg-[#d5076e] uppercase"
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
          </div>
          <div className="order-1 relative  group transition-all rounded-lg duration-300 hover:border-primary hover:shadow-2xl">
            <a href="products-details.html"></a>
            <div className="relative h-full">
              <a href="products-details.html">
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
                <div className="aspect-w-1 aspect-h-1 relative">
                  <Image
                    className="object-cover w-full h-full "
                    src={product3}
                    alt=""
                  />
                </div>
              </a>
              <div className="pt-1 pb-3 px-2 group">
                <a href="products-details.html">
                  <div className="flex items-baseline gap-2 mt-2">
                    <h4 className="font-bold font-chivo text-[20px] xl:text-heading-5 text-primary">
                      AED 50
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      AED 70
                    </span>
                  </div>
                </a>
                <h3 className=" text-sm font-medium text-gray-900 pb-3">
                  <a href="products-details.html"></a>
                  <a href="#" title="">
                    Girl Printed Dress, Fusia
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center px-3 w-full justify-center py-2 text-sm font-medium text-center bg-[#0d4c92] text-white rounded-lg hover:bg-[#d5076e] uppercase"
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
          </div>
          <div className="order-1 relative  group transition-all rounded-lg duration-300 hover:border-primary hover:shadow-2xl">
            <a href="products-details.html"></a>
            <div className="relative h-full">
              <a href="products-details.html">
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
                <div className="aspect-w-1 aspect-h-1 relative">
                  <Image
                    className="object-cover w-full h-full "
                    src={product4}
                    alt=""
                  />
                </div>
              </a>
              <div className="pt-1 pb-3 px-2 group">
                <a href="products-details.html">
                  <div className="flex items-baseline gap-2 mt-2">
                    <h4 className="font-bold font-chivo text-[20px] xl:text-heading-5 text-primary">
                      AED 60
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      AED 80
                    </span>
                  </div>
                </a>
                <h3 className=" text-sm font-medium text-gray-900 pb-3">
                  <a href="products-details.html"></a>
                  <a href="#" title="">
                    Boy High Neck Sweatshirt
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center px-3 w-full justify-center py-2 text-sm font-medium text-center bg-[#0d4c92] text-white rounded-lg hover:bg-[#d5076e] uppercase"
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
          </div>
          <div className="order-1 relative  group transition-all rounded-lg duration-300 hover:border-primary hover:shadow-2xl">
            <a href="products-details.html"></a>
            <div className="relative h-full">
              <a href="products-details.html">
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
                <div className="aspect-w-1 aspect-h-1 relative">
                  <Image
                    className="object-cover w-full h-full "
                    src={product5}
                    alt=""
                  />
                </div>
              </a>
              <div className="pt-1 pb-3 px-2 group">
                <a href="products-details.html">
                  <div className="flex items-baseline gap-2 mt-2">
                    <h4 className="font-bold font-chivo text-[20px] xl:text-heading-5 text-primary">
                      AED 120
                    </h4>
                    <span className="text-gray-400 line-through text-tiny lg:text-md">
                      AED 150
                    </span>
                  </div>
                </a>
                <h3 className=" text-sm font-medium text-gray-900 pb-3">
                  <a href="products-details.html"></a>
                  <a href="#" title="">
                    Boy Printed Zipper Jacket
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center px-3 w-full justify-center py-2 text-sm font-medium text-center bg-[#0d4c92] text-white rounded-lg hover:bg-[#d5076e] uppercase"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
