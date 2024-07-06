import React from "react";
import Image from "next/image";
import title2 from "../../../public/images/title2.png";
import aceImg1 from "../../../public/images/ace-img1.png";
import aceImg2 from "../../../public/images/ace-img2.png";
import aceImg3 from "../../../public/images/ace-img3.png";
import aceImg4 from "../../../public/images/ace-img4.png";
import aceImg5 from "../../../public/images/ace-img5.png";
import aceImg6 from "../../../public/images/ace-img6.png";
import aceImg7 from "../../../public/images/ace-img7.png";
import aceImg8 from "../../../public/images/ace-img8.png";
import aceImg9 from "../../../public/images/ace-img9.png";

const AceImg = () => {
  return (
    <section className="my-0 px-3 md:px-0">
      <div className="2xl:px-24 xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto mb-5">
        <Image src={title2} className="w-full" alt="" />
        <div className="grid grid-cols-2 md:grid-cols-6 grid-rows- gap-4">
          <div className="shadow-md rounded-md">
            <Image src={aceImg1} className="w-full" alt="" />
          </div>
          <div className="shadow-md rounded-md">
            <Image src={aceImg2} className="w-full" alt="" />
          </div>
          <div className="shadow-md rounded-md">
            <Image src={aceImg3} className="w-full" alt="" />
          </div>
          <div className="col-span-2 row-span-2 shadow-md rounded-md">
            <Image src={aceImg4} className="w-full" alt="" />
          </div>
          <div className="col-start-6 shadow-md rounded-md">
            <Image src={aceImg5} className="w-full" alt="" />
          </div>
          <div className="row-start-2 shadow-md rounded-md">
            <Image src={aceImg6} className="w-full" alt="" />
          </div>
          <div className="row-start-2 shadow-md rounded-md">
            <Image src={aceImg7} className="w-full" alt="" />
          </div>
          <div className="row-start-2 shadow-md rounded-md">
            <Image src={aceImg8} className="w-full" alt="" />
          </div>
          <div className="col-start-6 row-start-2 shadow-md rounded-md">
            <Image src={aceImg9} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AceImg;
