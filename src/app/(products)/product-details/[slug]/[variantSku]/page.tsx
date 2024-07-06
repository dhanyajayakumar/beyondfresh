"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dtpt from "../../../../../../public/images/dt-pt.jpeg";
import { productDetailsApi } from "@/api/apiService";
import ImageComponent from "@/components/commen/image/ImageComponent";
import { attributeTypes } from "@/helper/constants";
import Breadcrumb from "@/components/commen/Breadcrumb";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "@/utils/redux/slices/productSlice";
import { setQuantity, setSelectedAttributes } from "@/utils/redux/slices/uiSlice";
import { AppDispatch, RootState } from '@/utils/redux/store'; // Adjust the import path as necessary
import { Rating } from "@mui/material";
import ReactImageZoom from 'react-image-zoom';

const ProductDetail = ({ params }: any) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const query = `${params?.slug}/${params?.variantSku}`;
    const param = { getspecification: 1, getattribute: 1 };
    dispatch(fetchProductDetails({ query, param }));
  }, [dispatch, params]);

  const { data, loading } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (data) {
      const defaultVariant = findDefaultProductVariant(data, params);
      if (defaultVariant) {
        dispatch(setSelectedAttributes({ productVariantAttributes: defaultVariant.productVariantAttributes }));
      }
    }
  }, [data, dispatch, params]);

  const { quantity, selectedAttributes } = useSelector((state: RootState) => state.ui);
  console.log(quantity);
  console.log(selectedAttributes);
  function transformData(productVariants: any[]) {
    const attributeMap: { [key: string]: Set<string> } = {};

    productVariants?.forEach((variant: any) => {
      variant.productVariantAttributes.forEach((attribute: any) => {
        const attributeId = attribute.attributeId;
        const attributeName = attribute.attributeTitle;
        const attributeDetail = attribute.attributeDetail;
        const attributeDetailItemId = attributeDetail._id;

        if (!attributeMap[attributeId]) {
          attributeMap[attributeId] = new Set();
        }

        attributeMap[attributeId].add(
          JSON.stringify({
            _id: attributeDetailItemId,
            attributeId: attributeDetail.attributeId,
            itemName: attributeDetail.itemName,
            itemValue: attributeDetail.itemValue,
          })
        );
      });
    });

    const result: any = Object.keys(attributeMap).map((attributeId: string) => {
      const sampleAttribute = productVariants[0].productVariantAttributes.find(
        (attribute: any) => attribute.attributeId === attributeId
      );

      const attributeValues = Array.from(attributeMap[attributeId]).map((value: string) =>
        JSON.parse(value)
      );

      return {
        _id: sampleAttribute?._id,
        attributeId: sampleAttribute?.attributeId,
        attributeTitle: sampleAttribute?.attributeTitle,
        slug: sampleAttribute?.slug,
        attributeType: sampleAttribute?.attributeType,
        attributeValues,
      };
    });

    return result;
  }

  const transformedData = data?.productVariants ? transformData(data.productVariants) : [];

  const findDefaultProductVariant = (data: any, param: any) => {
    if (!data) return null;
    const { productVariants } = data;
    if (!productVariants) return null;

    const defaultVariant = productVariants?.find((variant: any) => variant.isDefault === 1);
    if (defaultVariant) return defaultVariant;
    const slugVariant = productVariants?.find((variant: any) => variant.slug === param.slug);
    if (slugVariant) return slugVariant;
    const skuVariant = productVariants?.find((variant: any) => variant.variantSku === param.sku);
    if (skuVariant) return skuVariant;
    const quantityVariant = productVariants?.find((variant: any) => Number(variant.quantity) > 0);
    if (quantityVariant) return quantityVariant;
    return null;
  };

  const handleChangeAttribute = (attrItem: any, attr: any) => {
    const updatedAttributes = selectedAttributes?.productVariantAttributes?.map((attribute: any) =>
      attribute.attributeId === attr.attributeId
        ? {
          ...attribute,
          attributeDetail: attrItem,
        }
        : attribute
    );

    dispatch(setSelectedAttributes({ productVariantAttributes: updatedAttributes }));

    const matchingVariant = data?.productVariants?.find((variant: any) => {
      return variant.productVariantAttributes.every((attribute: any) => {
        const selectedAttribute = updatedAttributes.find(
          (attr: any) => attr.attributeId === attribute.attributeId
        );
        return (
          selectedAttribute &&
          selectedAttribute.attributeDetail._id === attribute.attributeDetail._id
        );
      });
    });

    if (matchingVariant) {
      const newUrl = `product-details/${matchingVariant.slug}/${matchingVariant.variantSku}`;
      router.push(newUrl);
    } else {
      toast.error("This product combination is not available");
    }
  };
  const findSpecificationBySlug = (variant: any, slug: string) => {
    return variant?.productSpecification?.find((spec: any) => spec.slug === slug);
  };
  const handleDecrement = (minQuantity: number) => {
    const newQuantity = Math.max(parseInt(quantity, 10) - 1, minQuantity);

    dispatch(setQuantity((newQuantity)));
  };

  const handleIncrement = (maxQuantity: number) => {
    const newQuantity = Math.min(parseInt(quantity, 10) + 1, maxQuantity)
    dispatch(setQuantity(newQuantity));
  };

  const defaultVariant = findDefaultProductVariant(data, params);
  const originCountrySpecification = findSpecificationBySlug(defaultVariant, "origin-country");
  if (loading) {
    return (
      <>
        <section className="xl:px-28 lg:px-28 md:px-28  mx-auto mt-4">
          <div className="px-[12px] md:px-[36px] xl:px-0 mt-[30px] lg:grid lg:grid-cols-2 gap-[0px] xl:gap-0">
            <div className="relative lg:flex flex-col">
              <div className="sticky top-0 z-0">
                <div className=" lg:w-[95%] xl:w-[95%] lg:ml-0 lg:mr-0">
                  <div className="product-main mb-[30px]">
                    <div className="border p-10 border-gray-200 rounded-2xl relative p-[30px] mr-[1px]">
                      <div className="relative">
                        <div className="shine h-64 w-full" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-start-2  lg:ml-4">
              <div className="flex flex-col items-start justify-between  w-full">
                <div className='shine' />
              </div>
              <div className="pt-2 pb-2">
                <div className='shine' />
              </div>

              <div className="flex flex-col items-start justify-between  w-full">
                <div className='shine' />
              </div>
              <div className="pt-2 pb-2">
                <div className='shine' />
              </div>

              <div className="flex flex-col items-start justify-between  w-full">
                <div className='shine' />
              </div>
              <div className="pt-2 pb-2">
                <div className='shine' />
              </div>

              <div className="flex flex-col items-start justify-between  w-full">
                <div className='shine' />
              </div>
              <div className="pt-2 pb-2">
                <div className='shine' />
              </div>

            </div>
          </div>
        </section>
      </>
    );
  }
  return (
    <>
      <Breadcrumb />
      <section className="xl:px-28 lg:px-28 md:px-28  mx-auto mt-4">
        <div className="px-[12px] md:px-[36px] xl:px-0 mt-[30px] lg:grid lg:grid-cols-2 gap-[0px] xl:gap-0">
          <div className="relative lg:flex flex-col">
            <div className="sticky top-0 z-0">
               {/* <div>
      <h1>Product Page</h1>
      <ReactImageZoom
        width={400} // Adjust as needed
        height={400} // Adjust as needed
        img={imageUrl}
        zoomImg={imageUrl}
      />
      {/* Other product details and components */}
    {/* </div> */} 
              <div className=" lg:w-[95%] xl:w-[95%] lg:ml-0 lg:mr-0">
                <div className="product-main mb-[30px]">
                  <div className="border p-10 border-gray-200 rounded-2xl relative p-[30px] mr-[1px]">
                    <div className="relative">
                      <ImageComponent
                        className=" h-full w-full object-cover transition-all duration-300 cursor-crosshair"
                        src={data?.productImageUrl}
                        alt="image of a product"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="scrollbar-hide lg:w-[15%] xl:w-[15%]">
                <div className="product-nav lg:flex gap-0 items-start lg:flex-col slick-slider slider">
                  <div className="border border-gray-200 rounded-2xl p-[10px] mb-3 mx-[10px]">
                    <Image
                      className="h-full w-full object-cover min-w-[50px]"
                      src={dtpt}
                      alt="image of a product"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-2  lg:ml-4">
            <div className="flex flex-col items-start justify-between  w-full">
              <a href="" className="uppercase font-semibold text-gray-600 mb-1">Beyond Fresh</a>
              <h3 className="w-11/12 text-black ubuntu-bold text-2xl md:text-heading-4">
                {data?.productTitle}
              </h3>
            </div>
            <div className="pt-2 pb-2">
              <p className="text-gray-500 text-sm leading-7 lg:leading-[1.85em]">
                <div dangerouslySetInnerHTML={{ __html: data?.description }} />

              </p>
            </div>
            <div className="mx-auto bg-white">
              <form>
                {transformedData?.map((attrItem: any) => (
                  <div className="mb-2" key={attrItem.attributeId}>
                    <label className="block font-semibold text-md mb-3">{attrItem.attributeTitle}:</label>
                    <div className="flex gap-3">
                      {attrItem?.attributeValues?.map((item: any) => {
                        const isDefault = selectedAttributes?.productVariantAttributes?.some(
                          (attr: any) =>
                            attr.attributeDetail._id === item._id &&
                            attr.attributeDetail.attributeId === item.attributeId
                        );
                        return (
                          <label
                            key={item._id}
                            onClick={() => handleChangeAttribute(item, attrItem)}
                            htmlFor={item._id}
                            className={`text-xs font-medium peer-checked:bg-green-100 peer-checked:border-green-500 peer-checked:text-green-700 border border-gray-300 p-2 rounded cursor-pointer transition duration-300 ease-in-out  ${isDefault ? 'selected_attribute_value' : ''}`}
                          >
                            <input
                              type="radio"
                              id={item._id}
                              checked={isDefault}
                              value={item.itemName}
                              name={attrItem.slug}
                              className="hidden peer"
                              aria-labelledby={`type-choice-${item._id}-label`}
                            />
                            {item.itemName}
                          </label>
                        );
                      })}
                    </div>
                  </div>
                ))}


                <div className="mb-2">
                  <label className="block font-semibold text-md mb-3">Brand:</label>
                  <div className="flex gap-3 items-center">

                    <ImageComponent
                      className="text-xs font-medium"
                      src={data?.brand?.brandImageUrl}
                      width={50}
                      height={50}
                      alt="image of a product"
                    />
                    <span className="text-xs font-medium">{data?.brand?.brandTitle}</span>
                  </div>
                </div>

                {originCountrySpecification && (
                  <div className="mb-2">
                    <label className="block font-semibold text-md mb-3">Origin:</label>
                    <div className="flex gap-3 items-center">
                      <ImageComponent
                        className="text-xs font-medium"
                        src={"https://via.placeholder.com/20"}
                        width={50}
                        height={50}
                        alt="image of a product"
                      />
                      <span className="text-xs font-medium">{originCountrySpecification?.specificationDetail?.itemName}</span>
                    </div>
                  </div>
                )}




                <div className="mb-2">
                  <label className="block font-semibold text-md mb-3">Quantity:</label>

                  <div className="relative flex items-center max-w-[9rem] rounded-md overflow-hidden border">
                    <button
                      type="button"
                      id="decrement-button"
                      data-input-counter-decrement="quantity-input"
                      onClick={() =>
                        handleDecrement(
                          parseInt(
                            defaultVariant?.cartMinQuantity
                          ) || 1
                        )
                      }
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
                      type="number"
                      id="quantity-input"
                      data-input-counter=""
                      aria-describedby="helper-text-explanation"
                      className="bg-white  border-0 h-12 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2  dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={quantity}
                      required
                    // disabled
                    />
                    <button
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="quantity-input"
                      onClick={() =>
                        handleIncrement(
                          parseInt(
                            defaultVariant?.cartMaxQuantity
                          ) || 2
                        )
                      }
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
                </div>

                <div className="flex flex-row gap-2 items-baseline mb-3">
                  <label className="block font-semibold text-md mb-3">Availability:</label>
                  {defaultVariant?.status == 1 ? (
                    <div className="basis-10/12">
                      <div className="flex items-center">
                        <span className="bg-green-500 w-3 h-3 rounded-full inline-block mr-2"></span>
                        <span>In stock</span>
                      </div>
                    </div>
                  ) : (
                    <div className="basis-10/12">
                      <div className="flex items-center">
                        <span className="bg-red-500 w-3 h-3 rounded-full inline-block mr-2"></span>
                        <span>Out of stock</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4 mt-2">
                  <h2 className="font-medium  text-2xl  md:text-heading-3 text-primary">
                    AED  {defaultVariant?.discountPrice}
                  </h2>
                  <h3 className="font-medium  text-2xl md:text-heading-4 text-gray-500 line-through">

                    AED {defaultVariant?.price}
                  </h3>
                  {
                    defaultVariant?.discountPrice < defaultVariant?.price && (
                      <>
                        <div className="font-bold text-sm text-heading">
                          <span className=" flex items-center justify-center rounded-lg text-dark text-md bg-[#0e224d] px-3 py-0.5 text-white text-center  font-medium ">Save {((defaultVariant?.price - defaultVariant?.discountPrice) / defaultVariant?.price) * 100}%</span>

                        </div>
                      </>
                    )
                  }


                </div>
                {
                  defaultVariant?.discountPrice < defaultVariant?.price && (
                    <>
                      <p className="text-gray-500">You Save : AED {defaultVariant?.price - defaultVariant?.discountPrice}(all inclusive)</p>
                    </>
                  )
                }
                <div className="w-full bg-gray-200 h-[1px] mb-5 mt-5"></div>

                <div className="flex items-center gap-5">

                  <button
                    className="bg-gradient-to-r from-[#0e224d] to-[#65b54c] text-white flex items-center justify-center gap-3 font-medium rounded-xl cursor-pointer max-w-[450px] w-full h-[50px] py-3 px-3 gap-[3px] border-2 border-[#0b906e] hover:bg-gradient-to-l hover:text-[#b4e1b9] cursor-pointer transition-all duration-300 ">
                    <svg width="18pt" height="18pt" fill="#fff" viewBox="-35 0 512 512.00102"
                      xmlns="http://www.w3.org/2000/svg" id="fi_1656850">
                      <path
                        d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0">
                      </path>
                    </svg>
                    <span className="text-nowrap"> Add To Bag</span>
                  </button>

                  <button
                    className="text-white flex items-center justify-center gap-3 font-medium rounded-xl cursor-pointer transition-all duration-300 max-w-[450px] w-full h-[50px] py-3 px-3 gap-[3px] bg-[#0b906e] bg-opacity-60 border-2 border-[#0b906e] hover:bg-[#0e224d] hover:text-white ">
                    <svg width="18pt" height="18pt" fill="#fff" id="fi_9219671" enableBackground={"new 0 0 64 64"}
                    viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <g>
                          <path
                            d="m25.308 61.679c-3.514 0-6.373-2.859-6.373-6.373s2.859-6.372 6.373-6.372 6.373 2.858 6.373 6.372-2.859 6.373-6.373 6.373zm0-8.745c-1.308 0-2.373 1.064-2.373 2.372 0 1.309 1.064 2.373 2.373 2.373s2.373-1.064 2.373-2.373c0-1.308-1.064-2.372-2.373-2.372z">
                          </path>
                          <path
                            d="m47.462 61.679c-3.514 0-6.372-2.859-6.372-6.373s2.858-6.372 6.372-6.372 6.373 2.858 6.373 6.372-2.86 6.373-6.373 6.373zm0-8.745c-1.308 0-2.372 1.064-2.372 2.372 0 1.309 1.064 2.373 2.372 2.373 1.309 0 2.373-1.064 2.373-2.373 0-1.308-1.065-2.372-2.373-2.372z">
                          </path>
                        </g>
                        <path
                          d="m52.128 43.994h-31.419c-3.057 0-5.668-2.081-6.35-5.061l-6.521-28.477c-.086-.376-.346-.698-.696-.86l-5.409-2.507c-1.252-.58-1.797-2.066-1.217-3.319.58-1.252 2.067-1.797 3.319-1.217l5.409 2.507c1.743.807 3.04 2.407 3.468 4.28l6.521 28.479c.158.692.765 1.176 1.476 1.176h31.419c.708 0 1.314-.481 1.476-1.171l5.07-21.813c.145-.62-.119-1.071-.288-1.284-.17-.214-.55-.572-1.186-.572h-37c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5h37c1.999 0 3.857.897 5.101 2.462s1.696 3.579 1.244 5.526l-5.071 21.814c-.691 2.965-3.3 5.037-6.346 5.037z">
                        </path>
                      </g>
                    </svg>
                    <span className="text-nowrap"> Buy it now</span>
                  </button>

                  <button
                    className="text-black flex max-w-md items-center justify-center gap-3 font-medium rounded-xl cursor-pointer transition-all duration-300 h-[50px] py-3 px-3 gap-[3px] border-2 border-[#0b906e] hover:bg-green-100 hover:text-black ">

                    <svg width="18pt" height="18pt" id="fi_13369080" enableBackground="new 0 0 100 100"
                      viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <path id="Add_to_Favorite"
                        d="m50 91c-2.733 0-5.306-1.065-7.242-2.999v-.001l-33.129-33.129c-4.919-4.919-7.629-11.459-7.629-18.417v-.407c0-6.958 2.71-13.499 7.629-18.417s11.461-7.63 18.416-7.63h.41c6.955 0 13.497 2.71 18.416 7.629l3.129 3.129 3.129-3.129c4.919-4.919 11.461-7.629 18.416-7.629h.41c6.955 0 13.497 2.71 18.416 7.629s7.629 11.459 7.629 18.417v.407c0 6.958-2.71 13.499-7.629 18.417l-33.129 33.13c-1.936 1.935-4.509 3-7.242 3zm-3-7.242c1.608 1.605 4.395 1.601 6-.001l33.129-33.127c3.785-3.788 5.871-8.821 5.871-14.176v-.407c0-5.355-2.086-10.389-5.871-14.175s-8.821-5.872-14.174-5.872h-.41c-5.353 0-10.389 2.084-14.174 5.871l-5.25 5.25c-1.172 1.172-3.07 1.172-4.242 0l-5.25-5.25c-3.785-3.787-8.821-5.871-14.174-5.871h-.41c-5.353 0-10.389 2.084-14.174 5.871s-5.871 8.82-5.871 14.175v.407c0 5.355 2.086 10.389 5.871 14.175z">
                      </path>
                    </svg>
                  </button>


                </div>



                <div className="relative py-3 max-w-2xl px-3 mb-4 mt-5 text-green-800 border border-green-300 rounded-lg bg-green-50 bg-bottom-right bg-[url('/imagesNew/express-delivery.png')] bg-no-repeat bg-right bg-contain" role="alert">
                  <h3 className="text-lg font-medium mb-2">Deliver To Dubai</h3>
                  <ul className="list-disc list-inside text-sm">
                    <li className="mb-1">Get the delivery Tue, May 28</li>
                    <li className="mb-1">When you order Within 23 hrs 34 min</li>
                    <li className="mb-1">Cash on delivery Available</li>
                  </ul>
                </div>



                <div className="social-share flex items-center w-full mt-10"><span className="text-qblack text-[13px] mr-[17px] inline-block">Share To Friends</span>
                  <div className="flex space-x-5 items-center"><span>

                    <a href="">
                      <svg width="15" height="15" viewBox="0 0 511 511.9" xmlns="http://www.w3.org/2000/svg" id="fi_1384031">
                        <path d="m510.949219 150.5c-1.199219-27.199219-5.597657-45.898438-11.898438-62.101562-6.5-17.199219-16.5-32.597657-29.601562-45.398438-12.800781-13-28.300781-23.101562-45.300781-29.5-16.296876-6.300781-34.898438-10.699219-62.097657-11.898438-27.402343-1.300781-36.101562-1.601562-105.601562-1.601562s-78.199219.300781-105.5 1.5c-27.199219 1.199219-45.898438 5.601562-62.097657 11.898438-17.203124 6.5-32.601562 16.5-45.402343 29.601562-13 12.800781-23.097657 28.300781-29.5 45.300781-6.300781 16.300781-10.699219 34.898438-11.898438 62.097657-1.300781 27.402343-1.601562 36.101562-1.601562 105.601562s.300781 78.199219 1.5 105.5c1.199219 27.199219 5.601562 45.898438 11.902343 62.101562 6.5 17.199219 16.597657 32.597657 29.597657 45.398438 12.800781 13 28.300781 23.101562 45.300781 29.5 16.300781 6.300781 34.898438 10.699219 62.101562 11.898438 27.296876 1.203124 36 1.5 105.5 1.5s78.199219-.296876 105.5-1.5c27.199219-1.199219 45.898438-5.597657 62.097657-11.898438 34.402343-13.300781 61.601562-40.5 74.902343-74.898438 6.296876-16.300781 10.699219-34.902343 11.898438-62.101562 1.199219-27.300781 1.5-36 1.5-105.5s-.101562-78.199219-1.300781-105.5zm-46.097657 209c-1.101562 25-5.300781 38.5-8.800781 47.5-8.601562 22.300781-26.300781 40-48.601562 48.601562-9 3.5-22.597657 7.699219-47.5 8.796876-27 1.203124-35.097657 1.5-103.398438 1.5s-76.5-.296876-103.402343-1.5c-25-1.097657-38.5-5.296876-47.5-8.796876-11.097657-4.101562-21.199219-10.601562-29.398438-19.101562-8.5-8.300781-15-18.300781-19.101562-29.398438-3.5-9-7.699219-22.601562-8.796876-47.5-1.203124-27-1.5-35.101562-1.5-103.402343s.296876-76.5 1.5-103.398438c1.097657-25 5.296876-38.5 8.796876-47.5 4.101562-11.101562 10.601562-21.199219 19.203124-29.402343 8.296876-8.5 18.296876-15 29.398438-19.097657 9-3.5 22.601562-7.699219 47.5-8.800781 27-1.199219 35.101562-1.5 103.398438-1.5 68.402343 0 76.5.300781 103.402343 1.5 25 1.101562 38.5 5.300781 47.5 8.800781 11.097657 4.097657 21.199219 10.597657 29.398438 19.097657 8.5 8.300781 15 18.300781 19.101562 29.402343 3.5 9 7.699219 22.597657 8.800781 47.5 1.199219 27 1.5 35.097657 1.5 103.398438s-.300781 76.300781-1.5 103.300781zm0 0">
                        </path>
                        <path d="m256.449219 124.5c-72.597657 0-131.5 58.898438-131.5 131.5s58.902343 131.5 131.5 131.5c72.601562 0 131.5-58.898438 131.5-131.5s-58.898438-131.5-131.5-131.5zm0 216.800781c-47.097657 0-85.300781-38.199219-85.300781-85.300781s38.203124-85.300781 85.300781-85.300781c47.101562 0 85.300781 38.199219 85.300781 85.300781s-38.199219 85.300781-85.300781 85.300781zm0 0">
                        </path>
                        <path d="m423.851562 119.300781c0 16.953125-13.746093 30.699219-30.703124 30.699219-16.953126 0-30.699219-13.746094-30.699219-30.699219 0-16.957031 13.746093-30.699219 30.699219-30.699219 16.957031 0 30.703124 13.742188 30.703124 30.699219zm0 0">
                        </path>
                      </svg>
                    </a>

                  </span>

                    <span>

                      <a href="">
                        <svg width="15" height="15" version="1.1" id="fi_160154" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48.605 48.605" style={{enableBackground:"new 0 0 48.605 48.605"} as any} xmlSpace="preserve">
                          <g>
                            <path d="M34.094,8.688h4.756V0.005h-8.643c-0.721-0.03-9.51-0.198-11.788,8.489c-0.033,0.091-0.761,2.157-0.761,6.983l-7.903,0.024
                        v9.107l7.913-0.023v24.021h12.087v-24h8v-9.131h-8v-2.873C29.755,10.816,30.508,8.688,34.094,8.688z M35.755,17.474v5.131h-8v24
                        h-8.087V22.579l-7.913,0.023v-5.107l7.934-0.023l-0.021-1.017c-0.104-5.112,0.625-7.262,0.658-7.365
                        c1.966-7.482,9.473-7.106,9.795-7.086l6.729,0.002v4.683h-2.756c-4.673,0-6.338,3.054-6.338,5.912v4.873L35.755,17.474
                        L35.755,17.474z"></path>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                          <g>
                          </g>
                        </svg>
                      </a>


                    </span>

                    <span>
                      <a href="">
                        <svg width="15" height="15" id="fi_5968958" enable-background="new 0 0 1226.37 1226.37" viewBox="0 0 1226.37 1226.37" xmlns="http://www.w3.org/2000/svg">
                          <path d="m727.348 519.284 446.727-519.284h-105.86l-387.893 450.887-309.809-450.887h-357.328l468.492 681.821-468.492 544.549h105.866l409.625-476.152 327.181 476.152h357.328l-485.863-707.086zm-144.998 168.544-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721h-162.604l-323.311-462.446z">
                          </path>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                          <g></g>
                        </svg>
                      </a>
                    </span>


                    <span>
                      <a href="">
                        <svg width="15" height="15" viewBox="-23 -21 682 682.66669" xmlns="http://www.w3.org/2000/svg" id="fi_1384023">
                          <path d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0" fill-rule="evenodd"></path>
                        </svg>
                      </a>
                    </span>



                  </div>
                </div>




              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
