import React, { useState } from "react";
import style from "./AirportWorkingHours.module.css";

const AirportWorkingHours = () => {
  const [selectedAirport, setSelectedAirport] = useState("Havalimani 1");

  const airportOptions = ["Havalimani 1"];

  const weeklySchedule = [
    { day: "Monday", hours: "08:00 AM - 06:00 PM" },
    { day: "Tuesday", hours: "08:00 AM - 06:00 PM" },
    { day: "Wednesday", hours: "08:00 AM - 06:00 PM" },
    { day: "Thursday", hours: "08:00 AM - 06:00 PM" },
    { day: "Friday", hours: "08:00 AM - 06:00 PM" },
    { day: "Saturday", hours: "09:00 AM - 02:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const handleAirportChange = (e) => {
    setSelectedAirport(e.target.value);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>Airport Working Hours</h3>
      </div>
      <p className={style.description}>
        Burada yer alan havalimanı çalışma saati bilgileri bilgilendirme amaçlı
        olup, AIM personeli uçuş planı kabul ederken kalkış ve varış
        meydanlarının çalışma saatlerini AIP ve NOTAM’lardan kontrol etmesi
        gerekmektedir.
      </p>
      <div className={style.airportContainer}>
        <h2>Airport</h2>
        <select value={selectedAirport} onChange={handleAirportChange}>
          <option value="">Select an airport</option>
          {airportOptions.map((airport, index) => (
            <option key={index} value={airport}>
              {airport}
            </option>
          ))}
        </select>
      </div>
      <div className={style.scheduleContainer}>
        <h2>Working Hours</h2>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {weeklySchedule.map((schedule, index) => (
              <tr key={index}>
                <td>{schedule.day}</td>
                <td>{schedule.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AirportWorkingHours;
