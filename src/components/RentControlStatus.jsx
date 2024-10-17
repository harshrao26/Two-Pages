import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const RentControlStatus = () => {
  const [selectedTower, setSelectedTower] = useState("Tower 3");
  const [filter, setFilter] = useState("all"); // Controls the filtering

  // Data for rooms based on the selected tower
  const roomsData = {
    tower3: [
      {
        date: "02/02",
        room01: "299.92 sqm",
        room02: "262.33 sqm",
        room03: "Rented",
        room04: "Rented",
        room05: "Rented",
        room06: "Rented",
      },
      {
        date: "01/01",
        room01: "Signing",
        room02: "Signing",
        room03: "104.07 sqm",
        room04: "190.58 sqm",
        room05: "Rented",
        room06: "Rented",
      },
    ],
    // You can add more data for other towers here...
  };

  // Filter data based on room availability
  const filterData = () => {
    let data = roomsData.tower3;

    if (filter === "rented") {
      data = data.map((row) => ({
        ...row,
        room01: row.room01 === "Rented" ? row.room01 : "",
        room02: row.room02 === "Rented" ? row.room02 : "",
        room03: row.room03 === "Rented" ? row.room03 : "",
        room04: row.room04 === "Rented" ? row.room04 : "",
        room05: row.room05 === "Rented" ? row.room05 : "",
        room06: row.room06 === "Rented" ? row.room06 : "",
      }));
    }
    // You can add other filters here (e.g., available, signing)
    return data;
  };

  return (
    <div className="p-4">
      {/* Tabs */}
      <div className="flex space-x-4 mb-4">
        <button className="border-b-2 border-red-500 pb-2">Shops</button>
        <button>Office</button>
        <button>Storehouse</button>
        <button>Site</button>
      </div>

      {/* Tower Dropdown */}
      <div className="relative inline-block">
        <button className="flex items-center space-x-2 border px-4 py-2">
          <span>{selectedTower}</span>
          <FaChevronDown />
        </button>
        {/* Add dropdown menu here for tower selection if needed */}
      </div>

      {/* Table */}
      <table className="table-auto border-collapse w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Actual/Nomin</th>
            <th className="border px-4 py-2">Room 01</th>
            <th className="border px-4 py-2">Room 02</th>
            <th className="border px-4 py-2">Room 03</th>
            <th className="border px-4 py-2">Room 04</th>
            <th className="border px-4 py-2">Room 05</th>
            <th className="border px-4 py-2">Room 06</th>
          </tr>
        </thead>
        <tbody>
          {filterData().map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.date}</td>
              <td
                className={`border px-4 py-2 ${
                  row.room01 === "Signing" ? "bg-blue-200" : "bg-red-200"
                }`}
              >
                {row.room01}
              </td>
              <td
                className={`border px-4 py-2 ${
                  row.room02 === "Signing" ? "bg-blue-200" : "bg-red-200"
                }`}
              >
                {row.room02}
              </td>
              <td
                className={`border px-4 py-2 ${
                  row.room03 === "Rented" ? "bg-yellow-200" : "bg-red-200"
                }`}
              >
                {row.room03}
              </td>
              <td
                className={`border px-4 py-2 ${
                  row.room04 === "Rented" ? "bg-yellow-200" : "bg-red-200"
                }`}
              >
                {row.room04}
              </td>
              <td
                className={`border px-4 py-2 ${
                  row.room05 === "Rented" ? "bg-yellow-200" : "bg-red-200"
                }`}
              >
                {row.room05}
              </td>
              <td
                className={`border px-4 py-2 ${
                  row.room06 === "Rented" ? "bg-yellow-200" : "bg-red-200"
                }`}
              >
                {row.room06}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Filters */}
      <div className="mt-4 space-x-4">
        <button
          className={`border px-4 py-2 ${
            filter === "all" ? "bg-gray-300" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`border px-4 py-2 ${
            filter === "rented" ? "bg-gray-300" : ""
          }`}
          onClick={() => setFilter("rented")}
        >
          Rented
        </button>
        {/* Add more filter buttons here */}
      </div>
    </div>
  );
};

export default RentControlStatus;
