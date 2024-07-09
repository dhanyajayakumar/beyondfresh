import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Banner from "@/components/homepage/banner";
// import Deals from "@/components/homepage/deals";
import Deals from "@/components/homepage/Deals";
import Catagory from "@/components/homepage/catagory";
import HomeFresh from "@/components/homepage/homeFresh";
import CategoryTwo from "@/components/homepage/categoryTwo";
import AdBanner from "@/components/homepage/adBanner";
import BeyondFresh from "@/components/homepage/beyondFresh";
import AceImg from "@/components/homepage/aceImg";
import AdOneBanner from "@/components/homepage/adOneBanner";
import AdTwoBanner from "@/components/homepage/adTwoBanner";
import Age from "@/components/homepage/age";
import Brand from "@/components/homepage/brand";
import Contacts from "@/components/homepage/contacts";
import Explore from "@/components/homepage/explore";
import Feature from "@/components/homepage/feature";
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
      <Product />
      <AceImg />
      <Brand />
      <AdOneBanner />
      <Trending />
      <Price />
      <Explore />
      <Age />
      <AdTwoBanner />
      <Feature />
      <Subscription />
      <Contacts />
    </>
  );
}
