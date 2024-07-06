import React, { useEffect, useState } from "react";
import { Slider } from "@nextui-org/slider";

const PriceSlider = ({ handlePriceFilter, price, clearTrigger }: any) => {
  const [sliderValue, setSliderValue] = useState([0, 0]);

  useEffect(() => {
    setSliderValue([0, 0]);
  }, [clearTrigger]);

  const handleSliderChange = (newValue: any) => {
    setSliderValue(newValue);
  };

  useEffect(() => {
    price(sliderValue);
    handlePriceFilter(sliderValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sliderValue]);

  return (
    <>
      <Slider
        step={5}
        minValue={0}
        maxValue={2000}
        defaultValue={[0, 0]}
        value={sliderValue}
        onChange={handleSliderChange}
        formatOptions={{ style: "currency", currency: "USD" }}
        className="max-w-md  h-1 mb-8 cursor-pointer"
      />
      <div className="flex items-center justify-between gap-5">
        <div>
          <input
            type="text"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="AED:00.00"
            value={`AED:${sliderValue[0]}`}
            readOnly
          />
        </div>
        <div>
          <input
            type="text"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-t   ransparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder="AED:00.00"
            value={`AED:${sliderValue[1]}`}
            readOnly
          />
        </div>
      </div>
    </>
  );
};

export default PriceSlider;
