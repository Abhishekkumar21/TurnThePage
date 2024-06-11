import React from "react";
import freebooklist from "../../public/freebooklist.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";

function FreeBook() {
  const filteredData = freebooklist.filter((data) => data.category === "Free");
  //console.log(filteredData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 bg-base-100 overflow-visible  dark:bg-slate-900 dark:text-white">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p className="pb-2">
            Explore our some awesome books , available totally free of cost
          </p>
          <div>
            <Slider {...settings}>
              {filteredData.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
