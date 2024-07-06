import React from "react";
import moreBnr from "../../../public/images/more-bnr.png";
import Image from "next/image";
import title6 from "../../../public/images/title6.png";
const Explore = () => {
  return (
    <section>
      <div className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto mb-5 relative">
        <Image src={title6} className="w-full" alt="" />
        <div className="mb-5  mt-5">
          <Image className="w-full" src={moreBnr} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
