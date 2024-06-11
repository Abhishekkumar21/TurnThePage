import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import freebooklist from "../../public/freebooklist.json";
import Card from "./Card";

function Course() {
  console.log(freebooklist);
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white">
        <div className="pt-28 justify-center items-center text-center">
          <h1 className=" text-2xl md:text-4xl font-semibold">
            Welcome to our collection !
          </h1>
          <p className=" mt-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            maiores natus fuga corporis dolorem aliquam. Expedita, dolorem hic
            sapiente aperiam velit fugit odit ducimus laboriosam dolorum earum
            minima explicabo porro.
          </p>
          <div className="mt-10 grid gap-3 grid-cols-1  md:grid-cols-4">
            {freebooklist.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Course;
