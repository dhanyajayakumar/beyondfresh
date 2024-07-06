import SlideDrawer from "@/components/drawer/slide-drawer";
import cn from "@/utils/class-names";
import { logOut } from "@/utils/redux/auth";
import { useAppSelector } from "@/utils/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface MyAccountProps {
  myAccountEnabled: boolean;
  setMyAccountEnabled: (value: boolean) => void;
  anchor?: "left" | "bottom" | "right" | "top" | undefined;
}

export default function MyAccount({
  myAccountEnabled,
  setMyAccountEnabled,
  anchor,
}: MyAccountProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const userDetails = useAppSelector((state) => state.auth.userDetails);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleLogOut = () => {
    toast.error("Logged out successfully");
    dispatch(logOut());
  };
  return (
    <>
      <SlideDrawer
        drawerOpen={myAccountEnabled}
        drawerClose={setMyAccountEnabled}
        anchor={anchor}
      >
        <div
          className={cn(
            " fixed z-40 h-screen  overflow-y-auto   bg-gray-100 max-w-[450px] w-full"
          )}
        >
          <div className="drawer-content-wrapper">
            <div className="drawer-content">
              <div className="flex flex-col w-full h-full justify-between items-middle bg-white rounded cursor-pointer ">
                <div className="sticky top-0 z-20 w-full flex justify-between items-center relative px-5 py-4 bg-[#0d916d]">
                  <h2 className="font-semibold  text-lg m-0 text-heading text-white flex items-center">
                    <span className="text-xl mr-2 mb-1">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M320 264l-89.6 112-38.4-44.88"
                        />
                        <path
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={32}
                          d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zm80 0v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
                        ></path>
                      </svg>
                    </span>
                    My Account
                  </h2>
                  <button
                    type="button"
                    data-drawer-hide="drawer-right-myaccount"
                    aria-controls="drawer-right-myaccount"
                    className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-4 end-2.5 inline-flex items-center justify-center"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>
                {isAuthenticated && (
                  <div className="flex items-center justify-between bg-[#d7f0db] bg-opacity-60 w-full shadow-md border-b border-gray-300 py-3 px-3">
                    <div className="flex flex-col">
                      <p className="text-ms tracking-wide leading-1 text-black font-bold">Hello, {userDetails?.firstName || "___"} </p>
                      <p className="text-thin-light-gray text-sm leading-1 text-sm tracking-wide mt-0"> {userDetails?.email || "___"}
                      </p>
                      <p className="sm:text-18 text-sm tracking-wide text-green-500">{userDetails?.isVerified ? "Verified" : ""}</p>
                    </div>
                    <a href="/profile" className="flex flex-col">
                      <p className="text-ms tracking-wide leading-1 text-black font-bold">
                        <svg className="w-[30px] group-hover:fill-[#0d916d]" id="fi_2356780"
                          enable-background="new 0 0 511.984 511.984" viewBox="0 0 511.984 511.984"
                          xmlns="http://www.w3.org/2000/svg">
                          <g>
                            <path
                              d="m415 221.984c-8.284 0-15 6.716-15 15v220c0 13.785-11.215 25-25 25h-320c-13.785 0-25-11.215-25-25v-320c0-13.785 11.215-25 25-25h220c8.284 0 15-6.716 15-15s-6.716-15-15-15h-220c-30.327 0-55 24.673-55 55v320c0 30.327 24.673 55 55 55h320c30.327 0 55-24.673 55-55v-220c0-8.284-6.716-15-15-15z">
                            </path>
                            <path
                              d="m501.749 38.52-28.285-28.285c-13.645-13.646-35.849-13.646-49.497 0l-226.273 226.274c-2.094 2.094-3.521 4.761-4.103 7.665l-14.143 70.711c-.983 4.918.556 10.002 4.103 13.548 2.841 2.841 6.668 4.394 10.606 4.394.979 0 1.963-.096 2.941-.291l70.711-14.143c2.904-.581 5.571-2.009 7.665-4.103l226.275-226.273s.001 0 .001-.001c13.645-13.645 13.645-35.849-.001-49.496zm-244.276 251.346-44.194 8.84 8.84-44.194 184.17-184.173 35.356 35.356zm223.063-223.062-17.678 17.678-35.356-35.356 17.677-17.677c1.95-1.95 5.122-1.951 7.072-.001l28.284 28.285c1.951 1.949 1.951 5.122.001 7.071z">
                            </path>
                          </g>
                        </svg>
                      </p>
                    </a>


                  </div>
                )}
                <div className=" w-full h-auto flex justify-start items-center  transition-all ">
                  <div className="relative px-3 py-2 grid gap-3 grid-cols-2 bg-gray-100 w-full overflow-hidden">
                    <a
                      href="address_book.html"
                      className="px-3 py-4 flex flex-col items-center mukta-regular rounded-lg shadow-md  gap-y-4 text-center hover:bg-gray-50 w-full bg-white hover:text-[#0d4c92] group"
                    >
                      <svg
                        className="w-[30px] group-hover:fill-[#0d4c92]"
                        id="fi_12893925"
                        enableBackground="new 0 0 64 64"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m6.49615 44.12741c0-.68024.55048-1.23071 1.23077-1.23071h5.67889c.68024 0 1.23071.55048 1.23071 1.23071s-.55048 1.23071-1.23071 1.23071h-5.67889c-.68029 0-1.23077-.55047-1.23077-1.23071zm1.23077 6.72571h8.15234c.6803 0 1.23071-.55042 1.23071-1.23071 0-.68024-.55042-1.23071-1.23071-1.23071h-8.15234c-.6803 0-1.23077.55048-1.23077 1.23071 0 .68029.55048 1.23071 1.23077 1.23071zm54.80225-9.19196-9.36505 18.72772c-.41345.8269-1.24518 1.33893-2.16821 1.33893s-1.75238-.51202-2.16583-1.33655l-1.64392-3.27905h-42.99616c-2.31 0-4.19-1.88-4.19-4.19v-46.46002c0-2.31 1.88-4.19 4.19-4.19h46.45001c2.31 0 4.19 1.88 4.19 4.19v10.94c0 .67999-.54999 1.23004-1.23004 1.23004-.67999 0-1.22998-.55005-1.22998-1.23004v-10.94c0-.94995-.77002-1.71997-1.72998-1.71997h-14.50177v14.53027c0 .73071-.39423 1.41217-1.02643 1.77759-.31732.18146-.67065.27283-1.02399.27283-.35699 0-.71277-.09259-1.03003-.27649 0 0 0-.00116-.00122-.00116l-5.64044-3.27875-5.63922 3.27875c-.63458.36896-1.42181.36896-2.05524.0036-.64301-.37018-1.02759-1.03485-1.02759-1.77637v-14.53027h-14.50408c-.95001 0-1.72998.77002-1.72998 1.71997v46.46002c0 .95001.77997 1.72998 1.72998 1.72998h41.76282l-6.50464-12.97424c-2.02637-4.04071-1.96625-8.85663.15625-12.88177 1.96869-3.73065 5.41571-6.18488 9.45642-6.73413 1.2644-.16705 2.59369-.17065 3.85803-.00122 4.03113.54688 7.47333 2.99634 9.43964 6.71973 2.12731 4.02269 2.18981 8.83745.17065 12.8806zm-28.85242-36.91894h-12.52124v13.8175l5.64166-3.28113c.3822-.22351.85577-.22351 1.23792 0l5.64166 3.27997zm26.50635 25.18854c-1.59131-3.0119-4.36047-4.99139-7.59589-5.43011-.51923-.07092-1.0481-.10693-1.58893-.10693-.54565 0-1.08167.03723-1.60809.10815-3.24268.43988-6.01666 2.42419-7.60791 5.4433-1.75476 3.32324-1.80286 7.29785-.1322 10.6319l9.3819 18.71332 9.29535-18.73016c1.66577-3.334 1.61291-7.30745-.14423-10.62947zm-2.37012 4.24865c0 3.76312-3.06 6.82312-6.8219 6.82312s-6.8219-3.06-6.8219-6.82312c0-3.7619 3.06-6.82306 6.8219-6.82306s6.8219 3.06116 6.8219 6.82306zm-2.46148 0c0-2.40497-1.95667-4.36163-4.36041-4.36163s-4.36041 1.95667-4.36041 4.36163 1.95667 4.36163 4.36041 4.36163 4.36041-1.95666 4.36041-4.36163z"></path>
                      </svg>
                      <p className="inline-flex items-center justify-center ml-2 text-sm font-medium w-full hover:text-[#0d4c92]">
                        My Address Book{" "}
                      </p>
                    </a>
                    <a
                      href="wishlist.html"
                      className="px-3 py-4 flex flex-col items-center mukta-regular rounded-lg shadow-md  gap-y-4 text-center hover:bg-gray-50 w-full bg-white hover:text-[#0d4c92] group"
                    >
                      <svg
                        className="w-[30px] group-hover:fill-[#0d4c92]"
                        id="fi_13369080"
                        enableBackground="new 0 0 100 100"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          id="Add_to_Favorite"
                          d="m50 91c-2.733 0-5.306-1.065-7.242-2.999v-.001l-33.129-33.129c-4.919-4.919-7.629-11.459-7.629-18.417v-.407c0-6.958 2.71-13.499 7.629-18.417s11.461-7.63 18.416-7.63h.41c6.955 0 13.497 2.71 18.416 7.629l3.129 3.129 3.129-3.129c4.919-4.919 11.461-7.629 18.416-7.629h.41c6.955 0 13.497 2.71 18.416 7.629s7.629 11.459 7.629 18.417v.407c0 6.958-2.71 13.499-7.629 18.417l-33.129 33.13c-1.936 1.935-4.509 3-7.242 3zm-3-7.242c1.608 1.605 4.395 1.601 6-.001l33.129-33.127c3.785-3.788 5.871-8.821 5.871-14.176v-.407c0-5.355-2.086-10.389-5.871-14.175s-8.821-5.872-14.174-5.872h-.41c-5.353 0-10.389 2.084-14.174 5.871l-5.25 5.25c-1.172 1.172-3.07 1.172-4.242 0l-5.25-5.25c-3.785-3.787-8.821-5.871-14.174-5.871h-.41c-5.353 0-10.389 2.084-14.174 5.871s-5.871 8.82-5.871 14.175v.407c0 5.355 2.086 10.389 5.871 14.175z"
                        ></path>
                      </svg>
                      <p className="inline-flex items-center justify-center ml-2 text-sm font-medium w-full hover:text-[#0d4c92]">
                        My Wishlist{" "}
                      </p>
                    </a>
                    <a
                      href="my_order.html"
                      className="px-3 py-4 flex flex-col items-center mukta-regular rounded-lg shadow-md  gap-y-4 text-center hover:bg-gray-50 w-full bg-white hover:text-[#0d4c92] group"
                    >
                      <svg
                        className="w-[30px] group-hover:fill-[#0d4c92]"
                        id="fi_6737602"
                        enableBackground="new 0 0 512 512"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m390.222 258.682-12.613-137.217c-.568-6.176-5.748-10.902-11.95-10.902h-73.276v-27.879c0-43.387-35.298-78.684-78.684-78.684s-78.684 35.297-78.684 78.684v27.878h-73.278c-6.202 0-11.382 4.726-11.95 10.902l-26.07 283.639c-1.008 10.975 2.385 21.08 9.812 29.221 7.429 8.142 17.18 12.446 28.201 12.446h192.333c22.111 36.66 62.322 61.23 108.167 61.23 69.601 0 126.226-56.625 126.226-126.226 0-59.983-42.059-110.324-98.234-123.092zm-231.207-175.998c0-30.153 24.531-54.684 54.684-54.684s54.685 24.531 54.685 54.684v27.878h-109.369zm-97.285 340.086c-4.267 0-7.594-1.469-10.47-4.622-2.876-3.152-4.033-6.6-3.643-10.849l25.068-272.736h62.33v21.879c0 6.627 5.373 12 12 12s12-5.373 12-12v-21.879h109.369v21.879c0 6.627 5.373 12 12 12s12-5.373 12-12v-21.879h62.329l11.126 121.041c-1.199-.034-2.401-.055-3.608-.055-69.601 0-126.226 56.625-126.226 126.226 0 14.344 2.41 28.135 6.839 40.995zm300.5 61.23c-56.368 0-102.226-45.858-102.226-102.226s45.858-102.226 102.226-102.226c56.367 0 102.226 45.858 102.226 102.226s-45.859 102.226-102.226 102.226zm56.393-139.859c4.583 4.787 4.418 12.383-.369 16.967l-61.276 58.668c-2.318 2.219-5.308 3.332-8.299 3.332-2.909 0-5.819-1.052-8.116-3.162l-34.174-31.384c-4.881-4.483-5.205-12.074-.722-16.955 4.483-4.883 12.074-5.205 16.955-.722l25.887 23.773 53.148-50.887c4.786-4.582 12.382-4.417 16.966.37z"></path>
                      </svg>
                      <p className="inline-flex items-center justify-center ml-2 text-sm font-medium w-full hover:text-[#0d4c92]">
                        My Orders{" "}
                      </p>
                    </a>
                    <button
                      onClick={() => {
                        isAuthenticated
                          ? handleLogOut()
                          : router.push("/login");
                      }}
                      className="px-3 py-4 flex flex-col items-center mukta-regular rounded-lg shadow-md  gap-y-4 text-center hover:bg-gray-50 w-full bg-white hover:text-[#0d4c92] group"
                    >
                      <svg
                        className="w-[30px] group-hover:fill-[#0d4c92]"
                        version="1.1"
                        id="fi_126467"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 471.2 471.2"
                        enableBackground="new 0 0 471.2 471.2"
                        xmlSpace="preserve"
                      >
                        <g>
                          <g>
                            <path
                              d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
                                  s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
                                  S235.019,444.2,227.619,444.2z"
                            />
                            <path
                              d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
                                  s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
                                  C455.319,239.9,455.319,231.3,450.019,226.1z"
                            />
                          </g>
                        </g>
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
                        <g></g>
                        <g></g>
                        <g></g>
                      </svg>
                      <p className="inline-flex items-center justify-center ml-2 text-sm font-medium w-full hover:text-[#0d4c92]">
                        {isAuthenticated ? "Logout" : "Login"}
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="drawer-handle">
              <i className="drawer-handle-icon" />
            </div>
          </div>
        </div>
      </SlideDrawer>
    </>
  );
}
