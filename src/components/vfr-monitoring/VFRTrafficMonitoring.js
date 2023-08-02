import React, { useState, useEffect } from "react";
import style from "./VFRTrafficMonitoring.module.css";
import { Outlet } from "react-router-dom";

function VFRTrafficMonitoring() {
  const [dof, setDof] = useState("");
  const [callSign, setCallSign] = useState("");
  const [flightPurpose, setFlightPurpose] = useState("");
  const [tailNumber, setTailNumber] = useState("");
  const [type, setType] = useState("");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date().toUTCString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.head}>
        <h3>VFR Civil Traffic Monitoring</h3>
        <p>{currentDateTime.toLocaleString()}</p>
      </div>
      <div className={style.searchDiv}>
        <div className={style.inputContainer}>
          <label htmlFor="callSign">Cagri Adi:</label>
          <input
            type="text"
            id="callSign"
            name="callSign"
            value={callSign}
            onChange={(e) =>
              setCallSign(e.target.value.replace(/[^a-zA-Z0-9]/g, ""))
            }
            maxLength={7}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="dof">DOF:</label>
          <input
            type="text"
            id="dof"
            name="dof"
            value={dof}
            onChange={(e) => setDof(e.target.value)}
            maxLength={6}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="flightPurpose">Ucus Amaci:</label>
          <input
            type="text"
            id="flightPurpose"
            name="flightPurpose"
            value={flightPurpose}
            onChange={(e) => setFlightPurpose(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tailNumber">Kuyruk Adi:</label>
          <input
            type="text"
            id="tailNumber"
            name="tailNumber"
            value={tailNumber}
            onChange={(e) => setTailNumber(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="type">Tipi:</label>
          <input
            type="text"
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="departureAirport">Kalkis Meydani:</label>
          <input
            type="text"
            id="departureAirport"
            name="departureAirport"
            value={departureAirport}
            onChange={(e) =>
              setDepartureAirport(
                e.target.value
                  .replace(/[^a-zA-Z]/g, "")
                  .substring(0, 4)
                  .toUpperCase()
              )
            }
            maxLength={4}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="arrivalAirport">Inis Meydani:</label>
          <input
            type="text"
            id="arrivalAirport"
            name="arrivalAirport"
            value={arrivalAirport}
            onChange={(e) =>
              setArrivalAirport(
                e.target.value
                  .replace(/[^a-zA-Z]/g, "")
                  .substring(0, 4)
                  .toUpperCase()
              )
            }
            maxLength={4}
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="arrivalAirport">AIS Ofis:</label>
          <select value={"airport"}>
            <option value="J">LTCT - Igdir Havalimani</option>
            <option value="H">LTAC - Ankara Havalimani</option>
          </select>
        </div>

        <button className={style.button}>Ara</button>
      </div>

      <Outlet />
    </div>
  );
}

export default VFRTrafficMonitoring;
