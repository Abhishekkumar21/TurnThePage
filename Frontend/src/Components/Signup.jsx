import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import Footer from "./Footer";

function Signup() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 dark:bg-slate-800  flex items-center justify-center mt-12">
        <div
          className="bg-white dark:bg-slate-600  p-6 rounded-2xl 
         w-80 md:w-1/2 max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center dark:text-gray-200">
            Sign Up
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-slate-800">
                Fullname
              </label>
              <input
                type="text"
                className="border p-3 dark:bg-slate-300   dark:border-gray-400 
                 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-slate-800">
                Email Address
              </label>
              <input
                type="email"
                className="border p-3 dark:bg-slate-300 dark:text-gray-500  dark:border-gray-700 
                 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-slate-800">
                Password
              </label>
              <input
                type="password"
                className="border p-3 dark:bg-slate-300 dark:text-gray-500  dark:border-gray-700 
                 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-slate-800">
                Confirm Password
              </label>
              <input
                type="confirmPassword"
                className="border p-3 dark:bg-slate-300 dark:text-gray-500  dark:border-gray-700  placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="dark:text-slate-800 ">
              Already have account?
              <button
                className=" text-blue-600 font-semibold dark:text-gray-100 cursor-pointer underline"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </button>
              <Login />
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;
