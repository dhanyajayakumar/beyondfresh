import React from "react";
import Image from "next/image";
import adBanner3 from "../../../public/images/ad-banner3.png";

const AdOneBanner = () => {
  return (
    <section className="my-5 px-3 md:px-0">
      <div className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto">
        <Image src={adBanner3} className="w-full" alt="" />
      </div>
    </section>
  );
};

export default AdOneBanner;
