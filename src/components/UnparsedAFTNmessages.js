import React, { useState } from "react";
import style from "./UnparsedAFTNmessages.module.css";

const UnparsedAFTNmessages = () => {
  const [selectedAirport, setSelectedAirport] = useState("LTCT");
  const data = [
    { id: 1, type: "FPL", message: "Message 1" },
    { id: 2, type: "FPL", message: "Message 2" },
    { id: 3, type: "FPL", message: "Message 3" },
  ];

  const airports = [
    { code: "LTCT", name: "Igdir Havalimani" },
    { code: "LTAC", name: "Ankara Havalimani" },
  ];

  const handleAirportChange = (e) => {
    setSelectedAirport(e.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <h3>VFR Civil Traffic Monitoring</h3>
      </div>
      <div className={style.selectContainer}>
        <label className={style.label} htmlFor="airportSelect">
          AIS Ofis:
        </label>
        <select
          id="airportSelect"
          value={selectedAirport}
          className={style.select}
          onChange={handleAirportChange}
        >
          {airports.map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.name}
            </option>
          ))}
        </select>
      </div>
      <table className={style.table}>
        <thead className={style.tableHead}>
          <tr>
            <th className={style.idRow}>ID</th>
            <th className={style.typeRow}>Type</th>
            <th className={style.messageRow}>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnparsedAFTNmessages;
