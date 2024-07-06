import React from "react";
import Image from "next/image";
import title4 from "../../../public/images/title4.png";
import trendingImg1 from "../../../public/images/trending-img1.png";
import trendingImg2 from "../../../public/images/trending-img2.png";
import trendingImg3 from "../../../public/images/trending-img3.png";
import trendingImg4 from "../../../public/images/trending-img4.png";
import trendingImg5 from "../../../public/images/trending-img5.png";

const Trending = () => {
  return (
    <section className="">
      <div className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto mb-5">
        <Image src={title4} className="w-full" alt="" />
        <div className="grid grid-cols-5 md:grid-cols-5 gap-5 mt-5">
          <div className="mx-auto w-full ">
            <Image className="w-full" src={trendingImg1} alt="" />
          </div>
          <div className="mx-auto w-full">
            <Image className="w-full" src={trendingImg2} alt="" />
          </div>
          <div className="mx-auto w-full">
            <Image className="w-full" src={trendingImg3} alt="" />
          </div>
          <div className="mx-auto w-full">
            <Image className="w-full" src={trendingImg4} alt="" />
          </div>
          <div className="mx-auto w-full">
            <Image className="w-full" src={trendingImg5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
