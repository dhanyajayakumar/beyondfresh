import React, { useEffect, useState } from "react";
import ImageComponent from "../commen/image/ImageComponent";
import { attributeTypes } from "@/helper/constants";
import { getUniqueItems } from "@/helper/helper";

const ProductVariants = ({ title, type, data, foundVariant }: any) => {
  const [activeAge, setActiveAge] = useState<string | null>(null);
  const [valueAge, setValueAge] = useState<string>("");

  const handleClickAge = (optionValue: string) => {
    setActiveAge(optionValue);
    setValueAge(optionValue);
  };

  useEffect(() => {
    if (foundVariant && type) {
      const value = foundVariant?.productVariantAttributes?.find((item: any) =>
        item?.attributeType === type ? item?.attributeDetail?.itemName : ""
      );
      if (value) {
        handleClickAge(value?.attributeDetail?.itemName);
      }
    }
  }, [foundVariant, type]);

  const uniqueItems = getUniqueItems(data?.productVariants, type);

  return (
    <>
      <h4 className="mb-3">{title}</h4>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {uniqueItems?.map((item: any) => (
          <>
            {item?.attributeType === type && (
              <label
                key={item?._id}
                className={`group relative flex items-center justify-center rounded-md border py-3 px-1 text-xs roboto-medium hover:bg-gray-50 focus:outline-none sm:py-3 cursor-pointer bg-white text-gray-900 shadow-sm ${
                  activeAge === item?.attributeDetail?.itemName
                    ? "ring-2 ring-[#d5076e]"
                    : ""
                }`}
                onClick={() => handleClickAge(item?.attributeDetail?.itemName)}
              >
                <input
                  type="radio"
                  name="size-choice"
                  value={item?.attributeDetail?.itemName}
                  className="sr-only"
                  checked={valueAge === item?.attributeDetail?.itemName}
                  onChange={() => setValueAge(item?.attributeDetail?.itemName)}
                  aria-labelledby={`size-choice-${item?._id}-label`}
                />

                {type === attributeTypes?.PATTERN && (
                  <span id={`size-choice-${item?._id}-label`}>
                    <ImageComponent src={item?.attributeDetail?.itemName} />
                  </span>
                )}
                {type === attributeTypes?.TEXT && (
                  <span id={`size-choice-${item?._id}-label`}>
                    {item?.attributeDetail?.itemName}
                  </span>
                )}
                {type === attributeTypes.HEX && (
                  <span id={`size-choice-${item?._id}-label`}>
                    {item?.attributeDetail?.itemName}
                  </span>
                )}

                <span
                  className={`pointer-events-none absolute -inset-px rounded-md ${
                    activeAge === item?.attributeDetail?.itemName
                      ? "border"
                      : "border-2"
                  } ${
                    valueAge === item?.attributeDetail?.itemName
                      ? "border-[#d5076e]"
                      : "border-transparent"
                  }`}
                  aria-hidden="true"
                />
              </label>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default ProductVariants;
