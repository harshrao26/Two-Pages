import React, { useState } from "react";

// Example data
const allData = [
  {
    type: "Office",
    building: "028",
    floor: "312801",
    room: "437.89",
    area: "437.89",
    price: "From 5.2",
    label: "Self-Holding",
  },
  {
    type: "Office",
    building: "Tower3",
    floor: "017",
    room: "321702",
    area: "150.80",
    price: "From 4.94",
    label: "Self-Holding",
  },
  {
    type: "Office",
    building: "Tower3",
    floor: "012",
    room: "321209",
    area: "310.39",
    price: "From 5.1",
    label: "Self-Holding",
  },
  {
    type: "Retail",
    building: "Tower3",
    floor: "002",
    room: "3201",
    area: "299.92",
    price: "From 3.92",
    label: "Self-Holding",
  },
  {
    type: "Retail",
    building: "Tower2",
    floor: "001",
    room: "2101",
    area: "222.00",
    price: "From 6.05",
    label: "Self-Holding",
  },
];

const AvailProp = () => {
  const [filterType, setFilterType] = useState("All Types");
  const [filterArea, setFilterArea] = useState("All Areas");

  // Handle type change
  const handleTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  // Handle area change
  const handleAreaChange = (e) => {
    setFilterArea(e.target.value);
  };

  // Filter data based on selected filters
  const filteredData = allData.filter((item) => {
    return (
      (filterType === "All Types" || item.type === filterType) &&
      (filterArea === "All Areas" ||
        parseFloat(item.area) <= parseFloat(filterArea))
    );
  });

  return (
    <div className="container mx-auto pt-8">
      <h2 className="text-2xl bg-blue-500 text-white w-full text-center py-1 font-semibold mb-4 rounded">Available Sources</h2>

      {/* Filters */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Type: </label>
          <select
            value={filterType}
            onChange={handleTypeChange}
            className="border rounded px-2 py-1"
          >
            <option value="All Types">All Types</option>
            <option value="Office">Office</option>
            <option value="Retail">Retail</option>
          </select>
        </div>

        <div>
          <label className="mr-2">Area (m²): </label>
          <select
            value={filterArea}
            onChange={handleAreaChange}
            className="border rounded px-2 py-1"
          >
            <option value="All Areas">All Areas</option>
            <option value="200">Up to 200</option>
            <option value="300">Up to 300</option>
            <option value="400">Up to 400</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Sort</th>
            <th className="py-2 px-4 border-b">Building</th>
            <th className="py-2 px-4 border-b">Floor</th>
            <th className="py-2 px-4 border-b">Room</th>
            <th className="py-2 px-4 border-b">Area(m²)</th>
            <th className="py-2 px-4 border-b">RP(RMB/m²/day)</th>
            <th className="py-2 px-4 border-b">Special Label</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{item.type}</td>
                <td className="py-2 px-4 border-b">{item.building}</td>
                <td className="py-2 px-4 border-b">{item.floor}</td>
                <td className="py-2 px-4 border-b">{item.room}</td>
                <td className="py-2 px-4 border-b">{item.area}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
                <td className="py-2 px-4 border-b">{item.label}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="py-4 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="text-gray-500 mt-2">
        tips: price does not include property management fee, heating fee, and
        tax
      </div>
    </div>
  );
};

export default AvailProp;
