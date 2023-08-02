import React, { useState } from "react";
import style from "./FlightPlanList.module.css";
import { Outlet, useNavigate } from "react-router-dom";

function FlightPlanList() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
    switch (index) {
      case 0:
        navigate("/ais/flightplans/unprocessed");
        break;
      case 1:
        navigate("/ais/flightplans/processed");
        break;
      case 2:
        navigate("/ais/flightplans/redirected");
        break;
      case 3:
        navigate("/ais/flightplans/arrivalOrAlternative");
        break;
      case 4:
        navigate("/ais/flightplans/favoritePlans");
        break;
      default:
        navigate("/ais/flightplans/unprocessed");
        break;
    }
  };

  const listItems = [
    "Unprocessed",
    "Processed",
    "Redirected",
    "Arrival or Alternative",
    "Favorite Plans",
  ];

  return (
    <div className={style.container}>
      <div>
        <h3>Flight Plan List</h3>
        <h3>AFTN</h3>
      </div>
      <ul className={style.list}>
        {listItems.map((item, index) => (
          <li
            key={index}
            className={
              index === activeItem ? style.activeListItem : style.listItem
            }
            onClick={() => handleItemClick(index)}
          >
            <h4>{item}</h4>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default FlightPlanList;
