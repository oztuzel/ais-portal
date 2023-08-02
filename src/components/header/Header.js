import React, { useState } from "react";
import aisPortal from "../../assets/images/ais-portal-logo.png";
import style from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const username = localStorage.getItem("username");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={style.container}>
      <Link to="/" className={style.leftSide}>
        <img src={aisPortal} alt="logo" className={style.logo} />
        <h4>DHMI AIS PORTAL</h4>
      </Link>
      <div className={style.rightSide}>
        <div>
          <img src="" alt="" />
          <button onClick={handleDropdownToggle}>{username}</button>
          {showDropdown && (
            <div className={style.dropdown}>
              <button>Ayarlar</button>
              <button onClick={handleLogout}>Çıkış</button>
            </div>
          )}
        </div>
        <div>
          <ul className={style.links}>
            <li>
              <p className={style.expandDown}>FPL (AIS Office)</p>
              <ul>
                <li>
                  <Link to="/ais/flightplans/unprocessed">
                    Flight Plans (AIS Office)
                  </Link>
                </li>
                <li>
                  <Link to="/ais/:airportId/workingHours">A. Work Hours</Link>
                </li>
                <li>
                  <Link to="/ais/flightplans/forbiddenFlights">
                    Forbidden Flights
                  </Link>
                </li>
                <li>
                  <Link to="/ais/flightplans/search"> FPL Search</Link>
                </li>
                <li>
                  <Link to="/ais/flightplans/sendAFTNmessage">
                    Send AFTN Message
                  </Link>
                </li>
                <li>
                  <Link to="/ais/flightplans/AFTNmessages">AFTN Messages</Link>
                </li>
                <li>
                  <Link to="/ais/flightplans/createFPL">
                    Create Flight Plan
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <p className={style.expandDown}>VFR Traffic Monitoring</p>
              <ul>
                <li>
                  <Link to="/ais/vfr_monitoring"> VFR Flight Monitoring</Link>
                </li>
                <li>
                  <Link to="/ais/vfr/unparsedmessages">
                    Unparsed AFTN Messages
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <p className={style.expandDown}>EAD Notam Service</p>
              <ul>
                <li>
                  <Link>Map</Link>
                </li>
                <li>
                  <Link to="/ead/pib/area">PIB Area</Link>
                </li>
                <li>
                  <Link to="/ead/pib/aerodrome">PIB Aerodrome</Link>
                </li>
                <li>
                  <Link to="/ead/pib/singlenotam">Single Notam</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/messagesAis">Messages(AIS Office)</Link>
            </li>
            <li>
              <p>Meteorology</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
