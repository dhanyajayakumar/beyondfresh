import SlideDrawer from "@/components/drawer/slide-drawer";

import cn from "@/utils/class-names";
import Link from "next/link";
import Image from "next/image";

interface MyMenuCategoryProps {
  myMenuCategoryEnabled: boolean;
  setMyMenuCategoryEnabled: (value: boolean) => void;
  anchor?: "left" | "bottom" | "right" | "top" | undefined;
}

export default function MyAccount({
  myMenuCategoryEnabled,
  setMyMenuCategoryEnabled,
  anchor,
}: MyMenuCategoryProps) {
  return (
    <>
      <SlideDrawer
        drawerOpen={myMenuCategoryEnabled}
        drawerClose={setMyMenuCategoryEnabled}
        anchor={anchor}
      >
        <div
          className={cn(
            "fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform bg-white max-w-[450px] w-full"
          )}
          aria-labelledby="drawer-right-label"
          tabIndex={-1}
        >
        
            <div className="drawer-content-wrapper">
              <div className="drawer-content">
                <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer">
                  <div
                    className="sticky top-0 z-20 w-full flex justify-between items-center relative px-5 py-4 bg-[#0d916d]">
                    <a className="mr-1" href="index.html">
                      <Image
                        alt="logo" fetchPriority={"high"} width="0" height="0" decoding="async" data-nimg="1"
                        className="w-[150px] h-auto"
                        src={"/imagesNew/logo-w.png"
                        }
                      />
                    
                    </a>


                    <button type="button" data-drawer-hide="drawer-left-menu" aria-controls=" drawer-left-menu"
                      className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-4 end-2.5 inline-flex items-center justify-center">
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                      </svg>
                      <span className="sr-only">Close menu</span>
                    </button>
                  </div>
                  <div
                    className=" w-full h-full justify-between items-center bg-white rounded cursor-pointer overflow-x-auto">

                    <div className="relative grid gap-0 mt-0">


                      <h3 className=" mukta-semibold text-lg m-0 text-heading flex align-center border-b px-4 py-2">
                        Categories</h3>

                      <ul className="space-y-2 mukta-medium">

                        <li>
                          <button type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75  group hover:bg-gray-100"
                            aria-controls="dropdown-men" data-collapse-toggle="dropdown-men"
                            aria-expanded="false">
                            <span
                              className="flex-1 ms-3 text-left mukta-medium whitespace-nowrap">Vegetables</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                              fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="m1 1 4 4 4-4"></path>
                            </svg>
                          </button>

                          <ul id="dropdown-men" className="py-2 space-y-2 hidden bg-gray-100">
                            <li>

                              <ul className="space-y-2 font-medium">




                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">All
                                    Vegetables</a>
                                </li>
                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Regular
                                    Vegetables
                                  </a>
                                </li>
                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Organic
                                    Vegetables</a>
                                </li>

                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Tomatoes</a>
                                </li>

                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Onions
                                    & Potatoes</a>
                                </li>

                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Peppers
                                  </a>
                                </li>
                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Leafy
                                    Green

                                  </a>
                                </li>


                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Peppers
                                  </a>
                                </li>

                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Root
                                    Vegetables

                                  </a>
                                </li>

                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Cruciferous
                                    vegetables

                                  </a>
                                </li>


                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Marrow
                                    Vegetables

                                  </a>
                                </li>


                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Beans,
                                    Peas & Corn

                                  </a>
                                </li>



                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Mushrooms
                                  </a>
                                </li>


                                <li>
                                  <a href="#"
                                    className="flex items-center w-full p-1 text-gray-900 transition duration-75  pl-7 group hover:bg-gray-100">Bulk
                                    Buy

                                  </a>
                                </li>




                              </ul>


                            </li>

                          </ul>
                        </li>





                        <li>
                          <button type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition group hover:bg-gray-100">
                            <span className="flex-1 ms-3 text-left mukta-medium whitespace-nowrap">Fresh
                              Fruit</span>

                          </button>


                        </li>


                        <li>
                          <button type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition group hover:bg-gray-100">
                            <span className="flex-1 ms-3 text-left mukta-medium whitespace-nowrap"> Nuts & Dry
                              Fruits</span>

                          </button>


                        </li>




                        <li>
                          <button type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition group hover:bg-gray-100">
                            <span
                              className="flex-1 ms-3 text-left mukta-medium whitespace-nowrap">Grocery</span>

                          </button>


                        </li>


                        <li>
                          <button type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition group hover:bg-gray-100">
                            <span className="flex-1 ms-3 text-left mukta-medium whitespace-nowrap"> Personal
                              care</span>

                          </button>


                        </li>




                        <li>
                          <button type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition group hover:bg-gray-100">
                            <span className="flex-1 ms-3 text-left mukta-medium whitespace-nowrap"> Toys </span>

                          </button>


                        </li>


                        <li>
                          <button type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition group hover:bg-gray-100">
                            <span className="flex-1 ms-3 text-left mukta-medium whitespace-nowrap"> Home &
                              Kitchen </span>

                          </button>
                        </li>

                        <li>
                          <button type="button"
                            className="flex items-center w-full p-2 text-base text-gray-900 transition group hover:bg-gray-100">
                            <span className="flex-1 ms-3 text-left mukta-medium whitespace-nowrap"> Ready to
                              Cook </span>
                          </button>
                        </li>

                      </ul>




                      <div className="relative grid gap-2 ">
                        <h3
                          className="font-semibold mukta-regular text-lg m-0 text-heading flex align-center border-b px-4 py-2">
                          Pages</h3>


                        <div className="relative grid gap-1 p-3"><a href=""
                          className="p-2 flex mukta-regular items-center rounded-md hover:bg-gray-50 w-full hover:text-[#0d916d]"><svg
                            stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 h-4 w-4"
                            aria-hidden="true" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <polyline points="20 12 20 22 4 22 4 12"></polyline>
                            <rect x="2" y="7" width="20" height="5"></rect>
                            <line x1="12" y1="22" x2="12" y2="7"></line>
                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                          </svg>
                          <p
                            className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-[#0d916d]">
                            About Us</p>
                        </a>


                          <a href="/faq"
                            className="p-2 flex mukta-regular items-center rounded-md hover:bg-gray-50 w-full hover:text-[#0d916d]"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 h-4 w-4"
                              aria-hidden="true" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                              <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <p
                              className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-[#0d916d]">
                              Store Locations</p>
                          </a><a href="/about-us"
                            className="p-2 flex mukta-regular items-center rounded-md hover:bg-gray-50 w-full hover:text-[#0d916d]"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 h-4 w-4"
                              aria-hidden="true" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <p
                              className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-[#0d916d]">
                              Blog</p>
                          </a><a href="/contact-us"
                            className="p-2 flex mukta-regular items-center rounded-md hover:bg-gray-50 w-full hover:text-[#0d916d]"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 h-4 w-4"
                              aria-hidden="true" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <polyline points="16 2 16 8 22 8"></polyline>
                              <line x1="23" y1="1" x2="16" y2="8"></line>
                              <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                              </path>
                            </svg>
                            <p
                              className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-[#0d916d]">
                              Contact Us</p>
                          </a><a href="/privacy-policy"
                            className="p-2 flex mukta-regular items-center rounded-md hover:bg-gray-50 w-full hover:text-[#0d916d]"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 h-4 w-4"
                              aria-hidden="true" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z">
                              </path>
                              <polyline points="8 10 12 14 16 10"></polyline>
                            </svg>
                            <p
                              className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-[#0d916d]">
                              Careers</p>
                          </a><a href="/terms-and-conditions"
                            className="p-2 flex mukta-regular items-center rounded-md hover:bg-gray-50 w-full hover:text-[#0d916d]"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 h-4 w-4"
                              aria-hidden="true" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                              <line x1="16" y1="13" x2="8" y2="13"></line>
                              <line x1="16" y1="17" x2="8" y2="17"></line>
                              <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            <p
                              className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-[#0d916d]">
                              Privacy policy</p>
                          </a><a href="/404"
                            className="p-2 flex mukta-regular items-center rounded-md hover:bg-gray-50 w-full hover:text-[#0d916d]"><svg
                              stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                              stroke-linecap="round" stroke-linejoin="round" className="flex-shrink-0 h-4 w-4"
                              aria-hidden="true" height="1em" width="1em"
                              xmlns="http://www.w3.org/2000/svg">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="8" x2="12" y2="12"></line>
                              <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                            <p
                              className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-[#0d916d]">
                              Delivery Info</p>
                          </a>
                        </div>
                      </div>


                    </div>


                  </div>



                  <div className="overflow-y-scroll flex-grow w-full max-h-full">
                    <a href="/checkout">
                      <button
                        className="w-full py-3 px-3 w-full  bg-[#0d916d] flex items-center justify-between bg-heading text-sm text-white focus:outline-none transition duration-300">
                        <span className="align-middle font-medium ">Beyondfresh © 2021 All rights reserved
                        </span>

                      </button>
                    </a>
                  </div>

                </div>
                <div className="drawer-handle"><i className="drawer-handle-icon"></i></div>
              </div>

            </div>
          </div>

      </SlideDrawer>
    </>
  );
}
