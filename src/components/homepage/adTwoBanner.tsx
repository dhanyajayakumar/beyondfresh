"use client";
import React, { useEffect, useState } from "react";
import { bannerApi } from "@/api/apiService";
import ImageComponent from "../commen/image/ImageComponent";

import Link from "next/link";
import { bannerOrSliderLink } from "@/helper/redirection";
const AdTwoBanner = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const params = { page: "home", pageReference: "middle-bottom" };
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


      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">


        {data?.map((_a: any) => (
          <div className="relative" key={_a._id}>
            <div>
              <Link href={bannerOrSliderLink(data?.[0]?.linkType, data?.[0]?.link)}>

                <ImageComponent
                  src={_a?.bannerImages?.[0].bannerImageUrl}
                  className="object-cover w-full h-full rounded-sm lg:rounded-xl"

                />
              </Link>

            </div>
          </div>
        ))}





      </div>


    </section>
  );
};

export default AdTwoBanner;
