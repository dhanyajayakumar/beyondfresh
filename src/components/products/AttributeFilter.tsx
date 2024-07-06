"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { attributeTypes } from "@/helper/constants";
import ImageComponent from "../commen/image/ImageComponent";

const AttributeFilter = ({
  slug,
  attributeType,
  attribute,
  handleAttributeFilter,
  clearTrigger,
}: any) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();
  const data = attribute;
  const [FilterData, setSeachFilter] = useState(data);
  const [keyword, setKeyword] = useState("");

  const [checkedFilter, setcheckedFilter] = useState<string[]>([]);

  useEffect(() => {
    setKeyword("");
    setcheckedFilter([]);
  }, [clearTrigger]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setcheckedFilter([...checkedFilter, value]);
    } else {
      setcheckedFilter(checkedFilter.filter((category) => category !== value));
    }
  };

  useEffect(() => {
    updateURL(checkedFilter);
    handleAttributeFilter(checkedFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedFilter]);

  const updateURL = (filter: string[]) => {
    const params = new URLSearchParams(searchParams as any);
    if (filter.length > 0) {
      params.set(slug, filter.join(","));
    } else {
      params.delete(slug);
    }
    push(`${pathname}?${params.toString()}`);
  };

  //search
  useEffect(() => {
    if (data) {
      const filteredResults = data?.filter((item: any) =>
        item?.itemName
          ?.toLowerCase()
          ?.includes(keyword?.toString()?.toLowerCase())
      );
      setSeachFilter(filteredResults);
    }
  }, [data, keyword]);

  return (
    <div
      id="product-filter-accordion"
      className=" mb-3 rounded-lg overflow-hidden"
      data-accordion="collapse"
    >
      <h2 id="product-filter-heading-1">
        <div className="flex flex-col mx-auto w-full mt-4 mb-3">
          <form className="h-[42px] relative pr-12 md:pr-14 bg-[#f1f1f1]  overflow-hidden  w-full">
            <label className="flex items-center  ">
              <input
                className="form-input w-full pl-4  appearance-none  bg-[#f1f1f1] transition ease-in-out border text-input text-sm  !rounded-0 min-h-10 h-10 duration-200  focus:ring-0 outline-none border-none focus:outline-none placeholder-gray-500 placeholder-opacity-75"
                placeholder="SEARCH"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </label>
            <button
              aria-label="Search"
              type="submit"
              className="outline-none text-xl text-gray-800 absolute top-0 right-0 end-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none"
            >
              {/* <svg stroke="currentColor" clip-rule="evenodd" fill-rule="evenodd" height="25" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" width="25" xmlns="http://www.w3.org/2000/svg" id="fi_5636698"><g id="Icon"><g><path d="m10 3.5c-3.587 0-6.5 2.913-6.5 6.5s2.913 6.5 6.5 6.5 6.5-2.913 6.5-6.5-2.913-6.5-6.5-6.5zm0 1c3.036 0 5.5 2.464 5.5 5.5s-2.464 5.5-5.5 5.5-5.5-2.464-5.5-5.5 2.464-5.5 5.5-5.5z"></path><path d="m20.354 19.646-5.759-5.758c-.195-.195-.512-.195-.707 0s-.195.512 0 .707l5.758 5.759c.196.195.512.195.708 0 .195-.196.195-.512 0-.708z"></path></g></g></svg> */}
              <svg
                stroke="currentColor"
                version="1.1"
                id="fi_149309"
                width={20}
                height={23}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 52.966 52.966"
                enableBackground="new 0 0 52.966 52.966"
                xmlSpace="preserve"
              >
                <path
                  d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
                            c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
                            C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
                            S32.459,40,21.983,40z"
                />
                <g />
                <g />
                <g />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </button>
          </form>
        </div>
      </h2>
      <div
        id="product-filter-body-1"
        className="max-h-[500px] overflow-y-auto"
        aria-labelledby="product-filter-heading-1"
      >
        <div className="border-0">
          <ul
            id="category-list"
            className="border-0 shadow-0 focus:outline-none focus:ring-[#d5076e] focus:border-[#d5076e]"
          >
            {FilterData?.map((_a: any) => (
              <li
                className="flex items-center py-2 hover:bg-[#f8f8f8] cursor-pointer"
                key={_a?._id}
              >
                <label className="flex items-center" htmlFor="link-checkbox">
                  <input
                    // className="appearance-none inline-flex items-center justify-center w-4 h-4 border border-gray-300 rounded cursor-pointer outline-none text-[#c33777] focus:outline-none focus:ring-0 focus:ring-transparent focus:text-bg-[#c33777] bg-bg-[#c33777] transition-colors duration-150 ease-in-out"
                    type="checkbox"
                    id={_a._id}
                    name="category"
                    value={_a.itemName}
                    checked={checkedFilter.includes(_a.itemName)}
                    onChange={handleCheckboxChange}
                  />
                  {attributeType === attributeTypes.PATTERN ? (
                    <>
                      <span className="ml-2">
                        <ImageComponent src={_a?.itemName} />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="ml-2">{_a?.itemName}</span>
                    </>
                  )}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttributeFilter;
