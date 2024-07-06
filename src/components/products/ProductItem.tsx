import React, { useEffect, useState } from 'react';
import ImageComponent from '../commen/image/ImageComponent';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/utils/redux/store';
import { toast } from "react-toastify";

import {
    addToCartAsync,
    updateCartAsync,
    deleteCartAsync,
    getCartAsync,
    //   selectCartTotalQuantity,
} from '@/utils/redux/slices/cartSlice';
import {
    apiAddToCartData,
    apiUpdateCartData,
    apiDeleteCartData,
} from '@/utils/types';

type ItemProps = {
    item: any;
};

const ProductItem = ({ item }: ItemProps) => {
    const dispatch: AppDispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items || []);
    const [quantity, setQuantity] = useState(0);

    const findDefaultProductVariant = (data: any) => {
        if (!data) return null;
        const { productVariants } = data;
        if (!productVariants) return null;

        const defaultVariant = productVariants?.find((variant: any) => variant.isDefault === 1);
        if (defaultVariant) return defaultVariant;
        const slugVariant = productVariants?.find((variant: any) => variant.slug === data.slug);
        if (slugVariant) return slugVariant;
        const skuVariant = productVariants?.find((variant: any) => variant.variantSku === data.sku);
        if (skuVariant) return skuVariant;
        const quantityVariant = productVariants?.find((variant: any) => Number(variant.quantity) > 0);
        if (quantityVariant) return quantityVariant;
        return null;
    };

    const findSpecificationBySlug = (variant: any, slug: string) => {
        return variant?.productSpecification?.find((spec: any) => spec.slug === slug);
    };

    const defaultVariant = findDefaultProductVariant(item);

    useEffect(() => {
        dispatch(getCartAsync({}));
    }, [dispatch]);

    useEffect(() => {
        if (defaultVariant) {
            const itemInCart = cartItems?.requestedData?.products.find(cartItem => cartItem.slug === defaultVariant.slug);
            if (itemInCart) {
                setQuantity(itemInCart.quantity);
            }

            // console.log(cartItems);
        }
    }, [cartItems, defaultVariant]);

    const handleAddToCart = (item: apiAddToCartData) => {
        dispatch(addToCartAsync(item));
        setQuantity(1);
        toast.success("Item added to cart successfully.");

    };

    const handleIncrement = () => {
        if (defaultVariant) {
            const newQuantity = quantity + 1;
            dispatch(updateCartAsync({ slug: defaultVariant.slug, quantity: newQuantity, quantityChange: false }));
            setQuantity(newQuantity);
            toast.success("Cart updated successfully.");
        }
    };

    const handleDecrement = () => {
        if (defaultVariant) {
            if (quantity > 1) {
                const newQuantity = quantity - 1;
                dispatch(updateCartAsync({ slug: defaultVariant.slug, quantity: newQuantity, quantityChange: false }));
                setQuantity(newQuantity);
                toast.success("Cart updated successfully.");
            } else {
                dispatch(updateCartAsync({ slug: defaultVariant.slug, quantity: 0, quantityChange: false }));
                setQuantity(0);
                toast.success("Cart updated successfully.");
            }
        }
    };

    const originCountrySpecification = findSpecificationBySlug(defaultVariant, 'origin-country');

    return (
        <div key={item?._id} className="relative bg-white border border-[#0D916D] border-opacity-20 hover:border-[#D7F0DB] group">
            {item?.offer?.offerTitle && (
                <span className="absolute flex items-center justify-center rounded-lg text-dark text-md bg-gradient-to-r from-teal-500 to-green-400 px-3 py-0.5 text-white text-center font-medium z-10 left-2 top-2">
                    {item.offer.offerTitle}
                </span>
            )}
            {item?.tags && (
                <span className="absolute flex items-center justify-center text-dark text-md rounded-lg bg-orange-500 px-3 py-0.5 text-white text-center font-medium z-10 right-3 top-2">
                    {item?.tags}
                </span>
            )}
            <div className="relative">
                <div className="p-7">
                    <ImageComponent
                        src={item?.productImageUrl}
                        alt={item?.productTitle || ''}
                        className="w-full h-full"
                    />
                </div>
                <div className="px-3 pt-2 text-left">
                    <p className="text-xs ubuntu-bold tracking-widest text-gray-500 uppercase">
                        {originCountrySpecification ? (
                            <>
                                ORIGIN : {originCountrySpecification?.specificationDetail?.itemName}
                            </>
                        ) : (
                            <>ORIGIN :NA</>
                        )}
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-gray-900 text-two-line">
                        <Link href={`/product-details/${defaultVariant?.slug}/${defaultVariant?.variantSku}`}>
                            {item?.productTitle || '___'}
                            <span className="absolute inset-0" aria-hidden="true"></span>
                        </Link>
                    </h3>
                    <div className="flex flex-col items-start leading-4 gap-2 mt-1">
                        <h4 className="ubuntu-bold text-[16px] xl:text-heading-5 text-[#0D916D]">
                            AED {item?.productVariants?.[0]?.discountPrice || 0}
                        </h4>
                        <span className="text-gray-400 line-through lg:text-md">
                            AED {item?.productVariants?.[0]?.price || 0}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex mx-3 my-3 gap-2 items-center justify-center">
                <div className="w-4/5">
                    {quantity === 0 ? (
                        <button
                            onClick={() => handleAddToCart({ quantity: 1, slug: defaultVariant?.slug, quantityChange: false })}
                            id={"addToCartBtn" + item?._id}
                            type="button"
                            className="flex w-full h-full border items-center justify-between mx-auto px-2 py-2 text-sm font-bold text-[#0D916D] transition-all duration-200 bg-gray-100"
                        >
                            <span>Add</span>
                            <span className="w-auto p-1 bg-white flex items-center justify-center text-center rounded-full">
                                <svg
                                    className="w-4 h-4"
                                    fill="#0D916D"
                                    version="1.1"
                                    id="fi_748113"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    style={{ enableBackground: 'new 0 0 512 512' } as any}
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <g>
                                            <path
                                                d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
                        v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    ) : (
                        <div
                            id={"quantityContainer" + item?._id}
                            className="flex justify-between items-center w-full border px-2 py-2 text-sm font-bold text-white transition-all duration-200 bg-[#0D916D]"
                        >
                            <button
                                id={"decrementBtn" + item?._id}
                                onClick={handleDecrement}
                                className="w-auto p-1 bg-white flex items-center justify-center text-center rounded-full"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="#0D916D"
                                    version="1.1"
                                    id="fi_748113"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    style={{ enableBackground: 'new 0 0 512 512' } as any}
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <g>
                                            <path d="M492,236H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h472c11.046,0,20-8.954,20-20S503.046,236,492,236z" />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <p className="text-center text-sm mx-3">{quantity}</p>
                            <button
                                id={"incrementBtn" + item?._id}
                                onClick={handleIncrement}
                                className="w-auto p-1 bg-white flex items-center justify-center text-center rounded-full"
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="#0D916D"
                                    version="1.1"
                                    id="fi_748113"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    style={{ enableBackground: 'new 0 0 512 512' } as any}
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <g>
                                            <path
                                                d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
                        v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
                <div className="w-1/5">
                    <button id={"addToWishList" + item?._id} type="button"
                        className="flex w-full items-center w-full mx-auto p-1  text-sm font-bold border text-[#65b54c] transition-all duration-200 bg-transparent">
                        <span
                            className="w-full h-[30px] bg-white flex items-center justify-center text-center rounded-full">
                            <svg className="w-7 h-7" fill="#65b54c" id="fi_13369080"
                                enable-background="new 0 0 100 100" viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg">
                                <path id="Add_to_Favorite"
                                    d="m50 91c-2.733 0-5.306-1.065-7.242-2.999v-.001l-33.129-33.129c-4.919-4.919-7.629-11.459-7.629-18.417v-.407c0-6.958 2.71-13.499 7.629-18.417s11.461-7.63 18.416-7.63h.41c6.955 0 13.497 2.71 18.416 7.629l3.129 3.129 3.129-3.129c4.919-4.919 11.461-7.629 18.416-7.629h.41c6.955 0 13.497 2.71 18.416 7.629s7.629 11.459 7.629 18.417v.407c0 6.958-2.71 13.499-7.629 18.417l-33.129 33.13c-1.936 1.935-4.509 3-7.242 3zm-3-7.242c1.608 1.605 4.395 1.601 6-.001l33.129-33.127c3.785-3.788 5.871-8.821 5.871-14.176v-.407c0-5.355-2.086-10.389-5.871-14.175s-8.821-5.872-14.174-5.872h-.41c-5.353 0-10.389 2.084-14.174 5.871l-5.25 5.25c-1.172 1.172-3.07 1.172-4.242 0l-5.25-5.25c-3.785-3.787-8.821-5.871-14.174-5.871h-.41c-5.353 0-10.389 2.084-14.174 5.871s-5.871 8.82-5.871 14.175v.407c0 5.355 2.086 10.389 5.871 14.175z">
                                </path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
