import React, { useState } from "react";

// Dummy data for consultants
const consultantsData = [
  {
    name: "Li Shanshan",
    phone: "13693212123",
    title: "Rental and sales consultant",
    image: "path-to-li-shanshan-image",
  },
  {
    name: "Shu Jue",
    phone: "13501339066",
    title: "Rental and sales consultant",
    image: "path-to-shu-jue-image",
  },
  {
    name: "Zhu Longling",
    phone: "13910530599",
    title: "Rental and sales consultant",
    image: "path-to-zhu-longling-image",
  },
  {
    name: "Liu Mengnan",
    phone: "18232257707",
    title: "Rental and sales consultant",
    image: "path-to-liu-mengnan-image",
  },
  {
    name: "Wang Xiaoxuan",
    phone: "18500579995",
    title: "Rental and sales consultant",
    image: "path-to-wang-xiaoxuan-image",
  },
  {
    name: "Cui Xuzhao",
    phone: "18210194947",
    title: "Rental and sales consultant",
    image: "path-to-cui-xuzhao-image",
  },
];

// ConsultantCard component to display individual consultant info
const ConsultantCard = ({ image, name, phone, title }) => {
  return (
    <div className="text-center mb-8">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 mx-auto rounded-full object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-sm">{phone}</p>
      <p className="text-gray-600">{title}</p>
    </div>
  );
};

// Main Component with filtering functionality
const ConsultantsList = () => {
  // State to hold the currently visible consultants
  const [consultants, setConsultants] = useState(consultantsData);

  // Example Filter Function (you can customize this)
  const filterByName = (name) => {
    const filteredConsultants = consultantsData.filter((consultant) =>
      consultant.name.toLowerCase().includes(name.toLowerCase())
    );
    setConsultants(filteredConsultants);
  };

  // Example: Filter by name when typing in an input field
  const handleFilterChange = (e) => {
    const searchName = e.target.value;
    filterByName(searchName);
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Rental and sales consultant
      </h2>

      {/* Filter Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          onChange={handleFilterChange}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2 mx-auto block"
        />
      </div>

      {/* Consultants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {consultants.length > 0 ? (
          consultants.map((consultant, index) => (
            <ConsultantCard
              key={index}
              image={consultant.image}
              name={consultant.name}
              phone={consultant.phone}
              title={consultant.title}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No consultants found
          </p>
        )}
      </div>
    </div>
  );
};

export default ConsultantsList;
