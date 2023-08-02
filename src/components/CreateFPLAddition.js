import React, { useState } from "react";
import styles from "./CreateFPLAddition.module.css";

const CreateFPLAddition = () => {
  const [endurance, setEndurance] = useState("");
  const [personalOnBoard, setPersonalOnBoard] = useState("");
  const [emergencyRadio, setEmergencyRadio] = useState([]);
  const [survivalEquipment, setSurvivalEquipment] = useState([]);
  const [jackets, setJackets] = useState([]);

  const handleEmergencyRadioChange = (value) => {
    const updatedEmergencyRadio = [...emergencyRadio];
    const index = updatedEmergencyRadio.indexOf(value);
    if (index === -1) {
      updatedEmergencyRadio.push(value);
    } else {
      updatedEmergencyRadio.splice(index, 1);
    }
    setEmergencyRadio(updatedEmergencyRadio);
  };

  const handleSurvivalEquipmentChange = (value) => {
    const updatedSurvivalEquipment = [...survivalEquipment];
    const index = updatedSurvivalEquipment.indexOf(value);
    if (index === -1) {
      updatedSurvivalEquipment.push(value);
    } else {
      updatedSurvivalEquipment.splice(index, 1);
    }
    setSurvivalEquipment(updatedSurvivalEquipment);
  };

  const handleJacketsChange = (value) => {
    const updatedJackets = [...jackets];
    const index = updatedJackets.indexOf(value);
    if (index === -1) {
      updatedJackets.push(value);
    } else {
      updatedJackets.splice(index, 1);
    }
    setJackets(updatedJackets);
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowSections}>
          <label>ENDURANCE:</label>
          <div className={styles.sectionDown}>
            <h3> E /</h3>
            <input
              type="text"
              value={endurance}
              onChange={(e) =>
                setEndurance(
                  e.target.value.replace(/[^0-9]/g, "").substring(0, 4)
                )
              }
              maxLength={4}
            />
          </div>
        </div>

        <div className={styles.rowSections}>
          <label>PERSONAL ON BOARD:</label>
          <div className={styles.sectionDown}>
            <h3> P /</h3>
            <input
              type="text"
              value={personalOnBoard}
              onChange={(e) =>
                setPersonalOnBoard(
                  e.target.value.replace(/[^0-9]/g, "").substring(0, 3)
                )
              }
              maxLength={3}
            />
          </div>
        </div>

        <div className={styles.rowSections}>
          <label>EMERGENCY RADIO:</label>
          <div className={styles.sectionDown}>
            <h3> R /</h3>
            <div className={styles["checkbox-options"]}>
              <label>
                UHF
                <input
                  type="checkbox"
                  checked={emergencyRadio.includes("UHF")}
                  onChange={() => handleEmergencyRadioChange("UHF")}
                />
                <span className={styles.checkmark}></span>
              </label>
              <label>
                VHF
                <input
                  type="checkbox"
                  checked={emergencyRadio.includes("VHF")}
                  onChange={() => handleEmergencyRadioChange("VHF")}
                />
                <span className={styles.checkmark}></span>
              </label>
              <label>
                ELT
                <input
                  type="checkbox"
                  checked={emergencyRadio.includes("ELT")}
                  onChange={() => handleEmergencyRadioChange("ELT")}
                />
                <span className={styles.checkmark}></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <label>SURVIVAL EQUIPMENT:</label>
        <div className={styles["checkbox-options"]}>
          <label>
            POLAR
            <input
              type="checkbox"
              checked={survivalEquipment.includes("POLAR")}
              onChange={() => handleSurvivalEquipmentChange("POLAR")}
            />
            <span className={styles.checkmark}></span>
          </label>
          <label>
            DESERT
            <input
              type="checkbox"
              checked={survivalEquipment.includes("DESERT")}
              onChange={() => handleSurvivalEquipmentChange("DESERT")}
            />
            <span className={styles.checkmark}></span>
          </label>
          <label>
            MARITIME
            <input
              type="checkbox"
              checked={survivalEquipment.includes("MARITIME")}
              onChange={() => handleSurvivalEquipmentChange("MARITIME")}
            />
            <span className={styles.checkmark}></span>
          </label>
          <label>
            JUNGLE
            <input
              type="checkbox"
              checked={survivalEquipment.includes("JUNGLE")}
              onChange={() => handleSurvivalEquipmentChange("JUNGLE")}
            />
            <span className={styles.checkmark}></span>
          </label>
        </div>
      </div>
      <div className={styles.row}>
        <label>JACKETS:</label>
        <div className={styles["checkbox-options"]}>
          <label>
            LIGHT
            <input
              type="checkbox"
              checked={jackets.includes("LIGHT")}
              onChange={() => handleJacketsChange("LIGHT")}
            />
            <span className={styles.checkmark}></span>
          </label>
          <label>
            FLUORES
            <input
              type="checkbox"
              checked={jackets.includes("FLUORES")}
              onChange={() => handleJacketsChange("FLUORES")}
            />
            <span className={styles.checkmark}></span>
          </label>
          <label>
            UHF
            <input
              type="checkbox"
              checked={jackets.includes("UHF")}
              onChange={() => handleJacketsChange("UHF")}
            />
            <span className={styles.checkmark}></span>
          </label>
          <label>
            VHF
            <input
              type="checkbox"
              checked={jackets.includes("VHF")}
              onChange={() => handleJacketsChange("VHF")}
            />
            <span className={styles.checkmark}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CreateFPLAddition;
