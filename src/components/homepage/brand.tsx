"use client";
import React, { useEffect, useState } from "react";
import { bannerApi } from "@/api/apiService";
import ImageComponent from "../commen/image/ImageComponent";
import Link from "next/link";
import { bannerOrSliderLink } from "@/helper/redirection";
const Brand = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const params = { page: "home", pageReference: "bottom-top" };
      const result = await bannerApi(params);
      if (result?.status) {
        setData(result?.requestedData);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return (
      <>
        <section className="relative top-0 z-0 mx-auto block">
          <div
            id="default-carousel"
            className="  w-full block"
            data-carousel="slide"
          >
            <div className="relative 2xl:h-[580px] xl:h-[480px]  lg:h-400px] md:h-[300px] sm:h-[250px] xs:h-[200px] h-[120px] overflow-hidden object-fill">
              <div className="shine h-64 w-full" style={{ height: "570px" }} />
            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto pb-5 lg:pb-10">
      <div className="">
        <div className="flex items-center justify-center lg:justify-between">
          <h2 className="text-2xl font-bold text-dark sm:text-3xl ">Shop by <span className="text-[#0d916d]">Brands</span>
          </h2>
          <div className="hidden lg:flex">
            <a href="#" title=""
              className="inline-flex items-center justify-center p-1 -m-1 text-sm shd font-bold text-dark transition-all duration-200 rounded-md hover:[#0D916D]">
              View All
              <svg className="w-4 h-4 ml-2 text-dark" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid gap-2 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-4 xs:gap-2 grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 2xl:grid-cols-8 mt-5 mx-auto mt-4">
          {data?.map((_a: any) => (
            <div className="relative" key={_a._id}>
              <div>
              <Link href={bannerOrSliderLink(_a?.linkType, _a?.link)}>

                <ImageComponent
                  src={_a?.bannerImages?.[0].bannerImageUrl}
                  className="object-cover w-full h-full"
                />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-5 text-center lg:hidden">
          <a href="#" title="" className="inline-flex items-center justify-center py-1 px-4 text-sm font-bold bg-[#0d916d]  text-white transition-all duration-200 rounded-md focus:text-gray-900 focus:ring-gray-900 focus:ring-2 focus:ring-offset-2 focus:outline-none hover:text-gray-900">
            Check all items
            <svg className="w-5 h-5 ml-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Brand;