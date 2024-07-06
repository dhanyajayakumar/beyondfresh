import React from 'react'
import title7 from "../../../public/images/title7.png";
import Image from "next/image";
import ageImg1 from "../../../public/images/age-img1.png";
import ageImg2 from "../../../public/images/age-img2.png";
import ageImg3 from "../../../public/images/age-img3.png";
import ageImg4 from "../../../public/images/age-img4.png";

const Age = () => {
  return (
    <section className="">
        <div className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto mb-10 relative">
          <Image src={title7} className="w-full" alt="" />
        </div>
        <div className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto relative">
          <div className="flex flex-row gap-5">
            <div className="basis-1/4">
              <Image src={ageImg1} className="w-full" alt="" />
            </div>
            <div className="basis-1/4">
              <Image src={ageImg2} className="w-full" alt="" />
            </div>
            <div className="basis-1/4">
              <Image src={ageImg3} className="w-full" alt="" />
            </div>
            <div className="basis-1/4">
              <Image src={ageImg4} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Age