"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import product2 from "../../../../public/images/product2.jpg";
import Link from "next/link";
import ProductItem from '../../../components/products/ProductItem'; // Adjust the import according to your file structure

import {
  getBrandApi,
  getCategoryApi,
  getSpecificationApi,
  productListApi,
} from "@/api/apiService";
import FilterBy from "@/components/products/filterBy";
import { useSearchParams } from "next/navigation";

const ProductsListing = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState([]);

  const [category, setCategory] = useState<any>([]);
  const [categoryFilter, setCategoryFilter] = useState<any>([]);

  const [brand, setBrand] = useState<any>([]);
  const [brandFilter, setBrandFilter] = useState<any>([]);

  const [specification, setSpecification] = useState<any>([]);
  const [specificationFilter, setSpecificationFilter] = useState<any>([]);

  //CategoryFilter
  const handleCategoryFilter = (value: any) => {
    setCategoryFilter(value);
  };
  const categoriesParams = searchParams && searchParams.get("Categories");
  useEffect(() => {
    const fetchData = async () => {
      const params = categoriesParams ? { categories: categoriesParams ,"getspecification":"1"} : {};
      const result = await productListApi(params);
      if (result?.status) {
        setData(result?.requestedData);
      }
    };
    fetchData();
  }, [categoriesParams]);

  //BrandFilter
  const handleSpecificationFilter = (value: any) => {
    setSpecificationFilter(value);
  };
  const specificationParams = searchParams && searchParams.get("Specification");
  useEffect(() => {
    const fetchData = async () => {
      const params = specificationParams ? { specification: specificationParams ,"getspecification":"1"} : {"getspecification":"1"};
      const result = await productListApi(params);
      if (result?.status) {
        setData(result?.requestedData);
      }
    };
    fetchData();
  }, [specificationParams]);

  //specificationFilter
  const handleBrandFilter = (value: any) => {
    setBrandFilter(value);
  };
  const brandParams = searchParams && searchParams.get("Brand");
  useEffect(() => {
    const fetchData = async () => {
      const params = brandParams ? { categories: brandParams ,"getspecification":"1"} : {"getspecification":"1"};
      const result = await productListApi(params);
      if (result?.status) {
        setData(result?.requestedData);
      }
    };
    fetchData();
  }, [brandParams]);

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

  useEffect(() => {
    const fetchData = async () => {
      const params = {};
      const result2 = await getCategoryApi(params);
      const result3 = await getBrandApi(params);
      const result4 = await getSpecificationApi(params);
      if (result2?.status) {
        setCategory(result2?.requestedData);
      }
      if (result3?.status) {
        setBrand(result3?.requestedData);
      }
      if (result4?.status) {
        setSpecification(result4?.requestedData);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto mb-10 mt-5">
        <div className="">
          <div className="">
            <div className="flex gap-4 flex-row gap-8 px-3 md:px-0">
              <div className="basis-12/12 md:basis-2/12 hidden md:block">
                <div
                  className="transition-transform"
                  id="filter_Offcanvas"
                  tabIndex={-1}
                >
                  <div className="flex items-center rounded-lg justify-between mb-3  py-3 border border-x-0 border-t-0 border-b-0">
                    <h3 className="font-medium text-grey-900 uppercase">
                      Filter By
                    </h3>
                    <button
                      id="closeSidebarBtn"
                      className=" lg:hidden md:hidden inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md text-sm text-default-500 hover:text-default-700"
                      data-hs-overlay="#filter_Offcanvas"
                      type="button"
                    >
                      <span className="sr-only">Close modal</span>
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height={20}
                        width={20}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                    <a href="" className="underline text-gray-400">
                      Clear
                    </a>
                  </div>
                  <FilterBy
                    category={category}
                    handleCategoryFilter={handleCategoryFilter}
                    brand={brand}
                    handleBrandFilter={handleBrandFilter}
                    specification={specification}
                    handleSpecificationFilter={handleSpecificationFilter}
                  />
                </div>
              </div>
              <div className="basis-12/12 md:basis-10/12">
                <div className="flex-1 flex flex-col bg-white">

                  <div className=" mb-2 bg-white flex items-center justify-between gap-4 md:flex-nowrap  ">

                    <div className="flex flex-wrap items-center gap-4 md:flex-nowrap">
                      <button id="toggleBtn"
                        className="block lg:hidden xl:hidden 2xl:hidden inline-flex items-center gap-4 rounded-full border hover:bg-[#0d916d] 
   hover:text-white border-default-200 px-4 py-2.5 text-sm text-default-950 transition-all xl:px-5"
                        type="button" data-drawer-target="drawer-filter-menu"
                        data-drawer-show="drawer-filter-menu" data-drawer-placement="filter"
                        aria-controls="drawer-filter-menu">
                        Filter
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                          stroke-linecap="round" stroke-linejoin="round" height="16" width="16"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 7h-9"></path>
                          <path d="M14 17H5"></path>
                          <circle cx="17" cy="17" r="3"></circle>
                          <circle cx="7" cy="7" r="3"></circle>
                        </svg>
                      </button>


                      <h6 className="hidden text-base text-gray-400 lg:flex">{data?.length || 0}  Results Found</h6>
                    </div>




                    <div className="flex items-center">
                      <form className=" max-w-sm mx-auto relative inline-flex border p-2">
                        <button type="button"
                          className="w-full flex items-center text-sm font-medium text-default-700 transition-all">
                          <svg width="20" height="20" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg" id="fi_14618202">
                            <g id="Sort_Apps" data-name="Sort Apps">
                              <path
                                d="m7.6134 3.5146h-2.4981a1.5017 1.5017 0 0 0 -1.5 1.5v2.4981a1.5017 1.5017 0 0 0 1.5 1.5h2.4981a1.5017 1.5017 0 0 0 1.5-1.5v-2.4981a1.5017 1.5017 0 0 0 -1.5-1.5zm.5 3.9981a.5006.5006 0 0 1 -.5.5h-2.4981a.5006.5006 0 0 1 -.5-.5v-2.4981a.5007.5007 0 0 1 .5-.5h2.4981a.5007.5007 0 0 1 .5.5zm-.5 3.4746h-2.4981a1.5017 1.5017 0 0 0 -1.5 1.5v2.4981a1.5017 1.5017 0 0 0 1.5 1.5h2.4981a1.5017 1.5017 0 0 0 1.5-1.5v-2.4981a1.5017 1.5017 0 0 0 -1.5-1.5zm.5 3.9981a.5007.5007 0 0 1 -.5.5h-2.4981a.5007.5007 0 0 1 -.5-.5v-2.4981a.5006.5006 0 0 1 .5-.5h2.4981a.5006.5006 0 0 1 .5.5zm8.0918-1.2745a.5007.5007 0 0 1 .0634.7046l-1.28 1.5318a1.5009 1.5009 0 0 1 -2.3028 0l-1.28-1.5318a.5.5 0 0 1 .7675-.6416l1.1641 1.3927v-10.3332l-1.1645 1.3927a.5.5 0 0 1 -.7675-.6416l1.28-1.5318a1.4566 1.4566 0 0 1 .9471-.4923.4786.4786 0 0 1 .4086 0 1.4566 1.4566 0 0 1 .9471.4923l1.28 1.5318a.5.5 0 0 1 -.7675.6416l-1.1637-1.3927v10.3332l1.1641-1.3927a.5007.5007 0 0 1 .7041-.063z">
                              </path>
                            </g>
                          </svg>
                          <span className="pl-1">Sort By:</span>
                        </button>
                        <select id=""
                          className="appearance-none w-[180px] leading-tight pr-0 !important bg-transparent border-0 text-gray-900 text-sm rounded-0 border-0 focus:outline-none cursor-pointer  focus:ring-0 text-blue-500 block">

                          <option value="">Newest Arrivals</option>
                          <option value="">Relevance</option>
                          <option value="">Price: High to Low</option>
                          <option value="">Price: Low to High</option>
                          <option value="">Name: A to Z</option>
                          <option value="">Name: Z to A</option>
                          <option value="">Most Popular</option>
                        </select>
                      </form>

                    </div>

                  </div>

                  <div
                    id="mainContent"
                    className="grid gap-x-4 gap-y-7 grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 "
                  >
                    {data?.map((_a: any) => (
                      <div
                        className="order-1 relative  group transition-all rounded-lg duration-300 hover:border-primary hover:shadow-2xl"
                        key={_a?._id}
                      >
                        <ProductItem key={_a?._id} item={_a} />
                        
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsListing;
