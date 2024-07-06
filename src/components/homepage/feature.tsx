"use client";
import React, { useEffect, useState } from "react";
import { bannerApi } from "@/api/apiService";
import ImageComponent from "../commen/image/ImageComponent";
const Feature = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            const params = { page: "home", pageReference: "bottom-center" };
            const result = await bannerApi(params);
            if (result?.status) {
                setData(result?.requestedData);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto pb-5 lg:pb-10">
            <div className="grid gap-2 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-4 xs:gap-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 mt-5 mx-auto mt-4">
                {data?.map((_a: any) => (
                    <div className="bg-gradient-to-r from-[#0e224d] to-[#0d916d] px-4 py-4 gap-4 flex items-center justify-center" key={_a._id}>
                        <div className="mt-6 mb-6">
                            <ImageComponent
                                src={_a?.bannerImages?.[0].bannerImageUrl}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="">
                            <span className="block text-white  text-sm lg:text-lg font-medium pb-1 lg:pb-2 leading-5">{_a?.bannerTitle}</span>
                            <p className="text-white text-xs lg:text-lg">{_a?.bannerSubTitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Feature;