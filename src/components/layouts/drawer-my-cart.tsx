import SlideDrawer from "@/components/drawer/slide-drawer";
import React, { useEffect, useState } from 'react';
import ImageComponent from '../commen/image/ImageComponent';

import cn from "@/utils/class-names";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/utils/redux/store';
import { addToCartAsync, updateCartAsync, deleteCartAsync, getCartAsync } from '@/utils/redux/slices/cartSlice';
import { findDefaultProductVariant, findSpecificationBySlug } from '@/utils/productUtils';
import { toast } from "react-toastify";

import {
  apiAddToCartData,
  apiUpdateCartData,
  apiDeleteCartData,
} from '@/utils/types';
interface MyCartProps {
  myCartEnabled: boolean;
  changeValue: boolean;
  item: any;
  cartItems:any,
  updateCart:any,
  setMyCartEnabled: (value: boolean) => void;
  setChangeValue: (value: boolean) => void;
  anchor?: "left" | "bottom" | "right" | "top" | undefined;
}

export default function MyAccount({
  myCartEnabled,
  setMyCartEnabled,
  anchor,
  cartItems,
  updateCart
}: MyCartProps) {

  const handleUpdateCart = (item: apiAddToCartData) => {
 
    updateCart(item);
  };

  return (
    <>
      <SlideDrawer
        drawerOpen={myCartEnabled}
        // drawerClose={setMyCartEnabled}
        // drawerClose={() => setMyCartEnabled(false)}
        drawerClose={() => { "" }}


        anchor={anchor}
      >
        <div
          className={cn(
            "fixed top-0 right-0 z-40 h-screen  overflow-y-auto transition-transform  bg-white max-w-[450px] w-full"
          )}
          aria-labelledby="drawer-right-label"
        >
          <div className="drawer-content-wrapper">
            <div className="drawer-content">
              <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded  ">

                <div className="sticky top-0 z-20  relative px-0 pt-3 pb-0 bg-[#0d916d]">
                  <div className="w-full flex px-5 py-2 justify-between items-center">
                    <h2 className="font-semibold  text-lg m-0 text-heading text-white flex items-center">
                      <span className="text-xl mr-2 mb-1">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M320 264l-89.6 112-38.4-44.88"></path>
                          <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"></path>
                        </svg>
                      </span>
                      My Cart
                    </h2>
                    <button
                      onClick={() => setMyCartEnabled(false)}

                      type="button"
                      data-drawer-hide="drawer-right-cart"
                      aria-controls="drawer-right-cart"
                      className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-4 end-2.5 inline-flex items-center justify-center"
                    >
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span className="sr-only">Close menu</span>
                    </button>
                  </div>
                  <div className="w-full bg-gradient-to-r from-[#05359d] to-[#0e224d] mt-2">
                    <div className="flex items-center text-center justify-center gap-2 animate  border-0e224d px-4 py-2">
                      <p className="text-xs  mukta-regular text-white">Congratulations! You are eligible for Free Delivery</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-full h-full justify-between items-center bg-white rounded  overflow-x-auto">
                  {cartItems?.requestedData?.products?.map((cartItem: any) => (
                    <div key={cartItem.productDetails.productId} className="group w-full h-auto flex justify-start items-center bg-white py-3 px-4 border-b hover:bg-gray-50 transition-all border-gray-100 relative last:border-b-0">
                      <div className="relative flex border border-gray-100 shadow-sm overflow-hidden flex-shrink-0 cursor-pointer mr-3">
                        <ImageComponent
                          src={cartItem.productDetails.productImageUrl}
                          alt={cartItem.productDetails.productTitle || ''}
                          width={40}
                          height={50}
                        />
                      </div>
                      <div className="flex flex-col w-full overflow-hidden">
                        <a className="mukta-regular text-sm font-medium text-gray-700 text-heading " href="">
                          {cartItem.productDetails.productTitle || ''}
                        </a>
                        <span className="text-xs text-gray-400 mb-1">ORIGIN : INDIA</span>
                        <div className="flex items-center justify-between">
                          <div className="font-bold text-sm text-heading leading-5">
                            <span className="text-[#0d916d]">AED {cartItem.productDetails.variantDetails.discountPrice}</span>
                            <span className="text-gray-400 line-through text-tiny">AED {cartItem.productDetails.variantDetails.price}</span>
                          </div>
                          <div className="font-bold text-sm text-heading leading-5">
                            <span className=" flex items-center justify-center rounded-lg text-dark text-md bg-[#0d916d] px-3 py-0.5 text-white text-center  font-medium ">
                              {((1 - (cartItem.productDetails.variantDetails.discountPrice / cartItem.productDetails.variantDetails.price)) * 100).toFixed(2)}%
                            </span>
                          </div>
                          <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-gray-100 bg-white text-gray-600 rounded-md">
                            <button onClick={() => handleUpdateCart({ quantity: cartItem.quantity - 1, slug: cartItem?.slug, quantityChange: true })}>
                              <span className="text-dark text-base">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                              </span>
                            </button>
                            <p className="text-sm font-semibold text-dark px-1">{cartItem.quantity}</p>
                            <button onClick={() => { handleUpdateCart({ quantity: cartItem.quantity + 1, slug: cartItem?.slug, quantityChange: true }) }}>
                              <span className="text-dark text-base">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <line x1="12" y1="5" x2="12" y2="19"></line>
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <button className="hover:text-red-600 text-red-400 text-lg cursor-pointer">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-5">
                  <h3 className="text-base text-heading font-semibold mb-3">Basket total</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Total (Excl.tax)</span>
                    <span className="text-sm font-bold text-heading">{cartItems?.requestedData?.totalProductAmount} AED</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">VAT</span>
                    <span className="text-sm font-bold text-heading">{cartItems?.requestedData?.totalTaxAmount} AED</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Discounts</span>
                    <span className="text-sm font-bold text-heading">- {cartItems?.requestedData?.totalDiscountAmount} AED</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Delivery</span>
                    <span className="text-sm font-bold text-heading">{cartItems?.requestedData?.totalShippingAmount} AED</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Total</span>
                    <span className="text-sm font-bold text-heading">{cartItems?.requestedData?.totalAmount} AED</span>
                  </div>
                  <button className="w-full bg-[#0d916d] text-white rounded-lg py-2 hover:bg-green-600 transition-all duration-300">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SlideDrawer>
    </>
  );
}
