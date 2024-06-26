import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-4 flex flex-col md:flex-row bg-base-10 dark:bg-slate-800 dark:text-white">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className=" space-y-6 md:space-y-10">
            <h1 className=" text-2xl  md:text-5xl font-bold">
              Hello, welcome to{" "}
              <span className=" text-pink-500">TurnYourPage</span> space to
              learn something new and exciting{" "}
              <span className=" text-pink-500">Everyday</span>!!!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus aliquam laboriosam rem, dolore officiis assumenda sunt,
              aperiam repudiandae iure corporis reprehenderit obcaecati quod
              tenetur ad esse! Magnam pariatur excepturi sequi!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow outline-none"
                placeholder="Email"
              />
            </label>
          </div>
          <button className="btn btn-secondary mt-3">Secondary</button>
        </div>
        <div className=" order-1 w-full md:w-1/2 p-2">
          <img src={banner} className="w-90 h-90 flex-auto "></img>
        </div>
      </div>
    </>
  );
}
export default Banner;
