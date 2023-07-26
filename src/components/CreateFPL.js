import React, { useState } from "react";
import styles from "./CreateFPL.module.css";

const CreateFPL = () => {
  const [flightType, setFlightType] = useState("");
  const [aircraftId, setAircraftId] = useState("");
  const [aircraftType, setAircraftType] = useState("");
  const [departure, setDeparture] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationTime, setDestinationTime] = useState("");
  const [route, setRoute] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const flightPlan = {
      flightType,
      aircraftId,
      aircraftType,
      departure,
      departureTime,
      destination,
      destinationTime,
      route,
    };
    console.log(flightPlan);
  };

  return (
    <div className={styles.container}>
      <h2>Turkey FPL Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label>Flight Type:</label>
          <input
            type="text"
            value={flightType}
            onChange={(e) => setFlightType(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label>Aircraft ID:</label>
          <input
            type="text"
            value={aircraftId}
            onChange={(e) => setAircraftId(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label>Aircraft Type:</label>
          <input
            type="text"
            value={aircraftType}
            onChange={(e) => setAircraftType(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label>Departure:</label>
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label>Departure Time:</label>
          <input
            type="datetime-local"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label>Destination:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label>Destination Time:</label>
          <input
            type="datetime-local"
            value={destinationTime}
            onChange={(e) => setDestinationTime(e.target.value)}
          />
        </div>
        <div className={styles.row}>
          <label>Route:</label>
          <textarea value={route} onChange={(e) => setRoute(e.target.value)} />
        </div>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateFPL;
