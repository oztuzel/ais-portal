import React, { useState } from "react";
import styles from "./CreateFPL.module.css";
import CreateFPLAddition from "./CreateFPLAddition";

const CreateFPL = () => {
  const [aircraftIdentification, setAircraftIdentification] = useState("");
  const [flightRules, setFlightRules] = useState("");
  const [flightType, setFlightType] = useState("");
  const [number, setNumber] = useState("");
  const [typeOfAircraft, setTypeOfAircraft] = useState("");
  const [wakeTurbulenceCat, setWakeTurbulenceCat] = useState("");
  const [equipmentAndCapabilitiesA, setEquipmentAndCapabilitiesA] =
    useState("");
  const [equipmentAndCapabilitiesB, setEquipmentAndCapabilitiesB] =
    useState("");
  const [departureAerodrome, setDepartureAerodrome] = useState("");
  const [time, setTime] = useState("");
  const [cruisingSpeed, setCruisingSpeed] = useState("");
  const [level, setLevel] = useState("");
  const [route, setRoute] = useState("");
  const [destinationAerodrome, setDestinationAerodrome] = useState("");
  const [totalEET, setTotalEET] = useState("");
  const [altnAerodrome, setAltnAerodrome] = useState("");
  const [secondAltnAerodrome, setSecondAltnAerodrome] = useState("");
  const [otherInformation, setOtherInformation] = useState("");

  return (
    <div className={styles.container}>
      <h2>Create FPL</h2>
      <div className={styles.rowOne}>
        <div className={styles.rowOneSections}>
          <label>3. MESSAGE TYPE</label>
          <span>(FPL -</span>
        </div>
        <div className={styles.rowOneSections}>
          <label>7. AIRCRAFT IDENTIFICATION</label>
          <input
            type="text"
            value={aircraftIdentification}
            placeholder="Maksimum 7 char"
            onChange={(e) =>
              setAircraftIdentification(
                e.target.value.replace(/[^a-zA-Z0-9|]/g, "")
              )
            }
            maxLength={7}
          />
        </div>
        <div className={styles.rowOneSections}>
          <label>8. FLIGHT RULES</label>
          <select
            value={flightRules}
            onChange={(e) => setFlightRules(e.target.value)}
          >
            <option value="I">I</option>
            <option value="V">V</option>
            <option value="Y">Y</option>
            <option value="Z">Z</option>
          </select>
        </div>
        <div className={styles.rowOneSections}>
          <label>TYPE OF FLIGHT</label>
          <select
            value={flightType}
            onChange={(e) => setFlightType(e.target.value)}
          >
            <option value="S">Scheduled Air Transport</option>
            <option value="N">Non-Scheduled Air Transport</option>
            <option value="G">General Aviation</option>
            <option value="M">Military</option>
            <option value="X">Other</option>
          </select>
        </div>
      </div>

      <div className={styles.rowOne}>
        <div className={styles.rowOneSections}>
          <label>Number:</label>
          <input
            type="text"
            value={number}
            onChange={(e) =>
              setNumber(e.target.value.replace(/[^0-9|]/g, "").substring(0, 2))
            }
            maxLength={2}
          />
        </div>
        <div className={styles.rowOneSections}>
          <label>Type of Aircraft:</label>
          <input
            type="text"
            value={typeOfAircraft}
            onChange={(e) =>
              setTypeOfAircraft(
                e.target.value.replace(/[^a-zA-Z0-9|]/g, "").substring(0, 4)
              )
            }
            maxLength={4}
          />
        </div>
        <div className={styles.rowOneSections}>
          <label>WAKE Turbulance Cat.:</label>
          <select
            value={wakeTurbulenceCat}
            onChange={(e) => setWakeTurbulenceCat(e.target.value)}
          >
            <option value="J">Jumbo</option>
            <option value="H">Heavy</option>
            <option value="M">Medium</option>
            <option value="L">Light</option>
          </select>
        </div>
        <div className={styles.rowOneSections}>
          <label>EQUIPMENT and CAPABILITIES A:</label>
          <input
            type="text"
            value={equipmentAndCapabilitiesA}
            onChange={(e) => setEquipmentAndCapabilitiesA(e.target.value)}
          />
        </div>
        <div className={styles.rowOneSections}>
          <label>EQUIPMENT and CAPABILITIES B:</label>
          <input
            type="text"
            value={equipmentAndCapabilitiesB}
            onChange={(e) => setEquipmentAndCapabilitiesB(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.rowOne}>
        <div className={styles.rowOneSections}>
          <label>DEPARTURE AERODROME:</label>
          <input
            type="text"
            value={departureAerodrome}
            onChange={(e) =>
              setDepartureAerodrome(
                e.target.value.replace(/[^a-zA-Z]/g, "").substring(0, 4)
              )
            }
            maxLength={4}
          />
        </div>
        <div className={styles.rowOneSections}>
          <label>TIME:</label>
          <input
            type="text"
            value={time}
            onChange={(e) =>
              setTime(e.target.value.replace(/[^0-9]/g, "").substring(0, 4))
            }
            maxLength={4}
          />
        </div>
      </div>

      <div className={styles.rowOne}>
        <div className={styles.rowOneSections}>
          <label>CRUISING SPEED:</label>
          <div className={styles.speedAndlevel}>
            <select>
              <option value="N">N</option>
              <option value="K">K</option>
              <option value="M">M</option>
            </select>
            <input
              type="text"
              value={cruisingSpeed}
              onChange={(e) =>
                setCruisingSpeed(e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </div>
        </div>
        <div className={styles.rowOneSections}>
          <label>LEVEL:</label>
          <div className={styles.speedAndlevel}>
            <select>
              <option value="F">F</option>
              <option value="A">A</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="VFR">VFR</option>
            </select>
            <input
              type="text"
              value={level}
              onChange={(e) => setLevel(e.target.value.replace(/[^0-9]/g, ""))}
            />
          </div>
        </div>
      </div>

      <div className={styles.rowOneSections}>
        <label className={styles.routeLabel}>ROUTE:</label>
        <textarea
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          rows="4"
          style={{ resize: "none" }}
          className={styles.routesTextArea}
        />
      </div>

      <div className={styles.rowOne}>
        <div className={styles.rowOneSections}>
          <label>DESTINATION AERODROME:</label>
          <input
            type="text"
            value={destinationAerodrome}
            onChange={(e) =>
              setDestinationAerodrome(
                e.target.value.replace(/[^A-Z]/g, "").substring(0, 4)
              )
            }
            maxLength={4}
          />
        </div>
        <div className={styles.rowOneSections}>
          <label>TOTAL EET:</label>
          <input
            type="text"
            value={totalEET}
            onChange={(e) =>
              setTotalEET(e.target.value.replace(/[^0-9]/g, "").substring(0, 4))
            }
            maxLength={4}
          />
        </div>
        <div className={styles.rowOneSections}>
          <label>ALTN AERODROME:</label>
          <input
            type="text"
            value={altnAerodrome}
            onChange={(e) =>
              setAltnAerodrome(
                e.target.value.replace(/[^A-Z]/g, "").substring(0, 4)
              )
            }
            maxLength={4}
          />
        </div>
        <div className={styles.rowOneSections}>
          <label>2ND ALTN AERODROME:</label>
          <input
            type="text"
            value={secondAltnAerodrome}
            onChange={(e) =>
              setSecondAltnAerodrome(
                e.target.value.replace(/[^A-Z]/g, "").substring(0, 4)
              )
            }
            maxLength={4}
          />
        </div>
      </div>

      <div className={styles.rowOneSections}>
        <label>18. OTHER INFORMATION:</label>
        <textarea
          value={otherInformation}
          onChange={(e) => setOtherInformation(e.target.value)}
          className={styles.routesTextArea}
          rows="4"
          style={{ resize: "none" }}
        />
      </div>

      <CreateFPLAddition />

      <button type="submit">Save</button>
    </div>
  );
};

export default CreateFPL;
