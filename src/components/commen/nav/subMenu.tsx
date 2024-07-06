"use client";
import React from "react";
import cn from "@/utils/class-names";
import { subMenuProps } from "@/utils/types";

const SubMenu = ({ subEnabled, subDisabled, mainDisabled }: subMenuProps) => {
  return (
    <>
      <div
        id="dropdownHover"
        aria-labelledby="dropdownHoverButton"
        className={cn(
          "2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 py-4 mx-auto bg-white h-auto border-b -mt-2 z-[1000] w-full bg-white border-gray-200 hidden shadow-sm border-y  ",
          {
            block: subEnabled,
          }
        )}
        onMouseLeave={() => {
          subDisabled(false);
          mainDisabled(false);
        }}
      >
        <h3 className="text-lg font-bold text-[#7B3D1F] pb-2">
          BABY GIRLS (0-12M)
        </h3>
        <ul className="grid grid-cols-3 mb-4 gap-2 max-w-4xl">
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler "
            >
              Gift Sets
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Matching Sets
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Tops
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Bottoms
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Dresses
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Multipacks &amp; Valuepacks
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Rompers &amp; Dungaree
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Nightwear
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Bodysuits
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Innerwear &amp; Underwear
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Sleepsuit
            </a>
          </li>
        </ul>
      </div>
      <div
        id="dropdownHover3"
        aria-labelledby="dropdownHoverButton3"
        className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 py-4 mx-auto bg-white h-auto border-b -mt-2 z-[1000] w-full bg-white border-gray-200 hidden shadow-sm border-y  "
      >
        <h3 className="text-lg font-bold text-[#7B3D1F] pb-2">
          BABY BOYS (0-12M)
        </h3>
        <ul className="grid grid-cols-3 mb-4 gap-2 max-w-4xl">
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler "
            >
              Gift Sets
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Matching Sets
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Tops
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Bottoms
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Dresses
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Multipacks &amp; Valuepacks
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Rompers &amp; Dungaree
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Nightwear
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Bodysuits
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Innerwear &amp; Underwear
            </a>
          </li>
          <li>
            <a
              href="products.html"
              className="hover:underline text-black text-md font-reguler"
            >
              Sleepsuit
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SubMenu;
