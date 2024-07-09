"use client";
import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
// import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import { RootState, AppDispatch } from '@/utils/redux/store';
import { addToCartAsync, updateCartAsync, deleteCartAsync, getCartAsync } from '@/utils/redux/slices/cartSlice';
import { toast } from "react-toastify";
import ImageComponent from '@/components/commen/image/ImageComponent';
interface MyCartProps {
  item: any;
  cartItems: any
}

const Cart = () => {
  // const cartItems = useSelector((state: RootState) => state.cart.items);
  const { requestedData} = useSelector((state: RootState) => state.cart.items);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartAsync({})); // Fetch cart items when component mounts
  }, [dispatch]);
  const updateCart = (item: any) => {
    dispatch(updateCartAsync(item));
    toast.success("Cart updated successfully.");
  };
  const cartItems = requestedData?.products;

  return (
    <>

      <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto mt-5 mb-10">


        <h2 className="text-2xl text-center font-bold text-[#111111] sm:text-3xl ">My <span className="text-[#65b54c]">Cart
        </span></h2>


        <div className="mx-auto">

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3 ">
              <div className="bg-white shadow-md border rounded-lg p-2 lg:p-4 my-3">

                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-2xl font-semibold">Your Items</h2>
                </div>

                {cartItems?.map((cartItem: any) => (
                  <>
                    <div className=" gap-4 border-b mb-6 pb-3">

                      <div className="flex gap-2 items-start">

                        <div className="">
                          <ImageComponent
                            src={cartItem.productDetails.productImageUrl}
                            alt={cartItem.productDetails.productTitle || ''}
                            className="max-h-20 max-w-20 w-ful rounded-lg "
                          />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xs lg:text-lg font-semibold text-gray-900">
                            Tapioca (Cassava,KAPPA) 1 Box

                          </h3>
                          <p className="text-xs text-gray-600">ORIGIN : INDIA</p>



                          <div className="h-8 w-22 mt-2 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
                            <button>
                              <span className="text-dark text-base"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              </span>
                            </button>
                            <p className="text-sm font-semibold text-dark px-1">1</p>
                            <button>
                              <span className="text-dark text-base"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                              </span>
                            </button>
                          </div>

                        </div>

                        <div className="flex items-center">

                          <div className="w-full flex flex-col items-end justify-between lg:justify-between lg:pt-0 lg:max-w-md">
                            <span className="text-red-600 font-semibold">AED 149.99</span>
                            <span className="text-gray-500 line-through">AED 199.99</span>
                            <span className="text-green-500 text-nowrap">(25% off)</span>

                            <p className="text-xs text-gray-600 font-semibold text-nowrap">You save: AED 150.00
                            </p>
                          </div>
                        </div>

                      </div>


                      <div className="flex space-x-2 itemms-center lg:justify-end justify-between">
                        <div className="flex-1 pt-2">
                          <p className="text-xs text-gray-600">When you order in 23 hrs 19 mins</p>
                          <p className="text-xs text-green-500">Expected Delivery : Friday, May 24</p>

                        </div>
                      </div>

                      <div className="flex space-x-2 itemms-center lg:justify-end justify-between pt-3">


                        <a className="flex items-center justify-center gap-1 group px-2 py-1 text-sm font-bold text-center text-gray-500 transition-all duration-200 hover:text-[#65b54c]  hover:bg-[#d7f0db] " href="">

                          <svg className="w-[18px] fill-gray-500  group-hover:fill-[#65b54c]" id="fi_13369080" enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path id="Add_to_Favorite" d="m50 91c-2.733 0-5.306-1.065-7.242-2.999v-.001l-33.129-33.129c-4.919-4.919-7.629-11.459-7.629-18.417v-.407c0-6.958 2.71-13.499 7.629-18.417s11.461-7.63 18.416-7.63h.41c6.955 0 13.497 2.71 18.416 7.629l3.129 3.129 3.129-3.129c4.919-4.919 11.461-7.629 18.416-7.629h.41c6.955 0 13.497 2.71 18.416 7.629s7.629 11.459 7.629 18.417v.407c0 6.958-2.71 13.499-7.629 18.417l-33.129 33.13c-1.936 1.935-4.509 3-7.242 3zm-3-7.242c1.608 1.605 4.395 1.601 6-.001l33.129-33.127c3.785-3.788 5.871-8.821 5.871-14.176v-.407c0-5.355-2.086-10.389-5.871-14.175s-8.821-5.872-14.174-5.872h-.41c-5.353 0-10.389 2.084-14.174 5.871l-5.25 5.25c-1.172 1.172-3.07 1.172-4.242 0l-5.25-5.25c-3.785-3.787-8.821-5.871-14.174-5.871h-.41c-5.353 0-10.389 2.084-14.174 5.871s-5.871 8.82-5.871 14.175v.407c0 5.355 2.086 10.389 5.871 14.175z">
                            </path>
                          </svg>
                          <span className="text-[10px]"> Add to Wishlist</span>
                        </a>




                        <a className="flex items-center justify-center gap-1 group px-2 py-1 text-sm font-bold text-center text-gray-500 transition-all duration-200 hover:text-[#65b54c]  hover:bg-[#d7f0db] " href="">

                          <svg className="w-[18px] fill-gray-500 group-hover:fill-[#65b54c]" id="fi_3096673" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <g>
                              <path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z">
                              </path>
                              <path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z">
                              </path>
                              <path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z">
                              </path>
                              <path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z">
                              </path>
                            </g>
                          </svg>

                          <span className="text-[10px]"> Remove</span>
                        </a>
                      </div>







                    </div>
                  </>
                ))}






              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white shadow-md border rounded-lg p-4 mt-3 ">
                <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>

                <div className="relative mb-3">
                  <div className="flex mt-1 mb-2">
                    {/* <input type="text" id="coupon" className="flex-1 block w-full px-3 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:[#65b54c] focus:border-[#65b54c] sm:text-sm" placeholder="Enter coupon code"> */}
                      <button className="bg-[#65b54c] text-white px-4 py-2 rounded-r-md hover:bg-[#d7f0db] hover:text-[#65b54c] ">Apply</button>
                  </div>
                  <div id="suggestions" className=" z-10 w-full bg-white border border-dotted border-gray-300 rounded-md mt-1 p-3">
                    <div className="border-b border-gray-200 pb-2 mb-2">
                      <div className="flex justify-between items-center px-3 py-2">
                        <div>
                          <span className="font-semibold text-[#65b54c]">SAVE10</span>
                          <p className="text-sm text-gray-500">Save 10% on your purchase</p>
                        </div>
                        <button className="bg-[#d7f0db] text-[#65b54c] px-2 py-1 rounded-md hover:bg-[#65b54c] hover:text-white" >Copy</button>
                      </div>
                    </div>
                    <div className="border-b border-[#d7f0db] pb-2 mb-2">
                      <div className="flex justify-between items-center px-3 py-2">
                        <div>
                          <span className="font-semibold text-[#65b54c]">DISCOUNT20</span>
                          <p className="text-sm text-gray-500">Get 20% off on orders over $100</p>
                        </div>
                        <button className="bg-[#d7f0db] text-[#65b54c] px-2 py-1 rounded-md hover:bg-[#65b54c] hover:text-white" >Copy</button>
                      </div>
                    </div>
                    <div className="border-b border-[#d7f0db] pb-2 mb-2">
                      <div className="flex justify-between items-center px-3 py-2">
                        <div>
                          <span className="font-semibold text-[#65b54c]">FREESHIP</span>
                          <p className="text-sm text-gray-500">Free shipping on all orders</p>
                        </div>
                        <button className="bg-[#d7f0db] text-[#65b54c] px-2 py-1 rounded-md hover:bg-[#65b54c] hover:text-white" >Copy</button>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center px-3 py-2">
                        <div>
                          <span className="font-semibold text-[#65b54c]">WELCOME5</span>
                          <p className="text-sm text-gray-500">5% off on your first order</p>
                        </div>
                        <button className="bg-[#d7f0db] text-[#65b54c] px-2 py-1 rounded-md hover:bg-[#65b54c] hover:text-white">Copy</button>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-md font-medium text-gray-700 mb-2">
                    <span>Subtotal</span>
                    <span>AED 1,774
                    </span>
                  </div>
                  <div className="flex justify-between text-md font-medium text-gray-700 mb-2">
                    <span>Discount</span>
                    <span className="text-green-500 ">- AED 851
                    </span>
                  </div>
                  <div className="flex justify-between text-md font-medium text-gray-700 mb-2">
                    <span>Delivery Charges
                    </span>
                    <span className="text-green-500 ">FREE</span>
                  </div>



                  <div className="my-4 border-b border-default-200"></div>

                  <div className="flex justify-between text-md font-medium text-gray-900 mb-2">
                    <span>Total

                    </span>
                    <span className="text-base font-bold text-default-700">AED 1,786


                    </span>
                  </div>


                  <a className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all border  border-[#65b54c] duration-200 bg-[#65b54c]  hover:text-[#65b54c]  hover:bg-[#d7f0db]" href="checkout.html">Proceed to Checkout</a>
                </div>
              </div>
            </div>
          </div>
        </div>




      </section>


    </>
  );
};

export default Cart;
