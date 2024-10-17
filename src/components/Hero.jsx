import React, { useContext, useState } from "react";
// import { GlobalContext } from "../context/GlobalContext";
import bulb from '../../public/bulb.png'
const dummyData = {
  Karnataka: {
    Bangalore: ["500", "1000", "1500"],
    Mysore: ["800", "1200"],
    Mangalore: ["600", "1100", "1400"],
  },
  Maharashtra: {
    Mumbai: ["700", "900", "1500"],
    Pune: ["800", "1000"],
    Nagpur: ["600", "1300"],
  },
  Delhi: {
    "New Delhi": ["1000", "1200"],
    Dwarka: ["800", "1100"],
    Saket: ["500", "700", "900"],
  },
};

const Hero = () => {
  // const { dispatch } = useContext(GlobalContext);
  const [localFilters, setLocalFilters] = useState({
    state: "",
    city: "",
    area: "",
  });

  const [availableCities, setAvailableCities] = useState([]);
  const [availableAreas, setAvailableAreas] = useState([]);
  const [showDropdown, setShowDropdown] = useState({
    state: false,
    city: false,
    area: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters({ ...localFilters, [name]: value });

    if (name === "state" && dummyData[value]) {
      setAvailableCities(Object.keys(dummyData[value]));
      setAvailableAreas([]); // Reset areas when state changes
    }

    if (
      name === "city" &&
      localFilters.state &&
      dummyData[localFilters.state][value]
    ) {
      setAvailableAreas(dummyData[localFilters.state][value]);
    }
  };

  const handleInputClick = (field) => {
    setShowDropdown((prev) => ({ ...prev, [field]: true }));
  };

  const handleSelect = (field, value) => {
    setLocalFilters((prev) => ({ ...prev, [field]: value }));
    setShowDropdown((prev) => ({ ...prev, [field]: false }));

    if (field === "state") {
      setAvailableCities(Object.keys(dummyData[value]));
      setAvailableAreas([]);
    }
    if (field === "city") {
      setAvailableAreas(dummyData[localFilters.state][value]);
    }
  };

  const applyFilters = () => {
    dispatch({ type: "SET_FILTERS", payload: localFilters });
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center pt-10"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?coworking,office')`,
      }}
    >
      <div className=" w-full h-full flex flex-col items-center justify-center p-10">
        <h1 className="text-7xl text-blue-500 capitalize text-center ">
          Coworking A space where <br /> ideas <img src={bulb} alt="" className="inline-block h-24" /> collide
        </h1>

        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 items-center w-full max-w-4xl">
          <div className="relative w-full">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={localFilters.state}
              onChange={handleChange}
              onClick={() => handleInputClick("state")}
              className="border rounded-md p-4 w-full text-lg"
            />
            {showDropdown.state && (
              <div className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg mt-2 z-10">
                {Object.keys(dummyData).map((state) => (
                  <div
                    key={state}
                    onClick={() => handleSelect("state", state)}
                    className="p-3 hover:bg-gray-200 cursor-pointer"
                  >
                    {state}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-full">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={localFilters.city}
              onChange={handleChange}
              onClick={() => handleInputClick("city")}
              className="border rounded-md p-4 w-full text-lg"
            />
            {showDropdown.city && availableCities.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg mt-2 z-10">
                {availableCities.map((city) => (
                  <div
                    key={city}
                    onClick={() => handleSelect("city", city)}
                    className="p-3 hover:bg-gray-200 cursor-pointer"
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative w-full">
            <input
              type="text"
              name="area"
              placeholder="Area (sq. ft)"
              value={localFilters.area}
              onChange={handleChange}
              onClick={() => handleInputClick("area")}
              className="border rounded-md p-4 w-full text-lg"
            />
            {showDropdown.area && availableAreas.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg mt-2 z-10">
                {availableAreas.map((area) => (
                  <div
                    key={area}
                    onClick={() => handleSelect("area", area)}
                    className="p-3 hover:bg-gray-200 cursor-pointer"
                  >
                    {area} sq. ft
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={applyFilters}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-4 mt-6 text-lg w-full max-w-xs transition-all"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Hero;
