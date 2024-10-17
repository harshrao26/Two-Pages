import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"; // for arrows

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Handle thumbnail click
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Image Display */}
      <div className="relative">
        <img
          src={images[currentIndex].url}
          alt={`Slide ${currentIndex}`}
          className="w-full h-96 object-cover rounded-lg"
        />
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-4 text-3xl text-white bg-gray-800 rounded-full p-2"
          onClick={prevSlide}
        >
          <MdArrowBackIos />
        </button>
        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-4 text-3xl text-white bg-gray-800 rounded-full p-2"
          onClick={nextSlide}
        >
          <MdArrowForwardIos />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={`Thumbnail ${index}`}
            className={`w-16 h-16 mx-1 cursor-pointer border-2 ${
              currentIndex === index ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Parent Component with Filtering Functionality
const ImageGallery = () => {
  const allImages = [
    {
      url: "https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
      category: "architecture",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1681412504590-5c23f9a04e3d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "nature",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1681412505317-6e76868785a5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "architecture",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "nature",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1725404428224-664f5f0217b3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "architecture",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1694475113480-cf9c05b1f77e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "nature",
    },
  ];

  const [filteredImages, setFilteredImages] = useState(allImages);

  // Filter images based on category
  const handleFilterChange = (category) => {
    if (category === "all") {
      setFilteredImages(allImages);
    } else {
      const filtered = allImages.filter((image) => image.category === category);
      setFilteredImages(filtered);
    }
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-4 flex justify-center space-x-4">
        <button
          onClick={() => handleFilterChange("all")}
          className="px-4 py-2 bg-gray-200 rounded-md"
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("architecture")}
          className="px-4 py-2 bg-gray-200 rounded-md"
        >
          Architecture
        </button>
        <button
          onClick={() => handleFilterChange("nature")}
          className="px-4 py-2 bg-gray-200 rounded-md"
        >
          Nature
        </button>
      </div>

      {/* Carousel Component */}
      <ImageCarousel images={filteredImages} />
    </div>
  );
};

export default ImageGallery;
