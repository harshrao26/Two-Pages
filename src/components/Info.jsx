import React from "react";
import { MdLocationPin } from "react-icons/md";
import ImageGallery from "./ImageGallery";
import AvailProp from "./AvailProp";
import RentControlStatus from "./RentControlStatus";
import ConsultantsList from "./ConsultantsList";
const Info = () => {
  return (
    <div className="flex justify-center items-center pl-8">
      <div className="flex w-full ">
        {/* Left Side */}
        <div className="w-1/2 bg-cover">
          <ImageGallery />
          <AvailProp />
          <RentControlStatus />
          <ConsultantsList />
        </div>

        {/* Right Side */}
        <div className="w-1/2  p-8  ">
          <div className="sticky right-0 top-20 fixed">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4">
              Place Name
            </h1>
            <p className="flex items-center text-xl text-gray-600 mb-6 gap-2">
              <MdLocationPin className="text-red-500" /> Location Name
            </p>

            <hr className="mb-6" />

            <div className="flex items-center gap-6 mb-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiibOngFYog5Ri5UoFKH3CsHMOvomBLf4JAw&s"
                alt="Person"
                className="w-16 h-16 rounded-full shadow-md"
              />
              <div>
                <h2 className="text-xl font-medium text-gray-700">Name</h2>
                <p className="text-gray-500">123456</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Enter Your Mobile Number"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
                Share Interest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
