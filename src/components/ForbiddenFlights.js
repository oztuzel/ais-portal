import React, { useState } from "react";
import style from "./ForbiddenFlights.module.css";

const ForbiddenFlights = () => {
  const [searchText, setSearchText] = useState("");

  const data = [
    {
      id: "TEST015",
      description: "deneme yasaklı hava aracı",
      isActive: "",
      start: "12/9/2020 11:10:29 AM",
      end: "12/10/2020 11:10:29 AM",
      update: "12/9/2020 11:10:57 AM",
    },
  ];

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.id.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>Forbidden Flight List</h2>
      </div>
      <p>
        Burada yer alan yasaklı hava aracı bilgileri bilgilendirme amaçlı olup,
        AIM personeli uçuş planı kabul ederken kendilerine resmi yazı ile
        bildirilen kayıtları esas alacaktır.
      </p>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchInputChange}
        placeholder="Search by Aircraft ID"
      />
      <table className={style.table}>
        <thead>
          <tr>
            <th>AIRCRAFT ID</th>
            <th>DESCRIPTION</th>
            <th>IS ACTIVE ?</th>
            <th>START</th>
            <th>END</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td>{item.isActive}</td>
              <td>{item.start}</td>
              <td>{item.end}</td>
              <td>{item.update}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ForbiddenFlights;
