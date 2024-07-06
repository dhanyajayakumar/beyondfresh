import React from "react";
import Image from "next/image";
import title5 from "../../../public/images/title5.png";
import priceimg1 from "../../../public/images/price-img1.png";
import priceimg2 from "../../../public/images/price-img2.png";
import priceimg3 from "../../../public/images/price-img3.png";
import priceimg4 from "../../../public/images/price-img4.png";
import priceimg5 from "../../../public/images/price-img5.png";

const Price = () => {
  return (
    <section className="">
      <div className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto mb-5">
        <Image src={title5} className="w-full" alt="" />
        <div className="grid grid-cols-5 md:grid-cols-5 gap-5 mt-5">
          <div className="">
            <Image src={priceimg1} className="w-full" alt="" />
          </div>
          <div className="">
            <Image src={priceimg2} className="w-full" alt="" />
          </div>
          <div className="">
            <Image src={priceimg3} className="w-full" alt="" />
          </div>
          <div className="">
            <Image src={priceimg4} className="w-full" alt="" />
          </div>
          <div className="">
            <Image src={priceimg5} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
