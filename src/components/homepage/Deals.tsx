"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { collectionProductsApi } from "@/api/apiService";
import ProductItem from '../../components/products/ProductItem'; // Adjust the import according to your file structure

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const Deals = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const calculateTimeLeft = () => {
    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0, 0
    );
    const difference = +nextMidnight - +now;
    let timeLeft: TimeLeft = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const params = { page: "home", pageReference: "top", "getspecification": 1 };
      const result = await collectionProductsApi(params);
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
                <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto pb-5 lg:pb-10 bg-[#D7F0DB]">
                    <div className="pt-5">
                        <div className="flex items-center justify-center lg:justify-between">
                            <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl ">
                                Daily <span className="text-[#0d916d]">Deals</span>
                            </h2>
                            <div className="hidden lg:flex">
                                <div className="flex items-center gap-2 justify-center px-3 py-2 rounded-full bg-gradient-to-r from-[#018971] to-[#00C6A3]">
                                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                        <Image
                                            className="pr-2 md:pr-0"
                                            alt=""
                                            width={100}
                                            height={150}
                                            src={"/imagesNew/midnight.gif"}
                                        />
                                    </div>

                                    <div className="flex flex-col items-start justify-center text-white">
                                        <span className=" text-[20px] leading-[20px]">Hurry Up!</span>
                                        <span className="text-[15px] leading-[20px]">Offer end in : </span>
                                    </div>

                                    <div className="rounded-lg text-center">
                                        <div id="countdown" className="text-4xl flex space-x-2 justify-center ">
                                            <div className="flex flex-col items-center justify-center rounded-full bg-[#08646b] w-[50px] h-[50px] shadow-xl text-white">
                                                <span id="days" className="days text-[20px] leading-[15px]">0</span>
                                                <span className="text-[10px] leading-[15px]">Days</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center rounded-full bg-[#08646b] w-[50px] h-[50px] shadow-xl text-white">
                                                <span id="hours" className="hours text-[20px] leading-[15px]">{timeLeft.hours}</span>
                                                <span className="text-[10px] leading-[15px]">Hours</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center rounded-full bg-[#08646b] w-[50px] h-[50px] shadow-xl text-white">
                                                <span id="minutes" className="minutes text-[20px] leading-[15px]">{timeLeft.minutes}</span>
                                                <span className="text-[10px] leading-[15px]">Minutes</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center rounded-full bg-[#08646b] w-[50px] h-[50px] shadow-xl text-white">
                                                <span id="seconds" className="seconds text-[20px] leading-[15px]">{timeLeft.seconds}</span>
                                                <span className="text-[10px] leading-[15px]">Seconds</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-2 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-4 xs:gap-2 grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 mt-5 mx-auto">

                            <div className="relative bg-white border border-[#0D916D] border-opacity-20 hover:border-[#D7F0DB] group">
                                <div className="shine h-64 w-full" style={{ height: "490px" }} />

                            </div>
                            <div className="relative bg-white border border-[#0D916D] border-opacity-20 hover:border-[#D7F0DB] group">
                                <div className="shine h-64 w-full" style={{ height: "490px" }} />

                            </div>
                            <div className="relative bg-white border border-[#0D916D] border-opacity-20 hover:border-[#D7F0DB] group">
                                <div className="shine h-64 w-full" style={{ height: "490px" }} />

                            </div>
                            <div className="relative bg-white border border-[#0D916D] border-opacity-20 hover:border-[#D7F0DB] group">
                                <div className="shine h-64 w-full" style={{ height: "490px" }} />

                            </div>
                            <div className="relative bg-white border border-[#0D916D] border-opacity-20 hover:border-[#D7F0DB] group">
                                <div className="shine h-64 w-full" style={{ height: "490px" }} />

                            </div>

                        </div>
                    </div>
                </section>

            </>
        );
    }
    return (
        <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto pb-5 lg:pb-10 bg-[#D7F0DB]">
            <div className="pt-5">
                <div className="flex items-center justify-center lg:justify-between">
                    <h2 className="text-2xl font-bold text-[#111111] sm:text-3xl ">
                        Daily <span className="text-[#0d916d]">Deals</span>
                    </h2>
                    <div className="hidden lg:flex">
                        <div className="flex items-center gap-2 justify-center px-3 py-2 rounded-full bg-gradient-to-r from-[#018971] to-[#00C6A3]">
                            <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                                <Image
                                    className="pr-2 md:pr-0"
                                    alt=""
                                    width={100}
                                    height={150}
                                    src={"/imagesNew/midnight.gif"}
                                />
                            </div>

                            <div className="flex flex-col items-start justify-center text-white">
                                <span className=" text-[20px] leading-[20px]">Hurry Up!</span>
                                <span className="text-[15px] leading-[20px]">Offer end in : </span>
                            </div>

                            <div className="rounded-lg text-center">
                                <div id="countdown" className="text-4xl flex space-x-2 justify-center ">
                                    <div className="flex flex-col items-center justify-center rounded-full bg-[#08646b] w-[50px] h-[50px] shadow-xl text-white">
                                        <span id="days" className="days text-[20px] leading-[15px]">0</span>
                                        <span className="text-[10px] leading-[15px]">Days</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center rounded-full bg-[#08646b] w-[50px] h-[50px] shadow-xl text-white">
                                        <span id="hours" className="hours text-[20px] leading-[15px]">{timeLeft.hours}</span>
                                        <span className="text-[10px] leading-[15px]">Hours</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center rounded-full bg-[#08646b] w-[50px] h-[50px] shadow-xl text-white">
                                        <span id="minutes" className="minutes text-[20px] leading-[15px]">{timeLeft.minutes}</span>
                                        <span className="text-[10px] leading-[15px]">Minutes</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center rounded-full bg-[#08646b] w-[50px] h-[50px] shadow-xl text-white">
                                        <span id="seconds" className="seconds text-[20px] leading-[15px]">{timeLeft.seconds}</span>
                                        <span className="text-[10px] leading-[15px]">Seconds</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-2 2xl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-4 xs:gap-2 grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 mt-5 mx-auto">

                    {data?.[0]?.collectionsProducts?.map((_a: any) => (

                        <ProductItem key={_a?._id} item={_a} />

                    ))}

                </div>
            </div>
        </section>
    );
};

export default Deals;
