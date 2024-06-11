import React from "react";

function Card({ item }) {
  //console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-2  dark:bg-slate-900 dark:text-white">
        <div className="card w-92 bg-base-100 shadow-xl transition-transform transform hover:scale-105  dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="book" />
          </figure>
          <div className="card-body flex flex-col flex-grow p-2">
            <h2 className="card-title text-sm">
              {item.name}
              <div className="badge badge-secondary text-sm">
                {item.category}
              </div>
            </h2>
            <p className="text-xs">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="px-5 py-1 rounded-full  border-[2px]">
                ${item.price}
              </div>
              <div className="cursor-pointer px-5 py-1 rounded-full  border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
