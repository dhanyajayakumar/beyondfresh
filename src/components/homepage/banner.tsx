"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getSliderApi } from "@/api/apiService";
import ImageComponent from "../commen/image/ImageComponent";
import Link from "next/link";
import { bannerOrSliderLink } from "@/helper/redirection";
const Banner = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = { page: "home", pageReference: "top" };
        const result = await getSliderApi(params);
        setData(data); // Assume data is an array of image objects with URLs
        if (result?.status) {
          setData(result?.requestedData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching banner list", error);
      }
    };
    fetchData();
  }, []);
  const handlePrev = useCallback(() => {
    if (!carouselRef.current) return;
    (carouselRef.current as any).swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!carouselRef.current) return;
    (carouselRef.current as any).swiper.slideNext();
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
    <>
      <section className="relative top-0 z-0 mx-auto block">
        <div
          id="default-carousel"
          className="  w-full block"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative 2xl:h-[580px] xl:h-[480px]  lg:h-400px] md:h-[300px] sm:h-[250px] xs:h-[200px] h-[120px] overflow-hidden object-fill">
            <Swiper
              ref={carouselRef}
              spaceBetween={50}
              slidesPerView={2}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
              }}
              // loop
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {data?.map((_a: any) => (
                <SwiperSlide key={_a?._id}>
                  <div className="" data-carousel-item="">
                    <Link
                      className=""
                      data-carousel-item=""
                      href={bannerOrSliderLink(_a?.linkType, _a?.link)}
                    >
                      <ImageComponent
                        src={_a?.sliderImageUrl}
                        className="h-full w-full  top-0 bottom-0 left-0"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}


            </Swiper>
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to={0}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to={1}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to={2}
            />
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/7">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/7">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Banner;
