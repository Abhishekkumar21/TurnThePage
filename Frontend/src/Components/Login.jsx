import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-600 w-1/2">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="font-semibold text-2xl justify-center flex dark:text-gray-200">
            Log In
          </h1>
          <div className="pt-4s space-y-4">
            <div>
              <label for="email" className="mb-2  dark:text-gray-400">
                Username
              </label>
              <input
                id="email"
                className="border p-3 dark:bg-slate-100 dark:text-gray-500  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label for="password" className="mb-2 dark:text-gray-400">
                Password
              </label>
              <input
                id="password"
                className="border p-3 shadow-md dark:bg-slate-100 dark:text-gray-500  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <a
              className="group text-blue-400 transition-all duration-100 ease-in-out"
              href="#"
            >
              <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Forget your password?
              </span>
            </a>
            <button
              className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-pink-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              LOG IN
            </button>
          </div>
          <div className="flex flex-col mt-4 items-center justify-center text-sm">
            <h3 className="dark:text-gray-300">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="group text-blue-400 transition-all duration-100 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Sign Up
                </span>
              </Link>
            </h3>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
