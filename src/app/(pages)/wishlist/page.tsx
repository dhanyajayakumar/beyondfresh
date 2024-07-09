"use client";
import React, { useEffect, useState } from "react";
import { wishlistListApi } from "@/api/apiService";
import ImageComponent from "@/components/commen/image/ImageComponent";
import { addToCart, addWishlist } from "@/helper/helper";

const Wishlist = () => {
  const [data, setData] = useState<any>([]);
  const [refetch, setRefetch] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await wishlistListApi();
      if (result?.status) {
        setData(result?.requestedData);
        setRefetch(false);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  const handleMoveToCart = async (slug: string, variantSku: string) => {
    await addWishlist(slug, variantSku);
    const msg = addToCart(1, slug);
    if (msg) {
      setRefetch(true);
    }
  };

  return (
    <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto mt-5 mb-10">
      <h2 className="font-semibold text-2xl m-0 text-heading text-dark mb-4 py-3 text-center">
        {" "}
        My Wishlist{" "}
        <span className="roboto-medium text-md"> ({data?.length} item)</span>
      </h2>
      <div className="grid gap-3 2xl:gap-3 xl:gap-3 lg:gap-2 md:gap-2 sm:gap-4 xs:gap-2 grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 mt-5 mx-auto">
        {data?.map((_a: any) => (
          <div
            className="relative overflow-hidden bg-white border  border-gray-200 hover:border-transparent hover:shadow-xl group"
            key={_a?._id}
          >
            <div className="relative">
              <div className="aspect-w-1 aspect-h-1">
                <ImageComponent
                  className="object-cover w-full h-full p-0 2xl:p-10 xl:p-10 lg:p-0 md:p-0  sm:p-0  xs:p-0"
                  src={_a?.productDetails?.productImageUrl}
                  alt=""
                />
              </div>
              <div className="p-0 2xl:p-4 xl:p-4 lg:p-0 md:p-0  sm:p-0  xs:p-0 text-center">
                <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">
                  {_a?.productDetails?.productCategory
                    ?.map((_a: any) => _a?.category.categoryTitle)
                    .join(", ")}
                </p>
                <h3
                  className="mt-2 text-xs 2xl:text-lg xl:text-lg lg:text-lg  md:text-md  sm:text-sm  xs:text-xs 
                    font-medium text-gray-900 line-clamp-1 xs:line-clamp-1 sm:line-clamp-1 md:line-clamp-2 lg:line-clamp-1 xl:line-clamp-1 2xl:line-clamp-1"
                >
                  <a href="products.html" title="">
                    {_a?.productDetails?.productTitle}
                    <span className="absolute inset-0" aria-hidden="true" />
                  </a>
                </h3>
                <div className="flex items-baseline items-center gap-2 mt-1 justify-center">
                  <h4
                    className="font-bold xl:text-heading-5 text-[#0d4c92]  
                      text-xs 2xl:text-lg xl:text-lg lg:text-md md:text-sm  sm:text-sm  xs:text-xs "
                  >
                    {" "}
                    AED {_a?.productDetails?.variantDetails?.price}
                  </h4>
                  {_a?.productDetails?.variantDetails?.discountPrice !== 0 &&
                    _a?.productDetails?.variantDetails?.discountPrice !==
                      null && (
                      <span
                        className="text-gray-400 line-through text-tiny 
                      text-xs 2xl:text-lg xl:text-lg lg:text-md md:text-sm  sm:text-sm  xs:text-xs  "
                      >
                        AED {_a?.productDetails?.variantDetails?.discountPrice}
                      </span>
                    )}
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <a
                onClick={() => {
                  const msg = addWishlist(
                    _a?.productDetails?.variantDetails?.slug,
                    _a?.productDetails?.variantDetails?.variantSku
                  );
                  if (msg) {
                    setRefetch(true);
                  }
                }}
                className="flex items-center justify-center w-[50px] group px-4 py-2.5 text-sm font-bold text-center text-[#0d4c92] border border-[#0d4c92] transition-all duration-200 hover:text-[#0d4c92]  hover:bg-[#ef9bc2] "
              >
                <svg
                  className="w-[25px] fill-[#0d4c92] group-hover:fill-[#0d4c92]"
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
              </a>
              <button
                className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all border  border-[#0d4c92] duration-200 bg-[#0d4c92]
           hover:text-[#0d4c92]  hover:bg-[#ef9bc2]"
                onClick={() =>
                  handleMoveToCart(
                    _a?.productDetails?.variantDetails?.slug,
                    _a?.productDetails?.variantDetails?.variantSku
                  )
                }
              >
                <svg
                  className="w-6 h-6 fill-white m-1"
                  clipRule="evenodd"
                  fillRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit={2}
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  id="fi_7887573"
                >
                  <g id="Layer2">
                    <path d="m93.174 80.031c-1.951-14.878-6.447-49.171-8.194-62.5-.612-4.666-4.589-8.156-9.296-8.156-11.683 0-38.91 0-50.593 0-4.706 0-8.683 3.49-9.295 8.156-1.748 13.329-6.244 47.622-8.195 62.5-.351 2.676.469 5.374 2.249 7.402 1.78 2.029 4.348 3.192 7.047 3.192h66.982c2.699 0 5.267-1.163 7.047-3.192 1.78-2.028 2.599-4.726 2.248-7.402zm-61.547-55.027c0 10.348 8.401 18.75 18.75 18.75 10.348 0 18.75-8.402 18.75-18.75 0-1.725-1.401-3.125-3.125-3.125-1.725 0-3.125 1.4-3.125 3.125 0 6.899-5.601 12.5-12.5 12.5s-12.5-5.601-12.5-12.5c0-1.725-1.401-3.125-3.125-3.125-1.725 0-3.125 1.4-3.125 3.125z" />
                  </g>
                </svg>{" "}
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
