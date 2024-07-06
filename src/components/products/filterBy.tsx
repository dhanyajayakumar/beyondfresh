import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import CategoryFIlter from "./CategoryFilter";
import BrandFIlter from "./BrandFilter";
import SpecificationFilter from "./SpecificationFilter";
import AttributeFilter from "./AttributeFilter";
import PriceSlider from "./PriceSlider";

const FilterBy = ({
  category,
  keyword,
  categoryKeyword,
  handleCategoryFilter,
  //
  brand,
  brandKeyword,
  setBrandKeyword,
  handleBrandFilter,
  //
  specification,
  handleSpecificationFilter,
  //
  attribute,
  handleAttributeFilter,
  //
  price,
  handlePriceFilter,

  clearTrigger,
}: any) => {
  return (
    <>
      <Accordion selectionMode="multiple" showDivider={false}>
        {category && (
          <AccordionItem
            key="1"
            aria-label="Category"
            title={
              <h2 id="Category">
                <button
                  type="button"
                  className="appearance-none flex items-center justify-between w-full !bg-white  font-medium border-0 focus:ring-0 focus:ring-transparent gap-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-black"
                >
                  <span className="text-black">Category</span>
                </button>
              </h2>
            }
          >
            <CategoryFIlter
              category={category}
              keyword={keyword}
              categoryKeyword={categoryKeyword}
              handleCategoryFilter={handleCategoryFilter}
              clearTrigger={clearTrigger}
            />
          </AccordionItem>
        )}
        {brand && (
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title={
              <h2 id="Brands">
                <button
                  type="button"
                  className="appearance-none flex items-center justify-between w-full !bg-white  font-medium border-0 focus:ring-0 focus:ring-transparent gap-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-black"
                >
                  <span className="text-black">Brands</span>
                </button>
              </h2>
            }
          >
            <BrandFIlter
              brands={brand}
              brandKeyword={brandKeyword}
              setBrandKeyword={setBrandKeyword}
              handleBrandFilter={handleBrandFilter}
              clearTrigger={clearTrigger}
            />
          </AccordionItem>
        )}
        {attribute?.map((item: any) => (
          <AccordionItem
            key={item?.slug}
            aria-label={item?.slug}
            title={
              <h2 id={item?.slug}>
                <button
                  type="button"
                  className="appearance-none flex items-center justify-between w-full !bg-white  font-medium border-0 focus:ring-0 focus:ring-transparent gap-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-black"
                >
                  <span className="text-black">{item?.attributeTitle}</span>
                </button>
              </h2>
            }
          >
            <AttributeFilter
              slug={item?.slug}
              attributeType={item?.attributeType}
              attribute={item?.attributeValues}
              handleAttributeFilter={handleAttributeFilter}
              clearTrigger={clearTrigger}
            />
          </AccordionItem>
        ))}
        {specification?.map((item: any) => (
          <AccordionItem
            key={item?.slug}
            aria-label={item?.slug}
            title={
              <h2 id={item?.slug}>
                <button
                  type="button"
                  className="appearance-none flex items-center justify-between w-full !bg-white  font-medium border-0 focus:ring-0 focus:ring-transparent gap-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-black"
                >
                  <span className="text-black">{item?.specificationTitle}</span>
                </button>
              </h2>
            }
          >
            <SpecificationFilter
              slug={item?.specificationTitle}
              specification={item?.specificationValues}
              handleSpecificationFilter={handleSpecificationFilter}
              clearTrigger={clearTrigger}
            />
          </AccordionItem>
        ))}
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={
            <h2 id="product-filter-heading-6">
              <button
                type="button"
                className="appearance-none flex items-center justify-between w-full !bg-white py-3 font-medium border-0 focus:ring-0 focus:ring-transparent gap-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                <span className="text-black">Price Range</span>
              </button>
            </h2>
          }
        >
          <PriceSlider
            price={price}
            handlePriceFilter={handlePriceFilter}
            clearTrigger={clearTrigger}
          />
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default FilterBy;
