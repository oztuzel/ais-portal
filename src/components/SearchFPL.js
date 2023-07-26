import React, { useState } from "react";
import style from "./SearchFPL.module.css";

function SearchFPL() {
  const [selectedAirport, setSelectedAirport] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    {
      id: 1,
      airport: "airport1",
      description: "sample data",
      plan: "sample flight plan",
      sender: "igdir ais ofis ",
      update_user: "sample user update",
    },
    {
      id: 2,
      airport: "airport2",
      description: "sample dataaaaaaa",
      plan: "sample fpl",
      ats_messages: "ats messagessssssss",
      sender: "thy dispatch",
      update_user: "sample user updateeeee",
    },
    {
      id: 3,
      airport: "airport1",
      description: "sample dataaaaaaa",
      plan: "sample plannnnnnn",
      ats_messages: "ats messagessssssss",
      sender: "sample sendeeeer",
      update_user: "sample user updateeeee",
    },
  ];

  const handleAirportChange = (e) => {
    setSelectedAirport(e.target.value);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // !selectedAirport yani selectedAirport degeri bos ise veya
  // item.airport === selectedAirport secilen degerle esleseni filtreler.
  // ayni sekilde yazdigimiz string i airport,description ve plan icinde filtreler
  const filteredData = data.filter(
    (item) =>
      (!selectedAirport || item.airport === selectedAirport) &&
      (!searchTerm ||
        item.airport.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.plan.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className={style.container}>
      <div className={style.upper}>
        <h3>Flight Plan Search</h3>
      </div>
      <div className={style.filterContainer}>
        <div>
          <label htmlFor="airportSelect">Airport:</label>
          <select
            id="airportSelect"
            value={selectedAirport}
            onChange={handleAirportChange}
          >
            <option value="">All</option>
            <option value="airport1">Airport 1</option>
            <option value="airport2">Airport 2</option>
          </select>
        </div>
        <div>
          <label htmlFor="searchInput">Search:</label>
          <input
            type="text"
            id="searchInput"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="Search in plans and description"
          />
        </div>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Airport</th>
            <th>ID</th>
            <th>Description</th>
            <th>PLAN</th>
            <th>ATS Messages</th>
            <th>Sender</th>
            <th>Update User</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.airport}</td>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td>{item.plan}</td>
              <td>{item.ats_messages}</td>
              <td>{item.sender}</td>
              <td>{item.update_user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchFPL;
