import React from "react";

const Subscription = () => {
  return (
    <section className="px-3 md:px-0 bg-gray-100 ">
      <div className="2xl:px-24  xl:px-20 lg:px-9 md:px-8 sm:px-8 mx-auto bg-[#EF9BC2] p-5 md:p-10 mx-auto rounded-md">
        <div className="flex flex-row items-center justify-between flex-wrap">
          <div className="basis-12/6">
            <h4 className="text-white font-medium text-lg">
              SIGN UP FOR THE LATEST UPDATES
            </h4>
            <p className="text-white mb-3 md:mb-0">
              Sign up for exclusive tailored new arrivals and promotions.
            </p>
          </div>
          <div className="basis-12/6">
            <form>
              <div className="grid gap-6">
                <div className="mb-0">
                  <input
                    type="email"
                    id="email"
                    className="bg-white borde text-sm rounded-lg focus:ring-blue-500  p-4 block w-[100%] md:w-[600px]  p-2.5 border-0   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email address"
                    required
                  />
                  <div className="flex items-start mt-3">
                    <div className="flex items-center">
                      <input
                        id="remember"
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4  rounded  border-0 p-3  "
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ms-2 text-sm mt-1 font-light text-white"
                    >
                      By signing up you agree to our Privacy Policy.
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
