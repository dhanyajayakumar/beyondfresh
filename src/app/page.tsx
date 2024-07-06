import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner from "@/components/homepage/banner";
import Deals from "@/components/homepage/Deals";
import Catagory from "@/components/homepage/catagory";
import HomeFresh from "@/components/homepage/homeFresh";
import CategoryTwo from "@/components/homepage/categoryTwo";
import AdBanner from "@/components/homepage/adBanner";
import BeyondFresh from "@/components/homepage/beyondFresh";
import AdTwoBanner from "@/components/homepage/adTwoBanner";
import Brand from "@/components/homepage/brand";
import Contacts from "@/components/homepage/contacts";
import Feature from "@/components/homepage/feature";
import AceImg from "@/components/homepage/aceImg";
import AdOneBanner from "@/components/homepage/adOneBanner";
import Age from "@/components/homepage/age";
import Explore from "@/components/homepage/explore";
import Price from "@/components/homepage/price";
import Product from "@/components/homepage/product";
import Subscription from "@/components/homepage/subscription";
import Trending from "@/components/homepage/trending";

export default function Home() {
  return (
    <>
      <Banner />
      <Deals />
      <Catagory />
      <HomeFresh />
      <CategoryTwo />
      <AdBanner />
      <BeyondFresh />
      <AdTwoBanner />
      <Brand />
      <Feature />
      <Contacts />
      {/* <Product />
      <AceImg />
      <AdOneBanner />
      <Trending />
      <Price />
      <Explore />
      <Age />
      <Subscription /> */}
    </>
  );
}
