import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  "https://source.unsplash.com/1600x900/?building",
  "https://source.unsplash.com/1600x900/?office",
  "https://source.unsplash.com/1600x900/?architecture",
  "https://source.unsplash.com/1600x900/?cityscape",
  "https://source.unsplash.com/1600x900/?workspace",
  "https://source.unsplash.com/1600x900/?interior",
];

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    afterChange: (index) => setCurrentSlide(index),
  };

  const settingsThumbs = {
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "10px",
    arrows: false,
  };

  return (
    <div className="w-4/5 mx-auto mt-10">
      <div className="relative">
        {/* Main Slider */}
        <Slider {...settingsMain} asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`slide-${index}`}
                className="rounded-lg object-cover w-full h-[500px]"
              />
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <button
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600"
          onClick={() => nav1.slickPrev()}
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600"
          onClick={() => nav1.slickNext()}
        >
          <FaArrowRight size={20} />
        </button>

        {/* Slide Counter */}
        <div className="text-center mt-4 font-semibold text-lg">
          {currentSlide + 1} of {images.length}
        </div>
      </div>

      {/* Thumbnail Slider */}
      <Slider
        {...settingsThumbs}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        className="mt-6"
      >
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`thumb-${index}`}
              className="rounded-lg object-cover w-full h-[100px] hover:ring-2 hover:ring-blue-500 cursor-pointer"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

