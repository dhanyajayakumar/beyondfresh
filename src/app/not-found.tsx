'use client'
import React from "react";
import { useRouter } from 'next/navigation'

const NotFound = () => {
  const router = useRouter();

  const handleGoBackHome = () => {
    router.push("/");
  };
  return (
    <section className="2xl:px-28 xl:px-28 lg:px-15 md:px-5 sm:px-5 xs:px-5 px-3 h-auto  mx-auto mt-5">
      <div className=" mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto text-center">
          <div className="mb-4">
            <svg
              className="w-[100px] h-auto mx-auto"
              id="fi_2212806"
              enableBackground="new 0 0 511.914 511.914"
              height={512}
              viewBox="0 0 511.914 511.914"
              width={512}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m200.329 332.803-45.44 45.44c-5.86 5.85-15.36 5.86-21.22 0s-5.86-15.36 0-21.22l45.44-45.44c5.86-5.86 15.36-5.86 21.22 0s5.86 15.36 0 21.22z"
                fill="#384949"
              />
              <path
                d="m200.329 332.803-45.44 45.44c-5.86 5.85-15.36 5.86-21.22 0l66.66-66.66c5.86 5.86 5.86 15.36 0 21.22z"
                fill="#293939"
              />
              <path
                d="m454.889 57.023c-76.03-76.03-199.75-76.03-275.78 0s-76.03 199.75 0 275.78 199.75 76.03 275.78 0c76.03-76.031 76.03-199.75 0-275.78z"
                fill="#4a696f"
              />
              <path
                d="m454.889 332.803c-76.03 76.03-199.75 76.03-275.78 0l275.78-275.78c76.03 76.03 76.03 199.749 0 275.78z"
                fill="#384949"
              />
              <circle cx="316.999" cy="194.912" fill="#fff5f5" r="164.996" />
              <path
                d="m433.669 311.582c-64.33 64.34-169.01 64.34-233.34 0l233.34-233.34c64.34 64.33 64.34 169.01 0 233.34z"
                fill="#efe2dd"
              />
              <path
                d="m412.459 99.453c-52.64-52.64-138.28-52.64-190.92 0s-52.64 138.28 0 190.92 138.28 52.64 190.92 0 52.64-138.281 0-190.92z"
                fill="#ff641a"
              />
              <path
                d="m412.459 290.372c-52.64 52.64-138.28 52.64-190.92 0l190.92-190.92c52.64 52.64 52.64 138.281 0 190.92z"
                fill="#f03800"
              />
              <path
                d="m370.029 226.733c5.86 5.86 5.86 15.36 0 21.21-5.86 5.86-15.35 5.86-21.21 0l-31.82-31.82-31.82 31.82c-5.86 5.86-15.36 5.86-21.21 0-5.86-5.85-5.86-15.35 0-21.21l31.82-31.82-31.82-31.82c-5.86-5.86-5.86-15.36 0-21.21 5.85-5.86 15.35-5.86 21.21 0l31.82 31.82 31.82-31.82c5.86-5.86 15.36-5.86 21.21 0 5.86 5.85 5.86 15.35 0 21.21l-31.82 31.82z"
                fill="#fff5f5"
              />
              <path
                d="m370.029 226.733c5.86 5.86 5.86 15.36 0 21.21-5.86 5.86-15.35 5.86-21.21 0l-31.82-31.82-31.82 31.82c-5.86 5.86-15.36 5.86-21.21 0l106.06-106.06c5.86 5.85 5.86 15.35 0 21.21l-31.82 31.82z"
                fill="#efe2dd"
              />
              <path
                d="m176.099 399.453-10.61 10.61-40.13-23.51-23.51-40.13 10.61-10.61c5.85-5.85 15.36-5.86 21.21 0l42.43 42.43c5.86 5.859 5.86 15.349 0 21.21z"
                fill="#4a696f"
              />
              <path
                d="m176.099 399.453-10.61 10.61-40.13-23.51 29.53-29.52 21.21 21.21c5.86 5.859 5.86 15.349 0 21.21z"
                fill="#384949"
              />
              <path
                d="m133.669 378.243-31.82-31.82-97.46 97.46c-5.85 5.86-5.85 15.35 0 21.21l42.43 42.43c5.86 5.86 15.36 5.85 21.21 0l97.46-97.46z"
                fill="#ffda2d"
              />
              <path
                d="m165.489 410.062-97.46 97.46c-5.85 5.85-15.35 5.86-21.21 0l-21.21-21.21 108.06-108.07z"
                fill="#fdbf00"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">404 Not Found</h1>
          <p className="text-gray-600 mb-4">
            Sorry, the page you are looking for does not exist.
          </p>
          <a
            className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-white transition-all border  border-[#0D4C92] duration-200 bg-[#0D4C92]  hover:text-[#0D4C92]  hover:bg-[#ef9bc2]"
            // href="index.html"
            onClick={handleGoBackHome}
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
