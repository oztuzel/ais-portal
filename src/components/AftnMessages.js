import React, { useState } from "react";
import style from "./AftnMessages.module.css";

function AftnMessages() {
  const [searchTerm, setSearchTerm] = useState("");
  const data = [
    {
      id: 12312,
      sended: true,
      dateOf: "7/2/2023 11:56:54 AM",
      messageType: "DEP",
      sender: "IGDIR AIM",
      message:
        "FF LTACYWYX LTACZPZX LTCTZTZX LTCTZPZX 020816 LTCTZPZX (DEP-ILIM11-LTCT0816-LTAC-DOF/230702)",
      fplId: 25928,
      fplMessageId: 158,
    },
    {
      id: 12313,
      sended: true,
      dateOf: "7/2/2023 11:59:50 AM",
      messageType: "FPL",
      sender: "IGDIR AIM",
      message:
        "FF LTACYWYX LTACZPZX LTCTZTZX LTCTZPZX 020816 LTCTZPZX (FPL..........fplmessage)",
      fplId: 25929,
      fplMessageId: 159,
    },
  ];

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(
    (item) =>
      // !searchTerm ||
      item.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.messageType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={style.container}>
      <div className={style.upper}>
        <h3>AFTN Messages</h3>
      </div>
      <div className={style.filterContainer}>
        <div>
          <label htmlFor="airportSelect">Airport:</label>
          <select id="airportSelect">
            <option value="">Igdir LTCT</option>
          </select>
        </div>
        <div>
          <label htmlFor="searchInput">Search:</label>
          <input
            type="text"
            id="searchInput"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="Search in message and type"
          />
        </div>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sent?</th>
            <th></th>
            <th>Message Type</th>
            <th>Sender</th>
            <th>Message</th>
            <th>FPL ID</th>
            <th>FPL Message ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.sent}</td> {/* will be replaced the sended logo */}
              <td>{item.dateOf}</td>
              <td>{item.messageType}</td>
              <td>{item.sender}</td>
              <td>{item.message}</td>
              <td>{item.fplId}</td>
              <td>{item.fplMessageId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AftnMessages;
